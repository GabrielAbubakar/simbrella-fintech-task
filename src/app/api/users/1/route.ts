

export async function GET() {
    const user = {
        id: 1,
        name: 'Gabriel Abubakar',
        accountBalance: 200000
    }

    return Response.json(user)
}