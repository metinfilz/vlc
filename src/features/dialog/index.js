import './index.css'
import {useSelector} from "react-redux";
import DialogLayout from "./dialog.layout";

function Test(){
    console.log("contructor")
    return(
        <>a</>
    )
}

export default function Dialog(){
    const {visible} = useSelector(state => state.dialog)

    if(visible) {
        return(
            <>
                <div className="dialog">
                    <DialogLayout>
                        <Test />
                    </DialogLayout>
                </div>
                <div className="proxy" />
            </>
        )
    } else {
        return(
            <></>
        )
    }
}
