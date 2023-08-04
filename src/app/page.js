'use client'

import ProfileCard from '@/app/profile-card'
import Card from '@/app/card';
import Spinner from '@/app/spinner';
import getUsers from '@/app/get-users';
import { useState, useEffect } from 'react';

export default function Home() {
  const [ users, setUsers ] = useState([]);

  useEffect(() => {
    getUsers().then(setUsers);
  }, [])

  return (<>
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
    { users.length === 0 && <Spinner /> }
    { users.length > 0 && <div class="profile-list columns-1 sm:columns-2 lg:columns-3 2xl:columns-4">
      { users.map((user, index) => <ProfileCard key={index} user={user} />) }
    </div> }
    </>
  )
}
