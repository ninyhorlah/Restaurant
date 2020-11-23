import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Order from './Order'
import Loader from './Loader'

const Profile = () => {
const url = 'https://indapi.kumba.io/webdev/assignment';

const[profile, setProfile] = useState({
    loading: true,
    data: null
});
let content = null; 

useEffect(() => {
    setProfile({
        loading: true,
        data: null
    })
    axios.get(url)
    .then(result => {
        setProfile({
            loading: false,
            data: result.data
        })
    })
}, [url])

if(profile.loading){
    content = <div>
        <Loader/>
    </div>
}

if(profile.data){
    let likeArray = profile.data.user.likes
    let dislikeArray = profile.data.user.dislikes

    let likes = likeArray.join(', ')
    let dislikes = dislikeArray.join(', ')
    
    content = <div className='profile-container'>
        {/* <h4>Profile Page</h4> */}
        <div className="inner-profile">
            <img src="/assets/profilePic.png" alt=""/>

            <div className='about'>

                Hello there 👋, I am 
                <h3>{profile.data.user.name}</h3>
                <p>{profile.data.user.about}</p>
                <p>🏠 {profile.data.user.address}</p>
                <p>📞 {profile.data.user.phone}</p>
                <p>😋 My likes are {likes}</p>
                <p>👎 I dislike {dislikes}</p>

                <Link to='/order'   onClick={() => <Order/>}>
                    <div className='button'>
                        <button>Explore</button>
                    </div>
                </Link>
            </div>
        </div>
    </div>
}
    return (
        <div>
            {content}
        </div>
    )
}

export default Profile
