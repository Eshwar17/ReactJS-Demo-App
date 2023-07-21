import './PlayButton.css'
function PlayButton({children}) {
    return (
        <button onClick={() =>console.log("Play button clicked")}>{children}</button>
    )
}
export default PlayButton;