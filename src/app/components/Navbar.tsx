"use client"
import { useEffect, useState } from "react"
import axiosInstance from "../utils/axiosInstance"
import { IUserInfo } from "../utils/interface"
import { faUser, } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Navbar() {
    const [userInfo, setUserInfo] = useState<IUserInfo>()

    useEffect(() => {
        async function getUserInfo() {
            const res = await axiosInstance.get('users/1')

            setUserInfo(res.data)
        }

        getUserInfo()
    }, [])

    return (
        <nav className="px-5 lg:px-10 py-5 bg-transparent z-10 flex justify-between items-center">
            <a href="#" className="font-bold uppercase">Simbrella</a>

            <div className="items-center gap-3 cursor-pointer hidden lg:flex">
                <p>{userInfo?.name}</p>
                <FontAwesomeIcon icon={faUser} size="xl" color="gray" />
            </div>

            <div className="block lg:hidden">
                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 8H13.75M5 12H19M10.25 16L19 16" stroke="#464455" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </nav>
    )
}