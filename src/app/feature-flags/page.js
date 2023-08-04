'use client'

import { useEffect, useState } from "react";
import ToggleButton from "./toggle-button";
import Link from "next/link";
import getFeatureFlags from "./get-feature-flags";

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
    <div className="my-4 text-sm"><Link href='/'>Top</Link> » Feature Flags</div>
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