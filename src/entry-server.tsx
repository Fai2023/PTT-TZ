import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './i18n/LanguageContext';
import App from './App';

export function render(location: string): { html: string; helmet: any } {
  const helmetContext: Record<string, any> = {};

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <LanguageProvider>
        <App Router={StaticRouter} location={location} />
      </LanguageProvider>
    </HelmetProvider>
  );

  return { html, helmet: helmetContext.helmet };
}
