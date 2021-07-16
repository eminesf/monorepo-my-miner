import Image from 'next/image'

import { Button } from '../Button/Button'
import { Input } from '../Input/Input'

export const LoginBox = () => {
    return (
        <div className=" flex container mx-auto justify-center items-center">
            <div className="flex flex-wrap h-80 w-72 md:w-96 md:h-450px bg-gray-50 justify-center items-center rounded-md shadow-md border">
                <div className="flex flex-col gap-1 md:w-72 w-60 md:h-80">
                    <div className="flex justify-center">
                        <Image src="/logo.png" alt="logo" width={120} height={80} />
                    </div>
                    <div className=" flex flex-col w-full gap-y-1 mt-2 md:mt-10">
                        <Input type={'text'} placeHolder={'Digite seu usuário'}/>
                        <Input type={'password'} placeHolder={'Digite sua senha'} />
                    </div>
                    <div className="flex flex-col text-center mt-1">
                        <Button textButton={'Login'} />
                        <a href="#" className="text-sm mt-2 hover:underline">Esqueci minha senha</a>
                    </div>
                </div>
            </div>
        </ div>

    )
}