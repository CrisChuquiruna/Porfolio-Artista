import { useImage } from "../hooks/useImage"
import { useState } from "react"

import { Button } from "./Button"
import { Album } from "./Album"

import { PAGES_OBRAS } from "../constants/Pages"
import '../styleshets/obras.css'
import 'animate.css';

export const Obras = () => {
  const [ acuarela , loading_1 ] = useImage('acuarela')
  const [ ilustracionBotanica, loading_2 ] = useImage('ilustracionBotanica')
  const [ ceramica, loading_3 ] = useImage('ceramica')
  const loading = loading_1 || loading_2 || loading_3

  const [pageObras, setPageObras] = useState(0)
  const handleClick = (idPage) => {
    setPageObras(idPage)
  }
  return(
    <>    
    {
    pageObras ?
    <section className='obras nimate__animated animate__fadeIn' >
      <ul className="botones-obras">
        <Button id='1' handleClick={handleClick} text="Pinturas"/>
        <Button id='2' handleClick={handleClick} text="Ilustración botanica"/>
        <Button id='3' handleClick={handleClick} text="Ceramica"/>
      </ul>       
      {PAGES_OBRAS[pageObras]}   
    </section> 
    :
    <section className="obras_home">
      {loading ? <span className='loading_container'>Cargando...</span> :      
      <ul className="botones-obras animate__animated animate__fadeIn">
        <Album id='1' handleClick={handleClick} img={acuarela? acuarela : ''} title={'Pinturas'}/>
        <Album id='2' handleClick={handleClick} img={ilustracionBotanica? ilustracionBotanica : ''} title={'Ilustración botanica'}/>
        <Album id='3' handleClick={handleClick} img={ceramica? ceramica : ''} title={'Ceramica'}/>
      </ul>}
    </section>
    } 
    </>
  )
}