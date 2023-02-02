import React, { useState } from 'react'
import styles from '../styles/Roulette.module.css';
export const Roulette = () => {
  const [memberList, setMember] = useState([]);
  const [winner, setWinner] = useState();
  const addMember = (e) => {
    e.preventDefault();
    setMember(memberList => [...memberList, e.target[0].value])
    console.log(memberList);
  }
  const handleClick = (e) => {
    const randomElement = memberList[Math.floor(Math.random() * memberList.length)];
    setWinner(randomElement);
  }
  const setBackground = () => {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return { background: '#' + randomColor }
  }
  return (
    <div style={setBackground()}>
      <h1 className={styles.title}>Welcome to Chai Roulette Boys</h1>
      <h3 className={styles.title}>Please enter member names</h3>
      <form className={styles.center} onSubmit={addMember}>
        <input type="text" />
        <button type="submit">Add member</button>
      </form>
      <div className={styles.center}>Currently added members are {memberList.map(el => { return <div key={el}>{el}</div> })} </div>
      <div className={styles.center}><button onClick={handleClick}>Select Payer</button></div>
      {winner && <h1 className={styles.title}>Congrats {winner}, pay up now</h1>}
    </div>
  )
}



