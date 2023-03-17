import React from 'react'
import Share from '../Share/Share'
import Post from '../Post/Post'
import './Feed.css'
import {Posts} from '../../dummyData'

const Feed = () => {
  return (
    <div className='Feed'>
        <div className="FeedWrapper">
          <Share/>
          {
            Posts.map((p)=>
            (
              <Post key={p.id} data={p} />
            ))
          }
        </div>
    </div>
  )
}

export default Feed