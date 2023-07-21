import './PlayButton.css'
function PlayButton({name}) {
    return (
        <button onClick={() =>console.log("Play button clicked")}>{name}</button>
    )
}
export default PlayButton;