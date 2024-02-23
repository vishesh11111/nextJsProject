import { NextResponse } from "next/server"
import UserModal from "@/app/models/user.model";
/*
below kind of route for
http://localhost:3000/api/users/45

*/

export const GET = async (request, { params }) => {
    try {
        const { userid } = params;
        const getUserDetails = await UserModal.findById(userid);
        return NextResponse.json({
            message: "get user details succefully",
            data: getUserDetails
        })
    } catch (error) {
        return NextResponse.json({
            message: "something went wrong",
            error
        }, {
            status: 500
        })
    }
}

export const PUT = async (request, { params }) => {
    try {
        const { userid } = params;
        const body = await request.json();
        const getUserDetails = await UserModal.findByIdAndUpdate(userid, body);
        return NextResponse.json({
            message: "user details update succefully",
            data: getUserDetails
        })
    } catch (error) {
        return NextResponse.json({
            message: "something went wrong",
            error
        }, {
            status: 500
        })
    }
}

export const DELETE = async (request, { params }) => {
    const { userid } = params;
    try {
        const deletdata = await UserModal.findByIdAndDelete(userid)
        return NextResponse.json({
            message: "Delete data succefully",
            data: deletdata
        }, {
            status: 201
        })
    } catch (error) {
        return NextResponse.json({
            message: "somthing went wrong",
            error
        })
    }
    // return NextResponse.json({
    //     mesaage: "Data delete succefully",
    //     ...params
    // })
}