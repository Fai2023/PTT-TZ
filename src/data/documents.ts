export interface DocumentItem {
  id: string;
  title: string;
  description: string;
  category: 'Brochures' | 'Data Sheets' | 'Other';
  fileType: string;
  fileSize: string;
  fileName: string;
}

export interface DownloadLog {
  id: string;
  documentId: string;
  documentTitle: string;
  name: string;
  phone: string;
  email: string;
  timestamp: string;
}

export interface LeadInfo {
  name: string;
  phone: string;
  email: string;
}

export const CATEGORIES = ['Brochures', 'Data Sheets', 'Other'] as const;
export type Category = typeof CATEGORIES[number];

export const documents: DocumentItem[] = [
  {
    id: 'etera-t780-brochure',
    title: 'Etera T780 Product Brochure',
    description: 'Comprehensive overview of the Etera T780 smart Push-to-Talk device — features, specifications, and use cases.',
    category: 'Brochures',
    fileType: 'PDF',
    fileSize: '2.4 MB',
    fileName: 'Etera-T780-Brochure.pdf',
  },
  {
    id: 'telo-te320-brochure',
    title: 'Telo TE320 Product Brochure',
    description: 'Discover the Telo TE320 entry-level smart PoC device with dual SIM support and ultra-loud speaker.',
    category: 'Brochures',
    fileType: 'PDF',
    fileSize: '1.8 MB',
    fileName: 'Telo-TE320-Brochure.pdf',
  },
  {
    id: 'telo-te590-brochure',
    title: 'Telo TE590 Product Brochure',
    description: 'Premium PTT device with dual camera system, advanced GPS tracking, and emergency alarm.',
    category: 'Brochures',
    fileType: 'PDF',
    fileSize: '2.1 MB',
    fileName: 'Telo-TE590-Brochure.pdf',
  },
  {
    id: 'm6l-brochure',
    title: 'M6L Vehicle Unit Brochure',
    description: 'Vehicle-mounted communication system for fleet operations with 25W power output.',
    category: 'Brochures',
    fileType: 'PDF',
    fileSize: '1.5 MB',
    fileName: 'M6L-Vehicle-Unit-Brochure.pdf',
  },
  {
    id: 'etera-t780-datasheet',
    title: 'Etera T780 Data Sheet',
    description: 'Full technical specifications including network bands, battery life, dimensions, and environmental ratings.',
    category: 'Data Sheets',
    fileType: 'PDF',
    fileSize: '420 KB',
    fileName: 'Etera-T780-DataSheet.pdf',
  },
  {
    id: 'telo-te320-datasheet',
    title: 'Telo TE320 Data Sheet',
    description: 'Technical specifications for the Telo TE320 — connectivity, audio, battery, and physical specs.',
    category: 'Data Sheets',
    fileType: 'PDF',
    fileSize: '380 KB',
    fileName: 'Telo-TE320-DataSheet.pdf',
  },
  {
    id: 'telo-te590-datasheet',
    title: 'Telo TE590 Data Sheet',
    description: 'Complete technical specifications for the Telo TE590 premium PTT device.',
    category: 'Data Sheets',
    fileType: 'PDF',
    fileSize: '450 KB',
    fileName: 'Telo-TE590-DataSheet.pdf',
  },
  {
    id: 'm6l-datasheet',
    title: 'M6L Vehicle Unit Data Sheet',
    description: 'Technical specifications for the M6L vehicle-mounted communication system.',
    category: 'Data Sheets',
    fileType: 'PDF',
    fileSize: '350 KB',
    fileName: 'M6L-DataSheet.pdf',
  },
  {
    id: 'dispatcher-software-guide',
    title: 'Dispatcher Software User Guide',
    description: 'Complete user manual for the Phoenix Dispatcher Software — installation, configuration, and operation.',
    category: 'Other',
    fileType: 'PDF',
    fileSize: '5.2 MB',
    fileName: 'Dispatcher-Software-Guide.pdf',
  },
  {
    id: 'poc-network-overview',
    title: 'PoC Network Coverage Overview',
    description: 'Nationwide coverage maps and network architecture documentation for Push-to-Talk over Cellular.',
    category: 'Other',
    fileType: 'PDF',
    fileSize: '3.1 MB',
    fileName: 'PoC-Network-Coverage.pdf',
  },
  {
    id: 'comparison-traditional-poc',
    title: 'Traditional Radio vs PoC Comparison',
    description: 'Side-by-side comparison of traditional 2-way radio systems vs Push-to-Talk over Cellular technology.',
    category: 'Other',
    fileType: 'PDF',
    fileSize: '1.2 MB',
    fileName: 'Radio-vs-PoC-Comparison.pdf',
  },
];

export function getDocumentById(id: string): DocumentItem | undefined {
  return documents.find((doc) => doc.id === id);
}
