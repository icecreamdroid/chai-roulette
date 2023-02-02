import React,{useState} from 'react'
import styles from '../styles/Roulette.module.css';
export const Roulette = () => {
const [memberList,setMember] = useState([]);
const [winner,setWinner] = useState();
const addMember = (e)=>{
  e.preventDefault();
  setMember(memberList=> [...memberList,e.target[0].value])
  console.log(memberList);
} 
const handleClick = (e)=>{
  const randomElement = memberList[Math.floor(Math.random() * memberList.length)];
setWinner(randomElement);
}
  return (
    <>
      <h1 className={styles.title}>Welcome to Chai Roulette Boys</h1>
      <h3 className={styles.title}>Please enter member names</h3>
      <form onSubmit={addMember}>
        <input type="text" />
        <button type="submit">Add member</button>
      </form>
      <div>Currently added members are {memberList.map(el=>{return <div>{el}</div>})} </div>
      <button onClick={handleClick}>Select Payer</button>
      {winner && <h1>{winner}</h1>}
    </>
  )
}



