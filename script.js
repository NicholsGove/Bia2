// ============================================
// CONFIGURATION - EASY TO CUSTOMIZE
// ============================================


// Love Letters Configuration - Using the 12 poems provided
const loveLetters = [
    {
        id: 1,
        title: "Dostoevsky's Love",
        date: "October 06, 2025",
        content: "Dostoevsky said:\n\nI never needed your love in return.\n\nAll I ever wished was for your heart to be at peace.\n\nLoving you was never about holding on.\n\nIt was about feeling alive in your presence, about the way you lit up the darkest corners of me without even trying.\n\nYou were a warmth I never knew I was missing.\n\nA moment that felt like forever.\n\nEven if it passed too soon, you gave me something timeless, the kind of joy that no goodbye can take away.\n\nSo even if we part, know this: I have loved, I have felt, and because of you I will never be the same."
    },
    {
        id: 2,
        title: "You Carry My Light",
        date: "September 27, 2025",
        content: "The sun rises each morning\n\nbut somehow you are the one\n\nwho brightens my day.\n\nI speak to the moon at night.\n\nShe tells me stories about the sun,\n\nand I tell her about you\n\nhow your presence feels warmer\n\nthan daylight,\n\nhow even silence with you\n\nshines louder than stars.\n\nIt is not the sky\n\nthat carries my light,\n\nit is you."
    },
    {
        id: 3,
        title: "Breathless Love",
        date: "September 26, 2025",
        content: "Why does the world feel so still without her,\n\nAs if everything ceases to exist then suddenly,\n\nLike magic, I can breathe again.\n\nShe is like the warmth that melts winter’s snow,\n\nA flicker of light I never thought I needed.\n\nHer bright, wide smile brightens my day like a soft sunrise,\n\nHer laughter lingers in my mind in the quietest of nights.\n\nEven when she is upset I can’t help but feel breathless.\n\nJust the thought of her makes me weak.\n\nWith every glance, I’m caught in a surprise, and I can’t help but get lost in her eyes.\n\nHow can God grant a creation obtain that much beauty?\n\nI don’t know how to shape these words,\n\nTo tell her the truth that is kept inside my heart.\n\nThis feeling arrived like an unexpected surprise,\n\nVery sudden, greatly vast, too deep to hide.\n\nHer subtle reactions, the tilt of her head, the look in her eyes.\n\nThe curve of her lips when she starts to smile,\n\nThey echo in places I never knew existed,\n\nAwakening dreams that I have never known before.\n\nIs this what love is, this breathless sway?\n\nA longing, a warmth that won’t let me be?\n\nI stand at the edge with so much to say,\n\nYet I’m not able to let a single word free.\n\nBut still, in the silence, one truth remains,\n\nShe’s become the existence that is all I dream of.\n\nAnd though I can’t grasp how quickly it came,\n\nI still have a question. Is this love?"
    },
    {
        id: 4,
        title: "Missing You Deeply",
        date: "September 26, 2025",
        content: "I hate it when I miss you.\n\nI count the hours as time goes by hoping you call or text me.\n\nTime slows down as the world seeks for your presence.\n\nI seek for your presence more than anything.\n\nI miss you so much is all I can say but if I could put my words into action I would give away my world just to talk to you.\n\nWith you the world just makes sense.\n\nLike it clicks and sings in unison when you are around.\n\nWithout you the world loses its color, not as vibrant as it once was."
    },
    {
        id: 5,
        title: "I Want to Be With You",
        date: "January 24, 2026",
        content: "I never wanted to love anyone this way,\n\nBut somehow you became my everything.\n\nYour presence turns the mundane into magic.\n\nEvery glance, every word, every laugh, draws me closer.\n\nI feel more alive with you than I have ever felt.\n\nEven silence with you is full of comfort and meaning.\n\nI want to be near you, always, because being with you is being home."
    },
    {
        id: 6,
        title: "You Are My Sunrise",
        date: "January 25, 2026",
        content: "Every morning I wake up,\n\nthe sun rises, but nothing compares to the light you bring into my life.\n\nEven the darkest moments fade when I think of you.\n\nYou are my warmth, my hope, my sunrise.\n\nI want to live in the glow of your presence forever."
    },
    {
        id: 7,
        title: "Love Without Asking",
        date: "November 09, 2025",
        content: "Real love doesn’t ask for anything in return.\n\nIt simply gives.\n\nI have loved you without expectation.\n\nI have cherished your happiness more than my own.\n\nEven if the world fades around us, my love remains constant, timeless, and true."
    },
    {
        id: 8,
        title: "Every Moment With You",
        date: "January 03, 2026",
        content: "With you, every moment is alive.\n\nA laugh shared feels like eternity.\n\nA look exchanged speaks louder than any words.\n\nEven ordinary days become extraordinary because of your presence.\n\nBeing with you is the truest joy I have ever known."
    },
    {
        id: 9,
        title: "Silent Conversations",
        date: "December 28, 2025",
        content: "We talk in silence, yet I understand everything you mean.\n\nYour eyes speak what words cannot.\n\nYour touch conveys what letters fail to describe.\n\nI am alive in these quiet moments.\n\nAnd I am yours, completely."
    },
    {
        id: 10,
        title: "Unexpected Love",
        date: "January 29, 2026",
        content: "This love came like a sudden storm,\n\nUnexpected and overwhelming.\n\nIt caught me off guard, left me breathless,\n\nAnd yet I have never been happier.\n\nI never knew my heart could feel this much,\n\nUntil I felt it for you."
    },
    {
        id: 11,
        title: "The Light You Give",
        date: "January 30, 2026",
        content: "You are the light in the dark,\n\nThe calm in the storm.\n\nYou bring color to gray days,\n\nJoy to heavy hearts.\n\nEvery moment with you shines brighter than the sun,\n\nAnd I am eternally grateful for your love."
    },
    {
        id: 12,
        title: "Timeless Affection",
        date: "January 31, 2026",
        content: "Even if time passes and seasons change,\n\nMy love for you remains steadfast.\n\nIt is a quiet, enduring flame,\n\nConstant and unwavering.\n\nYou have touched me in ways that will last forever,\n\nAnd I will carry you in my heart always."
    }
];


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
    "I want to be the reason you smile forever...",
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

