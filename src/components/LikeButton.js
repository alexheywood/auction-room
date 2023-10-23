import React, { useState } from 'react';
import { items } from '../items';

function LikeButton(props)
{
    const [isLiked, setLike] = useState(false);
    let [likes, setLikes] = useState(props.likeCount);

    let [buttonText, setButtonText] = useState('Like');
    let [buttonURL, setButtonURL] = useState('noLike.png');

    const handleLike = () => {

        if(isLiked) {
            setLikes((likes - 1));
            setLike(false);
            setButtonText('Like');
            setButtonURL('noLike.png');
            
        }
        else {
        setLike(true);
        setLikes((likes + 1));
        setButtonText('Unlike');
        setButtonURL('like.png');
        }
        
    }

 
    return (
        <div className="likeSection justify-space-even col-6">
            <img src={buttonURL} width="30" height="30"/>
            <p className="likeCount">Count: {likes}</p>
            <div className="likeButton">
            <input type="submit" value={buttonText} onClick={handleLike} />
            </div>
        </div>
    )
}

export default LikeButton;