export default function getFeatureFlags() {
  const flags = [
    { label: 'Show profile page link', id: 'profile-link', defaultValue: false },
    { label: 'Example feature flag 2', id: 'example-flag-2', defaultValue: false },
    { label: 'Example feature flag 3', id: 'example-flag-3', defaultValue: false },
    { label: 'Example feature flag 4', id: 'example-flag-4', defaultValue: true }
  ]

  for (const flag of flags) {
    // load values from local storage
    const savedValue = localStorage.getItem(`feature-flag-${flag.id}`)
    if (!savedValue) {
      flag.value = flag.defaultValue;
    } else {
      flag.value = savedValue === 'true';
    }
  }

  return flags;
}