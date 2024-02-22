import React from "react"
import Btn from "./Btn"
import close from "../../assets/close.png?react"

const Section3 = () => {
  return (
    <div className="flex flex-col sm:flex-row mx-4 md:mx-16 ss:mx-8 items-center mt-20">
      <div className="flex flex-col ">
        <div className="font-bold text-[50px] lg:text-[70px] max-w-[500px] sm:max-w-[1000px] lg:leading-[90px] leading-[70px] mt-4">
          <p>ASK EXPERTS IN FINANCE</p>
        </div>
        <div>
          <p className="mt-10 text-[#8B8B8B] text-[18px] max-w-[450px]">
            Whether you're a seasoned chef or a kitchen novice, our
            user-friendly platform caters to all levels of expertise, ensuring
            everyone can savor the joy of creating delicious meals.
          </p>
        </div>
        <div>
          <Btn text={"GET STARTED"} />
        </div>
      </div>
      <div>
        <img src={close} />
      </div>
    </div>
  )
}

export default Section3
