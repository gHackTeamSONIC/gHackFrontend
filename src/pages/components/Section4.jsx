import React from "react"
import PricingCard from "./PricingCard"

const Section4 = () => {
  return (
    <div className="flex flex-col justify-center text-center items-center mt-28">
      <div className=" max-w-[500px]">
        <div>
          <p className="font-bold text-[50px] mb-6 leading-[70px]">
            Pick a plan that's right for you
          </p>
        </div>
        <div>
          <p className="text-[18px] mb-8 ">
            Pricing plans for businesses at every stage of growth. Try our
            risk-free for 14 days. No credit card required.
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row">
        <PricingCard
          type={"BASIC"}
          text={
            "For all individuals and starters who want to start with domaining"
          }
          price={"FREE"}
          i1={"v"}
          li1={"Access to free courses"}
          i2={"x"}
          li2={"Access to free assistantes"}
          i3={"v"}
          li3={"No Access for pro assistantes"}
          i4={"v"}
          li4={"Access to free ai assistant"}
          btn={"Start free"}
        />
        <PricingCard
          type={"PROFESSIONAL"}
          text={"For professional domain names investors with a big portfolio."}
          price={"$49"}
          i1={"v"}
          li1={"Access to All Features"}
          i2={"v"}
          li2={"1k lookups / per month"}
          i3={"v"}
          li3={"30K API Credits / month"}
          i4={"v"}
          li4={"Backlink Monitoring"}
          btn={"Start free 14-day Trial"}
        />
        <PricingCard
          type={"ADVANCED"}
          text={"For businessess, enterprise domain registrars and registries."}
          price={"$99"}
          i1={"v"}
          li1={"Access to All Features"}
          i2={"v"}
          li2={"1k lookups / per month"}
          i3={"v"}
          li3={"30K API Credits / month"}
          i4={"v"}
          li4={"10 Monitoring Quota"}
          btn={"Start free 14-day Trial"}
        />
      </div>
    </div>
  )
}

export default Section4
