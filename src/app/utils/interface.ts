
export interface IUserInfo {
    id: number,
    name: string,
    accountBalance: number,
    activeLoan: {
        id: number,
        lenderId: number,
        amount: number,
        dueDate: string
    }
}

export interface ILoanInfo {
    id: number,
    lender_id: number
    date: string,
    amount: number
    loaner_id: number
}

export interface ITransactionInfo {
    id: number,
    user_id: number,
    transactionType: string,
    amount: number,
    date: string,
}