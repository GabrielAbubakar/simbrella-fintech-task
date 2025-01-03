
export interface IUserInfo {
    id: number,
    name: string,
    accountBalance: string
}

export interface ILoanInfo {
    id: number,
    lender_id: number
    date: string,
    amount: string
    loaner_id: number
}

export interface ITransactionInfo {
    id: number,
    user_id: number,
    transactionType: string,
    amount: string,
    date: string,
}