
import { useEffect, useState } from "react"
import Link from "next/link"
import styles from "../styles/useEffectTwo.module.css"

export default function UseEffectTwo () {

    const [number, setNumber] = useState(0);

useEffect(() => {
  console.log(number);
  setNumber(number + 50)

}, [])
    return (
        <>
        <main className={styles.main}>
        <Link href="/">Home</Link>
        <div>
UseEffectTwo
        </div>
        <div>
{number}
        </div>
        </main>
        </>
    )
}