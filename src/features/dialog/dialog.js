import './dialog.scss'

import {useSelector} from "react-redux";
import {useEffect} from "react";
import DialogWindow from "./component/dialog.container";

export default function Dialog(){
    const visible = useSelector(state => state.dialog.visible)
    const dialog = useSelector(state => state.dialog.dialog)

    useEffect(() =>  {
        switch (dialog) {
            case 'open-file':
                var input = document.createElement("input")
                input.type = 'file'
                input.click()
                input.addEventListener('input', (e) => {
                    var tmppath = URL.createObjectURL(e.target.files[0]);
                    console.log(tmppath)
                })
                break
            case 'open-folder':
                break
            case 'open-url':
                break
            default:
                break
        }
    }, [dialog])
    return (
        visible ?
            <DialogWindow>
                <h1>{dialog}</h1>
            </DialogWindow>
        :
            <></>
    )
}
