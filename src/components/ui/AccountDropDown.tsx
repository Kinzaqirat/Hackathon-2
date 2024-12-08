import { AiOutlineUser } from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi";
import { RxCrossCircled } from "react-icons/rx";
import { IoStarOutline } from "react-icons/io5";
import { RiLogoutBoxLine } from "react-icons/ri";


import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator,DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"
import Link from "next/link";
import { BsCart } from "react-icons/bs";
  
export default function AccountDropDown() {
  return (
    <>
  <DropdownMenu >
  <DropdownMenuTrigger><BsCart className="text-3xl  mt-4 max-sm:text-2xl rounded-full mb-3"/></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>
       <div className="flex justify-evenly gap-3">
        <AiOutlineUser className="relative top-1 "/>
        <h3>Manage my account</h3>

       </div>
    </DropdownMenuLabel>
    <DropdownMenuSeparator />
   
   <DropdownMenuItem>
        <div className="flex justify-evenly gap-3">
            <FiShoppingBag className=" relative top-1"/>
         <Link href={"/chart"}>   <span>My Cart</span></Link>
        </div>
    </DropdownMenuItem>
   
    <DropdownMenuItem>
        <div className="flex justify-evenly gap-3">
            <RxCrossCircled className=" relative top-1"/>
            <span>My Cancelation</span>
        </div>
    </DropdownMenuItem>
    <DropdownMenuItem>
        <div className="flex justify-evenly gap-3">
            <IoStarOutline className="relative top-1"/>
         <Link href={"/blog"}>    <span>My Blog</span></Link>
        </div>
    </DropdownMenuItem>
    <DropdownMenuItem>
    <Link href={"/userDetails"}>
        <div className="flex justify-evenly gap-3">
           <RiLogoutBoxLine className="font-bold relative top-1"/>
            <span>Logout</span>
        </div>
        </Link>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
    </>
  )
}