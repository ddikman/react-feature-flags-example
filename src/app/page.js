'use client'

import ProfileCard from '@/app/profile-card'
import Card from '@/app/card';
import Spinner from '@/app/spinner';
import { useState, useEffect } from 'react';

async function getUsers() {
  return await fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
}

export default function Home() {
  const [ users, setUsers ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    // Introduce a bit of delay for the loader
    const startTime = Date.now();
    getUsers().then(async (users) => {
      const delay = 1500 - (Date.now() - startTime);
      if (delay > 0) {
        await new Promise(resolve => setTimeout(resolve, delay));
      }
      setUsers(users);
      setLoading(false);
    });
  }, [])

  return (
    <main>
      <Card>
        <h1 className='text-2xl mb-4'>Feature Flagging with React</h1>
        <div className='my-4'>
        <p className='my-4'>
        This is an example application to demonstrate how feature flagging can be accomplished using React.
        </p>
        <p>
          The cards below are rendered with the `ProfileCard` component. In the `src/app/profile-card.js` file, you will find an if condition that represents the feature flag. Turning this flag on will link each profile card to a separate profile page.
        </p>
        </div>
      </Card>

      <hr className='mb-4' />
      { loading && <Spinner /> }
      { !loading && <div class="profile-list columns-1 sm:columns-2 lg:columns-3 2xl:columns-4">
        { users.map((user, index) => <ProfileCard key={index} user={user} />) }
      </div> }

      <hr className='my-4' />
      <div className='text-sm flex justify-between'>
        <span>Made by <a href="https://greycastle.se">David Dikman</a></span>
        <a href="...">Fork this (GitHub)</a>
      </div>
    </main>
  )
}
