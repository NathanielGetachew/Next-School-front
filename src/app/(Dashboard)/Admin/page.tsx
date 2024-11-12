import CountCharts from "@/components/CountCharts"
import Usercard from "@/components/Usercard"

const Admin = () => {
  return (
    <div className="pd -4 flex gap-4 flex-col md:flex-row">
      {/* left */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
      {/* USER CARDS */}
      <div className="flex gap-4 justify-between flex-wrap">
      <Usercard type="student"/>
      <Usercard type="teacher"/>
      <Usercard type="staff"/>
      <Usercard type="parent"/>
      </div>
      {/* Middle charts */}
      <div className=" flex gap-4 flex-col lg:flex-row">  
        {/* Count Charts */}
        <div className="w-full lg:w-1/3 h-[450px]">
        <CountCharts/>
        </div>
         {/* Attendance Charts */}
         <div className=" w-full lg:w-2/3 h-[450px]"></div>
      </div>
      {/* Bottom charts */}
     <div className=""> </div>
     
      </div>
      {/* right */}
      <div className=" w-full lg: 1/3"></div>
    </div>
  )
}

export default Admin 