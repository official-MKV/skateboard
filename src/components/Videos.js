import React from 'react'
import './Styles/videos.css'
import VideoTile from './VideoTile'
import thumbnail1 from '../assets/thumbnail1.png'
import thumbnail2 from '../assets/thumbnail2.png'
import thumbnail3 from '../assets/thumbnail3.png'
import thumbnail4 from '../assets/thumbnail4.png'



function Videos() {
    return (
        <div className='video_content'>
            <p>Most Watched</p>
             <div className='videos_most_watched'>
                <VideoTile active={true} verified_user={true} image_url={thumbnail1}/>
                <VideoTile active={false} verified_user={true}  image_url={thumbnail2}/>
                <VideoTile active={false} verified_user={false}  image_url={thumbnail3}/>
                <VideoTile active={true} verified_user={true}  image_url={thumbnail4}/>


             </div>

        </div>
    )
}

export default Videos
