import { NextRequest, NextResponse } from "next/server"
import connectDB from "@/utils/db";
import Post from "@/models/post.model";


export const GET = async (request, { params }) => {
    try {
        const { id } = await params;
        await connectDB();
        const posts = await Post.findById(id);
        return new NextResponse(JSON.stringify(posts), { status: 200 });
    } catch (error) {
        return new NextResponse("Database Error", { status: 500 });
    }
}

export const DELETE = async (request, { params }) => {
    try {
        const { id } = await params;
        await connectDB();
        const posts = await Post.findByIdAndDelete(id);
        return new NextResponse("Post has been deleted", { status: 200 });
    } catch (error) {
        return new NextResponse("Database Error", { status: 500 });
    }
}