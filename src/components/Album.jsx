import '../styleshets/album.css'

export const Album = ({id, img, title, handleClick}) => {
  const eventClick = () => {
    handleClick(id)
  }
  return (
    <>
    <figure className='album' onClick={eventClick}>
      <img src={img} alt={`Imagen de ${title}`} />
      <figcaption className='album--info'>
        {title}
      </figcaption>
    </figure>
    </>
  )
}