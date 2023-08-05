'use client'

import ToggleButton from "./toggle-button";
import Link from "next/link";
import getFeatureFlagValue from "./get-feature-flag-value";

const featureFlags = [
  { label: 'Show profile page link', id: 'profile-link' },
  { label: 'Example feature flag 2', id: 'example-flag-2' },
  { label: 'Example feature flag 3', id: 'example-flag-3' },
  { label: 'Example feature flag 4', id: 'example-flag-4' }
]

export default function Page() {
  const setFeatureFlag = (value, id) => {
    localStorage.setItem(`feature-flag-${id}`, value);
  }

  // Use the helper component to display each flag and handle changes
  return <div>
    <h2 className="text-2xl">Feature Flags</h2>
    <div className="my-4 text-sm"><Link href='/'>Top</Link> » Feature Flags</div>
    <hr className="my-2" />
    <div className="flex flex-wrap gap-4 mt-4">
      {featureFlags.map((flag) => {
        return <ToggleButton
          key={flag.id}
          initialValue={getFeatureFlagValue(flag.id)}
          label={flag.label}
          onChange={(value) => setFeatureFlag(value, flag.id)} />
      })}
    </div>
  </div>
}