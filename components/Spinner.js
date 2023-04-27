import React from 'react'
import styles from '../styles/Spinner.module.css';
import { useEffect, useState } from 'react'
import Image from 'next/image';
function Spinner(props) {
    const state = {
        nextRandomColor: Math.floor(Math.random(0) * 16777215).toString(16).slice(0, 3),
    }
    const [keyNumber, setKeyNumber] = useState(1);
    const [colorKey,setColorKey] = useState(1);
    const [delay, reduceDelay] = useState(5000)
    const [rotation,setRotation] = useState(1)
    useEffect(() => {

        const timer = setInterval(() => {
            if (delay >= 0) {
                setKeyNumber(keyNumber + 1);
                reduceDelay(delay - 100)
            }
            if(delay<0){
                setColorKey(colorKey+100);
                setRotation(rotation+10);
            }
        }, 50);
       


        return () => clearInterval(timer);
    })
    useEffect(()=>{
        console.log("useeffect run");
        reduceDelay(5000);
    },[props.on])

    const setBackground = () => {
        var randomColor = Math.floor(Math.random() * 16777215).toString(16);

        return {
            background: 'radial-gradient(#' + randomColor + ','
                + '#' + state.nextRandomColor + keyNumber + ')'
        }
    }
     const setColor = () => {
        var randomColorText = Math.floor(Math.random() * 16777215).toString(16);

        return {
            color: '#' + (randomColorText + colorKey)
        }
    }
    const rotateShit = ()=>{
        
        return {transform:`rotate(${rotation}deg)`}
    }
    return (
        <>
            <div style={setBackground()} className={styles.spinner}>
            {props.winner && props.on && delay<=0 && <div className={styles.winner}> <Image style={rotateShit()} src={require('../svgone.svg')} width="100" height="100" ></Image> </div>}
            {props.winner && props.on && delay<=0 && <div className={styles.winner}> {props.winner}</div>}
            {props.on && props.names && delay>0 && <div  className={`${styles.winner} ${styles.names}`}>Not {props.names[Math.floor(Math.random() * props.names.length)]}  </div>}


            </div>
        </>
    )
}

export default Spinner