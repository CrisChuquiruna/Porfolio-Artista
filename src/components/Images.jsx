import { useImages } from '../hooks/useImages'
import '../styleshets/dibujos.css'
import { ImgLightBox } from './ImgLightBox'

export const Images = ({ album_name }) => {
  
  const images = useImages(album_name)
  return (
    <section className="dibujos_container">
      {
        images.map((img, index) => {                       
          return (
            <ImgLightBox 
              key={index}
              img={img.url} 
              title={img.title} 
            />
          )
        })
      }
    </section>
  )
}