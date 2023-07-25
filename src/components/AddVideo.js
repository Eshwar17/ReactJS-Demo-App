function AddVideo() {
    function handleClick() {
    }
    return (
        <form>
            <input type="text" placeholder="title"/>
            <input type="text" placeholder="views"/>
            <button onClick={handleClick}>Submit</button>
        </form>
    )
}

export default AddVideo;