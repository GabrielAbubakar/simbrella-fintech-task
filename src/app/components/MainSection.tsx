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
        <div className="bg-slate-200 p-10 flex-1">
            <h1 className="font-bold text-4xl mb-10">
                Welcome, {userInfo?.name.split(' ')[0]}
            </h1>

            {/* Quick Info Section */}
            <div className="flex justify-between gap-5 mb-10">
                <div className="p-5 w-full bg-white">
                    <H2 text="Recent Transactions" />

                    <ul>
                        {
                            userTransactions?.slice().sort((a, b) => new Date(b.date) - new Date(a.date))
                                .slice(0, 2).map((item: ITransactionInfo) => (
                                    <li key={item.id}>
                                        {item.transactionType.toUpperCase()} - {item.amount}
                                    </li>
                                ))
                        }
                    </ul>
                </div>

                <div className="p-5 w-full bg-white">
                    <H2 text="User Info" />

                    <p>User ID: {userInfo?.id}</p>
                    <p>Full Name: {userInfo?.name}</p>
                    <p>Account Balance: <span className="font-bold text-3xl text-[#274867]">N{userInfo?.accountBalance.toLocaleString()}</span></p>
                </div>
            </div>

            {/* Loan/Transaction Section */}
            <div className="flex justify-between gap-5">
                <div className=" p-5 w-full bg-white">
                    <H2 text="Loan Management" />
                    <div className="mb-7">
                        <H3 text="Active Loan" />
                        <p>Amount: N{userInfo?.activeLoan.amount.toLocaleString()}</p>
                        <p>Lender: {userInfo?.activeLoan.lenderId}</p>
                        <p>Due Date: {userInfo?.activeLoan.dueDate}</p>
                    </div>

                    <div className="mb-7">
                        <H3 text="Loan History" />
                        <ul>
                            {userLoans?.map((item) => (
                                <li key={item.id}
                                    className="bg-slate-200 mb-6 p-2"
                                >
                                    <p>Amount: {item.amount}</p>
                                    <p>LenderID: {item.lender_id}</p>
                                    <p>Date: {new Date(item.date).toLocaleDateString()}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mb-7 bg-slate-50 px-5 py-3">
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
                <div className="p-10 w-full bg-white">
                    <H2 text="Transaction History" />

                    <table className="table-fixed text-center w-full mt-5">
                        <thead>
                            <tr className="bg-[#eee] ">
                                <th className="px-3 py-1">ID</th>
                                <th className="px-3 py-1">Transaction Type</th>
                                <th className="px-3 py-1">Amount</th>
                                <th className="px-3 py-1">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userTransactions?.map(item => (
                                    <tr key={item.id}>
                                        <td className="px-3 py-1">
                                            {item.id}
                                        </td>
                                        <td className={`px-3 py-1 font-bold ${item.transactionType == 'credit' ? 'text-green-400' : 'text-red-400'}`}>
                                            {item.transactionType}
                                        </td>
                                        <td className="px-3 py-1">
                                            {item.amount.toLocaleString()}
                                        </td>
                                        <td className="px-3 py-1">
                                            {new Date(item.date).toLocaleDateString()}
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}