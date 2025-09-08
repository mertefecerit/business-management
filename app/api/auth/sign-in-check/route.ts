export async function POST(request:Request) {
    const body = await request.json();

    return Response.json({
        data : body,
        message : 'Sign In Check Complete'
    })
}