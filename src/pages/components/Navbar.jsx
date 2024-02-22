import React from "react"
import logo from "../../assets/logo.png?react"
import Union from "../../assets/Union.png?react"
import Vector from "../../assets/Vector.png?react"

const Navbar = () => {
  return (
    <div className="flex items-center justify-between mt-4 mx-4 md:mx-16 ss:mx-8">
      <div className="flex items-center">
        <div>
          <img src={logo} className="w-[40px] mr-2" />
        </div>
        <div>
          <p className="font-bold text-[20px]">FINEASE</p>
        </div>
      </div>
      <div>
        <ul className="flex">
          <li className="hover:underline hover:text-secondary">
            <a href="home">Home</a>
          </li>
          <li className="mx-5 hover:underline hover:text-secondary ss:mx-10 ">
            <a href="home">Menu</a>
          </li>
          <li className="hover:underline hover:text-secondary">
            <a href="home">Services</a>
          </li>
        </ul>
      </div>
      <div className="flex items-center">
        <div>
          <img src={Union} className="bg-black p-2 rounded-3xl" />
        </div>
        <div>
          <img src={Vector} className="bg-black ml-3 p-2 rounded-3xl" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
