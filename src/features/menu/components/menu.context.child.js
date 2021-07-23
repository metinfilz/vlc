import {useSelector} from "react-redux";
import {Selectors} from "../../../store";

export default function _MenuContextChild(){
    const list = useSelector(Selectors.menu.childList)
    const item = list.map((item, i) => <li key={i}>test</li>)
    return(
        false ? <div className="menu-context">{item}</div> : <></>
    )
}
