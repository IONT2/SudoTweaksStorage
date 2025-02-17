function changeYouTubePlaybar() {
    const style = document.createElement('style');
    style.innerHTML = `
    /* Change progress bar color */
    .ytp-progress-bar-container, .ytp-play-progress {
        background: red !important;
    }

    /* Ensure red color without gradient */
    .ytp-play-progress {
        background-image: none !important;
    }
    `;
    document.head.appendChild(style);
}

// Run the function after page loads
if (document.readyState === "complete") {
    changeYouTubePlaybar();
} else {
    window.addEventListener("load", changeYouTubePlaybar);
}
