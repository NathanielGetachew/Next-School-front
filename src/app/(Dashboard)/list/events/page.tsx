
import Pagination from "@/components/Pagination"
import Table from "@/components/Table"
import TableSearch from "@/components/TableSearch"
import { assignmentsData, classesData, eventsData, examsData, lessonsData, parentsData, resultsData, role, studentsData, subjectsData, teachersData } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"


type Events = {
    id: number,
    title: string,
    class: string,
    date: string,
    startTime:string,
    endTime:string
 }

const columns= [
{ 
  header:"Event Name",
  accessor:"title"
},
{
  header:" Class ",
  accessor: "class",
  className:"hidden md:table-cell"
},
{   
    header:" Date",
    accessor: "date",
    className:"hidden md:table-cell"
  }, 
  {
    header:" Starts at ",
    accessor: "startTime",
    className:"hidden md:table-cell"
  }, 
  {
    header:" Ends at ",
    accessor: "endTime",
    className:"hidden md:table-cell"
  }, 

  
{
    header:"Action",
    accessor: "action",
    
  },
]
const EventsPage = () => {
  const renderRow =(item:Events)=>(
    <tr key={item.id} className="border-b border-x-gray-200 text-sm even:bg-slate-50 hover:bg-lamaPurpleLight">
      <td className="flex items-center gap-4 p-4"> 
    
        <div className="flex flex-col">
          <h3 className="font-semibold" >{item.title}</h3>
          
        </div>
      </td>
      <td className="hidden md:table-cell">{item.class}</td>
      <td className="hidden md:table-cell">{item.date}</td>
      <td className="hidden md:table-cell">{item.startTime}</td>
      <td className="hidden md:table-cell">{item.endTime}</td>

      <td>
        <div className="flex items-center gap-2">
           <Link href={`/list/teachers/${item.id}`}>
           <button className="w-7 h-7 items-center flex justify-center rounded-full bg-lamaSky">
            <Image src="/edit.png" alt="" width={16} height={16}/>
           </button>
           </Link>
           {role === "admin" && <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
            <Image src="/delete.png" alt="" width={16} height={16}/>
           </button>}
             
        </div>
      </td>
    </tr>
)


  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4  mt-0">
      {/* TOP */}
      <div className=" flex items-center justify-between">
      <h1 className="hidden
       md:block text-lg font-semibold">All Events</h1>
      <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto  ">
        <TableSearch/>
        <div className=" flex items-center gap-4 self-end">
        <button className="w-8 h-8 flex items-center rounded-full justify-center bg-lamaYellow">
        <Image src="/filter.png" alt="" width={14} height={14}/>
        </button>
        <button className="w-8 h-8 flex items-center rounded-full justify-center bg-lamaYellow">
        <Image src="/sort.png" alt="" width={14} height={14}/>
        </button>
        {role ==="role" && <button className="w-8 h-8 flex items-center rounded-full justify-center bg-lamaYellow">
        <Image src="/plus.png" alt="" width={14} height={14}/>
        </button>}
            

         
        </div>
      </div>
      </div>

       {/* List */}
       <div className="">
        <Table columns={columns} renderRow={renderRow} data={eventsData}/>
       </div> 
       {/* pagination */}
       <div className="">
        <Pagination/>
        </div> 
    </div>
  )
}

export default EventsPage