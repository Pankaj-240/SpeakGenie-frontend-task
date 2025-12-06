import React from "react";
import { ChevronDown, FileText, ClipboardCheck } from "lucide-react";

const Navbar = () => {
  return (
    <div className="h-[70px] p-4 bg-[#F6FEFA] flex justify-between"> 
      <div className="h-8 w-8 rounded-full bg-[#FFFFFF] flex justify-center items-center"><ChevronDown /></div>
      <div className=" flex justify-center items-center">
         <p className="text-[#4B5563] text-sm font-medium">NOW PLAYING</p> 
      </div>
    
      <div className="flex justify-between items-center w-20">
        <div className="h-8 w-8 rounded-full bg-[#FFFFFF] flex justify-center items-center">
          <FileText size={23} />
        </div>
        <div className="w-10 h-8 bg-[#19B761] rounded-2xl flex justify-center items-center relative">
          <span className="h-5 w-5 bg-[#FACC15] rounded-full flex justify-center items-center text-xs absolute -top-1 -right-1">7</span>
          <ClipboardCheck size={18} color="white" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
