import React from "react";
import { Route, Routes,  } from "react-router-dom"; // Import Route and Switch
import Navbar from "./Nav/Navbar";
import Main from "./Main/Main";
// import Categories from "./Categories/Categories";
import Footer from "./Footer/Footer";
import CategoryPage from "./CategoryPage/CategoryPage"; // Import the CategoryPage component

function App() {
  return (
    <div>
      <Navbar />
      <Routes>

       {/* Use Switch to render the first matching route */}
        <Route path="/" exact element={<Main/>} /> {/* Use exact to match the exact path */}
        {/* <Route path="/categories" component={Categories} /> */}
        <Route path="/category/:categoryId" element={<CategoryPage/>} /> {/* Define dynamic route */}
      </Routes>
      
      {/* <Footer /> */}
    </div>
  );
}

export default App;
