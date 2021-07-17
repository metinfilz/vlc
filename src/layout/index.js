import {LayoutMenu} from "./menu";

import LayoutMenuContextItem from "./menu/menu.context.item";
import {iconList} from "../resource/list.icon";
import {menuList} from "../resource/list.menu";
import LayoutStatus from "./status";
import LayoutControl from "./control/control";
import LayoutPlayer from "./player/player";
import {controlList} from "../resource/list.control";

export default function Layout(){

    return(
        <div className="layout">
            <LayoutMenu list={menuList} action={(val) => alert('action: ' + val)} />
            <LayoutPlayer />
            <LayoutControl list={controlList} />
            <LayoutStatus />
        </div>
    )
}
