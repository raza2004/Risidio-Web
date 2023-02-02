// import React, { useState, useEffect } from "react";
import './Home.css'
import pic1 from './pic1.jpg'
import image1 from './image1.jpg'
import image2 from './image2.jpg'
import image3 from './image3.jpg'
import image4 from './image4.jpg'
import image5 from './image5.jpg'
import image6 from './image6.jpg'
import imagem from './imagemain.jpg'
import React, { useState } from "react";

// import React, { useState } from "react";

function ImageCard({ image, name, artist, price, onClick,owner, items }) {
  return (
    <div className="small-image-card" onClick={onClick}>
      <img src={image} className="small-image" alt="NFT Image" />
      <p className="image-artist">{artist}</p>
    </div>
  );
}

function ImageList({ images, setCurrentImage }) {
  return (
    <div className="image-list">
      {images.map((image, index) => (
        <ImageCard
          key={index}
          image={image.image}
          name={image.name}
          artist={image.artist}
          price={image.price}
          owner={image.owner}
          items={image.items}
          onClick={() => setCurrentImage(image)}
        />
      ))}
    </div>
  );
}

function ImageDisplay({ image, name, artist, price, owner,items }) {
  return (
    <div className="image-display">
      <img src={image} className="display-image" alt="NFT Image" />
      <div className="display-info">
        <h4 className="image-artist">{artist}</h4>
        <p className="image-name">{name}</p>
        <div className='price-box'>
        <p className="price-label">Floor Price:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Owners:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Items: $202&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;444&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;200 </p>
        <p className="image-price">{price}</p>
        <p className="owner-label"></p>
        <p className='image-desc'>{owner}</p>
        <p className="item-label"></p>
        <p className='image-item'>{items}</p>
        </div>
      </div>
    </div>
  );
}

