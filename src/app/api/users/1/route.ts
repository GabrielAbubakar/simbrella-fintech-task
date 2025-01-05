

export async function GET() {
    // Generate future date
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 3);

    const user = {
        id: 1,
        name: 'Joe Pesci',
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