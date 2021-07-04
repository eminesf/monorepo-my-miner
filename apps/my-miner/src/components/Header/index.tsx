import { Input } from '../Input'
import { Button } from '../Button'
import { Logo } from '../Logo'

Logo
export const Header = () => {
    return (
        <div className="border border-red-500 flex gap-5 h-15 p-1">
            <Logo />
            <Input />
            <Button />
        </div>
    )
}