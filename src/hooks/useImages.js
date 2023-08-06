import { useState, useEffect } from 'react'

export function useImages(album_name) {
  const url = `https://bd-porfoliocami-production.up.railway.app/${album_name}`
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)  

  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data.photoset.photo))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }, [album_name])

  const images = data.map(img => {
    return {
      'url':`https://live.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`,
      'title':img.title
    }
  })
  return { images, loading };
}