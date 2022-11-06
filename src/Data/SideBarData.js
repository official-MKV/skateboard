import BookmarkIcon from '@mui/icons-material/Bookmark';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import { Menu } from '@mui/material';


export const SideBarData=[
    {
        name :'Menu',
        links:[{
                title: 'Home',
                icon:<HomeIcon/>,
                link: '/home'
            },
            {
                title: 'Trending',
                icon:<WhatshotIcon/>,
                link:'/trending'
            },
            {
                title:'Streaming',
                icon:<LiveTvIcon/>,
                link: '/streaming'
            },
            {
                title:'Playlist',
                icon:<FeaturedPlayListIcon/>,
                link:'/playlist'
            },
            {
                title:'Bookmark',
                icon:<BookmarkIcon/>,
                link:'/bookmark'
            }
        ]

    },


]
