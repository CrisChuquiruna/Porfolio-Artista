import { useEffect, useState } from 'react'

export function useImage(album_name) {
  const url = `https://bd-porfoliocami-production.up.railway.app/${album_name}`
  const [imgUrl, setImgUrl] = useState('');
  const [loading, setLoading] = useState(true)  

  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then((response) => response.json())
      .then((data) => setImgUrl(`https://live.staticflickr.com/${data.photoset.photo[0].server}/${data.photoset.photo[0].id}_${data.photoset.photo[0].secret}.jpg`))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }, [album_name])
  return [ imgUrl, loading ]
}