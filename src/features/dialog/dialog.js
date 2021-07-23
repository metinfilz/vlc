import {useSelector} from "react-redux";
import {useEffect} from "react";

export default function Dialog(){
    const dialog = useSelector(state => state.template.dialog)

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
        <></>
    )
}
