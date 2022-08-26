import { useState  } from "react"
import Empty from "./Empty";
import Mole from "./Mole";

const MoleContainer = (props) => {
    const [isShowing, setIsShowing] = useState(false);

    const handleClick = (e) => {
        props.setScore(props.score + 1)
        setIsShowing(false)
    }

    let displayMole = isShowing ? <Mole setScore={props.setScore} toggle={setIsShowing} handleClick={handleClick} /> : <Empty toggle={setIsShowing} /> 

    return (
        <div style={{'display': 'inline-block', 'width': '30vw'}}>
            {displayMole}
        </div>
    )
}

export default MoleContainer
    