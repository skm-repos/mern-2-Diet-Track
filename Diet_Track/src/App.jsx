import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Admin from './Pages/Admin'
import User from './Pages/User'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/user' element={<User/>}/>
      </Routes>
    </>
  )
}




export default App