// Typewriter state management
let activeTypewriter = null;
let typewriterTimeouts = [];

// Event listener tracking for cleanup
let eventListeners = [];

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
    
    // Setup love letters navigation button
    setupLoveLettersNavigation();
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
    const keydownHandler = (e) => {
        // Check if user is typing in an input field
        const activeElement = document.activeElement;
        const isInputFocused = activeElement && (
            activeElement.tagName === 'INPUT' ||
            activeElement.tagName === 'TEXTAREA' ||
            activeElement.isContentEditable
        );
        
        // Don't interfere if user is typing in an input field
        if (isInputFocused) {
            return;
        }
        
        // Only handle specific keys
        if (currentScreen === 'character-scene') {
            if (e.code === 'Space') {
                // Skip to next dialogue line
                e.preventDefault();
                advanceDialogue();
            }
        } else if (currentScreen === 'question-page') {
            if (e.code === 'Enter') {
                // Select YES
                e.preventDefault();
                handleYesClick();
            } else if (e.code === 'Escape') {
                // Select NO
                e.preventDefault();
                handleNoClick();
            }
        } else if (currentScreen === 'love-letters-page') {
            // Handle keyboard navigation for love letters
            if (e.code === 'Escape') {
                // Close modal if open
                const modal = document.getElementById('letter-modal');
                if (modal && modal.classList.contains('active')) {
                    e.preventDefault();
                    closeLetterModal();
                }
            } else if (e.code === 'ArrowLeft') {
                // Previous letter
                const modal = document.getElementById('letter-modal');
                if (modal && modal.classList.contains('active') && currentLetterIndex > 0) {
                    e.preventDefault();
                    openLetter(currentLetterIndex - 1);
                }
            } else if (e.code === 'ArrowRight') {
                // Next letter
                const modal = document.getElementById('letter-modal');
                if (modal && modal.classList.contains('active') && currentLetterIndex < loveLetters.length - 1) {
                    e.preventDefault();
                    openLetter(currentLetterIndex + 1);
                }
            }
        }
    };
    
    // Track the event listener for cleanup
    eventListeners.push({
        element: document,
        event: 'keydown',
        handler: keydownHandler
    });
    
    document.addEventListener('keydown', keydownHandler);
}

