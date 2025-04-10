import { NextResponse } from "next/server";
import mongodb from "../../lib/mongodb";
import proModel from "../../models/promodel";


 

export async function GET(req,res){
  await mongodb(); 
  const id = await req.id
  console.log(id);
  
  try {
    const response = await proModel.findOne({id:id});
    // return NextResponse.json(response);
    return Response.json(response);
  } catch (error) {
    // return NextResponse.json(error)
     return Response.json(error)
    
  }
}