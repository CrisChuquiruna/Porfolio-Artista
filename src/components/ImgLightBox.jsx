import { useState } from 'react'
import 'animate.css'

export const ImgLightBox = ({ img, title}) => {  
  const [modal, setModal] = useState(false)  

  const handleClick = () => {
    const newModal = modal
    setModal(!newModal)
  }
  return (
    <>
    <figure className='dibujo animate__animated animate__fadeIn' onClick={handleClick}>
      <img src={img} alt={`Imagen de ${title}`} />
      <figcaption className='dibujo--info'>
        {title}
      </figcaption>
    </figure>
    {
      modal ? 
      <div className={`dibujo-expanded`} onClick={handleClick}>
        <img src={img} alt={`Imagen de ${title}`} />
      </div>  
      : null
    }  
    </>
  )
}