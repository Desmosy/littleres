import React from 'react';
import { useState } from 'react';
import { useReducer } from 'react';
import  './bookingform.css';


function BookingForm({availableTimes, dispatchTimes}){
    const [guestNumber,setGuest]=useState("");
    
    const clearForm = () => { 
        setGuest("");

      }; 
      const handleDataChange=(e)=>{
            dispatchTimes({
                type:'update',
                date:e.target.value,
            });
      };

    const handleSubmit = (e) => { 
        e.preventDefault(); 
        alert("Table Reserved!"); 
        clearForm(); 
      }; 
  return (
    
    <form style={{ display: 'grid', maxWidth: '200px', gap: '20px', paddingLeft:'50%', margin:'10px' }}
    onSubmit={handleSubmit}>
        <h1>Reservations</h1>
        
      <label htmlFor="res-date">Choose date <sup>*</sup></label>

      <input type="date" id="res-date"  onChange={handleDataChange} />      <label htmlFor="res-time">Choose time <sup>*</sup></label>
      <select id="res-time">
        {availableTimes.map((time)=>(
            <option key={time}>{time}</option>
        ))}
      </select>
      <label htmlFor="guests" >Number of guests <sup>*</sup></label>
      <input type="number" placeholder="1" min="1" max="10" id="guests"  value={guestNumber} onChange={e=> setGuest(e.target.value)}/>
      <label htmlFor="occasion">Occasion <sup>*</sup></label>
      <select id="occasion">
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <button disabled={guestNumber<1} value="Make Your reservation">Make Your Reservations</button>
    </form>
  );
};

export default BookingForm;
