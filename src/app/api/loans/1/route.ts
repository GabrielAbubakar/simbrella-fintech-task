

export async function GET() {
    const loans = [
        {
            "id": 1,
            "lender_id": 101,
            "date": "2025-01-03T10:30:00Z",
            "amount": 5000,
            "loaner_id": 201
        },
        {
            "id": 2,
            "lender_id": 102,
            "date": "2025-01-02T14:15:00Z",
            "amount": 10000,
            "loaner_id": 202
        },
        {
            "id": 3,
            "lender_id": 103,
            "date": "2025-01-01T09:45:00Z",
            "amount": 7500,
            "loaner_id": 203
        },
        {
            "id": 4,
            "lender_id": 104,
            "date": "2025-01-03T08:00:00Z",
            "amount": 2000,
            "loaner_id": 204
        },
        {
            "id": 5,
            "lender_id": 105,
            "date": "2025-01-01T17:30:00Z",
            "amount": 15000,
            "loaner_id": 205
        }
    ]

    return Response.json(loans)
}