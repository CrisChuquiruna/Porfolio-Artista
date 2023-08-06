import { useState } from 'react'
import { Buttons } from './components/Buttons'
import { PAGES } from './constants/Pages'

import './styleshets/reset.css'

function App() {
  const [page, setPage] = useState(1)
  const handleClick = (idPage) => {
    setPage(idPage)
  }  

  return (
    <>
      <Buttons handleClick={handleClick}/>
      <main>
        {PAGES[page]}      
      </main>
    </>
  )
}

export default App