import React from 'react'
import DashboardHeader from '../../components/Shop/Layout/DashboardHeader'
import DashboardSideBar from '../../components/Shop/Layout/DashboardSideBar'
import AllEvents from "../../components/Shop/AllEvents";

const ShopAllEvents = () => {
  return (
    <div>
        <DashboardHeader/>
        <div className="flex items justify-between w-full">
        <div className=" w-[80px] 800:w-[330px] ">
          <DashboardSideBar active={5} />
        </div>
        <div className="w-full justify-center flex">
            <AllEvents/>
        </div>
      </div>
    </div>
  )
}

export default ShopAllEvents