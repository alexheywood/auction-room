import React, {useState} from 'react';
import LikeButton from './LikeButton';
import BidButton from './BidButton';
import {bids} from '../bids';

export default function BidSection(props) {
    
    return (
        <div className="bidSection container">
            <div className="row">
                <LikeButton likeCount={props.likeCount}/>
                <BidButton />
            </div>
        </div>
    )
}