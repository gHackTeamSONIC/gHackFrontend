import React from "react"
import Card from "./Card"
import learning from "../../assets/learning.png?react"
import goal from "../../assets/goal.png?react"
import assistant from "../../assets/assistant.png?react"

const Section2 = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-16">
      <div>
        <p className="font-bold text-[50px] lg:text-[70px] mb-6">Services</p>
      </div>
      <div className="flex flex-col sm:flex-row">
        <Card pic={learning} text={"LEARN ABOUT FINANCE"} />
        <Card pic={goal} text={"CREATE FINANCIAL PLAN"} />
        <Card pic={assistant} text={"ASK EXPERTS"} />
      </div>
    </div>
  )
}

export default Section2
