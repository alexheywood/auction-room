import React from 'react';

function Description(props) {
    return (
        <div className="itemDescription">
        <p><strong>Description:</strong></p>
        <p>{props.description}</p>
        <p><strong>Year: </strong>{props.year}</p>
        </div>
    )
}

Description.defaultProps = {
    description: "This is a sample description.",
    year: "N/A"
}

export default Description;
