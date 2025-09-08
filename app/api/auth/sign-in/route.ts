import {faker} from "@faker-js/faker";

export async function POST(request:Request) {
    //const body = await request.json();

    return Response.json({
        data : {
            avatar : faker.image.avatar(),
            name : faker.person.fullName(),
            email : faker.internet.email(),
            token : faker.string.uuid()
        },
        message : 'Sign in Complete'
    })
}