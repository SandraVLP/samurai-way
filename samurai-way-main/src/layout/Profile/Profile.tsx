import React from 'react'

import { MyPosts } from './MyPosts/MyPosts';
import { ProfileInfo } from './ProfileInfo';

export function Profile() {
  return (
    <div className='content'>

<ProfileInfo/>
<MyPosts />
    </div>
  )
}


