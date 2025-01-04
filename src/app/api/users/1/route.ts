

export async function GET() {
    const currentDate = new Date(); // Get the current date
    currentDate.setDate(currentDate.getDate() + 3);

    const user = {
        id: 1,
        name: 'Gabriel Abubakar',
        accountBalance: 200000,
        activeLoan: {
            id: 100,
            lenderId: 2,
            amount: 2000,
            dueDate: currentDate.toLocaleDateString()
        }
    }

    return Response.json(user)
}