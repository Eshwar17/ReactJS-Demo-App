import './PlayButton.css'
function PlayButton({children}) {
    function handleClick() {
        console.log("Play button clicked");
    }
    return (
        <button onClick={handleClick}>{children}</button>
    )
}
export default PlayButton;