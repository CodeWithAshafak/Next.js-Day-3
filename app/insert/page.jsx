"use client";
import axios from "axios";
import "../css/insert.css"
import React, { useState } from "react";

const page = () => {

  const [input, setInput] = useState({
   name:"",
   desc:"",
   price:"",
   image:""
  });
  const [selectedFile , setSelectedFile] = useState('');

  const inputHandle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
    console.log(input);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try {
      const formData = new FormData();
      formData.append("file",selectedFile)
      formData.append("upload_preset","ashafakpreset")
      formData.append("cloud_name","dovyg2mt3")
      const api = "https://api.cloudinary.com/v1_1/dovyg2mt3/image/upload"
  
      const response = await axios.post(api,formData)
      console.log(response.data);
      console.log(response.data.url);
      
     const api1 = "http://localhost:3000/api/product"
     const response1 = await axios.post(api1, {imgname :response.data.url , ...input})
    //  console.log(response1.data);
     alert("data saved...!")
  
    } catch (error) {
      console.log(error);
      
    }
  }

  const handleFileChange = (e)=>{
  setSelectedFile(e.target.files[0])
  console.log(selectedFile);
  }

  
  return (
    <>
      <div className="flex justify-center">
        <h1>Insert Product </h1>

        <div className="w-full max-w-xs">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                product name
              </label>

              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="enter product name"
                name="name"
                value={input.name}
                onChange={inputHandle}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                description
              </label>

              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="enter desctiption"
                name="desc"
                value={input.desc}
                onChange={inputHandle}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                price
              </label>

              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="enter price"
                name="price"
                value={input.price}
                onChange={inputHandle}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                image
              </label>

              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="file"
                placeholder="insert product image"
                name="imgname"
        
                onChange={handleFileChange}
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleSubmit}
              >
                Insert Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};


export default page;
