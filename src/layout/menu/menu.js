import React from 'react'

import './index.css'
import {useEffect, useRef, useState} from "react";
import LayoutMenuContext from "./menu.context";

export default function LayoutMenu(props){
    const { list, action } = props

    const refMenu = useRef()
    const [contextVisible, setContextVisible] = useState(false)
    const [contextIndex, setContextIndex] = useState()
    const [contextStyle, setContextStyle] = useState({top:'0', left:[0]})

    const menu = list.map((item, i) =>
        <li key={i}
            onClick={() => setContextVisible(i=>!i)}
            onMouseOver={() => setContextIndex(i)}
            className={(contextVisible && contextIndex === i ? 'active': '')}>{item.name}</li>)

    useEffect(()=> {
        if(refMenu.current){
            let left = Array.from(refMenu.current.children)
            left = left.map(i => i.offsetLeft)
            setContextStyle({top: refMenu.current.offsetHeight, left: left})
        }

    },[refMenu])

    return(
        <div className='layout-menu'>
            <ul ref={refMenu}>{menu}</ul>
            <LayoutMenuContext action={(val) =>{setContextVisible(false); action(val);}} visible={contextVisible} index={contextIndex} style={contextStyle} list={list} />
            <div hidden={!contextVisible} onClick={() => setContextVisible(false)} className='layout-menu-proxy' />
        </div>
    )




    // const [contextStyle, setContextStyle] = useState({})
    // const [top, setTop] = useState()
    // const [left, setLeft] = useState()
    //
    // const [open, setOpen] = useState(false)
    // const [index, setIndex] = useState(0)
    // const refMenu = useRef()
    //
    //
    // useEffect(() => {
    //     if(refMenu.current){
    //         setTop(refMenu.current.offsetHeight);
    //         let left = []
    //
    //         refMenu.current.childNodes.forEach(i => left.push(i.offsetLeft + 'px'))
    //
    //         console.log(left)
    //         setLeft(left)
    //
    //
    //     }
    // },[refMenu])
    //
    // function menuOnClick(i){
    //     setOpen(i => !i)
    // }

    //
    // return(
    //     <div className='layout-menu'>
    //         <ul ref={refMenu}>{list}</ul>
    //         {open ? <LayoutMenuContext contextOneTop={top} contextOneLeft={left} contextOneIIndex={index} /> : <></>}
    //         <div hidden={!open} onClick={() => setOpen(false)} className='layout-menu-proxy' />
    //     </div>
    // )
}
