import { build } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const distDir = path.resolve(root, 'dist');
const outDir = path.resolve(distDir, 'server');

// Routes to prerender — must match src/App.tsx
const routes = [
  { path: '/', file: 'index.html' },
  { path: '/products', file: 'products.html' },
  { path: '/documents', file: 'documents.html' },
  { path: '/case-studies', file: 'case-studies.html' },
  { path: '/case-studies/tanesco', file: 'case-studies/tanesco/index.html' },
  { path: '/case-studies/taa', file: 'case-studies/taa/index.html' },
  { path: '/case-studies/jnia', file: 'case-studies/jnia/index.html' },
  { path: '/admin', file: 'admin.html' },
];

async function prerender() {
  console.log('━━━ Prerendering SPA routes ━━━');

  // 1. Build the server entry (ESM bundle that Node can import)
  await build({
    root,
    mode: 'production',
    base: '/',
    plugins: [react()],
    resolve: {
      alias: { 'react-router-dom/server': 'react-router' },
    },
    ssr: {
      noExternal: ['react-helmet-async'],
    },
    build: {
      ssr: true,
      outDir,
      emptyOutDir: true,
      rollupOptions: {
        input: path.resolve(root, 'src/entry-server.tsx'),
        output: {
          format: 'es',
          entryFileNames: 'entry-server.js',
        },
      },
    },
    logLevel: 'warn',
  });

  // 2. Import the built server entry
  const serverEntry = await import(path.resolve(outDir, 'entry-server.js'));

  // 3. Read the original client index.html as a template
  const templatePath = path.resolve(distDir, 'index.html');
  const template = fs.readFileSync(templatePath, 'utf-8');

  // 4. Render each route
  for (const route of routes) {
    const { html, helmet } = serverEntry.render(route.path);

    // Inject rendered HTML into #root
    let output = template.replace(
      '<div id="root"></div>',
      `<div id="root">${html}</div>`
    );

    // Inject dynamic head tags from react-helmet-async (per-route title, meta, etc.)
    if (helmet) {
      const headInject = [
        helmet.title?.toString() || '',
        helmet.meta?.toString() || '',
        helmet.link?.toString() || '',
      ]
        .filter(Boolean)
        .join('\n    ');

      if (headInject) {
        // Replace the existing static <title> with helmet's title to avoid duplicates
        const helmetTitle = helmet.title?.toString() || '';
        if (helmetTitle) {
          output = output.replace(/<title>.*?<\/title>/s, helmetTitle);
        }
        // Inject meta and link tags before </head>
        const metaAndLinks = [
          helmet.meta?.toString() || '',
          helmet.link?.toString() || '',
        ].filter(Boolean).join('\n    ');
        if (metaAndLinks) {
          output = output.replace('</head>', `    ${metaAndLinks}\n  </head>`);
        }
      }
    }

    // Write the prerendered file
    const outPath = path.resolve(distDir, route.file);
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, output);
    console.log(`  ✓ ${route.path} → ${route.file}`);
  }

  // 5. Clean up the server build directory (not needed in final output)
  fs.rmSync(outDir, { recursive: true, force: true });
  console.log('━━━ Prerender complete ━━━');
}

prerender().catch((err) => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
