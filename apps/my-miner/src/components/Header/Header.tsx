/* eslint-disable @next/next/link-passhref */
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '../Button/Button'
import { Input } from '../Input/Input'


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'


library.add(fas);

export const Header = () => {
    return (
        // Header
        <div className="flex fixed bg-gray-50 w-full px-3 md:px-20 py-4 shadow-md z-10 h-20">
            <div className="container flex items-center mx-auto space-x-1 md:space-x-6">
                <div className="cursor-pointer">
                    <Link href="/">
                        <Image src="/logo.png" alt="logo" width={60} height={40} />
                    </Link>
                </div>
                <div className="flex gap-x-2 flex-1 h-full items-center">
                    <Input type={'text'} placeHolder={'Pesquisar wallet'} />
                    <div className="hidden md:flex w-32 h-full">
                        <Button textButton={'Buscar'} />
                    </div>
                    <div className="md:hidden text-black text-4xl px-2 pb-1">
                        <FontAwesomeIcon icon="bars" />
                    </div>
                </div>
                <div className="items-end justify-end text-black font-bold hidden md:flex">
                    <nav>
                        <ul className="flex gap-x-4">
                            <a href="#">
                                <Link href="/wallets">
                                    <li className="hover:text-blue-button">Wallets</li>
                                </Link>
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