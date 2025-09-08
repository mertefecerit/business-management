export async function POST(request:Request) {
    const body = await request.json();

    return Response.json({
        data : body,
        message : 'Forgot Password Instruction has beed send to your registered email address (also check junk folder)'
    })
}