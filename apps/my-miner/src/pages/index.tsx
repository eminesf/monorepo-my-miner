import { Header } from '../components/Header/Header'
import { LoginBox } from '../components/LoginBox/LoginBox'


export default function Home() {
  return (
    <div className="flex flex-column h-screen w-screen bg-gradient-to-t from-white via-yellow-50 to-indigo-100">
      <Header />
      <LoginBox />
    </ div>
  )
}