function Apple() {
  const [currentImage, setCurrentImage] = useState(null);
// const spaces="  oo "
  const allImages = [
    {
      image: imagem,
      name:"Description of this collection - - Examples such the content of NFTs, specific themes of the collection, quotations by the creator, the meaning behind the creation of this collection etc Description of this collection - - Examples such the content of NFTs, specific themes of the collection, quotations by the creator, the meaning behind the creation of this collection etcDescription of this collection - - Examples such the content of NFTs, specific themes of the collection, quotations by the creator, the meaning behind the creation of this collection etc",
      // items:"1499",
    //  owner:"122$"+spaces+ "200 245",
      artist: "Artist Name",
      // price: "$100",
      
    },
    {
      image: image2,
      name: "Description of this collection - - Examples such the content of NFTs, specific themes of the collection, quotations by the creator, the meaning behind the creation of this collection etc Description of this collection - - Examples such the content of NFTs, specific themes of the collection, quotations by the creator, the meaning behind the creation of this collection etcDescription of this collection - - Examples such the content of NFTs, specific themes of the collection, quotations by the creator, the meaning behind the creation of this collection etc",
      artist: "Artist 2",
      // price: "$200",
      // items:"1499",
      // owner:"122",
      

    },
    {
      image: image4,
      
      name: "Description of this collection - - Examples such the content of NFTs, specific themes of the collection, quotations by the creator, the meaning behind the creation of this collection etc Description of this collection - - Examples such the content of NFTs, specific themes of the collection, quotations by the creator, the meaning behind the creation of this collection etcDescription of this collection - - Examples such the content of NFTs, specific themes of the collection, quotations by the creator, the meaning behind the creation of this collection etc",
      artist: "Artist 2",
      
     

    },
    {
      image: image1,
      name: "Description of this collection - - Examples such the content of NFTs, specific themes of the collection, quotations by the creator, the meaning behind the creation of this collection etc Description of this collection - - Examples such the content of NFTs, specific themes of the collection, quotations by the creator, the meaning behind the creation of this collection etcDescription of this collection - - Examples such the content of NFTs, specific themes of the collection, quotations by the creator, the meaning behind the creation of this collection etc",
      artist: "Artist 2",
      // price: "$200",
      // items:"1499",
// owner:"122",
      

    },
    {
      image: image5,
      
      name: "Description of this collection - - Examples such the content of NFTs, specific themes of the collection, quotations by the creator, the meaning behind the creation of this collection etc Description of this collection - - Examples such the content of NFTs, specific themes of the collection, quotations by the creator, the meaning behind the creation of this collection etcDescription of this collection - - Examples such the content of NFTs, specific themes of the collection, quotations by the creator, the meaning behind the creation of this collection etc",
      artist: "Artist 2",
    },
    {
      image: image6,
      
      name: "Description of this collection - - Examples such the content of NFTs, specific themes of the collection, quotations by the creator, the meaning behind the creation of this collection etc Description of this collection - - Examples such the content of NFTs, specific themes of the collection, quotations by the creator, the meaning behind the creation of this collection etcDescription of this collection - - Examples such the content of NFTs, specific themes of the collection, quotations by the creator, the meaning behind the creation of this collection etc",
      artist: "Artist 2",
    },
    {
      image: image3,
      
      name: "Description of this collection - - Examples such the content of NFTs, specific themes of the collection, quotations by the creator, the meaning behind the creation of this collection etc Description of this collection - - Examples such the content of NFTs, specific themes of the collection, quotations by the creator, the meaning behind the creation of this collection etcDescription of this collection - - Examples such the content of NFTs, specific themes of the collection, quotations by the creator, the meaning behind the creation of this collection etc",
      artist: "Artist 2",
    },{
      image: image5,
      
      name: "Description of this collection - - Examples such the content of NFTs, specific themes of the collection, quotations by the creator, the meaning behind the creation of this collection etc Description of this collection - - Examples such the content of NFTs, specific themes of the collection, quotations by the creator, the meaning behind the creation of this collection etcDescription of this collection - - Examples such the content of NFTs, specific themes of the collection, quotations by the creator, the meaning behind the creation of this collection etc",
      artist: "Artist 2",
    },{
      image: image2,
      
      name: "Description of this collection - - Examples such the content of NFTs, specific themes of the collection, quotations by the creator, the meaning behind the creation of this collection etc Description of this collection - - Examples such the content of NFTs, specific themes of the collection, quotations by the creator, the meaning behind the creation of this collection etcDescription of this collection - - Examples such the content of NFTs, specific themes of the collection, quotations by the creator, the meaning behind the creation of this collection etc",
      artist: "Artist 2",
    },{
      image: image4,
      
      name: "Description of this collection - - Examples such the content of NFTs, specific themes of the collection, quotations by the creator, the meaning behind the creation of this collection etc Description of this collection - - Examples such the content of NFTs, specific themes of the collection, quotations by the creator, the meaning behind the creation of this collection etcDescription of this collection - - Examples such the content of NFTs, specific themes of the collection, quotations by the creator, the meaning behind the creation of this collection etc",
      artist: "Artist 2",
    },{
      image: image2,
      
      name: "Description of this collection - - Examples such the content of NFTs, specific themes of the collection, quotations by the creator, the meaning behind the creation of this collection etc Description of this collection - - Examples such the content of NFTs, specific themes of the collection, quotations by the creator, the meaning behind the creation of this collection etcDescription of this collection - - Examples such the content of NFTs, specific themes of the collection, quotations by the creator, the meaning behind the creation of this collection etc",
      artist: "Artist 2",
    },
    {
      image: image3,
      
      name: "Description of this collection - - Examples such the content of NFTs, specific themes of the collection, quotations by the creator, the meaning behind the creation of this collection etc Description of this collection - - Examples such the content of NFTs, specific themes of the collection, quotations by the creator, the meaning behind the creation of this collection etcDescription of this collection - - Examples such the content of NFTs, specific themes of the collection, quotations by the creator, the meaning behind the creation of this collection etc",
      artist: "Artist 2",
    },
    // Add more images here
  ];

  return (
    <div className="Apple">
<div><img src={pic1} className="pic1"/><h5 className='collection'>Collection Name</h5>
</div>
{/* <hr className='hr'/> */}
      <ImageDisplay
        image={currentImage ? currentImage.image : allImages[0].image}
        name={currentImage ? currentImage.name : allImages[0].name}
        artist={currentImage ? currentImage.artist : allImages[0].artist}
        price={currentImage ? currentImage.price : allImages[0].price}
        owner={currentImage ? currentImage.owner : allImages[0].owner}
        items={currentImage ? currentImage.items : allImages[0].items}


      /><hr className='hr1'/>
      <ImageList images={allImages} setCurrentImage={setCurrentImage} />
    </div>
  );
}

export default Apple;








