import moleHill from '../embedded/molehill.png';
import { useEffect } from 'react';

export default function Empty(props) {
    useEffect(() =>{
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return <img alt='Mole Hill' src={moleHill} onClick={props.handleClick}/>
}