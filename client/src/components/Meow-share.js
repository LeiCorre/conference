function MeowShare () {
    function colorChange (e) {
        e.currentTarget.style.color = "rgb(10, 103, 190)"
        e.currentTarget.querySelector('svg').style.backgroundColor = "rgba(105, 192, 241, 0.200)";
        e.currentTarget.querySelector('.tooltip').style.display = "inline-block"
    }

    function colorChangeBack (e) {
        e.currentTarget.style.color = "black"
        e.currentTarget.querySelector('svg').style.backgroundColor = "transparent";
        e.currentTarget.querySelector('.tooltip').style.display = "none"
    }
    return (
        <span className='newsfeed-post-icon-box meowICO' id='newfeed-post-share' onMouseOver={colorChange} onMouseOut={colorChangeBack}>
            <span className='tooltip'>
                Share
            </span>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-up-from-bracket" class="newsfeed-post-icons newsfeed-post-icon-123 share" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M384 352v64c0 17.67-14.33 32-32 32H96c-17.67 0-32-14.33-32-32v-64c0-17.67-14.33-32-32-32s-32 14.33-32 32v64c0 53.02 42.98 96 96 96h256c53.02 0 96-42.98 96-96v-64c0-17.67-14.33-32-32-32S384 334.3 384 352zM201.4 9.375l-128 128c-12.51 12.51-12.49 32.76 0 45.25c12.5 12.5 32.75 12.5 45.25 0L192 109.3V320c0 17.69 14.31 32 32 32s32-14.31 32-32V109.3l73.38 73.38c12.5 12.5 32.75 12.5 45.25 0s12.5-32.75 0-45.25l-128-128C234.1-3.125 213.9-3.125 201.4 9.375z"></path></svg>
        </span>
    )
}

export default MeowShare