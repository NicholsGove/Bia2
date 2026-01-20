// ============================================
// CONFIGURATION - EASY TO CUSTOMIZE
// ============================================

// Poem/Dialogue text - Edit these lines to customize your message
const poemLines = [
    "In a world full of chaos, you're my peace...",
    "Every moment with you feels like magic...",
    "Your smile lights up my darkest days...",
    "I've fallen for you, deeper than I ever thought possible...",
    "You make my heart skip a beat every single time...",
    "Life with you is an adventure I never want to end...",
    "You're not just someone I love, you're my best friend...",
    "Every day I wake up grateful that you exist...",
    "I want to be the reason you smile today...",
    "And I promise to love you more with each passing day..."
];

// Character expressions for each line
const characterExpressions = ['happy', 'shy', 'excited', 'nervous', 'happy', 'excited', 'shy', 'happy', 'excited', 'happy'];

// 20 unique NO button messages - Mix of romantic, funny, cute, and dramatic
const noMessages = [
    "Are you sure? Think about it... 💭",
    "I'll make you the happiest person alive! 🌟",
    "My heart is breaking a little... 💔",
    "Give love a chance! 💕",
    "I promise to always make you laugh! 😄",
    "You're making me nervous now... 😰",
    "I'll cook you dinner every night! 🍳",
    "I'll watch your favorite movies with you! 🎬",
    "I'll be your personal cheerleader! 📣",
    "Think of all the adventures we'll have! 🌍",
    "I'll bring you coffee every morning! ☕",
    "I'll listen to all your stories! 👂",
    "I'll hold your hand through everything! 🤝",
    "I'll be your biggest supporter! 💪",
    "I'll make you feel like a princess/prince! 👑",
    "I'll never stop trying to make you smile! 😊",
    "I'll be your safe space! 🏠",
    "I'll love you unconditionally! ❤️",
    "I'll grow old with you! 👴👵",
    "Please... just one chance? 🥺"
];

// Boot screen variants - 5 different loading sequences
const bootVariants = [
    {
        name: "Retro System",
        loadingTexts: [
            "Initializing feelings...",
            "Loading courage...",
            "Compiling love...",
            "Preparing heart...",
            "Almost ready..."
        ],
        color: "#00ff00"
    },
    {
        name: "Pixel Adventure",
        loadingTexts: [
            "Loading world map...",
            "Spawning characters...",
            "Setting the mood...",
            "Preparing dialogue...",
            "Ready for adventure!"
        ],
        color: "#ff6b6b"
    },
    {
        name: "Love Protocol",
        loadingTexts: [
            "Establishing connection...",
            "Synchronizing hearts...",
            "Downloading emotions...",
            "Installing happiness...",
            "Love protocol complete!"
        ],
        color: "#e91e63"
    },
    {
        name: "Dream Sequence",
        loadingTexts: [
            "Entering dream world...",
            "Gathering starlight...",
            "Weaving memories...",
            "Painting sunsets...",
            "Dream is ready..."
        ],
        color: "#9c27b0"
    },
    {
        name: "Destiny Loader",
        loadingTexts: [
            "Calculating destiny...",
            "Aligning stars...",
            "Preparing fate...",
            "Writing our story...",
            "Destiny awaits!"
        ],
        color: "#ff9800"
    }
];

// ============================================
// GLOBAL VARIABLES
// ============================================
let currentScreen = 'boot-screen';
let noMessageIndex = 0;
let usedNoMessages = [];
let animationFrameId = null;
let soundEnabled = false;
let mouseX = 0;
let mouseY = 0;
let dialogueLineIndex = 0;

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initializeBackground();
    startBootScreen();
    setupEventListeners();
});

