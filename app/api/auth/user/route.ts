import {faker} from "@faker-js/faker";

export async function GET() {
    return Response.json({
        data : {
            avatar : faker.image.avatar(),
            name : faker.person.fullName(),
            email : faker.internet.email(),
            token : faker.string.uuid()
        },
        message : 'User Fetch Complete'
    })
}