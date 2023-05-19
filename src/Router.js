import React from 'react'
import { BrowserRouter as AppRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Services from './Services'
import Navbar from './Navbar'


function Router() {
  return (
      <div>
          <AppRouter>
              <Navbar/>
              <Routes>
                  <Route path='/'element={<Home/>}/>
                  <Route path='/about'element={<About/>}/>
                  <Route path='/services'element={<Services/>}/>
          </Routes>
          </AppRouter> 


    </div>
  )
}

export default Router