function advanceDialogue() {
    // This function allows skipping dialogue with spacebar
    const dialogueText = document.getElementById('dialogue-text');
    if (dialogueText && dialogueLineIndex < poemLines.length) {
        // Stop any ongoing typewriter effect
        stopTypewriter();
        
        // Display the current line immediately
        dialogueText.textContent = poemLines[dialogueLineIndex];
        
        // Move to next line after a short delay
        setTimeout(() => {
            dialogueLineIndex++;
            if (dialogueLineIndex < poemLines.length) {
                // Update character expression
                updateCharacterExpression(characterExpressions[dialogueLineIndex]);
                
                // Update progress
                const progress = ((dialogueLineIndex) / poemLines.length) * 100;
                updateProgressIndicator(progress);
                updateLoveMeter(progress);
                
                // Start typing next line
                startTypewriter(poemLines[dialogueLineIndex], dialogueText, () => {
                    dialogueLineIndex++;
                    if (dialogueLineIndex < poemLines.length) {
                        advanceDialogue();
                    } else {
                        // All lines complete
                        updateProgressIndicator(100);
                        updateLoveMeter(100);
                        setTimeout(() => {
                            transitionToScreen('question-page');
                        }, 2000);
                    }
                });
            } else {
                // All lines complete
                updateProgressIndicator(100);
                updateLoveMeter(100);
                setTimeout(() => {
                    transitionToScreen('question-page');
                }, 2000);
            }
        }, 1000);
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
// LOVE LETTERS FEATURE
// ============================================

// Love Letters State
let currentLetterIndex = 0;
let readLetters = new Set();
let favoriteLetters = new Set();
let currentDisplayMode = 'envelope';
let bookCurrentPage = 0;

// Initialize Love Letters
function initializeLoveLetters() {
    setupLoveLettersNavigation();
    generateEnvelopes();
    generateCards();
    setupDisplayModeSelector();
    setupLetterModal();
    setupBookNavigation();
    setupRandomLetterButton();
    createFloatingLetters();
    setupHeartTrailCursor();
}

// Setup Love Letters Navigation Button
function setupLoveLettersNavigation() {
    const loveLettersBtn = document.getElementById('love-letters-btn');
    const closeLettersBtn = document.getElementById('close-letters-btn');
    
    if (loveLettersBtn) {
        loveLettersBtn.addEventListener('click', () => {
            transitionToScreen('love-letters-page');
            initializeLoveLetters();
        });
    }
    
    if (closeLettersBtn) {
        closeLettersBtn.addEventListener('click', () => {
            transitionToScreen('question-page');
        });
    }
}

// Generate Envelopes
function generateEnvelopes() {
    const envelopesGrid = document.getElementById('envelopes-grid');
    if (!envelopesGrid) return;
    
    envelopesGrid.innerHTML = '';
    
    loveLetters.forEach((letter, index) => {
        const envelope = document.createElement('div');
        envelope.className = 'envelope';
        envelope.dataset.index = index;
        
        const colors = ['#ff6b6b', '#e91e63', '#9c27b0', '#ff9800', '#4caf50', '#2196f3'];
        const color = colors[index % colors.length];
        
        envelope.innerHTML = `
            <div class="envelope-flap"></div>
            <div class="envelope-body" style="background: ${color}">
                <div class="envelope-number">${index + 1}</div>
                <div class="envelope-heart">💖</div>
            </div>
            <div class="envelope-status">
                ${readLetters.has(index) ? '✓ Read' : 'Unread'}
            </div>
        `;
        
        envelope.addEventListener('click', () => openLetter(index));
        envelopesGrid.appendChild(envelope);
    });
}

// Generate Cards
function generateCards() {
    const cardsGrid = document.getElementById('cards-grid');
    if (!cardsGrid) return;
    
    cardsGrid.innerHTML = '';
    
    loveLetters.forEach((letter, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.dataset.index = index;
        
        const colors = ['#ff6b6b', '#e91e63', '#9c27b0', '#ff9800', '#4caf50', '#2196f3'];
        const color = colors[index % colors.length];
        
        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front" style="background: ${color}">
                    <div class="card-number">${index + 1}</div>
                    <div class="card-title">${letter.title}</div>
                    <div class="card-date">${letter.date}</div>
                </div>
                <div class="card-back">
                    <div class="card-heart">💖</div>
                    <div class="card-hint">Click to read</div>
                </div>
            </div>
        `;
        
        card.addEventListener('click', () => openLetter(index));
        cardsGrid.appendChild(card);
    });
}

// Setup Display Mode Selector
function setupDisplayModeSelector() {
    const modeButtons = document.querySelectorAll('.mode-btn');
    const displays = document.querySelectorAll('.letters-display');
    
    modeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const mode = button.dataset.mode;
            currentDisplayMode = mode;
            
            // Update active button
            modeButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Update active display
            displays.forEach(display => display.classList.remove('active'));
            document.getElementById(`${mode}-display`).classList.add('active');
            
            // Initialize book if needed
            if (mode === 'book') {
                updateBookPages();
            }
        });
    });
}

// Open Letter Modal
function openLetter(index) {
    currentLetterIndex = index;
    const letter = loveLetters[index];
    
    // Mark as read
    readLetters.add(index);
    updateLettersProgress();
    updateEnvelopeStatus(index);
    
    // Update modal content
    document.getElementById('modal-letter-title').textContent = letter.title;
    document.getElementById('modal-letter-date').textContent = letter.date;
    
    // Typewriter effect for letter content
    const letterText = document.getElementById('modal-letter-text');
    letterText.textContent = '';
    
    // Show modal
    const modal = document.getElementById('letter-modal');
    modal.classList.add('active');
    
    // Typewriter effect
    startTypewriter(letter.content, letterText);
    
    // Update favorite button
    updateFavoriteButton();
    
    // Play sound
    if (soundEnabled) {
        playSound('click');
    }
    
    // Create sparkle effect
    createSparkleEffect();
}

// Typewriter Effect for Letters
function typeWriterEffect(text, element) {
    const lines = text.split('\n');
    let lineIndex = 0;
    let charIndex = 0;
    
    function type() {
        if (lineIndex < lines.length) {
            const line = lines[lineIndex];
            
            if (charIndex < line.length) {
                element.textContent += line.charAt(charIndex);
                charIndex++;
                
                // Play typing sound
                if (soundEnabled && charIndex % 3 === 0) {
                    playSound('typing');
                }
                
                setTimeout(type, 30);
            } else {
                element.textContent += '\n';
                lineIndex++;
                charIndex = 0;
                setTimeout(type, 100);
            }
        }
    }
    
    type();
}

// Setup Letter Modal
function setupLetterModal() {
    const closeModalBtn = document.getElementById('close-modal-btn');
    const prevLetterBtn = document.getElementById('prev-letter-btn');
    const nextLetterBtn = document.getElementById('next-letter-btn');
    const favoriteBtn = document.getElementById('favorite-btn');
    
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeLetterModal);
    }
    
    if (prevLetterBtn) {
        prevLetterBtn.addEventListener('click', () => {
            if (currentLetterIndex > 0) {
                openLetter(currentLetterIndex - 1);
            }
        });
    }
    
    if (nextLetterBtn) {
        nextLetterBtn.addEventListener('click', () => {
            if (currentLetterIndex < loveLetters.length - 1) {
                openLetter(currentLetterIndex + 1);
            }
        });
    }
    
    if (favoriteBtn) {
        favoriteBtn.addEventListener('click', toggleFavorite);
    }
    
    // Close modal on background click
    const modal = document.getElementById('letter-modal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeLetterModal();
            }
        });
    }
}

// Close Letter Modal
function closeLetterModal() {
    const modal = document.getElementById('letter-modal');
    modal.classList.remove('active');
}

// Toggle Favorite
function toggleFavorite() {
    if (favoriteLetters.has(currentLetterIndex)) {
        favoriteLetters.delete(currentLetterIndex);
    } else {
        favoriteLetters.add(currentLetterIndex);
    }
    updateFavoriteButton();
}

// Update Favorite Button
function updateFavoriteButton() {
    const favoriteBtn = document.getElementById('favorite-btn');
    if (favoriteLetters.has(currentLetterIndex)) {
        favoriteBtn.textContent = '★ Favorited';
        favoriteBtn.classList.add('favorited');
    } else {
        favoriteBtn.textContent = '☆ Favorite';
        favoriteBtn.classList.remove('favorited');
    }
}

// Update Letters Progress
function updateLettersProgress() {
    const progressFill = document.getElementById('letters-progress-fill');
    const readCount = document.querySelector('.letters-read-count');
    
    const percentage = (readLetters.size / loveLetters.length) * 100;
    
    if (progressFill) {
        progressFill.style.width = percentage + '%';
    }
    
    if (readCount) {
        readCount.textContent = `${readLetters.size}/${loveLetters.length} Read`;
    }
}

// Update Envelope Status
function updateEnvelopeStatus(index) {
    const envelope = document.querySelector(`.envelope[data-index="${index}"]`);
    if (envelope) {
        const status = envelope.querySelector('.envelope-status');
        status.textContent = '✓ Read';
        status.style.color = '#4caf50';
    }
}

// Setup Book Navigation
function setupBookNavigation() {
    const prevPageBtn = document.getElementById('prev-page-btn');
    const nextPageBtn = document.getElementById('next-page-btn');
    
    if (prevPageBtn) {
        prevPageBtn.addEventListener('click', () => {
            if (bookCurrentPage > 0) {
                bookCurrentPage -= 2;
                updateBookPages();
            }
        });
    }
    
    if (nextPageBtn) {
        nextPageBtn.addEventListener('click', () => {
            if (bookCurrentPage < loveLetters.length - 2) {
                bookCurrentPage += 2;
                updateBookPages();
            }
        });
    }
}

// Update Book Pages
function updateBookPages() {
    const leftPage = document.getElementById('book-left-page');
    const rightPage = document.getElementById('book-right-page');
    const pageIndicator = document.getElementById('page-indicator');
    
    const leftLetter = loveLetters[bookCurrentPage];
    const rightLetter = loveLetters[bookCurrentPage + 1];
    
    if (leftLetter) {
        leftPage.querySelector('.page-title').textContent = leftLetter.title;
        leftPage.querySelector('.page-date').textContent = leftLetter.date;
        leftPage.querySelector('.page-text').textContent = leftLetter.content.substring(0, 200) + '...';
    }
    
    if (rightLetter) {
        rightPage.querySelector('.page-title').textContent = rightLetter.title;
        rightPage.querySelector('.page-date').textContent = rightLetter.date;
        rightPage.querySelector('.page-text').textContent = rightLetter.content.substring(0, 200) + '...';
    }
    
    if (pageIndicator) {
        pageIndicator.textContent = `${bookCurrentPage + 1}-${Math.min(bookCurrentPage + 2, loveLetters.length)} of ${loveLetters.length}`;
    }
}

// Setup Random Letter Button
function setupRandomLetterButton() {
    const randomLetterBtn = document.getElementById('random-letter-btn');
    if (randomLetterBtn) {
        randomLetterBtn.addEventListener('click', () => {
            const randomIndex = Math.floor(Math.random() * loveLetters.length);
            openLetter(randomIndex);
        });
    }
}

// Create Floating Letters Background
function createFloatingLetters() {
    const container = document.getElementById('floating-letters-container');
    if (!container) return;
    
    const letters = ['💌', '💕', '💖', '💗', '📝', '✉️'];
    
    for (let i = 0; i < 20; i++) {
        const floatingLetter = document.createElement('div');
        floatingLetter.className = 'floating-letter';
        floatingLetter.textContent = letters[Math.floor(Math.random() * letters.length)];
        floatingLetter.style.left = Math.random() * 100 + '%';
        floatingLetter.style.top = Math.random() * 100 + '%';
        floatingLetter.style.animationDelay = Math.random() * 10 + 's';
        floatingLetter.style.animationDuration = (Math.random() * 5 + 8) + 's';
        container.appendChild(floatingLetter);
    }
}

// Setup Heart Trail Cursor
function setupHeartTrailCursor() {
    const loveLettersPage = document.getElementById('love-letters-page');
    if (!loveLettersPage) return;
    
    loveLettersPage.addEventListener('mousemove', (e) => {
        if (Math.random() > 0.9) {
            createHeartTrail(e.clientX, e.clientY);
        }
    });
}

// Create Heart Trail
function createHeartTrail(x, y) {
    const heart = document.createElement('div');
    heart.className = 'heart-trail';
    heart.textContent = '💖';
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 1000);
}

// Create Sparkle Effect
function createSparkleEffect() {
    const modal = document.getElementById('letter-modal');
    if (!modal) return;
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.top = Math.random() * 100 + '%';
            modal.appendChild(sparkle);
            
            setTimeout(() => {
                sparkle.remove();
            }, 1000);
        }, i * 50);
    }
}

// ============================================
// TYPEWRITER UTILITY
// ============================================

// Start a typewriter effect
function startTypewriter(text, element, onComplete) {
    // Stop any existing typewriter
    stopTypewriter();
    
    const lines = text.split('\n');
    let lineIndex = 0;
    let charIndex = 0;
    
    // Store the active typewriter instance
    activeTypewriter = {
        text: text,
        element: element,
        onComplete: onComplete
    };
    
    function type() {
        if (lineIndex < lines.length) {
            const line = lines[lineIndex];
            
            if (charIndex < line.length) {
                element.textContent += line.charAt(charIndex);
                charIndex++;
                
                // Play typing sound
                if (soundEnabled && charIndex % 3 === 0) {
                    playSound('typing');
                }
                
                const timeoutId = setTimeout(type, 30);
                typewriterTimeouts.push(timeoutId);
            } else {
                element.textContent += '\n';
                lineIndex++;
                charIndex = 0;
                const timeoutId = setTimeout(type, 100);
                typewriterTimeouts.push(timeoutId);
            }
        } else {
            // Typewriter complete
            activeTypewriter = null;
            if (onComplete) {
                onComplete();
            }
        }
    }
    
    type();
}

// Stop the current typewriter effect
function stopTypewriter() {
    // Clear all pending timeouts
    typewriterTimeouts.forEach(timeoutId => {
        clearTimeout(timeoutId);
    });
    typewriterTimeouts = [];
    
    // Clear active typewriter
    activeTypewriter = null;
}

// ============================================
// EVENT LISTENER CLEANUP
// ============================================

// Remove all tracked event listeners
function cleanupEventListeners() {
    eventListeners.forEach(({ element, event, handler }) => {
        element.removeEventListener(event, handler);
    });
    eventListeners = [];
}

// ============================================
// CLEANUP
// ============================================
window.addEventListener('beforeunload', () => {
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
    }
    
    // Cleanup event listeners
    cleanupEventListeners();
    
    // Stop any ongoing typewriter
    stopTypewriter();
});
