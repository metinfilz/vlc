import {useDispatch, useSelector} from "react-redux";
import {Selectors} from '../../../store'

export default function _MenuProxy() {
    const visible = useSelector(Selectors.menu.visible)
    const dispatch = useDispatch()
    return(
        visible ? <div onClick={() => dispatch({type: 'menu/hideC1'})} className="layout-menu-proxy" /> : <></>
    )
}
