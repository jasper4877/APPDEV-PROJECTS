import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Counter from './Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Footer />
      <Counter />
    </>
  )
}

export default App
