import Card from '@/app/card';
import ProfileLink from '@/app/profile-link';
import getFeatureFlagValue from '@/app/feature-flags/get-feature-flag-value';

import { useFlag } from '@unleash/proxy-client-react';


export default function ProfileCard({ user }) {

  // const featureEnabled = getFeatureFlagValue('profile-link');
  const featureEnabled = useFlag('profile-link');
  const username = featureEnabled
    ? <ProfileLink username={user.username} label={user.handle} />
    : <span>{user.handle}</span>;

  return <Card>
    <h2>{user.name}</h2>
    <div className="text-sm text-slate-600">
      <p>{username}</p>
    </div>
  </Card>
}