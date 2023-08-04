'use client'

import { useEffect, useState } from "react";
import ToggleButton from "./toggle-button";
import Link from "next/link";

function getFeatureFlags() {
  const flags = [
    { label: 'Show profile page link', id: 'profilePage', defaultValue: false },
    { label: 'Example feature flag 2', id: 'ff2', defaultValue: false },
    { label: 'Example feature flag 3', id: 'ff3', defaultValue: false },
    { label: 'Example feature flag 4', id: 'ff4', defaultValue: true }
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

export default function Page() {
  const [ featureFlags, setFeatureFlags ] = useState(getFeatureFlags());

  // Once the component is mounted, load the feature flags from local storage
  useEffect(() => {
    setFeatureFlags(getFeatureFlags());
  }, [])

  const setFeatureFlag = (value, id) => {
    localStorage.setItem(`feature-flag-${id}`, value);
  }

  // Use the helper component to display each flag and listen for updates
  return <div>
    <h2 className="text-2xl">Feature Flags</h2>
    <div className="mt-2">
      <Link href="/">Back to top</Link>
    </div>
    <hr className="my-2" />
    <div className="flex flex-wrap gap-4 mt-4">
      { featureFlags.map((flag) => {
        return <ToggleButton
          key={flag.id}
          initialValue={flag.value}
          label={flag.label}
          onChange={(value) => setFeatureFlag(value, flag.id) } />
      }) }
    </div>
  </div>
}