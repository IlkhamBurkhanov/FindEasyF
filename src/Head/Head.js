import React from "react";
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"

function Head(){
    return(
        <div className="flex h-[250px] items-center justify-center">
        <div className="flex flex-col items-center justify-center h-1/2 w-full max-w-xl p-4">
          <h2 className="text-4xl font-bold mb-2">FindEasy - best resourses</h2>
          <p className="text-lg  mb-4" >Find easy the best educational resources tailored to your needs</p>
          <div className="flex items-center w-full space-x-2">
            <Input
              type="text"
              placeholder="Search something..."
              className="flex-1"
            />
            <Button className="flex-shrink-0">Search</Button>
          </div>
        </div>
       
      </div>
    )
}

export default Head