export default function getFeatureFlagValue(id) {
  if (typeof window === 'undefined') return false; // in case we render on server
  return localStorage.getItem(`feature-flag-${id}`) === 'true';
}