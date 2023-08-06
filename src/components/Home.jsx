import '../styleshets/home.css'
import { Icons } from './Icons'
import 'animate.css';

export const Home = ({ name, subtitle }) => {
  return (
    <>
    <section className="home">
      <h1>{ name }</h1>
      <h2>{ subtitle }</h2>
      <Icons />
    </section>
    </>
  )
}