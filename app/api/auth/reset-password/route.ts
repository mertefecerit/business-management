export async function POST(request:Request) {
    const body = await request.json();

    return Response.json({
        data : body,
        message : 'Reset password process is completed!'
    })
}