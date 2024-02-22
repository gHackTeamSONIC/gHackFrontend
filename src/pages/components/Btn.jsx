import React from 'react'
import arrowright from "../../assets/arrowright.png?react"

const Btn = ({text}) => {
  return (
    <div>
        <button>
            <div className="flex mt-8 text-white bg-secondary px-6 py-4 rounded-full">
              <p className="mr-2">{text}</p>
              <img src={arrowright} />
            </div>
          </button>
    </div>
  )
}

export default Btn