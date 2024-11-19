import Image from "next/image"


const TableSearch = () => {
  return (
    <div > 
        {/* search bar */}
    <div className="w-full md:auto flex items-center text-xs gap-2 cursor-pointer rounded-full ring-[1.5px] ring-gray-300 px-2 ">
        <Image src= "/search.png" alt="" width={14} height={14}></Image>
        <input type="text" placeholder="Search..."
        className="w-[200px] p-2 bg-transparent outline-none" />
    </div>
     </div>
  )
}

export default TableSearch