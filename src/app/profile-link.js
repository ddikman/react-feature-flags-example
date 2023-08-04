import Link from 'next/link'

export default function ProfileLink({username, label}) {
  return <Link href={`/profile/${username}`}>{label}</Link>
}