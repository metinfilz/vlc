import {LayoutMenu} from "./menu";

import LayoutMenuContextItem from "./menu/menu.context.item";
import {iconList} from "../resource/list.icon";
import {menuList} from "../resource/list.menu";

export default function Layout(){

    return(
        <div className="layout">
            <LayoutMenu list={menuList} action={(val) => alert('action: ' + val)} />
            <div className='preview' />
        </div>
    )
}
