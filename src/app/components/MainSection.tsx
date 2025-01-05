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
    const [displayTransactions, setDisplayTransactions] = useState<ITransactionInfo[]>()
    const [isLoading, setIsLoading] = useState(true)

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
            setDisplayTransactions(transactionRes.data)
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false)
        }
    }

    const applyFilterAndSort = (type: string | null, key: string | null, order: string | null) => {
        const filteredData = type ? userTransactions?.filter((item) => item.transactionType === type) : displayTransactions;

        const sortedData = [...(filteredData || [])].sort((a, b) => {
            if (key === "date") {
                return order === "asc"
                    ? new Date(a[key]).getTime() - new Date(b[key]).getTime()
                    : new Date(b[key]).getTime() - new Date(a[key]).getTime();
            } else if (key === "amount") {
                return order === "asc" ? a[key] - b[key] : b[key] - a[key];
            }
            return 0;
        });
        setDisplayTransactions(sortedData);
    };


    useEffect(() => {
        getDetails()
    }, [])

    return (
        <div className="bg-slate-200 p-5 lg:p-10 flex-1 max-w-full">
            <h1 className="font-bold text-4xl mb-10">
                Welcome, {!isLoading ? userInfo?.name.split(' ')[0] : <span className="h-7 inline-block bg-gray-300 w-52 animate-pulse"></span>}
            </h1>
            {/* <div className="h-2 bg-gray-300 rounded-full w-[30%] animate-pulse"></div> */}


            {/* Quick Info Section */}
            {
                !isLoading ? (
                    <div className="flex flex-col lg:flex-row justify-between gap-5 mb-10">
                        <div className="p-5 w-full bg-white">
                            <H2 text="Recent Transactions" />

                            <ul>
                                {
                                    userTransactions?.slice().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                                        .slice(0, 2).map((item: ITransactionInfo) => (
                                            <li className="list-disc" key={item.id}>
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
                ) : (
                    <div className="flex flex-col lg:flex-row justify-between gap-5 mb-10 max-w-full">
                        <div className="h-36 w-full bg-gray-300 animate-pulse">

                        </div>
                        <div className="h-36 w-full bg-gray-300 animate-pulse">

                        </div>
                    </div>
                )
            }

            {/* Loan/Transaction Section */}
            {
                !isLoading ? (
                    <div className="flex flex-col md:flex-row justify-between gap-14 md:gap-5">
                        <div className=" p-5 w-full bg-white">
                            <H2 text="Loan Management" />
                            <div className="mb-7">
                                <H3 text="Active Loan" />
                                <p>Amount: <span className="font-bold text-xl text-[#274867]">N{userInfo?.activeLoan.amount.toLocaleString()}</span></p>
                                <p>Lender ID: {userInfo?.activeLoan.lenderId}</p>
                                <p>Due Date: {userInfo?.activeLoan.dueDate}</p>
                            </div>

                            <div className="mb-7">
                                <H3 text="Loan History" />
                                <ul>
                                    {userLoans?.map((item) => (
                                        <li key={item.id}
                                            className="bg-slate-200 mb-6 p-2"
                                        >
                                            <p>Amount: {item.amount.toLocaleString()}</p>
                                            <p>Lender ID: {item.lender_id}</p>
                                            <p>Date: {new Date(item.date).toLocaleDateString()}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mb-7 bg-slate-100 px-5 py-3">
                                <H3 text="Request New Loan" />
                                <form action="">
                                    <div className="mb-4">
                                        <label htmlFor="amount">Amount: </label>
                                        <input required type="number" name="amount" id="amount" />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="due-date">Due Date: </label>
                                        <input required type="date" name="due-date" id="due-date" />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="purpose">Purpose: </label>
                                        <input required type="text" name="purpose" id="purpose" />
                                    </div>

                                    <button className="bg-blue-500 px-4 py-1 text-white hover:-translate-y-1 transition-all">
                                        Request Loan
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="p-10 px-5 lg:p-10 w-full bg-white overflow-scroll">
                            <H2 text="Transaction History" />

                            <table className="table-auto text-center max-w-full mt-5">
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
                                        displayTransactions?.map(item => (
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

                            {/* Table Options */}
                            <div className="mt-5 bg-slate-200 inline-block p-4">
                                <p className="font-bold mb-4">Table Options</p>
                                <div>
                                    <label className="font-bold" htmlFor="sort-feature">Sort: </label>
                                    <select
                                        name="sort-feature"
                                        id="sort-feature"
                                        defaultValue='none-selected'
                                        className="outline-none"
                                        onChange={(e) => {
                                            applyFilterAndSort(null, e.target.value.split('-')[0], e.target.value.split('-')[1])
                                            // console.log(e.target.value.split('-')[0], e.target.value.split('-')[1])
                                        }}
                                    >
                                        {/* <option value="none-selected" disabled>--none selected</option> */}
                                        <option value="amount-asc" >Sort by Amount - Ascending</option>
                                        <option value="amount-desc" >Sort by Amount - Descending</option>
                                        <option value="date-asc" >Sort by Date - Ascending</option>
                                        <option value="date-desc" >Sort by Date - Descending</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="font-bold" htmlFor="filter-feature">Filter: </label>
                                    <select
                                        name="filter-feature"
                                        id="filter-feature"
                                        defaultValue='none-selected'
                                        className="outline-none"
                                        onChange={(e) => applyFilterAndSort(e.target.value, null, null)}>
                                        {/* <option value="none-selected" disabled>--none selected</option> */}
                                        <option value="credit">Filter by Type - Credit</option>
                                        <option value="debit">Filter by Type - Debit</option>
                                    </select>
                                    <button
                                        className="block mt-4 bg-gray-600 text-white px-4 py-2"
                                        onClick={() => setDisplayTransactions(userTransactions)}>Clear Filters</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex justify-between gap-5 mb-10">
                        <div className="h-72 w-full bg-gray-300 animate-pulse">

                        </div>
                        <div className="h-72 w-full bg-gray-300 animate-pulse">

                        </div>
                    </div>
                )
            }
        </div>
    )
}