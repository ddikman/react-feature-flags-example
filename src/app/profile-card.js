import Card from '@/app/card';

export default function ProfileCard({ user }) {

  const userhandle = '@' + user.username.toLowerCase();
  const username = <span>{userhandle}</span>;

  return <Card>
    <h2>{user.name}</h2>
    <div className="text-sm text-slate-600">
      <p>{username}</p>
    </div>
  </Card>
}