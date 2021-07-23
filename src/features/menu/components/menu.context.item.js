import {iconList} from "../../../resource/list.icon";

export default function _MenuContextItem({item, index}){
    return(
        item.name ?
            <div className={"context-item" + (item.disable ? ' disable': '')}>
                <div className="context-item-icon">{item.icon ? <img src={iconList[item.icon]} alt=""/> : <></>}</div>
                <div className="context-item-name">{item.name}</div>
                <div className="context-item-shortcut">{item.shortcut}</div>
                <div className="context-item-arrow">{item.child ? <img src={iconList.arrow} alt=""/> : <></>}</div>
            </div>
        : <div className="context-item-seperator"><div/><div/><div/><div/></div>
    )
}
