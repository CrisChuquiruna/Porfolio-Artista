import { useState } from "react"
import { Button } from "./Button"
import { Images } from "./Images"
import '../styleshets/obras.css'

export const Obras = () => {
  const [pageObras, setPageObras] = useState(0)
  const handleClick = (idPage) => {
    setPageObras(idPage)
  } 

  const dibujos = <Images album_name={'acuarela'}/>
  const ilustracionBotanica = <Images album_name={'ilustracionBotanica'}/>
  const ceramica = <Images album_name={'ceramica'}/>
  
  const PAGES = {
    '1': dibujos,
    '2': ilustracionBotanica,
    '3': ceramica
  }

  return(
    <section className='obras'>
    <header className="botones-obras">
      <Button id='1' handleClick={handleClick} text="Pinturas"/>
      <Button id='2' handleClick={handleClick} text="Ilustración botanica"/>
      <Button id='3' handleClick={handleClick} text="Ceramica"/>
    </header>
    {PAGES[pageObras]}     
    </section>
  )
}