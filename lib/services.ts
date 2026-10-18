// Signal's three homepage service links. Planning and Delivery point to "#"
// until their pages are built.
export const SERVICE_LINKS = [
  { label: "AI Progress Review", href: "/services#ai-progress-review" },
  { label: "Frontline AI Planning", href: "#" },
  { label: "Frontline AI Delivery", href: "#" },
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
