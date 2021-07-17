import './index.css'
export default function LayoutStatus(){
    const url = "BigBuckBunny.mp4"
    return(
        <div className="layout-status">
            <div className="layout-status-text">{url}</div>
            <div className="layout-status-speed">1.00x</div>
            <div className="layout-status-speed">00:00/09:56</div>
        </div>
    )
}
