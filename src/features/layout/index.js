import {useDispatch} from "react-redux";
import {show} from "../../store/dialog/dialog.slice";

export default function Layout(){
    console.log("@Layout#constructor")
    const dispatch = useDispatch()
    return(
        <div onClick={()=> dispatch(show('test'))}>Layout</div>
    )
}
