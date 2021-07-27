import { useState } from 'react';

import { Header } from '../components/Header/Header'
import { Miner } from '../components/Miner/Miner';

interface Miner {
  id: number;
  name: string;
  wallet: string;
  unpaid: number;
  favorite: boolean;
}

export default function Wallets() {
  return (
    <div className="flex h-full w-full bg-gradient-to-t from-white via-yellow-50 to-indigo-50">
      <Header />
      <div className="flex flex-col md:w-1200px mt-20 p-5 h-auto mx-auto">
        <div>
          <Miner />
          <Miner />
          <Miner />
        </div>
      </div>
    </ div>
  )
}

