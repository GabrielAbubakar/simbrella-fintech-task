"use client"
import { useEffect, useState } from "react";
import { H2, H3 } from "."
import axiosInstance from "../utils/axiosInstance"
import { ILoanInfo, ITransactionInfo, IUserInfo } from "../utils/interface";
// import axios from "axios";

export default function MainSection() {
    const [userInfo, setUserInfo] = useState<IUserInfo>()
    const [userLoans, setUserLoans] = useState<ILoanInfo[]>()
    const [userTransactions, setUserTransactions] = useState<ITransactionInfo[]>()
    const [isLoading, setIsLoading] = useState(false)

    async function getDetails() {
        try {
            setIsLoading(true)
            // Fetch the user, loans and transaction details
            const [userRes, loansRes, transactionRes] = await Promise.all([
                axiosInstance.get('users/1'),
                axiosInstance.get('loans/1'),
                axiosInstance.get('transactions/1')
            ])
            // Set the fetched data into local state
            setUserInfo(userRes.data)
            setUserLoans(loansRes.data)
            setUserTransactions(transactionRes.data)

        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getDetails()
    }, [])

    return (
        <div className="bg-red-300 p-10 flex-1">
            <h1 className="font-bold text-4xl mb-10">
                Welcome, Gabriel
            </h1>

            {/* Quick Info Section */}
            <div className="flex justify-between gap-10 mb-10">
                <div className="bg-green-300 p-5 w-full">
                    <H2 text="User Info" />

                    <p>User Id: </p>
                    <p>Full Name: {userInfo && userInfo.name}</p>
                    <p>Account Balance: N{userInfo && userInfo.accountBalance}</p>
                </div>
                <div className="bg-green-300 p-5 w-full">
                    <H2 text="Recent Transactions" />

                    <ul>
                        <li>Transaction 1</li>
                        <li>Transaction 2</li>
                        <li>Transaction 3</li>
                    </ul>
                </div>
            </div>

            {/* Loan/Transaction Section */}
            <div className="flex justify-between gap-10">
                <div className="bg-green-300 p-5 w-full">
                    <H2 text="Loan Management" />
                    <div className="mb-7">
                        <H3 text="Active Loan" />
                        <p>Amount: N</p>
                        <p>Lender: </p>
                        <p>Due Date</p>
                    </div>

                    <div className="mb-7">
                        <H3 text="Loan History" />
                        <ul>
                            <li>Loan 1</li>
                            <li>Loan 2</li>
                            <li>Loan 3</li>
                        </ul>
                    </div>

                    <div className="mb-7">
                        <H3 text="Request New Loan" />
                        <form action="">
                            <div className="mb-4">
                                <label htmlFor="amount">Amount: </label>
                                <input type="number" name="amount" id="amount" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="due-date">Due Date: </label>
                                <input type="date" name="due-date" id="due-date" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="purpose">Purpose: </label>
                                <input type="text" name="purpose" id="purpose" />
                            </div>

                            <button className="bg-blue-500 px-4 py-1 text-white">
                                Request Loan
                            </button>
                        </form>
                    </div>
                </div>
                <div className="bg-green-300 p-5 w-full">
                    <H2 text="Transaction History" />
                </div>
            </div>
        </div>
    )
}