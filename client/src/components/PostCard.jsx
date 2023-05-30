import {AiFillHeart} from 'react-icons/ai';
import {MdModeComment, MdInfo} from 'react-icons/md';
import {IoMdShareAlt} from 'react-icons/io';
import {useState} from 'react';

const PostCard = ({username, fullname, userImg, postImg}) =>{
    const [liked, setLiked] = useState(false);
    return(
        <div className="postcard">
            <div className="info">
                <img src={userImg} alt="user" className="user-img" />
                <span>{fullname}</span>
            </div>
            <img src={postImg} alt="post" className="post-img" />
            <div className="interaction">
                <AiFillHeart onClick={() => setLiked(!liked)} style={liked ? {color: 'red'} : {color: '#444'}} />
                <MdModeComment />
                <IoMdShareAlt />
                <MdInfo className="info-icon" />
            </div>
        </div>
    )
}

export default PostCard;