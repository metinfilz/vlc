import {useRef} from "react";
import {useDispatch} from "react-redux";

export default function DialogLayout(props){
    const dispatch = useDispatch()

    let {style = {
        resize: false, move:false, p: '', mx:0, my:0, minWidth: 100, minHeight: 100
    }} = props

    const refGrid = useRef()
    return(
        <div className="dialog-grid-container"
             onMouseMove={(e) => {
                 if(style.resize){
                     const node = refGrid.current
                     const dx = style.mx - e.clientX;
                     const dy = style.my - e.clientY
                     let width, height, top, left
                     switch (style.p){
                         case 'top':
                             style.my = e.clientY;
                             top = (parseInt(getComputedStyle(node, '').top) - dy)
                             node.style.top = top + "px"
                             height = (parseInt(getComputedStyle(node, '').height) + dy)
                             node.style.height = height + "px";
                             break
                         case 'bottom':
                             style.my = e.clientY;
                             height = (parseInt(getComputedStyle(node, '').height) - dy)
                             if(height < style.minWidth) return
                             node.style.height = height + "px";
                             break
                         case 'left':
                             style.mx = e.clientX;
                             left = (parseInt(getComputedStyle(node, '').left) - dx)
                             width = (parseInt(getComputedStyle(node, '').width) + dx)
                             node.style.left = left + "px"
                             node.style.width = width + "px";
                             break
                         case 'right':
                             style.mx = e.clientX
                             width = (parseInt(getComputedStyle(node, '').width) - dx)
                             if(width < style.minWidth) return
                             node.style.width = width + "px";
                             break
                         default:
                             break
                     }
                 } else if(style.move) {
                     const node = refGrid.current
                     const dx = style.mx - e.clientX;
                     const dy = style.my - e.clientY
                     style.mx = e.clientX
                     style.my = e.clientY;
                     var top = (parseInt(getComputedStyle(node, '').top) - dy)
                     var left = (parseInt(getComputedStyle(node, '').left) - dx)
                     node.style.top = top + "px"
                     node.style.left = left + "px"

                 }
             }}
             onMouseUp={(e) => {
                 style.resize = false
                 style.move = false
             }}
             onMouseLeave={(e) => {
                 style.resize = false
                 style.move = false
             }}>
            <div ref={refGrid} className="dialog-grid">
                <div className="grid-item" />
                <div className="grid-item t-border"
                     onMouseDown={(e) =>
                     {style.resize=true; style.p = 'top'; style.mx = e.clientX; style.my = e.clientY}}/>
                <div className="grid-item" />
                <div className="grid-item r-border"
                     onMouseDown={(e) =>
                     {style.resize=true; style.p = 'left'; style.mx = e.clientX; style.my = e.clientY}}/>
                <div className="grid-item grid-content">
                    <div className="dialog-app-bar"  onMouseDown={(e) =>
                    {style.move=true; style.mx = e.clientX; style.my = e.clientY}}>
                        <p>icon</p>
                        <p>title</p>
                        <div></div>
                        <button onClick={() => dispatch({type: 'dialog/hide'})}>X</button>
                    </div>
                    <div className="dialog-content">
                        {props.children}
                    </div>
                </div>
                <div className="grid-item r-border"
                     onMouseDown={(e) =>
                     {style.resize=true; style.p = 'right'; style.mx = e.clientX; style.my = e.clientY}}/>
                <div className="grid-item" />
                <div className="grid-item t-border"
                     onMouseDown={(e) =>
                     {style.resize=true; style.p = 'bottom'; style.mx = e.clientX; style.my = e.clientY}}/>
                <div className="grid-item"/>

            </div>
        </div>
    )
}
