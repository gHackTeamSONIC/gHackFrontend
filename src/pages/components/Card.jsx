import React from "react"

const Card = ({ pic, text }) => {
  return (
    <div className="flex flex-col items-center border-[3px] border-[#FFE6E6] rounded-3xl p-10 mt-8 mx-4 sm:mx-8 md:mx-14 hover:bg-secondary hover:border-secondary md:w-[290px] w-full">
      <div>
        <img
          src={pic}
          className="bg-[#FFE6E6] rounded-full inline p-4 mb-8 hover:bg-white w-[80px]"
        />
      </div>
      <div>
        <p className="font-semibold text-[17px] text-center">{text}</p>
      </div>
    </div>
  )
}

export default Card
