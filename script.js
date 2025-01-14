window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');

    // Hide the loading screen after the page is fully loaded
    setTimeout(function() {
        loadingScreen.style.display = 'none'; // Hide the loading screen
    }, 500);  // The 500ms delay is optional, it just adds a little smoothness
});
