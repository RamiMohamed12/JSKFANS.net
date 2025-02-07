function updateSongTitle() {
        const player = document.getElementById('music-player');
        const songTitle = document.getElementById('current-title');
        
        if (player) {
            try {
                const videoTitle = player.contentWindow.document.title;
                if (videoTitle) {
                    songTitle.textContent = videoTitle.replace(" - YouTube", "");
                }
            } catch (error) {
                console.log("Unable to fetch video title due to cross-origin restrictions.");
            }
        }
    }
    
    setInterval(updateSongTitle, 2000); // Check every 2 seconds
