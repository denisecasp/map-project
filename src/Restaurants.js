import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // Här gör vi API-anropet när komponenten har renderats för första gången
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get('API-URL-HÄR');
        setRestaurants(response.data); // Spara datan i state-variabeln
      } catch (error) {
        console.error(error);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <div>
      <h1>Restauranger</h1>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            {restaurant.name} - {restaurant.address}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Restaurants;
