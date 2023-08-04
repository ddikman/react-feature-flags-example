import getFeatureFlags from "./get-feature-flags";

export default function getFeatureFlagValue(id) {
  const flags = getFeatureFlags();
  return flags.find(flag => flag.id === id).value;
}