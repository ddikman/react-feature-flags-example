import Link from 'next/link'

export default function ProfileLink({username, label}) {
  return <Link className='hover:text-blue-600' href={`/profile/${username}`}>{label}</Link>
}