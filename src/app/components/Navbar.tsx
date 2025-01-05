

export default function Navbar() {
    return (
        <nav className="px-10 py-5 bg-transparent z-10 flex justify-between">
            <a href="#" className="font-bold uppercase">Simbrella</a>

            <div className="block lg:hidden">
                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 8H13.75M5 12H19M10.25 16L19 16" stroke="#464455" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </nav>
    )
}