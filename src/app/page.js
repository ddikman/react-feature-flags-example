'use client'

import ProfileCard from '@/app/profile-card'
import Card from '@/app/card';
import Spinner from '@/app/spinner';
import getUsers from '@/app/get-users';
import { useState, useEffect } from 'react';
import Link from 'next/link';

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
      <p className='my-4'>
        The cards below are rendered with the <em>ProfileCard</em> component. In the <em>src/app/profile-card.js</em> file, you will find an if condition that represents the feature flag. Turning this flag on will link each profile card to a separate profile page.
      </p>
      <p className='my-4'>
        You can manage the feature flags in the <Link href="/feature-flags">Feature Flags</Link> page. These flags are stored in local storage. To these flags in use, switch out the hard-coded feature flag in <em>profile-card.js</em> by getting the stored feature flag value by using <em>getFeatureFlag(&quot;profilePage&quot;)</em>.
      </p>
      </div>
    </Card>

    <hr className='mb-4' />
    { users.length === 0 && <Spinner /> }
    { users.length > 0 && <div class="profile-list columns-1 sm:columns-2 lg:columns-3 2xl:columns-4">
      { users.map((user, index) => (<div key={index} className='mb-4'><ProfileCard user={user} /></div>)) }
    </div> }
    </>
  )
}
