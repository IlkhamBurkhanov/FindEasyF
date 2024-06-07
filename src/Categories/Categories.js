import React, { useState, useEffect  } from "react";
import { Card } from '../components/ui/card';
// import { Badge } from "../components/ui/badge"; 
import { FiFolder } from 'react-icons/fi'; 
import axios from 'axios'
import { Link } from "react-router-dom";
function CategoryCard({ category }) {
    return (
        <Link to={`/category/${category?._id}`} href="#" className="hover:bg-gray-100 block rounded-lg p-4 transition duration-300 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
        <Card className="w-full p-4">
          <div className="flex-col items-center justify-between">
            <div className="flex items-center mb-2">
              <FiFolder className="text-blue-500 mr-2" size={24} />
              <h3 className="text-lg font-bold">{category.name}</h3>
            </div>
            <p className=" text-sm"> 4 Subcategories</p>
          </div>
        
        </Card>
      </Link>
    );
  }
function Categories(){
    const [categories, setCategories] = useState([])

    useEffect(() => {
        // Make a GET request to fetch categories
        axios.get("http://localhost:8000/api/categories")
          .then(response => {
            // Set the categories state with the data received
            setCategories(response?.data);
            
          })
          .catch(error => {
            console.error("Error fetching categories:", error);
          });
      }, []);
    
    return(
        <div className="container mx-auto px-4 py-8">
        <h1 className="md:text-2xl text-xl font-bold md:mb-8 mb-4">Categories</h1>
        <div className="flex flex-wrap justify-center -mx-4">
          {categories?.map((category, index )=> (
            <CategoryCard key={index} category={category} />
          ))}
        </div>
      </div>
    )
}

export default Categories