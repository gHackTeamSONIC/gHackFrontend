import React from "react"
import x from "../../assets/x.png?react"
import f from "../../assets/f.png?react"

const PricingCard = ({
  type,
  text,
  price,
  i1,
  li1,
  i2,
  li2,
  i3,
  li3,
  i4,
  li4,
  btn,
}) => {
  return (
    <div className="flex flex-col items-start border-[3px] border-[#FFE6E6] rounded-3xl p-10 mt-8 mx-4 sm:mx-8  hover:bg-secondary hover:border-secondary = w-[420px]">
      <div className="flex flex-col items-start text-start">
        <div>
          <p className="font-bold text-[25px] bg-[#F1F1F1] px-3 py-1 rounded-xl">
            {type}
          </p>
        </div>
        <div>
          <p className=" mt-4 text-[18px] ">{text}</p>
        </div>
      </div>
      <div>
        <p className="font-bold text-[80px] my-4">{price}</p>
      </div>
      <div>
        <ul>
          <li className="flex items-center mb-2">
            {i1 === "x" ? (
              <img src={x} className="w-[20px] mr-2" />
            ) : (
              <img src={f} className="w-[20px] mr-2" />
            )}
            <p className="text-[18px]">{li1}</p>
          </li>
          <li className="flex items-center mb-2">
            {i2 === "x" ? (
              <img src={x} className="w-[20px] mr-2" />
            ) : (
              <img src={f} className="w-[20px] mr-2" />
            )}
            <p className="text-[18px]">{li2}</p>
          </li>
          <li className="flex items-center mb-2">
            {i3 === "x" ? (
              <img src={x} className="w-[20px] mr-2" />
            ) : (
              <img src={f} className="w-[20px] mr-2" />
            )}
            <p className="text-[18px]">{li3}</p>
          </li>
          <li className="flex items-center mb-2">
            {i4 === "x" ? (
              <img src={x} className="w-[20px] mr-2" />
            ) : (
              <img src={f} className="w-[20px] mr-2" />
            )}
            <p className="text-[18px]">{li4}</p>
          </li>
        </ul>
      </div>
      <div className="w-full mt-32 block">
        <button className="bg-[#000000] text-white text-[18px] w-full rounded-lg py-2">
          {btn}
        </button>
      </div>
    </div>
  )
}

export default PricingCard