// ============================================
// BOOT SCREEN LOGIC
// ============================================
function startBootScreen() {
    const bootScreen = document.getElementById('boot-screen');
    const bootText = document.getElementById('boot-text');
    const progressBar = document.getElementById('progress-bar');
    const bootStatus = document.getElementById('boot-status');
    
    // Randomly select a boot variant
    const variant = bootVariants[Math.floor(Math.random() * bootVariants.length)];
    
    // Set the color theme
    bootText.style.color = variant.color;
    bootStatus.style.color = variant.color;
    progressBar.style.background = `linear-gradient(90deg, ${variant.color}, ${adjustColor(variant.color, -20)})`;
    progressBar.style.boxShadow = `0 0 10px ${variant.color}`;
    
    let textIndex = 0;
    let progress = 0;
    
    // Typewriter effect for loading text
    function typeLoadingText() {
        if (textIndex < variant.loadingTexts.length) {
            const text = variant.loadingTexts[textIndex];
            let charIndex = 0;
            
            function typeChar() {
                if (charIndex < text.length) {
                    bootText.textContent += text.charAt(charIndex);
                    charIndex++;
                    setTimeout(typeChar, 50);
                } else {
                    // Update progress bar
                    progress = ((textIndex + 1) / variant.loadingTexts.length) * 100;
                    progressBar.style.width = progress + '%';
                    
                    // Show status
                    bootStatus.textContent = `${Math.round(progress)}% Complete`;
                    
                    textIndex++;
                    setTimeout(typeLoadingText, 800);
                }
            }
            
            typeChar();
        } else {
            // Boot screen complete, transition to next screen
            setTimeout(() => {
                transitionToScreen('character-scene');
                startDialogue();
            }, 1000);
        }
    }
    
    typeLoadingText();
}

// ============================================
// DIALOGUE SYSTEM
// ============================================
function startDialogue() {
    const dialogueText = document.getElementById('dialogue-text');
    let lineIndex = 0;
    dialogueLineIndex = 0;
    
    // Show love meter
    updateLoveMeter(0);
    
    function typeLine() {
        if (lineIndex < poemLines.length) {
            const line = poemLines[lineIndex];
            let charIndex = 0;
            dialogueText.textContent = '';
            
            // Update character expression
            updateCharacterExpression(characterExpressions[lineIndex]);
            
            // Update progress
            const progress = ((lineIndex) / poemLines.length) * 100;
            updateProgressIndicator(progress);
            updateLoveMeter(progress);
            
            function typeChar() {
                if (charIndex < line.length) {
                    dialogueText.textContent += line.charAt(charIndex);
                    charIndex++;
                    
                    // Play typing sound
                    if (soundEnabled && charIndex % 3 === 0) {
                        playSound('typing');
                    }
                    
                    setTimeout(typeChar, 50);
                } else {
                    lineIndex++;
                    dialogueLineIndex++;
                    setTimeout(typeLine, 2000);
                }
            }
            
            typeChar();
        } else {
            // All lines complete
            updateProgressIndicator(100);
            updateLoveMeter(100);
            
            // Transition to question page
            setTimeout(() => {
                transitionToScreen('question-page');
            }, 2000);
        }
    }
    
    typeLine();
}

// ============================================
// QUESTION PAGE LOGIC
// ============================================
function setupEventListeners() {
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    
    yesBtn.addEventListener('click', handleYesClick);
    noBtn.addEventListener('click', handleNoClick);
    
    // Setup new features
    setupSoundToggle();
    setupCharacterInteractions();
    setupClickToSpawnHearts();
    setupKeyboardControls();
    setupButtonParticles();
    setupCharacterFollowMouse();
}

function handleYesClick() {
    transitionToScreen('celebration-page');
    startCelebration();
}

function handleNoClick() {
    const noMessage = document.getElementById('no-message');
    const noBtn = document.getElementById('no-btn');
    
    // Get a unique message
    let message;
    do {
        message = noMessages[Math.floor(Math.random() * noMessages.length)];
    } while (usedNoMessages.includes(message) && usedNoMessages.length < noMessages.length);
    
    usedNoMessages.push(message);
    
    // Reset if all messages used
    if (usedNoMessages.length >= noMessages.length) {
        usedNoMessages = [];
    }
    
    // Display message
    noMessage.textContent = message;
    noMessage.style.animation = 'none';
    noMessage.offsetHeight; // Trigger reflow
    noMessage.style.animation = 'fadeIn 0.5s ease';
    
    // Add shake effect to button after 5 clicks
    if (usedNoMessages.length >= 5) {
        noBtn.classList.add('shake');
        setTimeout(() => {
            noBtn.classList.remove('shake');
        }, 500);
    }
}

// ============================================
// CELEBRATION LOGIC
// ============================================
function startCelebration() {
    // Play celebration sound
    if (soundEnabled) {
        playSound('celebration');
    }
    
    // Trigger screen shake
    triggerScreenShake();
    
    // Intensify fireworks
    intensifyFireworks();
    
    // Create enhanced confetti
    createEnhancedConfetti();
    
    // Explode hearts
    explodeHearts();
}

