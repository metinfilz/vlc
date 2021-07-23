import { useSelector } from "react-redux";
import { Selectors } from "../../../store";

import ContextItem from './menu.context.item'

export default function _MenuContextParent(){
    const list = useSelector(Selectors.menu.parentList)
    const index = useSelector(Selectors.menu.parentIndex)
    const visible = useSelector(Selectors.menu.parentVisible)
    const style = useSelector(Selectors.menu.parentStyle)

    const items = index > -1 ? list.map((item, i) =>
        <ContextItem item={item} index={i} key={i}/>
    ) : <></>

    function setStyle(){
        return { top: style.top, left: style.left[index]}
    }

    return(
        (visible) ? <div className="menu-context" style={setStyle()}>{items}</div> : <></>
    )
}
