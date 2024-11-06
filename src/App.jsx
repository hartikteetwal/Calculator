import React from 'react'
import Calculator from './component/Calculator/Calculator'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className=''>
      <ToastContainer/>
        <Calculator/>
    </div>
  )
}

export default App
