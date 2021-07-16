import { Header } from '../components/Header/Header'
import { LoginBox } from '../components/LoginBox/LoginBox'


export default function Home() {
  return (
    <div className="flex flex-column h-screen w-screen">
      <Header />
      <LoginBox />
    </ div>
  )
}
