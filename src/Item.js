import React from 'react';
import LikeButton from './LikeButton';
import BidHistory from './BidHistory';
import Image from './Image';
import Description from './Description';

function Item(props) {


    return (
        <div className="bidItem">
            <Image 
            url={props.itemObject.image.url}
            alt={props.itemObject.image.alt}
            />
            <Description 
            description={props.itemObject.description.description}
            year={props.itemObject.description.year}
            />
            <LikeButton />
            <BidHistory />
        </div>
    )
}

export default Item;