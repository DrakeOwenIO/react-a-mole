import mole from '../embedded/mole.png';
import { useEffect } from 'react';

export default function Mole(props) {

    useEffect(() =>{
        let randSeconds = Math.ceil(Math.random() * 1000)
        let timer = setTimeout(() => {
            props.toggle(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return <img alt='Mole inside of a hill' src={mole} onClick={props.handleClick}/>
}