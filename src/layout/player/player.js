import './index.css'
export default function LayoutPlayer(){
    const url = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"

    return(
        <div className="layout-player">
            <video src={url} controls={true}/>
        </div>
    )
}
