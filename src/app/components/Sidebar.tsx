import { SideBarLink } from "."


export default function Sidebar() {
    return (
        <div className="hidden md:block bg-[#274867] flex-[.2] min-h-screen p-5">
            <ul className="mt-5 text-white">
                <SideBarLink text="🏠 Dashboard" />
                <SideBarLink text="💳 Wallet" />
                <SideBarLink text="📬 Messages" />
                <SideBarLink text="🏦 Loans" />
                <SideBarLink text="💱 Transactions" />
                <SideBarLink text="👤 Profile" />
            </ul>
        </div>
    )
}