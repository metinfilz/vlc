import './index.css'
import {useSelector} from "react-redux";

export default function Dialog(){
    const {visible} = useSelector(state => state.dialog)

    if(visible) {
        return(
            <>
                <div className="dialog">
                    <table>
                        <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        </tbody>
                    </table>
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
