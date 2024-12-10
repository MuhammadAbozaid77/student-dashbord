import { AiOutlineMessage } from "react-icons/ai";
import { RiNotification2Line } from "react-icons/ri";
import { RiSearch2Line } from "react-icons/ri";
import { RiUser3Line } from "react-icons/ri";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-between items-center p-5 border-b">
        {/* Search Bar */}
        <div className="md:flex hidden justify-center items-center bg-white p-1 rounded-md gap-1 ">
          <RiSearch2Line className="text-gray-500 cursor-pointer" size={25} />
          <input
            type="text"
            placeholder="Serach..."
            className=" bg-gray-100 rounded-md outline-none text-gray-500 p-2  text-[14px]"
          />
        </div>
        {/* Icons And Users */}
        <div className="flex justify-center items-center gap-1">
          <div className="">
            <AiOutlineMessage
              size={40}
              className="text-gray-500 bg-white rounded-md p-1"
            />
          </div>
          <div className="relative">
            <RiNotification2Line
              size={40}
              className="text-gray-500 bg-white rounded-md p-1"
            />
            <span className="absolute w-[20px] h-[20px] rounded-full -top-[7px] -right-[5px] bg-red-600 text-white flex justify-center items-center text-[12px]">
              10
            </span>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-end flex-col mx-3">
              <span className="text-[14px] font-semibold"> muhammad </span>
              <span className="text-[12px]"> admin </span>
            </div>
            <div className="">
              <RiUser3Line
                size={40}
                className="text-gray-500 bg-white rounded-md p-1"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
