import styles from '../../styles/GetStartedButton.module.css'
import { useEffect, useState } from 'react'
export default function GetStartedButton ({className}) {
    const [style, setStyle] = useState(styles.btn)
    useEffect(() => {
        if(className === 'btnLight') {
            setStyle(styles.btnLight)
        }
    })
    
    return (
        <button type="button" className={style}>Get Started</button>
    )
}