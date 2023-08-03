import { useState, useEffect } from 'react'

export function useImages(album_name) {
  const url = `https://bd-porfoliocami-production.up.railway.app/${album_name}`
  const [data, setData] = useState([])  

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data.photoset.photo))
      .catch((err) => console.log(err))
  }, [album_name])

  const imgUrls = data.map(img => {
    return {
      'url':`https://live.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`,
      'title':img.title
    }
  })
  return imgUrls;
}