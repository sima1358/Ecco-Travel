 import React  from 'react'
  import data from '../../../data.json'


export default function City({destinationCity,setDestinationCity}) {
   
     
  const handleDestinationCity =(e)=>{
    setDestinationCity (e.target.value);
  }
  return (
    <div>
 <div className="cardDiv grid">
 <div className="destinationInput">
      <label htmlFor="city">City of Origin:
      <input
      type={"text"}
        id="city"
        name="destination"
        value={data.destinationCity}
        onChange={handleDestinationCity}>
        </input>
        </label>
    </div>
       
<div className="destinationInput">
      <label htmlFor="city">Search your destination:
      <input
      type={"text"}
        id="city"
        name="destination"
        value={data.destinationCity}
        onChange={handleDestinationCity}>
        </input>
        </label>
    </div>
  </div>
    </div>
  )  
     
  
}

