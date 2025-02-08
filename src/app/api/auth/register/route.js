import User from "@/models/user.model";
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const POST = async (request) => {
    const { name, email, password } = await request.json();
    try {
        await connectDB();
        const hashedPassword = await bcrypt.hash(password, 5);
        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });
        await newUser.save()
        return new NextResponse("User has been created", {
            status: 201
        })
    } catch (error) {
        return new NextResponse(error.message, {
            status: 500
        })
    }
}