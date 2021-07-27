import Image from 'next/image'

export const Miner = () => {
  return (
    <div className="flex flex-col md:flex-row bg-eth-bg md:bg-center md:h-40 h-auto w-full rounded-lg mt-5 font-medium shadow-2xl">
      <div className="flex gap-x-3 flex-1 m-5">
        <div className="bg-white rounded-full flex h-20 w-20 shadow-2xl">
          <Image src="/eth-logo.svg" alt="logo eth" width={80} height={80} />
        </div>
        <div className="text-white space-y-1 space-x-12 md:space-x-0 justify-center flex md:flex-col">
          <div className="">
            <span className="bg-purple-800 py-1 px-2 rounded-md">anonymous</span>
            <h1 className="text-3xl">098x*******c902</h1>
            <p className="text-xs">ETH</p>
          </div>
          <div className="">
            <button className="bg-orange-primary hover:bg-orange-secondary transition duration-300 px-7 py-1 rounded-2xl shadow-2xl">Follow</button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center text-black md:text-white md:w-64 justify-center md:space-y-1 p-2 bg-white md:bg-opacity-0 rounded-b-lg">
        <p className="text-xs">Unpaid balance</p>
        <h1 className="text-2xl">0.00017</h1>
        <p>= $0.46</p>
      </div>
    </div>
  )
}