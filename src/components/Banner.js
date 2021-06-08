import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const Banner = () => {
  useEffect(() => {
    fetchItems()
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(`https://fortnite-api.com/v1/playlists`);
    const response = await data;
    const items = await response.json()
    
    console.log(items.data);
    setItems(items.data);
  }

  return (
    <div>
      <h1>Banners Page</h1>
      {items.map(item => (
        <h1 key={item.id}>
          <Link to={`/banner/${item.id}`}>{item.name}</Link>
        </h1>
      ))}
    </div>
  )
}

export default Banner;
