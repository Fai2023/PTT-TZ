import type { DocumentItem } from '../data/documents';

function buildPDFContent(doc: DocumentItem): string {
  const now = new Date().toLocaleString();
  const lines = [
    'PHOENIX TANZANIA',
    'Push-to-Talk Communication Solutions',
    '2 CCM Street, Masaki, Dar es Salaam, Tanzania',
    'info@phoenix.tz | +255 754 770 777',
    '',
    '='.repeat(60),
    doc.title.toUpperCase(),
    '='.repeat(60),
    '',
    `Category: ${doc.category}`,
    `File: ${doc.fileName}`,
    `Generated: ${now}`,
    '',
    '-'.repeat(60),
    'DESCRIPTION',
    '-'.repeat(60),
    doc.description,
    '',
    '-'.repeat(60),
    'ABOUT THIS DOCUMENT',
    '-'.repeat(60),
    `This ${doc.fileType} document is provided by Phoenix Tanzania.`,
    'For more information, contact our sales team:',
    '',
    '  Email:   sales@phoenix.tz',
    '  Phone:   +255 754 770 777',
    '  Phone:   +255 784 670 504',
    '  Phone:   +255 742 670 504',
    '',
    '-'.repeat(60),
    'PRODUCT HIGHLIGHTS',
    '-'.repeat(60),
    '  - Nationwide coverage with zero infrastructure',
    '  - AES-256 encrypted communication',
    '  - Real-time GPS tracking',
    '  - NFC technology for patrol management',
    '  - Centralized dispatcher software',
    '  - Rugged, field-tested devices',
    '',
    '',
    '(c) ' + new Date().getFullYear() + ' Phoenix Tanzania. All rights reserved.',
  ];
  return lines.join('\n');
}

export function generateDocumentBlob(doc: DocumentItem): Blob {
  const content = buildPDFContent(doc);
  return new Blob([content], { type: 'application/pdf' });
}

export function downloadDocument(doc: DocumentItem): void {
  const blob = generateDocumentBlob(doc);
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = doc.fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
