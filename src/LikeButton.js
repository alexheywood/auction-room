import React, { useState } from 'react';
import { items } from './items';

function LikeButton()
{
    const [isLiked, setLike] = useState(false);
    let [likes, setLikes] = useState(3234);
    let [buttonText, setButtonText] = useState('Like');
    let [buttonURL, setButtonURL] = useState('noLike.png');

    const handleBid = () => {

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
        console.log(isLiked);
        console.log("Likes: " + likes);
        
    }

 
    return (
        <div className="bidSection justify-space-even">
                        <img src={buttonURL} width="30" height="30"/>
            <p className="likeCount">Count: {likes}</p>
            <div className="likeButton">
            <input type="submit" value={buttonText} onClick={handleBid} />
            </div>
        </div>
    )
}

export default LikeButton;