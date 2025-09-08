export async function POST(request:Request) {
    const body = await request.json();

    return Response.json({
        data : body,
        message : 'Sign Up Complete, Check emails for email validation (also check junk folder)'
    })
}