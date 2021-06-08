import React, { useEffect, useState } from 'react'

const BannerDetail = ({ match }) => {
  useEffect(() => {
    fetchItem();
    console.log(match)
  }, []);

  const [item, setItem] = useState({
    images: {}
  });
 
  const fetchItem = async () => {
    const fetchData = await fetch(`https://fortnite-api.com/v1/playlists/${match.params.id}`);
    const res = await fetchData;
    const item = await res.json();
    setItem(item.data);
    console.log(item.data.images)
  }

  return (
    <div>
      <h1>{item.name}:</h1>
      <h4>{item.description}</h4>
      <img className="imgStyle" src={item.images.missionIcon} alt='' />
    </div>
    
  )
}

export default BannerDetail;
