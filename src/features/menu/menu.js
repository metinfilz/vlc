import './menu.scss'

import MenuBar from './components/menu.bar'
import MenuContextParent from './components/menu.context.parent'
import MenuContextChild from './components/menu.context.child'
import MenuProxy from './components/menu.proxy'

export default function _menu() {
    return(
        <div className="layout-menu">
            <MenuBar />
            <MenuContextParent />
            <MenuContextChild />
            <MenuProxy />
        </div>
    )
}