function intensifyFireworks() {
    const fireworksContainer = document.getElementById('fireworks-container');
    
    // Add more fireworks
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            createFirework(fireworksContainer, true);
        }, i * 200);
    }
}

function createConfetti() {
    const confettiContainer = document.getElementById('confetti-container');
    const colors = ['#ff6b6b', '#e91e63', '#9c27b0', '#ff9800', '#4caf50', '#2196f3'];
    
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            confetti.style.animationDelay = Math.random() * 2 + 's';
            confettiContainer.appendChild(confetti);
            
            // Remove confetti after animation
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }, i * 50);
    }
}

function explodeHearts() {
    const heartsContainer = document.getElementById('hearts-container');
    
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.textContent = '💖';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = Math.random() * 100 + '%';
            heart.style.fontSize = (Math.random() * 30 + 20) + 'px';
            heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
            heartsContainer.appendChild(heart);
        }, i * 100);
    }
}

// ============================================
// BACKGROUND ANIMATIONS
// ============================================
function initializeBackground() {
    createStars();
    createHearts();
    createFireworks();
    createBalloons();
    
    // Add new background elements
    createShootingStars();
    createPetals();
    createParticles();
    createLightRays();
    
    // Start animation loop
    animateBackground();
}

function createStars() {
    const starsContainer = document.getElementById('stars-container');
    
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.width = (Math.random() * 3 + 1) + 'px';
        star.style.height = star.style.width;
        starsContainer.appendChild(star);
    }
}

function createHearts() {
    const heartsContainer = document.getElementById('hearts-container');
    const heartEmojis = ['💕', '💖', '💗', '💓', '💝'];
    
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 8 + 's';
        heart.style.animationDuration = (Math.random() * 4 + 6) + 's';
        heartsContainer.appendChild(heart);
    }
}

function createFireworks(intense = false) {
    const fireworksContainer = document.getElementById('fireworks-container');
    const count = intense ? 50 : 20;
    
    for (let i = 0; i < count; i++) {
        createFirework(fireworksContainer, intense);
    }
}

function createFirework(container, intense = false) {
    const firework = document.createElement('div');
    firework.className = 'firework';
    firework.style.left = Math.random() * 100 + '%';
    firework.style.top = Math.random() * 100 + '%';
    
    const colors = ['#ff6b6b', '#e91e63', '#9c27b0', '#ff9800', '#4caf50', '#2196f3', '#ffeb3b'];
    firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    firework.style.boxShadow = `0 0 ${intense ? 20 : 10}px ${firework.style.backgroundColor}`;
    
    firework.style.animationDelay = Math.random() * 4 + 's';
    firework.style.animationDuration = (Math.random() * 2 + 2) + 's';
    
    container.appendChild(firework);
}

function createBalloons() {
    const balloonsContainer = document.getElementById('balloons-container');
    const balloonEmojis = ['🎈', '🎈', '🎈', '💝', '💖'];
    const colors = ['#ff6b6b', '#e91e63', '#9c27b0', '#ff9800', '#4caf50', '#2196f3'];
    
    for (let i = 0; i < 15; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.textContent = balloonEmojis[Math.floor(Math.random() * balloonEmojis.length)];
        balloon.style.left = Math.random() * 100 + '%';
        balloon.style.bottom = '-50px';
        balloon.style.animationDelay = Math.random() * 10 + 's';
        balloon.style.animationDuration = (Math.random() * 5 + 8) + 's';
        balloonsContainer.appendChild(balloon);
    }
}

function animateBackground() {
    // Use requestAnimationFrame for smooth animations
    function animate() {
        // Add any continuous animation logic here
        animationFrameId = requestAnimationFrame(animate);
    }
    
    animate();
}

// ============================================
// SCREEN TRANSITIONS
// ============================================
function transitionToScreen(screenId) {
    const currentScreenEl = document.getElementById(currentScreen);
    const nextScreenEl = document.getElementById(screenId);
    
    // Fade out current screen
    currentScreenEl.classList.add('fade-out');
    
    setTimeout(() => {
        currentScreenEl.classList.remove('active', 'fade-out');
        
        // Fade in next screen
        nextScreenEl.classList.add('active', 'fade-in');
        
        setTimeout(() => {
            nextScreenEl.classList.remove('fade-in');
        }, 1000);
        
        currentScreen = screenId;
    }, 1000);
}

