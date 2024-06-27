import React from 'react'
import KatherineHLogo from '../assets/KatherineHLogo.png'

const Navbar = () => {
  return (
    <div className="fixed w-full h-[130px] flex justify-between items-center px-4 text-gray-300 bg-[#323147]">
       <img src={KatherineHLogo} alt="Logo Image" style={{width: '155px'}} />
    </div>
  )
}

export default Navbar