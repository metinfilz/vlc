import React from "react";

import LayoutMenu from './menu/menu'
import LayoutPlayer from './player/player'
import LayoutControl from './control/control'
import LayoutStatus from './status/status'
import LayoutDialog from "./dialog/dialog";

export default function Layout(){
    return(
        <div className="layout">
            <LayoutMenu />
            <LayoutPlayer />
            <LayoutControl />
            <LayoutStatus />
            <LayoutDialog />
        </div>
    )
}
