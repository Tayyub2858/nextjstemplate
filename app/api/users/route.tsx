import { NextResponse } from "next/server";

export function GET() {
    const users = [
        {
            name : 'Ali',
            phone : "123456789",
            course : 'Web Development'
        },
        {
            name : 'Usamn',
            phone : "123456789",
            course : 'Android Development'
        },
        {
            name : 'Akrm',
            phone : "123456789",
            course : 'Web Development'
        },
        {
            name : 'Asghar',
            phone : "123456789",
            course : 'Graphic Development'
        },
    ];
    return NextResponse.json(users);
}
export function POST() {}
export function DELETE() {
    console.log("delete api...!");
    return NextResponse.json({
        message : "delete it..!",
        status : true
    },
    {status : 201 , statusText: "delete ho gay"}
    )
}
export function PUT() {}