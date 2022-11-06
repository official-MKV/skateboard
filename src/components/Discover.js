import React from 'react'
import './Styles/discover.css'
import banner1 from '../assets/banner_image1.png'
import banner2 from '../assets/banner_image2.png'
import UserIcon from './UserIcon'
import image from '../assets/banner_user_1.png'

function Discover() {
    return (
        <div className='discover_content'>
            <h1>Discover</h1>
            <div className='discover_banners'>
                <div className='discover_banner_one'>
                    <p>How to do basic jumping and how to do basic landing safely</p>
                    <img src={banner1}>
                    </img>
                    <UserIcon image_url={image} color='#26A9BD' username='John Imahe' verified={false} />
                    <div className='banner_one_user'>
                        <p>Thomas Hope</p>
                        <span>
                            <p className='video_views'> 53k views </p>
                            <p className='dot'></p>
                            <p className='video_date'>2 weeks ago</p>
                        </span>
                    </div>
                </div>
                <div className='discover_banner_two'>
                    <img src={banner2}></img>
                    <p>Skateboard tips you need to know</p>
                    <UserIcon image_url={image} color='#D98555' username='John Imahe' verified={true} />
                    <div className='banner_two_user'>
                        <p>Thomas Hope</p>
                        <span>
                            <p className='video_views'> 53k views </p>
                            <p className='dot'></p>
                            <p className='video_date'>2 weeks ago</p>
                        </span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Discover
