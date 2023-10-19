import React, { useState } from 'react';
import { items } from './items';

function LikeButton()
{
    const [isLiked, setLike] = useState(false);
    let [likes, setLikes] = useState(3234);

    const handleBid = () => {

        if(isLiked) {
            setLikes((likes - 1));
            setLike(false);
            
        }
        else {
        setLike(true);
        setLikes((likes + 1));
        }
        console.log(isLiked);
        console.log("Likes: " + likes);
    }


    return (
        <div className="bidSection d-flex">
            <p>Count: {likes}</p>
            <div className="bidButton">
            <input type="submit" value="Like" onClick={handleBid} />
            </div>
        </div>
    )
}

export default LikeButton;