// ============================================
// UTILITY FUNCTIONS
// ============================================
function adjustColor(color, amount) {
    const hex = color.replace('#', '');
    const num = parseInt(hex, 16);
    const r = Math.min(255, Math.max(0, (num >> 16) + amount));
    const g = Math.min(255, Math.max(0, ((num >> 8) & 0x00FF) + amount));
    const b = Math.min(255, Math.max(0, (num & 0x0000FF) + amount));
    
    return '#' + (0x1000000 + r * 0x10000 + g * 0x100 + b).toString(16).slice(1);
}

// ============================================
// NEW ENHANCED FEATURES
// ============================================

// Sound Toggle
function setupSoundToggle() {
    const soundToggle = document.getElementById('sound-toggle');
    soundToggle.addEventListener('click', () => {
        soundEnabled = !soundEnabled;
        soundToggle.textContent = soundEnabled ? '🔊' : '🔇';
        if (soundEnabled) {
            playSound('click');
        }
    });
}

// Progress Indicator
function updateProgressIndicator(progress) {
    const progressIndicator = document.getElementById('progress-indicator');
    const progressBarFill = document.querySelector('#progress-indicator .progress-bar-fill');
    const progressText = document.getElementById('progress-text');
    
    if (progressIndicator) {
        progressIndicator.style.display = 'flex';
        progressBarFill.style.setProperty('--progress', progress + '%');
        progressBarFill.style.width = progress + '%';
        progressText.textContent = Math.round(progress) + '%';
    }
}

// Love Meter
function updateLoveMeter(percentage) {
    const loveMeter = document.getElementById('love-meter');
    const loveMeterFill = document.getElementById('love-meter-fill');
    
    if (loveMeter) {
        loveMeter.classList.add('visible');
        loveMeterFill.style.width = percentage + '%';
    }
}

// Shooting Stars
function createShootingStars() {
    const shootingStarsContainer = document.getElementById('shooting-stars-container');
    
    setInterval(() => {
        const shootingStar = document.createElement('div');
        shootingStar.className = 'shooting-star';
        shootingStar.style.left = Math.random() * 80 + '%';
        shootingStar.style.top = Math.random() * 50 + '%';
        shootingStar.style.transform = `rotate(${Math.random() * 45 + 20}deg)`;
        shootingStarsContainer.appendChild(shootingStar);
        
        setTimeout(() => {
            shootingStar.remove();
        }, 3000);
    }, 5000);
}

// Cherry Blossom Petals
function createPetals() {
    const petalsContainer = document.getElementById('petals-container');
    const petalEmojis = ['🌸', '🌺', '🌷', '💮'];
    
    for (let i = 0; i < 15; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.textContent = petalEmojis[Math.floor(Math.random() * petalEmojis.length)];
        petal.style.left = Math.random() * 100 + '%';
        petal.style.animationDelay = Math.random() * 10 + 's';
        petal.style.animationDuration = (Math.random() * 5 + 8) + 's';
        petalsContainer.appendChild(petal);
    }
}

// Floating Particles
function createParticles() {
    const particlesContainer = document.getElementById('particles-container');
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 6) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Light Rays
function createLightRays() {
    const lightRaysContainer = document.getElementById('light-rays-container');
    
    for (let i = 0; i < 5; i++) {
        const lightRay = document.createElement('div');
        lightRay.className = 'light-ray';
        lightRay.style.left = (20 + i * 15) + '%';
        lightRay.style.top = '-100px';
        lightRay.style.transform = `rotate(${Math.random() * 30 - 15}deg)`;
        lightRay.style.animationDelay = (i * 0.5) + 's';
        lightRaysContainer.appendChild(lightRay);
    }
}

// Character Click Interactions
function setupCharacterInteractions() {
    const characters = document.querySelectorAll('.pixel-character');
    
    characters.forEach(character => {
        character.addEventListener('click', () => {
            // Wave animation
            character.classList.add('waving');
            setTimeout(() => {
                character.classList.remove('waving');
            }, 500);
            
            // Spawn heart
            spawnClickHeart(character);
            
            // Play sound
            if (soundEnabled) {
                playSound('click');
            }
        });
    });
}

// Character Expression Changes
function updateCharacterExpression(expression) {
    const characters = document.querySelectorAll('.pixel-character');
    
    characters.forEach(character => {
        // Remove all expression classes
        character.classList.remove('happy', 'shy', 'excited', 'nervous');
        
        // Add new expression
        if (expression) {
            character.classList.add(expression);
        }
    });
}

