import React from 'react';

const imgUrl = ''
function Image(props)
{
    return <img className="itemImage" src={props.url} alt={props.alt} width={props.width} height={props.height}/>
}

Image.defaultProps = {
    url: "thumbnail.jpg",
    alt: "Thumbnail of item",
    width: "100%",
    height: "100%"
  };


  export default Image;