import '../styleshets/extra.css'
import { Images } from "./Images"

export const Extra = () => {
  return (
    <section className="extra">
      <h1>Dibujos para descargar</h1>
      <div className='subtitle'>
        <h3>Paginas para colorear</h3>
        <p>uso privado</p>
      </div>
      <Images album_name={'paraColorear'}/>
    </section>
  )
};