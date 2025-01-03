import MainSection from "./components/MainSection"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"

export default function Home() {
    return (
        <div className="bg-white">
            {/* Navbar Component */}
            <Navbar />

            <div className="flex">
                {/* Sidebar Component */}
                <Sidebar />

                {/* MainSection Component */}
                <MainSection />
            </div>
        </div>
    )
}