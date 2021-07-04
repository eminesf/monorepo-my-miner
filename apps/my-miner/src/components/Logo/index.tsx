import logo from '../../assets/logo.png'
import Image from 'next/image'

export const Logo = () => {
    return (
        <div className="h-auto w-12">
            <Image src={logo} alt="logo" className="box-sizing: border-box" />
        </div>
    )
}