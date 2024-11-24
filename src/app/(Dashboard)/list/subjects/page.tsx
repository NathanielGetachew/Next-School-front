import FormModal from "@/components/formModal"
import Pagination from "@/components/Pagination"
import Table from "@/components/Table"
import TableSearch from "@/components/TableSearch"
import { parentsData, role, studentsData, subjectsData, teachersData } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"


type Subject = {
    id:number
    name: string
    teachers: string[],
 }

const columns= [
{ 
  header:"Subject Name",
  accessor:"info"
},
{
  header:" Teachers",
  accessor: "teachers",
  className:"hidden md:table-cell"
},

{
    header:"Action",
    accessor: "action",
    
  },
]
const Subjectspage = () => {
  const renderRow =(item:Subject)=>(
    <tr key={item.id} className="border-b border-x-gray-200 text-sm even:bg-slate-50 hover:bg-lamaPurpleLight">
      <td className="flex items-center gap-4 p-4"> 
    
        <div className="flex flex-col">
          <h3 className="font-semibold" >{item.name}</h3>
          
        </div>
      </td>
      <td className="hidden md:table-cell">{item.teachers.join(",")}</td>
      <td>
        <div className="flex items-center gap-2">
          
           {role === "admin" && 
        <>
        <FormModal table="subject" type="update"  data={item}/>
        <FormModal table="subject" type="delete"  id={item.id}/>
        </>

           
          
           }
             
        </div>
      </td>
    </tr>
)


  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4  mt-0">
      {/* TOP */}
      <div className=" flex items-center justify-between">
      <h1 className="hidden
       md:block text-lg font-semibold">All Subjects</h1>
      <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto  ">
        <TableSearch/>
        <div className=" flex items-center gap-4 self-end">
        <button className="w-8 h-8 flex items-center rounded-full justify-center bg-lamaYellow">
        <Image src="/filter.png" alt="" width={14} height={14}/>
        </button>
        <button className="w-8 h-8 flex items-center rounded-full justify-center bg-lamaYellow">
        <Image src="/sort.png" alt="" width={14} height={14}/>
        </button>
        {role ==="admin" &&
        <FormModal table="subject" type="create"/>
        }
            

         
        </div>
      </div>
      </div>

       {/* List */}
       <div className="">
        <Table columns={columns} renderRow={renderRow} data={subjectsData}/>
       </div> 
       {/* pagination */}
       <div className="">
        <Pagination/>
        </div> 
    </div>
  )
}

export default Subjectspage