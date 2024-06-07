import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// import { Check, ChevronsUpDown } from "lucide-react"


import {Card} from "../components/ui/card";
import { Input } from '../components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select"
import { AiFillThunderbolt } from "react-icons/ai";


function CategoryPage() {
   
    const [categoryData, setCategoryData] = useState("")
    const { categoryId } = useParams(); // Get the category name from route parameters
    console.log(categoryId);
    
        useEffect(() => {
      // Make a GET request to fetch categories
      axios.get(`http://localhost:8000/api/resources/category/${categoryId}`)
        .then(response => {
          // Set the categories state with the data received
          setCategoryData(response?.data);
          console.log(response?.data);
          
          
        })
        .catch(error => {
          console.error("Error fetching categories:", error);
        });
    }, []);
   

  // Dummy data for cards
  const cardsData = [
    {
      icon: "icon-url",
      title: "Card Title 1",
      author_name: "Author Name 1",
      author_mainBlog: "Main Blog 1",
      link: "Link 1"
    },
    {
      icon: "icon-url",
      title: "Card Title 2",
      author_name: "Author Name 2",
      author_mainBlog: "Main Blog 2",
      link: "Link 2"
    },
    // Add more card data as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-xl font-bold block sm:hidden mb-2">{categoryData ? categoryData[0].category?.name : null}</h1>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold sm:block hidden">{categoryData ? categoryData[0].category?.name : null}</h1>
        <div className="flex items-center">
        <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
          <Input placeholder="Search" className="ml-2" /> {/* Input for search */}
        </div>
      </div>
      <div className="grid grid-cols-1  gap-4">
        {/* Render cards */}
        {categoryData? categoryData?.map((card, index) => (
          <Card key={index} className="p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <div className="flex flex-col sm:flex-row sm:gap-3 items-start sm:items-center mb-4 sm:mb-0">
              < AiFillThunderbolt alt="Icon" className="w-8 h-8 mb-2 sm:mb-0 sm:mr-2" />
              <div>
                <h2 className="text-lg font-semibold">{card.title}</h2>
                <a href={card.link} className="text-blue-500 hover:underline">Hoziroq boshlang</a>
              </div>
            </div>
            <div className="flex flex-col items-start ">
              <div className="mb-2 sm:mb-0 sm:mr-4">
                <p className="text-gray-700"><strong>Author:</strong> {card?.author?.name}</p>
                <a href={card.author?.mainBlogLink} className="text-blue-500 hover:underline">Main Blog</a>
                <p className="text-gray-600">{card.date}</p>
              </div>
              <div className='flex gap-5'>
                <p className="text-gray-700"><strong>Level:</strong> {card.level}</p>
                <p className="text-gray-700"><strong>Status:</strong> {card.status}</p>
              </div>
            </div>
          </Card>
        ) ) : null}
      </div>
    </div>
  );
}

export default CategoryPage;
