import React, { useState, useEffect } from 'react'
import Hero from '../components/Hero/Hero'
import Element from '../components/Element/Element'
import Footer from '../components/Footer/Footer'
import MapComponent from "../components/gmap/MapComponent"

export const Booking = () => {
  const [userLocation, setUserLocation] = useState(null); // Initially set to null
  const [locationError, setLocationError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          setLocationError(error.message);
          console.error("Error getting location: ", error.message);
        }
      );
    } else {
      setLocationError("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div>
        <Hero/>
        <Element/>
        <MapComponent center={userLocation} />
        {locationError && <p>Error: {locationError}</p>}
        <Footer/>
    </div>
  )
}

export default Booking