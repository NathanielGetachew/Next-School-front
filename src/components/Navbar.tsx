import Image from "next/image"

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-white">
        {/* search bar */}
        <div className="hidden md:flex items-center gap-2 cursor-pointer rounded-full ring-[1.5px] ring-gray-300 px-2 ">
            <Image src= "/search.png" alt="" width={14} height={14}></Image>
            <input type="text" placeholder="Search..."
            className="w-[200px] p-2 bg-transparent outline-none" />
        </div>
        {/* Icons and User */}
        <div className=" flex items-center gap-6 justify-end w-full">
            <div className=" bg-white rounded-full items-center justify-center cursor-pointer  ">
                <Image src="/message.png" alt="" width={20} height={20}></Image>
            </div>
            <div className=" bg-white rounded-full items-center justify-center cursor-pointer relative ">
               <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center  bg-purple-500 text-white rounded-full text-xs">1</div>
                <Image src="/announcement.png" alt="" width={20} height={20}/>
                
                 </div>

            <div className="flex flex-col ">
               <span>Jane Doe</span>
               <span className="text-[10] text-gray-500 text-right ">Student</span>
            </div>
            <Image src="/avatar.png" alt="profile picture" width={36} height={36} className="rounded-full"></Image>
        </div>

    </div>
  )
}

export default Navbar