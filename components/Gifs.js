import React from 'react'
import { useEffect } from 'react'
import { config, BASE_URL } from '../helpers/axiosConfig'
import { useState } from 'react'
import axios from 'axios'
import styles from '../styles/Gifs.module.css';

function Gifs(props) {
    const [images,setImages] = useState([])
    const getGifs = async () => {
        let data = await axios.get(BASE_URL, config)
        console.log('data from tenor', data);
        setImages(data.data.results)
    }
    useEffect(()=>{
        getGifs();
    },[])
    return (
        <div>
           {images!=null && images[0] && <img className={styles.gif} src={images[0].media_formats.gif.url} alt="" />}
        </div>
    )
}

export default Gifs