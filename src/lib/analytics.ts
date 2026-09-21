export type AnalyticsEventParams = Record<
  string,
  string | number | boolean | undefined
>;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "";
export const IS_ANALYTICS_ENABLED = Boolean(GA_MEASUREMENT_ID || GTM_ID);

export function trackEvent(
  eventName: string,
  params: AnalyticsEventParams = {},
): void {
  if (typeof window === "undefined") return;

  const pagePath = window.location.pathname || "/";
  const eventPayload = {
    ...params,
    page_path: params.page_path ?? pagePath,
    page_title: params.page_title ?? document.title,
  };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...eventPayload });

  if (typeof window.gtag === "function" && GA_MEASUREMENT_ID) {
    window.gtag("event", eventName, eventPayload);
  }
}

export function trackCtaClick(
  label: string,
  location: string,
  extraParams: AnalyticsEventParams = {},
): void {
  trackEvent("cta_click", {
    cta_label: label,
    cta_location: location,
    ...extraParams,
  });
}

export function trackWhatsAppClick(location: string, label = "WhatsApp"): void {
  trackEvent("whatsapp_click", {
    whatsapp_location: location,
    cta_label: label,
    outbound: true,
  });
}

export function trackFormSubmit(
  formName: string,
  status: "submit" | "success" | "error",
  extraParams: AnalyticsEventParams = {},
): void {
  trackEvent("form_submit", {
    form_name: formName,
    form_status: status,
    ...extraParams,
  });
}

export function trackScrollDepth(percent: number): void {
  trackEvent("scroll_depth", {
    percent_scrolled: percent,
  });
}
