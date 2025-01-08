

export async function GET() {
    const transactions = [
        {
            "id": 1,
            "user_id": 1,
            "transactionType": "credit",
            "amount": 1500,
            "date": "2024-12-15T10:15:00Z"
        },
        {
            "id": 2,
            "user_id": 1,
            "transactionType": "debit",
            "amount": 500,
            "date": "2025-01-02T12:30:00Z"
        },
        {
            "id": 3,
            "user_id": 1,
            "transactionType": "credit",
            "amount": 2000,
            "date": "2024-11-20T08:45:00Z"
        },
        {
            "id": 4,
            "user_id": 1,
            "transactionType": "debit",
            "amount": 750,
            "date": "2025-01-03T14:00:00Z"
        },
        {
            "id": 5,
            "user_id": 1,
            "transactionType": "credit",
            "amount": 3000,
            "date": "2024-10-05T16:20:00Z"
        },
        {
            "id": 6,
            "user_id": 1,
            "transactionType": "debit",
            "amount": 1200,
            "date": "2024-12-10T09:15:00Z"
        },
        {
            "id": 7,
            "user_id": 1,
            "transactionType": "credit",
            "amount": 2500,
            "date": "2024-11-05T14:30:00Z"
        },
        {
            "id": 8,
            "user_id": 1,
            "transactionType": "credit",
            "amount": 4000,
            "date": "2024-10-15T11:00:00Z"
        },
        {
            "id": 9,
            "user_id": 1,
            "transactionType": "debit",
            "amount": 950,
            "date": "2025-01-05T15:45:00Z"
        },
        {
            "id": 10,
            "user_id": 1,
            "transactionType": "debit",
            "amount": 300,
            "date": "2024-12-20T13:10:00Z"
        }

    ]


    return Response.json(transactions)
}