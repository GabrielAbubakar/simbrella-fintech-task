"use client"
import { useEffect, useState } from "react"
import axiosInstance from "../utils/axiosInstance"
import { IUserInfo } from "../utils/interface"
import { faUser, faBars, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { AnimatePresence, motion } from "motion/react"
import { SideBarLink } from "."

export default function Navbar() {
    const [userInfo, setUserInfo] = useState<IUserInfo>()
    const [navOpen, setNavOpen] = useState<boolean>(false)

    useEffect(() => {
        if (navOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [navOpen])

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

            <div className="items-center gap-3 cursor-pointer hidden md:flex">
                <p>{userInfo?.name}</p>
                <FontAwesomeIcon icon={faUser} size="xl" color="gray" />
            </div>

            <div
                onClick={() => setNavOpen(!navOpen)}
                className="block md:hidden z-20">
                {
                    !navOpen ? (
                        <FontAwesomeIcon icon={faBars} size="xl" color="gray" />
                    ) : (
                        <FontAwesomeIcon icon={faXmark} size="xl" color="white" />
                    )
                }
            </div>

            <AnimatePresence>
                {
                    navOpen && (
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            transition={{ duration: .5 }}
                            exit={{ x: '100%' }}
                            className="fixed top-0 left-0 w-full h-screen bg-[#274867] px-7 pt-6 z-10">

                            <a href="#" onClick={() => setNavOpen(!navOpen)} className="font-bold uppercase z-20 text-white">Simbrella</a>


                            <ul className="mt-5 text-white">
                                <SideBarLink closeNav={() => setNavOpen(!navOpen)} text="🏠 Dashboard" />
                                <SideBarLink closeNav={() => setNavOpen(!navOpen)} text="💳 Wallet" />
                                <SideBarLink closeNav={() => setNavOpen(!navOpen)} text="📬 Messages" />
                                <SideBarLink closeNav={() => setNavOpen(!navOpen)} text="🏦 Loans" />
                                <SideBarLink closeNav={() => setNavOpen(!navOpen)} text="💱 Transactions" />
                                <SideBarLink closeNav={() => setNavOpen(!navOpen)} text="👤 Profile" />
                            </ul>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </nav >
    )
}