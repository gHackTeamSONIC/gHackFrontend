import React from "react"
import pic from "../../assets/pic.png?react"
import Btn from "./Btn"

const Section1 = () => {
  return (
    <div className="flex flex-col sm:flex-row mx-4 md:mx-16 ss:mx-8 mt-14 items-center">
      <div className="flex flex-col ">
        <div>
          <p className="text-[25px] inline font-semibold text-secondary bg-[#FFE6E6] w-full py-2 px-5 rounded-full">
            Feast Your Senses
          </p>
        </div>
        <div className="font-bold text-[50px] lg:text-[70px] max-w-[500px] sm:max-w-[1000px] lg:leading-[90px] leading-[70px] mt-4">
          <p>FINEASE</p>
          <p className="text-secondary">YOUR FINANCIAL WEB ASSISTANT</p>
        </div>
        <div>
          <p className="mt-10 text-[#8B8B8B] text-[18px] max-w-[450px]">
            Your ultimate destination for all things food! Explore our extensive
            collection of mouthwatering recipes.
          </p>
        </div>
        <div>
          <Btn text={"ORDER NOW"} />
        </div>
      </div>
      <div>
        <img src={pic} />
      </div>
    </div>
  )
}

export default Section1
