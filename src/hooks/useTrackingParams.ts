import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const TRACKING_KEYS = [
  'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content',
  'gclid', 'gbraid', 'wbraid', 'fbclid', 'fbc', 'fbp',
  'msclkid', 'ttclid', 'li_fat_id', 'ref', 'source',
];

const STORAGE_KEY = 'tracking_params';

export function useTrackingParams() {
  const { search } = useLocation();

  useEffect(() => {
    if (!search) return;

    const params = new URLSearchParams(search);
    const existing = getTrackingParams();
    let updated = false;

    TRACKING_KEYS.forEach((key) => {
      const value = params.get(key);
      if (value) {
        existing[key] = value;
        updated = true;
      }
    });

    if (updated) {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
    }
  }, [search]);
}

export function getTrackingParams(): Record<string, string> {
  try {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY) || '{}');
  } catch {
    return {};
  }
}
