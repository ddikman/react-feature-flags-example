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
    <div className="mb-4"><Link href='/'>‹ Back</Link></div>
    <Card>
      <h2 className='mb-2 flex justify-between items-end text-lg'>
        { user.name }
        <span className='text-sm'>{ user.handle }</span>
      </h2>
      <div>

      </div>
      <div className='flex flex-col gap-2'>
        <ProfileData label='Email:' content={user.email} />
        <ProfileData label='Company:' content={user.company.name} />
        <ProfileData label='Website:' content={user.website} />
        <ProfileData label='Phone:' content={user.phone} />
      </div>
    </Card>
  </div>
}

function ProfileData({label, content}) {
  return <span><span className='text-sm block text-bold text-slate-400 pr-4'>{label}</span>{ content }</span>
}