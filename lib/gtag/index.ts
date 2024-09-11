export const GA_TRACKING_ID = 'GTM-MZBMVT97';

export const pageview = (url: string): void => {
  window.gtag('config', GA_TRACKING_ID, { page_path: url });
};

interface GtagEvent {
  action: string;
  category: string;
  label: string;
  value?: number;
}

export const event = ({ action, category, label, value }: GtagEvent): void => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
