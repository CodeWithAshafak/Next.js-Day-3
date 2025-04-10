"use client";

import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
const showpro = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  console.log(id, "asdfg rourts");
    useEffect(() => {
       loadData();
     }, []);
     const loadData = async () => {
        try {
          const api = "http://localhost:3000/api/showpro";
          const response = await axios.get(api);
          console.log(response.data);
          setmydata(response.data);
        } catch (error) {
          console.log("error is ", error);
        }
      };
      const ans = mydata.map((key, index) => {
        return (
          <tr key={index} className="border-b">
            <td className="px-4 py-2 ">
              <img src={key.imgname} style={{ height: "200px", width: "200px" }} />
            </td>
            <td className="px-4 py-2 ">{key.name}</td>
            <td className="px-4 py-2">{key.desc}</td>
            <td className="px-4 py-2">{key.price}</td>
           
          </tr>
        );
      });
  

    return(
    <>
    
    <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Customer List</h2>
        <table className="w-full">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                product image
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                name
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                description
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                price
              </th>

              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Details
              </th>
            </tr>
          </thead>
          <tbody>{ans}</tbody>
        </table>
      </div>
    
    </>
  ) 
};

export default showpro;



