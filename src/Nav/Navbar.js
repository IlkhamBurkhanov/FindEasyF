import React, { useState } from 'react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../components/ui/avatar"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
 

  import { Label } from "../components/ui/label"
  import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "../components/ui/sheet"
import { Link } from 'react-router-dom';
  
const Navbar = () => {
  const [inputSearch, setInputSearch] = useState("")
  
    return (
        <div>
           <div className=' flex my-5 px-20 justify-between items-center gap-10'>
           <a href='/' className=''><h2 className=' text-gray-700 text-xl font-semibold'>FINDEASY</h2></a>
           <Input onChange={(e)=> setInputSearch(e.target.value)} className=" md:block hidden" type="text" placeholder="Search anything" />
           <Link to={`/search/${inputSearch}`}>
            <Button 
          //  onClick={handleSubmit(inputSearch)}
          >Search</Button>
          </Link>
           <Sheet className=" text-black">
       <SheetTrigger asChild>
        <Button variant="outline">Login</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Login profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Submit</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
           <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
            </Avatar>

           </div>
          
            
        </div>
    );
}

export default Navbar;