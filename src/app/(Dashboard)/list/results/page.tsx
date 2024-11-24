
import FormModal from "@/components/formModal"
import Pagination from "@/components/Pagination"
import Table from "@/components/Table"
import TableSearch from "@/components/TableSearch"
import { assignmentsData, classesData, examsData, lessonsData, parentsData, resultsData, role, studentsData, subjectsData, teachersData } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"


type Resulsts = {
    id: number,
    subject: string,
    class: number,
    teacher: number,
    student:string,
    date: string,
    type:string,
    score:string,
    

 }

const columns= [
{ 
  header:"subject Name",
  accessor:"subject"
},
{
  header:" Student ",
  accessor: "student",
  className:"hidden md:table-cell"
},
{
    header:" Score",
    accessor: "score",
    className:"hidden md:table-cell"
  },

  {
    header:" Teacher",
    accessor: "teacher",
    className:"hidden md:table-cell"
  }, 
  {
    header:" Class",
    accessor: "class",
    className:"hidden md:table-cell"
  }, 
   {
    header:" Date",
    accessor: "date",
    className:"hidden md:table-cell"
  }, 

  
{
    header:"Action",
    accessor: "action",
    
  },
]
const ResultsPage = () => {
  const renderRow =(item:Resulsts)=>(
    <tr key={item.id} className="border-b border-x-gray-200 text-sm even:bg-slate-50 hover:bg-lamaPurpleLight">
      <td className="flex items-center gap-4 p-4"> 
    
        <div className="flex flex-col">
          <h3 className="font-semibold" >{item.subject}</h3>
          
        </div>
      </td>
      <td className="hidden md:table-cell">{item.student}</td>
      <td className="hidden md:table-cell">{item.score}</td>
      <td className="hidden md:table-cell">{item.teacher}</td>
      <td className="hidden md:table-cell">{item.class}</td>
      <td className="hidden md:table-cell">{item.date}</td>

      <td>
        <div className="flex items-center gap-2">
           <>
           <FormModal table="result" type="update" data={item}/>
           <FormModal table="result" type="delete"  id={item.id}/>
           </>
             
        </div>
      </td>
    </tr>
)


  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4  mt-0">
      {/* TOP */}
      <div className=" flex items-center justify-between">
      <h1 className="hidden
       md:block text-lg font-semibold">All Results</h1>
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
          <FormModal table="result" type="create"/>
          }
            

         
        </div>
      </div>
      </div>

       {/* List */}
       <div className="">
        <Table columns={columns} renderRow={renderRow} data={resultsData}/>
       </div> 
       {/* pagination */}
       <div className="">
        <Pagination/>
        </div> 
    </div>
  )
}

export default ResultsPage