import FormModal from "@/components/formModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import {
  classesData,
  examsData,
  lessonsData,
  parentsData,
  role,
  studentsData,
  subjectsData,
  teachersData,
} from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Exams = {
  id: number;
  subject: string;
  class: number;
  teacher: number;
  date: string;
};

const columns = [
  {
    header: "subject Name",
    accessor: "subject",
  },
  {
    header: " Class ",
    accessor: "class",
    className: "hidden md:table-cell",
  },
  {
    header: " Teacher",
    accessor: "teacher",
    className: "hidden md:table-cell",
  },

  {
    header: " Date",
    accessor: "date",
    className: "hidden md:table-cell",
  },

  {
    header: "Action",
    accessor: "action",
  },
];
const ExamsPage = () => {
  const renderRow = (item: Exams) => (
    <tr
      key={item.id}
      className="border-b border-x-gray-200 text-sm even:bg-slate-50 hover:bg-lamaPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.subject}</h3>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.class}</td>
      <td className="hidden md:table-cell">{item.teacher}</td>
      <td className="hidden md:table-cell">{item.date}</td>

      <td>
        <div className="flex items-center gap-2">
          {role === "admin" && (
            <>
              <FormModal table="exam" type="update" data={item} />

              <FormModal table="exam" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4  mt-0">
      {/* TOP */}
      <div className=" flex items-center justify-between">
        <h1
          className="hidden
       md:block text-lg font-semibold"
        >
          All Exams
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto  ">
          <TableSearch />
          <div className=" flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center rounded-full justify-center bg-lamaYellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center rounded-full justify-center bg-lamaYellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {role === "admin" && <FormModal table="exam" type="create" />}
          </div>
        </div>
      </div>

      {/* List */}
      <div className="">
        <Table columns={columns} renderRow={renderRow} data={examsData} />
      </div>
      {/* pagination */}
      <div className="">
        <Pagination />
      </div>
    </div>
  );
};

export default ExamsPage;
