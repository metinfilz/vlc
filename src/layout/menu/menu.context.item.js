import {iconList} from "../../resource/list.icon";

export default function LayoutMenuContextItem(props) {
    const {active=false,
        item=undefined,
        id=undefined,
        onMouseOver = (e,i) => {},
        onClick = (action) => {},
    } = props

    if(item.name) {
        if(item.child) {
            return(
                <li onMouseOver={(e) => onMouseOver(e, id)} className={'menu-context-item classic' + (item.disable ? ' disable': '') + (active ? ' active': '')}>
                    <img  className="icon" src={item.icon ? item.icon : ''} alt=""/>
                    <div className="text">{item.name}</div>
                    <div className="short">arrow</div>
                </li>
            )
        }
        return(
            <li onClick={() => item.disable ? null : onClick(item.action)} className={'menu-context-item classic' + (item.disable ? ' disable': '') + (active ? ' active': '')}>
                <img className="icon" src={item.icon ? item.icon : ''} alt=""/>
                <div className="text">{item.name}</div>
                <div className="short">{item.shortcut}</div>
            </li>
        )
    } else {
        return(<li className="menu-context-item seperator" />)
    }
}
