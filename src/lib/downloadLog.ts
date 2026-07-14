import type { DownloadLog, LeadInfo } from '../data/documents';

const LOGS_KEY = 'phoenix_download_logs';
const LEAD_SESSION_KEY = 'phoenix_lead_info';
const ADMIN_AUTH_KEY = 'phoenix_admin_authed';

export function getDownloadLogs(): DownloadLog[] {
  try {
    const raw = localStorage.getItem(LOGS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function addDownloadLog(
  documentId: string,
  documentTitle: string,
  lead: LeadInfo
): DownloadLog {
  const logs = getDownloadLogs();
  const entry: DownloadLog = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    documentId,
    documentTitle,
    name: lead.name,
    phone: lead.phone,
    email: lead.email,
    timestamp: new Date().toISOString(),
  };
  logs.unshift(entry);
  localStorage.setItem(LOGS_KEY, JSON.stringify(logs));
  return entry;
}

export function clearDownloadLogs(): void {
  localStorage.removeItem(LOGS_KEY);
}

export function getStoredLead(): LeadInfo | null {
  try {
    const raw = sessionStorage.getItem(LEAD_SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function storeLead(lead: LeadInfo): void {
  sessionStorage.setItem(LEAD_SESSION_KEY, JSON.stringify(lead));
}

export function isAdminAuthed(): boolean {
  return sessionStorage.getItem(ADMIN_AUTH_KEY) === 'true';
}

export function setAdminAuthed(value: boolean): void {
  if (value) {
    sessionStorage.setItem(ADMIN_AUTH_KEY, 'true');
  } else {
    sessionStorage.removeItem(ADMIN_AUTH_KEY);
  }
}

export const ADMIN_PASSWORD = 'phoenix-admin-2024';

export function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export function validatePhone(phone: string): boolean {
  const cleaned = phone.replace(/[\s\-()]/g, '');
  return /^\+?\d{7,15}$/.test(cleaned);
}

export function exportLogsToCSV(logs: DownloadLog[]): string {
  const headers = ['Name', 'Phone', 'Email', 'Document', 'Date/Time'];
  const rows = logs.map((log) => {
    const date = new Date(log.timestamp).toLocaleString();
    return [log.name, log.phone, log.email, log.documentTitle, date]
      .map((field) => {
        const escaped = String(field).replace(/"/g, '""');
        return `"${escaped}"`;
      })
      .join(',');
  });
  return [headers.join(','), ...rows].join('\n');
}
