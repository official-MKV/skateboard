import React from 'react'
import './Styles/videotile.css'
import UserIcon from './UserIcon'
import thumbnail from '../assets/thumbnail1.png'
import banner_image from '../assets/banner_user_1.png'


function VideoTile(props) {
    const views = '53k';
    const videoDateBack = ' 2 weeks ago'
    return (
        <div className='videotile_content'>
            <div className='container'>
                <div className='video_duration'>7 min</div>
                <UserIcon verified={props.verified_user} image_url={banner_image} username='soft Johnny'/>
                <img src={props.image_url} className='sk_thumbnail'></img>

            </div>
            <div className='video_details'>
                <span className='user_info'>
                    <p className='username'>Andy william</p>
                    {/* Apply truncation for names */}
                    <p className='active_dot' style={{ background: props.active ? 'green' : 'red' }}></p>
                </span>
                <div className='video_info'>
                    <p className='video_title'>Basic how to ride your skateboard comfortably</p>
                    <span>
                        <p className='video_views'>{views} views </p>
                        <p className='dot'></p>
                        <p className='video_date'>{videoDateBack}</p>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default VideoTile
