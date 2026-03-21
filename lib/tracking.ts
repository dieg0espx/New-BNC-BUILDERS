// BNC Builders - Shared tracking utilities for GTM dataLayer events

export function trackPhoneClick() {
  if (typeof window !== 'undefined') {
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({ event: 'phone_call_click', link_text: 'click_to_call' });
  }
}
