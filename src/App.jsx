import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from './Layout'

import '@fontsource/roboto/400.css'
import Index from "./Sites/Index"
import Contact from "./Sites/Contact"



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App