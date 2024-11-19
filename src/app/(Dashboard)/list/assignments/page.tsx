
import Pagination from "@/components/Pagination"
import Table from "@/components/Table"
import TableSearch from "@/components/TableSearch"
import { assignmentsData, classesData, examsData, lessonsData, parentsData, role, studentsData, subjectsData, teachersData } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"


type Assignments = {
    id: number,
    subject: string,
    class: number,
    teacher: number,
    dueDate: string
    

 }

const columns= [
{ 
  header:"subject Name",
  accessor:"subject"
},
{
  header:" Class ",
  accessor: "class",
  className:"hidden md:table-cell"
},
{
    header:" Teacher",
    accessor: "teacher",
    className:"hidden md:table-cell"
  },

  {
    header:" Due Date",
    accessor: "date",
    className:"hidden md:table-cell"
  }, 

  
{
    header:"Action",
    accessor: "action",
    
  },
]
const AssignmentsPage = () => {
  const renderRow =(item:Assignments)=>(
    <tr key={item.id} className="border-b border-x-gray-200 text-sm even:bg-slate-50 hover:bg-lamaPurpleLight">
      <td className="flex items-center gap-4 p-4"> 
    
        <div className="flex flex-col">
          <h3 className="font-semibold" >{item.subject}</h3>
          
        </div>
      </td>
      <td className="hidden md:table-cell">{item.class}</td>
      <td className="hidden md:table-cell">{item.teacher}</td>
      <td className="hidden md:table-cell">{item.dueDate}</td>

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
       md:block text-lg font-semibold">Assignments</h1>
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
        <Table columns={columns} renderRow={renderRow} data={assignmentsData}/>
       </div> 
       {/* pagination */}
       <div className="">
        <Pagination/>
        </div> 
    </div>
  )
}

export default AssignmentsPage