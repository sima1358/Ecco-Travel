import React from 'react'

export default function Result({hotels}) {
  
  return (
    <div>
{hotels.length > 0 ? (hotels.map((hotel) => 
(<p>{`${hotel.name} - stars: ${hotel.stars} - price/night:${hotel.price}`}</p>))) :
 <p>No hotels available within budget.</p>
 }
    </div>
  )
}
