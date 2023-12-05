import Image from 'next/image'
import { Inter } from 'next/font/google'
import * as THREE from 'three'
import { useEffect } from 'react'
import GeoOcean from '../components/GeoOcean'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  // console.log(THREE)
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div style={{ position: 'relative' }}>
        <GeoOcean />
        <h1 style={{ position: 'absolute', top: 16, left: 32 }}>
          <Link href="/chaseface">Hi!!!!!</Link>
        </h1>

      </div>
    </main>
  )
}