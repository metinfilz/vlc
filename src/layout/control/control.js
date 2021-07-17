import './index.css'
import {useState} from "react";

function ControlToggleButton(props){
    const {item} = props
    const [checked, setChecked] = useState()
    return(
        <div className="control-toggle-button" onClick={() => setChecked(i => !i)}>
            <img src={checked ? item.checked_icon: item.unchecked_icon } alt="" />
        </div>
    )
}

function ControlButton(props) {
    const {item} = props
    return(
        <div className="control-button">
            <img src={item.icon} alt="" />
        </div>
    )
}

function ControlItem (props){
    const {item} = props
    switch (item.type) {
        case 'control-button':
            return <ControlButton item={item} />

        case 'control-toggle-button':
            return <ControlToggleButton item={item} />
    }
}

function ControlList(props){
    const {list} = props
    const items = list.map((item, i) => <ControlItem key={i} item={item} />)
    return(
        <>{items}</>
    )
}

export default function LayoutControl(props) {
    const {list} = props
    return(
        <div className="layout-control">
            <div className="layout-control-time-bar">
                <ControlList list={list[0]} />
            </div>
            <div className="layout-control-advanced-bar">
                <ControlList list={list[1]} />
            </div>
            <div className="layout-control-simple-bar">
                <ControlList list={list[2]} />
            </div>
        </div>
    )
}
