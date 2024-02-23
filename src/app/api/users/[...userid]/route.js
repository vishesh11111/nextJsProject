import { NextResponse } from "next/server"
/*
below kind of route for
http://localhost:3000/api/users/45/67/87   
*/
export const DELETE = (request, { params }) => {

    const [userid, id, childid] = params?.userid;
    return NextResponse.json({
        mesaage: "all Data delete succefully",
        userid, id, childid
    })
}