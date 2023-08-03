import { Home } from '../components/Home'
import { Extra } from '../components/Extra'                    
import { Obras } from '../components/Obras'

const home = <Home name="Camila Caffieri" subtitle="Ceramista | Ilustradora"/>
const obras = <Obras/>
const extra = <Extra/>

export const PAGES = {
  '1': home,
  '2': obras,
  '3': 'experiencia',
  '4': extra
}