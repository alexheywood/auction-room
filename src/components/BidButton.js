import React, {useState} from 'react';


export default function BidButton(props) {
    const [bid, setBid] = useState('');
    const [bids, setBids] = useState([]);


    let nextId = 0;
    return (
        <>
      <div className="col-6 mt-3">
        <input className="bidInput"
        placeholder="£"
          value={bid}
          onChange={e => setBid(e.target.value)}
        />
        <button className="bidButton" onClick={() => {
          setBids([
            { id: nextId, value: bid },
            ...bids
          ])
          setBid('');
          nextId++;
          
        }}>Place Bid</button>
        </div>
        
        <div className="bidHistory container col-12 mt-2">
        <h2>Bid History:</h2>
        <ul>
          {bids.map(bid => (
            <li key={bid.id}>{bid.value}</li>
          ))}
        </ul>
        </div>
      </>
    )
}

