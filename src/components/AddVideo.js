import './AddVideo.css'
function AddVideo() {
    function handleClick() {
    }
    function handleChange() {
        
    }
    return (
        <form>
            <input type="text" onChange={handleChange} placeholder="title"/>
            <input type="text" onChange={handleChange} placeholder="views"/>
            <button onClick={handleClick}>Submit</button>
        </form>
    )
}

export default AddVideo;