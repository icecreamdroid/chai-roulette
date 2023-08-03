import React, { useState, useRef, useEffect } from 'react'
import styles from '../styles/Roulette.module.css';
import Spinner from './Spinner';
import Gifs from './Gifs';
export const Roulette = () => {
  const [memberList, setMember] = useState([]);
  const [winner, setWinner] = useState();
  const [on , setSpinner] = useState(1);
  const [displayGif,setDisplay] = useState(0);
  const [errorMsg,setErrorMsg]=useState('');

  const addMember = (e) => {
    e.preventDefault();
    if(e.target[0].value){
      setErrorMsg('');
      setMember(memberList => [...memberList, e.target[0].value]);
    }
    else setErrorMsg('Naam to likh de')
  }
  useEffect(() => {
    inputRef.current.value = "";
  })
  const inputRef = useRef(null)
  const handleClick = (e) => {
    if(memberList.length>1){
      onReveal();
      const randomElement = memberList[Math.floor(Math.random() * memberList.length)];
      setWinner(randomElement);
      setErrorMsg('')
      setSpinner(on+1);
    }
    else{
      setErrorMsg(`${memberList.length} logon ka roulette nahi hota hai`)
    }
  }
  const setBackground = () => {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return { background: '#' + randomColor }
  }
  const onReveal = ()=>{
    setDisplay(displayGif+1);
  }
  return (
    <div className={styles.background} style={setBackground()}>
      <h1 className={styles.title}>Welcome to Chai Roulette People</h1>
      <h3 className={styles.title}>Please enter member names</h3>
      { errorMsg && <h3 className={styles.errorMsg}>
          {errorMsg}
        </h3>}
      <form className={styles.center} onSubmit={addMember}>
        <input type="text" ref={inputRef} />
        <button type="submit">Add member</button>
      </form>
      {memberList.length > 0 && <div className={[styles.center, styles.memberInfo].join(' ')}>Currently added members are <ol> {memberList.map(el => { return <li key={el}>{el}</li> })} </ol> </div>}
      <div className={`${styles.center} ${styles.payer}`}><button onClick={handleClick}>Select Payer</button></div>
      {/* {winner && <h1 className={styles.title}>Congrats {winner}, pay up now</h1>} */}

      {winner && <Spinner onReveal={onReveal} on={on} names={memberList} winner={winner}></Spinner>}
      {displayGif>0 && <Gifs displayKey={displayGif}></Gifs>}
    </div>
  )
}



