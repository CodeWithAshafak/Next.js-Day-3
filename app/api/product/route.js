import { NextResponse } from "next/server";
import mongodb from "../../lib/mongodb";
import proModel from "../../models/promodel";

export async function POST(req, res) {
  await mongodb();
  try {
    const data = await req.json();
    console.log(data);

    const { name, desc, price,  imgname } = data;
    const response = await proModel.create({
      name: name,
      desc: desc,
      price: price,
      imgname: imgname,
    });

    // return NextResponse.json(response);
    return Response.json(response);
  } catch (error) {
    //return NextResponse.json(error);
    return Response.json(error);
  }
}
 

export async function GET(req,res){
  await mongodb(); 
  try {
    const response = await proModel.find();
    // return NextResponse.json(response);
    return Response.json(response);
  } catch (error) {
    // return NextResponse.json(error)
     return Response.json(error)
    
  }
}