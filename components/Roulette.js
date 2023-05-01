import React, { useState, useRef, useEffect } from 'react'
import styles from '../styles/Roulette.module.css';
import Spinner from './Spinner';
import Gifs from './Gifs';
export const Roulette = () => {
  const [memberList, setMember] = useState([]);
  const [winner, setWinner] = useState();
  const [on , setSpinner] = useState(1);
  const [displayGif,setDisplay] = useState(false);

  const addMember = (e) => {
    e.preventDefault();
    setMember(memberList => [...memberList, e.target[0].value])
  }
  useEffect(() => {
    inputRef.current.value = "";
  })
  const inputRef = useRef(null)
  const handleClick = (e) => {
    const randomElement = memberList[Math.floor(Math.random() * memberList.length)];
    setWinner(randomElement);
    setSpinner(on+1);
  }
  const setBackground = () => {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return { background: '#' + randomColor }
  }
  const onReveal = ()=>{
    setDisplay(true);
  }
  return (
    <div className={styles.background} style={setBackground()}>
      <h1 className={styles.title}>Welcome to Chai Roulette Boys</h1>
      <h3 className={styles.title}>Please enter member names</h3>
      <form className={styles.center} onSubmit={addMember}>
        <input type="text" ref={inputRef} />
        <button type="submit">Add member</button>
      </form>
      {memberList.length > 0 && <div className={[styles.center, styles.memberInfo].join(' ')}>Currently added members are <ol> {memberList.map(el => { return <li key={el}>{el}</li> })} </ol> </div>}
      <div className={styles.center}><button onClick={handleClick}>Select Payer</button></div>
      {/* {winner && <h1 className={styles.title}>Congrats {winner}, pay up now</h1>} */}

      {winner && <Spinner onReveal={onReveal} on={on} names={memberList} winner={winner}></Spinner>}
      {displayGif && <Gifs></Gifs>}
    </div>
  )
}



