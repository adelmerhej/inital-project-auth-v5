"use client";

import { FcGoogle } from "react-icons/fc";
import { FaLinkedinIn } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export const Social = () => {
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button 
        size='lg'
         className="flex-1" 
        variant='outline'
      >
        <FcGoogle className="w-5 h-5"/>
      </Button>
      <Button 
        size='lg'
         className="flex-1" 
        variant='outline'
      >
        <FaLinkedinIn className="w-5 h-5"/>
      </Button>
    </div>
  );
};