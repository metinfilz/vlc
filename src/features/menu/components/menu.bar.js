import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef} from "react";

export default function _MenuBar() {
    const list = useSelector(state => state.menu.list)
    const c1Index = useSelector(state => state.menu.c1Index)
    const c1Visible = useSelector(state => state.menu.c1Visible)

    const dispatch = useDispatch()

    const refMenu = useRef()

    const items = list.map((item, i) =>
        <li key={i}
            className={c1Index ===i ? 'menu-item active': 'menu-item'}
            onClick={() => {
                if(c1Visible) {
                    dispatch({type: 'menu/hideC1'})
                } else {
                    dispatch({type: 'menu/showC1', payload: i})
                }
            }}
            onMouseOver={() => {
                if(c1Visible) dispatch({type: 'menu/showC1', payload: i})
            }}
        >{item}</li>)

    useEffect(() => {
        if(refMenu.current){
            let left = []
            let top = refMenu.current.offsetHeight
            refMenu.current.childNodes.forEach(i => left.push(i.offsetLeft))
            dispatch({type: 'menu/setC1Style', payload:{left: left, top: top}})
        }
    }, [refMenu, dispatch])

    return(
        <ul ref={refMenu}>{items}</ul>
    )
}
