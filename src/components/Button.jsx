
export const Button = ({ id, image, text, handleClick }) => {
  const className = image + " img_container"

  const eventClick = () => {
    handleClick(id)
  }

  return (
    <button className="button_animal" onClick={eventClick} >
      <div className={className} alt={{image}} />
      <h2>{text}</h2>
    </button>
  )
}