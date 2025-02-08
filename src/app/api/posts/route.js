import { NextRequest, NextResponse } from "next/server"
import connectDB from "@/utils/db";
import Post from "@/models/post.model";


export const GET = async (request, { params }) => {
    const url = new URL(request.url);
    const username = url.searchParams.get("username")
    try {
        await connectDB();
        const posts = await Post.find(username && { username });
        return new NextResponse(JSON.stringify(posts), { status: 200 });
    } catch (error) {
        return new NextResponse("Database Error", { status: 500 });
    }
}

export const POST = async (request) => {
    const body = await request.json();
    try {
        const newPost = new Post(body);
        await connectDB();
        await newPost.save();
        return new NextResponse("Post has been created", { status: 201 });
    } catch (error) {
        return new NextResponse("Database Error", { status: 500 });
    }
}
