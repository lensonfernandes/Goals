import Board from '@/components/Board'
import Header from '@/components/Header'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      {/* Header */}
        <Header />

      {/* Goals Board */}
      <Board />
      {/* <h1>Goals</h1> */}
    </main>
  )
}
