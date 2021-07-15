import Image from 'next/image'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);

export const Header = () => {
    return (
        // Header
        <div className="flex fixed bg-gray-50 w-full px-3 md:px-20 py-4 shadow-md">
            <div className="container flex items-center mx-auto space-x-1 md:space-x-6">
                <div>
                    <Image src="/logo.png" alt="logo" width={60} height={40} />
                </div>
                <div className="flex gap-x-2 flex-1 h-full items-center">
                    <input type="text" placeholder="buscar por miner" className="border rounded-lg w-full px-5 h-full" />
                    <div className="hidden md:flex">
                        <button className="border-sm bg-blue-button p-3 rounded-lg w-32 hover:bg-blue-500 hover: transition duration-300">Buscar</button>
                    </div>
                    <div className="md:hidden text-black text-4xl px-2 pb-1">
                        <FontAwesomeIcon icon="bars" />
                    </div>
                </div>
                <div className="items-end justify-end text-black font-bold hidden md:flex">
                    <nav>
                        <ul className="flex gap-x-4">
                            <a href="#">
                                <li className="hover:text-blue-button">Wallets</li>
                            </a>
                            <li>
                                <span className="border-r border-black"></span>
                            </li>
                            <a href="#">
                                <li className="hover:text-blue-button">Login/Logout</li>
                            </a>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}