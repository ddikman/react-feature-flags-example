'use client'

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import getUsers from '@/app/get-users';
import Spinner from '@/app/spinner';
import Card from '@/app/card';
import Link from 'next/link';

export default function Page() {
  const [ user, setUser ] = useState(null);
  const username =  useParams().username;

  useEffect(() => {
    getUsers().then(users => {
      const user = users.find(user => user.username === username);
      setUser(user);
    })
  }, [ username ])

  if (user == null) {
    return <div>
      <Spinner />
    </div>
  }

  const labelClasses = 'text-bold text-slate-600';
  return <div>
    <h2 className='text-2xl'>{user.name}</h2>
    <div className="my-4 text-sm"><Link href='/'>Top</Link> » Profile Page</div>
    <Card>
      <h2 className='mb-2 text-lg'>{ user.handle }</h2>
      <div className='columns-1 md:columns-2 lg:columns-3'>
        <ProfileData label='Email:' content={user.email} />
        <ProfileData label='Company:' content={user.company.name} />
        <ProfileData label='Website:' content={user.website} />
        <ProfileData label='Phone:' content={user.phone} />
      </div>
    </Card>
  </div>
}

function ProfileData({label, content}) {
  return <div className="break-inside-avoid-column mb-2"><span className='text-sm block text-bold text-slate-400 pr-4'>{label}</span>{ content }</div>
}