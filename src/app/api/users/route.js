import { connectDb } from "@/helper/db";
import { NextResponse } from "next/server"
import UserModal from "@/app/models/user.model";
import userController from "@/app/controllers/userController";
import authorize from "@/app/middleware/AuthorizationToken";

connectDb();
export const GET = authorize(async (request) => {
    try {
        const user = await userController.getUsers();
        return NextResponse.json({
            message: "Get Data succefully",
            data: user?.data
        }, {
            status: 201
        })
    } catch (error) {
        return NextResponse.json({
            message: "Somthing went wrong",
            error
        })
    }
})

export const POST = async (request) => {
    /*const body = request.body;
    // console.log(request.headers)
    console.log(request.nextUrl.pathname)
    // for take data from query with key
    console.log(request.nextUrl.searchParams)

    // take body data below code for
    const jsonData = await request.json();
    await UserModal.save()

    // whenever data as text formate from post man not in json formate then below code
    // const textCode = await request.text();

    // for redirect use below code
    // return NextResponse.redirect(new URL("/new", request.url))

    return NextResponse.json({
        message: "Create data succefully",
        data: jsonData,
    })*/

    // get data from data
    try {

        const { name, email, password, about, profile } = await request.json();

        const user = new UserModal({
            name,
            email,
            password,
            about,
            profile,
        })

        const createdUser = await user.save();

        const responce = NextResponse.json(user, {
            status: 200,
        })
        return responce;
    } catch (error) {
        return NextResponse.json({
            message: "failed to create user !!",
            status: 500
        })
    }
}
export const DELETE = (request) => {

    return NextResponse.json({
        message: "Detel succefully"
    },
        {
            status: 201,
            statusText: "hello ji"
        })

}
export const PUT = () => {

}
export const PATCH = () => {

}