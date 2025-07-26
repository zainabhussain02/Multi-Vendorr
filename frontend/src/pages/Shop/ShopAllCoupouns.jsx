import React from 'react'
import DashboardHeader from '../../components/Shop/Layout/DashboardHeader'
import DashboardSideBar from '../../components/Shop/Layout/DashboardSideBar'
import AllProducts from "../../components/Shop/AllProducts";

const ShopAllCpupouns  = () => {
  return (
    <div>
        <DashboardHeader/>
        <div className="flex items justify-between w-full">
        <div className=" w-[80px] 800:w-[330px] ">
          <DashboardSideBar active={9} />
        </div>
        <div className="w-full justify-center flex">
            <AllProducts/>
        </div>
      </div>
    </div>
  )
}

export default ShopAllCpupouns;