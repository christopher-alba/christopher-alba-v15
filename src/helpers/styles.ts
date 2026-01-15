export function cssVar(name: string) {
  const root = document.getElementById("root");
  if (!root) return "";

  return getComputedStyle(root).getPropertyValue(name).trim();
}