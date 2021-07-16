import {useEffect, useRef, useState} from "react";
import {menuList} from "../../resource/list.menu";
import LayoutMenuContextItem from "./menu.context.item";



export default function LayoutMenuContext(props){
    const {action, visible, index, style, list} = props
    const contextOneStyle = {left: style.left[index]+'px', top: style.top+'px'}

    const contextOne = visible ? list[index].child.map((item,i) => <LayoutMenuContextItem key={i} item={item} onClick={action} />) : <></>

    return(
        <div className='layout-menu-context'>
            {visible ? <ul style={contextOneStyle}>{contextOne}</ul> : <></>}

            {/*<ul style={contextStyle} ref={refContext2}>{list2}</ul>*/}
        </div>
    )


    // const {contextOneindex, contextOneTop, contextOneleft} = props
    // const [context2Tops, setContext2Tops] = useState([])
    // const [index2, setIndex2] = useState(0)
    // const [contextOneStyle, setContextOneStyle] = useState({top: top+'px', left: left[index]})
    // const [contextTwoStyle, setContextTwoStyle] = useState({top: (top + context2Tops[index2])+'px'})
    // const refContext1 = useRef()
    //
    // useEffect(() => {
    //     var list = []
    //     refContext1.current.childNodes.forEach(item => list.push(item.offsetTop))
    //     setContext2Tops(list)
    //     setContextTwoStyle({top: (top+list[index])+'px', left: '0'})
    // }, [refContext1])
    //
    //
    //
    //
    //
    //
    //
    //
    // const refContext2 = useRef()
    // const [open, setOpen] = useState(false)
    //
    // useEffect(() => {
    //     if(refContext1.current){
    //         refContext1.current.style.top = top + 'px'
    //         refContext1.current.style.left = left[index]
    //
    //     }
    // },[open, index])
    //
    // useEffect(() => {
    //     if(refContext2.current){
    //         refContext2.current.style.top = top + 'px'
    //         refContext2.current.style.left = (refContext1.current.offsetLeft + refContext1.current.offsetWidth) + 'px'
    //     }
    // },[open, index])
    //
    //
    //
    //
    //
    //
    // const list1 = menuList[index].child.map((item, i) => {
    //     return <LayoutMenuContextItem key={i}
    //                                   item={item}
    //                                   id={i}
    //                                   onClick={() => console.log('onclick')}
    //                                   onMouseOver={(e,i) => setOpen(true)} />
    // })
    //
    // const list2 = open ? menuList[index].child[7].child.map((item, i) => <LayoutMenuContextItem key={i} item={item} />) : null
    //
    // return(
    //     <div className='layout-menu-context'>
    //         <ul style={contextOneStyle} ref={refContext1}>{list1}</ul>
    //         <ul style={contextTwoStyle} ref={refContext2}>{list2}</ul>
    //     </div>
    // )
}
