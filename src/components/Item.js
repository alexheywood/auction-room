import React from 'react';
import Image from './Image';
import Description from './Description';
import BidSection from './BidSection';

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
            <BidSection likeCount={props.itemObject.likeCount} />
        </div>
    )
}

export default Item;