// Click Anywhere to Spawn Hearts
function setupClickToSpawnHearts() {
    document.body.addEventListener('click', (e) => {
        // Don't spawn if clicking on buttons or characters
        if (e.target.closest('.proposal-btn') || e.target.closest('.pixel-character')) {
            return;
        }
        
        spawnClickHeartAtPosition(e.clientX, e.clientY);
    });
}

function spawnClickHeart(element) {
    const rect = element.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top;
    spawnClickHeartAtPosition(x, y);
}

function spawnClickHeartAtPosition(x, y) {
    const heart = document.createElement('div');
    heart.className = 'click-heart';
    heart.textContent = '💖';
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 2000);
}

// Keyboard Controls
function setupKeyboardControls() {
    document.addEventListener('keydown', (e) => {
        if (currentScreen === 'character-scene') {
            if (e.code === 'Space') {
                // Skip to next dialogue line
                e.preventDefault();
                advanceDialogue();
            }
        } else if (currentScreen === 'question-page') {
            if (e.code === 'Enter') {
                // Select YES
                handleYesClick();
            } else if (e.code === 'Escape') {
                // Select NO
                handleNoClick();
            }
        }
    });
}

function advanceDialogue() {
    // This function allows skipping dialogue with spacebar
    const dialogueText = document.getElementById('dialogue-text');
    if (dialogueText) {
        // Force complete current line
        // Implementation depends on how you want to handle skipping
    }
}

// Button Particle Effects
function setupButtonParticles() {
    const buttons = document.querySelectorAll('.proposal-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            createButtonParticles(button, e);
            
            if (soundEnabled) {
                playSound('click');
            }
        });
    });
}

function createButtonParticles(button, event) {
    const rect = button.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        particle.className = 'button-particle';
        
        const angle = (i / 12) * Math.PI * 2;
        const distance = 50 + Math.random() * 30;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;
        
        particle.style.setProperty('--tx', tx + 'px');
        particle.style.setProperty('--ty', ty + 'px');
        particle.style.left = centerX + 'px';
        particle.style.top = centerY + 'px';
        particle.style.backgroundColor = button.classList.contains('yes-btn') ? '#ff6b6b' : '#666';
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 1000);
    }
}

// Enhanced Confetti Types
function createEnhancedConfetti() {
    const confettiContainer = document.getElementById('confetti-container');
    const confettiTypes = [
        { class: 'confetti-heart', emoji: '💖' },
        { class: 'confetti-star', emoji: '⭐' },
        { class: 'confetti-flower', emoji: '🌸' }
    ];
    
    for (let i = 0; i < 150; i++) {
        setTimeout(() => {
            const type = confettiTypes[Math.floor(Math.random() * confettiTypes.length)];
            const confetti = document.createElement('div');
            confetti.className = type.class;
            confetti.textContent = type.emoji;
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            confetti.style.animationDelay = Math.random() * 2 + 's';
            confettiContainer.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }, i * 30);
    }
}

// Screen Shake Effect
function triggerScreenShake() {
    const activeScreen = document.querySelector('.screen.active');
    if (activeScreen) {
        activeScreen.classList.add('screen-shake');
        setTimeout(() => {
            activeScreen.classList.remove('screen-shake');
        }, 500);
    }
}

// Character Follows Mouse
function setupCharacterFollowMouse() {
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        if (currentScreen === 'character-scene') {
            const characters = document.querySelectorAll('.pixel-character');
            characters.forEach((character, index) => {
                const rect = character.getBoundingClientRect();
                const charCenterX = rect.left + rect.width / 2;
                const charCenterY = rect.top + rect.height / 2;
                
                const deltaX = (mouseX - charCenterX) * 0.02;
                const deltaY = (mouseY - charCenterY) * 0.02;
                
                // Subtle movement towards mouse
                character.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
            });
        }
    });
}

// Sound Effects (Simple beep sounds using Web Audio API)
function playSound(type) {
    if (!soundEnabled) return;
    
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    switch(type) {
        case 'click':
            oscillator.frequency.value = 800;
            oscillator.type = 'sine';
            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.1);
            break;
        case 'typing':
            oscillator.frequency.value = 1200;
            oscillator.type = 'square';
            gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.05);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.05);
            break;
        case 'celebration':
            oscillator.frequency.value = 523.25;
            oscillator.type = 'triangle';
            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.5);
            break;
    }
}

// ============================================
// CLEANUP
// ============================================
window.addEventListener('beforeunload', () => {
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
    }
});
