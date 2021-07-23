import './player.scss'
import {useEffect, useRef} from "react";
export default function _LayoutPlayer(){

    const refDiv = useRef()
    const refVid = useRef()

    function resize(){
        refVid.current.height = refDiv.current.offsetHeight
        refVid.current.width = refDiv.current.offsetWidth
    }

    useEffect(() => {
        resize()
        window.addEventListener('resize', resize)
    }, [refDiv, refVid])
    return(
        <div ref={refDiv} className="layout-player">
            <video ref={refVid} controls src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
        </div>
    )
}
