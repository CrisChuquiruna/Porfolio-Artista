import '../styleshets/buttons.css'
import { Button } from './Button'

export const Buttons = ({ handleClick }) => {
  return (
    <section className="buttons">
      <Button id='1' handleClick={handleClick} image="polilla" text="Home"/>
      <Button id='2' handleClick={handleClick} image="babosa_2" text="Obras"/>
      <Button id='3' handleClick={handleClick} image="hoja_rosa_3" text="Acerca de Mí"/>
      <Button id='4' handleClick={handleClick} image="sapo" text="Extra"/>
    </section>
  )
  
}