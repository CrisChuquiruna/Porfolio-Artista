import { Home } from '../components/Home'
import { Extra } from '../components/Extra'                    
import { Obras } from '../components/Obras'
import { Images } from '../components/Images'
import { AcercaDeMi } from '../components/AcercaDeMi'


// Paginas para el inicio
const home = <Home name="Camila Caffieri" subtitle="Ceramista | Ilustradora"/>
const obras = <Obras/>
const acercaDeMi = <AcercaDeMi />
const extra = <Extra/>

export const PAGES = {
  '1': home,
  '2': obras,
  '3': acercaDeMi,
  '4': extra
}

// Paginas para Obras
const dibujos = <Images album_name={'acuarela'}/>
const ilustracionBotanica = <Images album_name={'ilustracionBotanica'}/>
const ceramica = <Images album_name={'ceramica'}/>

export const PAGES_OBRAS = {
  '1': dibujos,
  '2': ilustracionBotanica,
  '3': ceramica
}