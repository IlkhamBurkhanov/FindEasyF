import React from "react";
import Bg1 from '../Assets/bg1.jpg'
import BG2 from "../Assets/bg2.jpg"

import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import Categories from "../Categories/Categories";
import Head from "../Head/Head";
 

function Main() {
    return(
    
     <div>
        <Head/>
        <Categories/>
     </div>
    )
}

export default Main