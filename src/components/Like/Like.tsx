import { useState } from "react"
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"

interface LikeProps{
    like: () => void;
    unlike: () => void;
}
function Like({like, unlike}: LikeProps){
    const [state, setState] = useState(false);

    return <div>
        {state && <AiFillHeart color='red' onClick={() => {setState(false); unlike()}} /> || <AiOutlineHeart onClick={ ()=> {setState(true); like()}} /> }
    </div>
    

}

export default Like;