let punchCount = 0;
const punchIcon = document.getElementById('punch');
const boxer = document.getElementById('boxer');
const interactiveArea = document.getElementById('interactive-area');

if (punchIcon && boxer && interactiveArea) {
    interactiveArea.addEventListener('click', function (event) {
        punchCount++;
        // Move the punch icon to the cursor position
        const x = event.clientX;
        const y = event.clientY;
        punchIcon.style.left = `${x - 25}px`; // Centering the punch icon
        punchIcon.style.top = `${y - 25}px`; // Centering the punch icon

        // Play the punch sound
        const punchSound = new Audio('punch-sound.mp3'); // Ensure this path matches your sound file's location
        punchSound.load(); // Load the sound
        punchSound.currentTime = 0; // Reset the playback position
        punchSound.play().catch(error => console.error('Error playing sound:', error)); // Play the punch sound and catch errors

        // Add the 'visible' class to trigger the animation
        punchIcon.classList.add('visible');

        // Update the boxer according to the punch count
        updateBoxer();
        
        // Hide the punch icon after a brief moment
        setTimeout(() => {
            punchIcon.classList.remove('visible'); // Remove the class to trigger fade out
        }, 300); // Show for 300 milliseconds (adjust as needed)
    });

    document.addEventListener('keydown', function(event) {
        if (event.code === 'Space') {
            punchCount++;
            punchIcon.classList.add('visible'); // Show the punch icon

            // Play the punch sound
            const punchSound = new Audio('punch-sound.mp3'); // Ensure this path matches your sound file's location
            punchSound.load(); // Load the sound
            punchSound.currentTime = 0; // Reset the playback position
            punchSound.play().catch(error => console.error('Error playing sound:', error)); // Play the punch sound and catch errors

            setTimeout(() => {
                punchIcon.classList.remove('visible'); // Hide the punch icon after a brief moment
            }, 300); // Adjust the duration as needed
            updateBoxer();
        }
    });

    function updateBoxer() {
        // Change the boxer's image based on punch count
        if (punchCount === 1) {
            boxer.src = 'boxer-bruise1.png'; // Image after 1 punch
        } else if (punchCount === 2) {
            boxer.src = 'boxer-bruise2.png'; // Image after 2 punches
        } else if (punchCount === 3) {
            boxer.src = 'boxer-bruise3.png'; // Image after 3 punches
        } else if (punchCount >= 4) {
            boxer.src = 'boxer-normal.png'; // Reset to normal after 4 punches
            punchCount = 0; // Reset punch count
        }
    }
} else {
    console.error('Required elements not found');
}