export const SERVICES_HREF = "/services";

// Each service links to its section on the Services page; the anchors match
// the section ids in components/services/services-data.ts.
export const SERVICE_LINKS = [
  { label: "AI Progress Review", href: "/services#ai-progress-review" },
  { label: "AI Planning", href: "/services#ai-planning" },
  { label: "AI Delivery", href: "/services#ai-delivery" },
];

// Resolving by name means a renamed service fails the build rather than
// silently linking a section to the wrong page.
export function serviceHref(label: string): string {
  const service = SERVICE_LINKS.find((link) => link.label === label);
  if (!service) {
    throw new Error(`Unknown service: ${label}`);
  }
  return service.href;
}
