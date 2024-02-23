import { NextResponse } from "next/server"

/*
below kind of route will work for
http://localhost:3000/api/users/45/posts/23
*/

export const DELETE = (request, { params }) => {

    // const [userid, id, childid] = params?.userid;
    return NextResponse.json({
        mesaage: "all posts Data delete succefully",
        ...params
    })
}