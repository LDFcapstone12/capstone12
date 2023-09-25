import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/navigation";
import bcryptjs from "bcryptjs";

connect();

export default async function POST(request, response){
  try {
    const reqBody = await request.json();
    const {
      firstName,
      middleName,
      lastName,
      contactnumber,
      idnumber,
      address,
    } = reqBody;

    console.log(reqBody);

    // Check if user already exists
    const user = await User.findOne({ idnumber });

    if (user) {
      return response.json({
        error: "User already exists",
        success: false,
      });
    }

    const newUser = new User({
      firstName,
      middleName,
      lastName,
      contactnumber,
      idnumber,
      address,
    });

    const savedUser = await newUser.save();
    console.log(savedUser);

    return NextResponse.json({
      message: "User created successfully",
      success: true,
      savedUser,
    });
    
  } catch (error) {
    return NextResponse.json({
      error: error.message},
      {status: 500});
  }
}
