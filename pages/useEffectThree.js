import { useEffect, useState} from "react"
import Link from "next/link"
import styles from "../styles/useEffectThree.module.css"
export default function UseEffectThree () {

    const [number, setNumber] = useState(0);
    const [value, setValue] = useState(-10);

useEffect(() => {

  setValue(value + 10)

}, [number])
    return (
        <>
        <main className={styles.main}>
        <Link href="/">Home</Link>
        <div>
<button className={styles.button} onClick={() => setNumber(number + 1)}>Click Me</button>
        </div>
        <div>
UseEffectThree
        </div>
        <div>
{value}
        </div>
        </main>
        </>
    )
}