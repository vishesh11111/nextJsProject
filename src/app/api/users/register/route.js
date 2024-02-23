import { NextResponse } from "next/server"


export const POST = async (req, res) => {
    try {
        return NextResponse.json({ message: "hello" }, {status: 200})
    } catch (error) {
        return NextResponse.json({

        },{
            status: 500
        })
    }
}