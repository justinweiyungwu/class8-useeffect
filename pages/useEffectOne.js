import Link from "next/link"
import { useEffect, useState } from "react"
import styles from "../styles/useEffectOne.module.css"

export default function UseEffectOne() {

    const [number, setNumber] = useState(0);

useEffect(() => {
  console.log(number);
  setNumber(number + 1)

})

    return (
        <>
              
               <main className={styles.main}>
               <Link href="/">Home</Link>
            <div>
       useEffectOne
            </div>
            <div className={styles.counter}>
{number}
            </div>
            </main>
        </>

    )
}
