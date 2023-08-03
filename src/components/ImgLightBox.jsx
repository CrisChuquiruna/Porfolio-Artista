import { useState } from 'react'

export const ImgLightBox = ({ img, title}) => {  
  const [modal, setModal] = useState(false)  

  const handleClick = () => {
    const newModal = modal
    setModal(!newModal)
  }
  return (
    <>
    <div className='dibujo' onClick={handleClick}>
      <img src={img} alt={`Imagen de ${title}`} />
      <h2>{title}</h2>
    </div>
    {
      modal ? 
      <div className={`dibujo-expanded`} onClick={handleClick}>
        <img src={img} alt={`Imagen de ${title}`} />
        <h2>{title}</h2>
      </div>  
      : null
    }  
    </>
  )
}