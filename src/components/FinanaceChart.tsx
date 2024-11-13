"use client"
import Image from "next/image"
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
 {
  name:"Jan",
  income: 3242,
  expenses: 432
  },
  {
  name:"Feb",
  income: 67,
  expenses: 42
  },
{
  name:"Mar",
  income: 322,
  expenses: 4332
  },
  {
  name:"Apr",
  income: 292,
  expenses: 132
  },
{
  name:"May",
  income: 342,
  expenses: 882
  },
{
  name:"Jun",
  income: 4772,
  expenses: 892
  },
{
  name:"Jul",
  income: 342,
  expenses: 232
  },
{
  name:"Aug",
  income: 2242,
  expenses: 42
  },
{
  name:"Sep",
  income: 342,
  expenses: 232
  },
{
  name:"Oct",
  income: 3542,
  expenses: 492
  },
{
  name:"Nov",
  income: 3342,
  expenses: 42
  },
{
  name:"Dec",
  income: 342,
  expenses: 432
  },
]



const FinanaceChart = () => {
  return (
    
        <div className="bg-white rounded-lg p-4 h-full">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Finance</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20}/>
      </div>
     <ResponsiveContainer width="100%" height= "90%" >
        <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
            top:5,
            right:30,
            left:20,
            bottom:5
        }}
        >
       <CartesianGrid strokeDasharray="3 3" stroke="#ddd"/>
       <XAxis 
       dataKey='name' 
       axisLine={false} 
       tick={{fill:"#d1d5db"}} 
       tickLine={false}
       tickMargin={10}/>
       
       <YAxis 
       axisLine={false} 
       tick={{fill:"#d1d5db"}} 
       tickLine={false}
       tickMargin={20}/>
       <Tooltip/>
       <Legend 
       align="center"
        verticalAlign="top" 
        wrapperStyle={ {paddingTop:"10px", paddingBottom:"30px"}}/>
       <Line 
       type="monotone"
       dataKey="income"
       stroke="#C3EBFA"
       strokeWidth={5}
       />
       <Line type="monotone" dataKey="expenses" stroke="#CFCEFF" strokeWidth={5}/>
      </LineChart>
    </ResponsiveContainer>
  </div>
 )
}

export default FinanaceChart