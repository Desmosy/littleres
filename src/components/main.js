import React, { useState } from 'react';
import BookingForm from './BookingForm';
function Main() {

  const[availableTimes, setAvailableTimes]=useState(["17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",]);
  const name = "Little Lemon";
  const place = "Chicago";
  const description = "We are a family-owned Mediterranean restaurant focused on traditional recipes served with a modern twist.";
  const image="https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chef-cooking.jpg?quality=82&strip=1";

  const boxStyle = {
    backgroundColor: '#495e57',
    paddingLeft: '20%',
    paddingTop: '1px',
    color: 'white',
    width: '100%',
    height: '150px',
  };

  const descriptionStyle = {
    lineHeight: '1.5',
  };

  const specialsStyle = {
    textAlign: 'center',
    marginTop: '20px',
    color: '#495e57',
  };

  const cardStyle = {
    backgroundColor: '#F0F0F0',
    width: '250px',
    height: '550px',
    margin: '10px',
    display: 'inline-block',
    verticalAlign: 'top',
    overflow: 'hidden',
    borderRadius: '15px', // Set border radius for the card
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add a subtle box shadow
  };

  const imageStyle = {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '15px 15px 0 0',
  };

  const menuData = [
    {
      name: "Greek Salad",
      price: "$10",
      description: "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese garnished with crunchy garlic and rosemary crouton",
      image: "https://www.refrigeratedfrozenfood.com/ext/resources/NEW_RD_Website/DefaultImages/default-pasta.jpg?1430942591",
    },
    {
      name: "Bruchetta",
      price: "$12",
      description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Lemon Desert",
      price: "$15",
      description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      image: "https://uploads-ssl.webflow.com/5e86c7170f1ab21474c3f2a4/5ef1d04b4056011f67df2ed7_Natural%2Blight%2B-%2BFood%2BPhotography%2B-%2BFrenchly%2B-4365.jpg",
    },
  ];

  return (
    <main>
        <div style={boxStyle}>
        <h2>{name}</h2>
        <p>{place}</p>
        <p style={descriptionStyle}>{name} - {description}<br />
<img style={{height:'200px', paddingLeft:'53%',}} src={image}/></p>

      </div>

      <div style={{
        color:'black',
        paddingLeft:'30%',
        marginTop:'0px'
      }}>
        
        <h1>This Week's Special</h1>
      </div>

      <div style={{ textAlign: 'center' }}>
        {menuData.map((item, index) => (
          <div key={index} style={cardStyle}>
            <img src={item.image} style={imageStyle} />
            <h4 style={{ margin: '10px 0' }}>{item.name}{"         "}{item.price}</h4>
            <p style={{ 
                        color:'grey',
                        padding:'10%'}}>{item.description}</p>
            <h4 style={{ 
              
              paddingTop:'50px', 
              paddingBottom:'20%',}}>Order for delivery</h4>
          </div>
        ))}
        <BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes}/>
      </div>
    </main>
  );
}

export default Main;
