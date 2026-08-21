// --- 1. LOS NIVELES ---
const levels = {
    level1: [
        // --- CAPA 0 (Base: 30 fichas) ---
        { id: 1,  x: 0, y: 0, z: 0, pattern: 'pelota_arg', status: 'active' },
        { id: 2,  x: 1, y: 0, z: 0, pattern: 'pelota_arg', status: 'active' },
        { id: 3,  x: 2, y: 0, z: 0, pattern: 'pelota_fut', status: 'active' },
        { id: 4,  x: 3, y: 0, z: 0, pattern: 'pelota_fut', status: 'active' },
        { id: 5,  x: 4, y: 0, z: 0, pattern: 'boca',       status: 'active' },
        { id: 6,  x: 5, y: 0, z: 0, pattern: 'boca',       status: 'active' },
        { id: 7,  x: 0, y: 1, z: 0, pattern: 'river',      status: 'active' },
        { id: 8,  x: 1, y: 1, z: 0, pattern: 'river',      status: 'active' },
        { id: 9,  x: 2, y: 1, z: 0, pattern: 'ruta_40',    status: 'active' },
        { id: 10, x: 3, y: 1, z: 0, pattern: 'ruta_40',    status: 'active' },
        { id: 11, x: 4, y: 1, z: 0, pattern: 'dulce_dl',   status: 'active' },
        { id: 12, x: 5, y: 1, z: 0, pattern: 'dulce_dl',   status: 'active' },
        { id: 13, x: 0, y: 2, z: 0, pattern: 'mapa_arg',   status: 'active' },
        { id: 14, x: 1, y: 2, z: 0, pattern: 'mapa_arg',   status: 'active' },
        { id: 15, x: 2, y: 2, z: 0, pattern: 'mate_arg',   status: 'active' },
        { id: 16, x: 3, y: 2, z: 0, pattern: 'mate_arg',   status: 'active' },
        { id: 17, x: 4, y: 2, z: 0, pattern: 'mapa_mdoza', status: 'active' },
        { id: 18, x: 5, y: 2, z: 0, pattern: 'mapa_mdoza', status: 'active' },
        { id: 19, x: 0, y: 3, z: 0, pattern: 'camiseta_sele', status: 'active' },
        { id: 20, x: 1, y: 3, z: 0, pattern: 'camiseta_sele', status: 'active' },
        { id: 21, x: 2, y: 3, z: 0, pattern: 'mapa_bsas',  status: 'active' },
        { id: 22, x: 3, y: 3, z: 0, pattern: 'mapa_bsas',  status: 'active' },
        { id: 23, x: 4, y: 3, z: 0, pattern: 'mapa_chaco', status: 'active' },
        { id: 24, x: 5, y: 3, z: 0, pattern: 'mapa_chaco', status: 'active' },
        { id: 25, x: 0, y: 4, z: 0, pattern: 'mapa_erios', status: 'active' },
        { id: 26, x: 1, y: 4, z: 0, pattern: 'mapa_erios', status: 'active' },
        { id: 27, x: 2, y: 4, z: 0, pattern: 'escarapela', status: 'active' },
        { id: 28, x: 3, y: 4, z: 0, pattern: 'escarapela', status: 'active' },
        { id: 29, x: 4, y: 4, z: 0, pattern: 'mapa_lrioja', status: 'active' },
        { id: 30, x: 5, y: 4, z: 0, pattern: 'mapa_lrioja', status: 'active' },

        // --- CAPA 1 (15 fichas) ---
        { id: 31, x: 1, y: 1, z: 1, pattern: 'pelota_arg', status: 'active' },
        { id: 32, x: 2, y: 1, z: 1, pattern: 'pelota_fut', status: 'active' },
        { id: 33, x: 3, y: 1, z: 1, pattern: 'boca',       status: 'active' },
        { id: 34, x: 4, y: 1, z: 1, pattern: 'river',      status: 'active' },
        { id: 35, x: 5, y: 1, z: 1, pattern: 'ruta_40',    status: 'active' },
        { id: 36, x: 1, y: 2, z: 1, pattern: 'dulce_dl',   status: 'active' },
        { id: 37, x: 2, y: 2, z: 1, pattern: 'mapa_arg',   status: 'active' },
        { id: 38, x: 3, y: 2, z: 1, pattern: 'mate_arg',   status: 'active' },
        { id: 39, x: 4, y: 2, z: 1, pattern: 'mapa_mdoza', status: 'active' },
        { id: 40, x: 5, y: 2, z: 1, pattern: 'camiseta_sele', status: 'active' },
        { id: 41, x: 1, y: 3, z: 1, pattern: 'mapa_bsas',  status: 'active' },
        { id: 42, x: 2, y: 3, z: 1, pattern: 'mapa_chaco', status: 'active' },
        { id: 43, x: 3, y: 3, z: 1, pattern: 'mapa_erios', status: 'active' },
        { id: 44, x: 4, y: 3, z: 1, pattern: 'escarapela', status: 'active' },
        { id: 45, x: 5, y: 3, z: 1, pattern: 'mapa_lrioja', status: 'active' },

        // --- CAPA 2 (9 fichas) ---
        { id: 46, x: 2, y: 1, z: 2, pattern: 'pelota_arg', status: 'active' },
        { id: 47, x: 3, y: 1, z: 2, pattern: 'pelota_fut', status: 'active' },
        { id: 48, x: 4, y: 1, z: 2, pattern: 'boca',       status: 'active' },
        { id: 49, x: 2, y: 2, z: 2, pattern: 'river',      status: 'active' },
        { id: 50, x: 3, y: 2, z: 2, pattern: 'ruta_40',    status: 'active' },
        { id: 51, x: 4, y: 2, z: 2, pattern: 'dulce_dl',   status: 'active' },
        { id: 52, x: 2, y: 3, z: 2, pattern: 'mapa_arg',   status: 'active' },
        { id: 53, x: 3, y: 3, z: 2, pattern: 'mate_arg',   status: 'active' },
        { id: 54, x: 4, y: 3, z: 2, pattern: 'mapa_mdoza', status: 'active' },

        // --- CAPA 3 (Cima: 6 fichas) ---
        { id: 55, x: 2, y: 1, z: 3, pattern: 'camiseta_sele', status: 'active' },
        { id: 56, x: 3, y: 1, z: 3, pattern: 'mapa_bsas',  status: 'active' },
        { id: 57, x: 2, y: 2, z: 3, pattern: 'mapa_chaco', status: 'active' },
        { id: 58, x: 3, y: 2, z: 3, pattern: 'mapa_erios', status: 'active' },
        { id: 59, x: 2, y: 3, z: 3, pattern: 'escarapela', status: 'active' },
        { id: 60, x: 3, y: 3, z: 3, pattern: 'mapa_lrioja', status: 'active' }
    ],

    level2: [
        // --- CAPA 0 (Base: Cruz Exacta según tus marcas) ---
        // Columna vertical central (x: 3, 4; y: 1 a 4) -> 8 posiciones (16 fichas)
        { id: 1,  x: 3, y: 1, z: 0, pattern: 'pelota_arg', status: 'active' },
        { id: 2,  x: 4, y: 1, z: 0, pattern: 'pelota_arg', status: 'active' },
        { id: 3,  x: 3, y: 2, z: 0, pattern: 'pelota_fut', status: 'active' },
        { id: 4,  x: 4, y: 2, z: 0, pattern: 'pelota_fut', status: 'active' },
        { id: 5,  x: 3, y: 3, z: 0, pattern: 'boca',       status: 'active' },
        { id: 6,  x: 4, y: 3, z: 0, pattern: 'boca',       status: 'active' },
        { id: 7,  x: 3, y: 4, z: 0, pattern: 'river',      status: 'active' },
        { id: 8,  x: 4, y: 4, z: 0, pattern: 'river',      status: 'active' },
        // Brazos horizontales ensanchados (x: 0,1,2 y 5,6,7 en y: 2,3) -> 12 posiciones (24 fichas)
        { id: 9,  x: 0, y: 2, z: 0, pattern: 'ruta_40',    status: 'active' },
        { id: 10, x: 1, y: 2, z: 0, pattern: 'ruta_40',    status: 'active' },
        { id: 11, x: 2, y: 2, z: 0, pattern: 'dulce_dl',   status: 'active' },
        { id: 12, x: 5, y: 2, z: 0, pattern: 'dulce_dl',   status: 'active' },
        { id: 13, x: 6, y: 2, z: 0, pattern: 'mapa_arg',   status: 'active' },
        { id: 14, x: 7, y: 2, z: 0, pattern: 'mapa_arg',   status: 'active' },
        { id: 15, x: 0, y: 3, z: 0, pattern: 'mate_arg',   status: 'active' },
        { id: 16, x: 1, y: 3, z: 0, pattern: 'mate_arg',   status: 'active' },
        { id: 17, x: 2, y: 3, z: 0, pattern: 'mapa_mdoza', status: 'active' },
        { id: 18, x: 5, y: 3, z: 0, pattern: 'mapa_mdoza', status: 'active' },
        { id: 19, x: 6, y: 3, z: 0, pattern: 'mapa_bsas',  status: 'active' },
        { id: 20, x: 7, y: 3, z: 0, pattern: 'mapa_bsas',  status: 'active' },

        // --- CAPA 1 (Cruz Intermedia: 10 posiciones / 20 fichas) ---
        { id: 21, x: 3, y: 1, z: 1, pattern: 'mapa_chaco', status: 'active' },
        { id: 22, x: 4, y: 1, z: 1, pattern: 'mapa_chaco', status: 'active' },
        { id: 23, x: 1, y: 2, z: 1, pattern: 'mapa_erios', status: 'active' },
        { id: 24, x: 2, y: 2, z: 1, pattern: 'mapa_erios', status: 'active' },
        { id: 25, x: 3, y: 2, z: 1, pattern: 'escarapela', status: 'active' },
        { id: 26, x: 4, y: 2, z: 1, pattern: 'escarapela', status: 'active' },
        { id: 27, x: 5, y: 2, z: 1, pattern: 'mapa_lrioja', status: 'active' },
        { id: 28, x: 6, y: 2, z: 1, pattern: 'mapa_lrioja', status: 'active' },
        { id: 29, x: 1, y: 3, z: 1, pattern: 'pelota_arg', status: 'active' },
        { id: 30, x: 2, y: 3, z: 1, pattern: 'pelota_arg', status: 'active' },
        { id: 31, x: 3, y: 3, z: 1, pattern: 'pelota_fut', status: 'active' },
        { id: 32, x: 4, y: 3, z: 1, pattern: 'pelota_fut', status: 'active' },
        { id: 33, x: 5, y: 3, z: 1, pattern: 'boca',       status: 'active' },
        { id: 34, x: 6, y: 3, z: 1, pattern: 'boca',       status: 'active' },
        { id: 35, x: 3, y: 4, z: 1, pattern: 'river',      status: 'active' },
        { id: 36, x: 4, y: 4, z: 1, pattern: 'river',      status: 'active' },

        // --- CAPA 2 (Cima / Núcleo Central: 4 posiciones / 8 fichas) ---
        { id: 37, x: 3, y: 2, z: 2, pattern: 'ruta_40',    status: 'active' },
        { id: 38, x: 4, y: 2, z: 2, pattern: 'ruta_40',    status: 'active' },
        { id: 39, x: 3, y: 3, z: 2, pattern: 'dulce_dl',   status: 'active' },
        { id: 40, x: 4, y: 3, z: 2, pattern: 'dulce_dl',   status: 'active' }
    ]
};

// --- 2. ESTADO DEL JUEGO ---
const gameState = {
    currentLevelKey: null,
    tiles: [],
    selectedTile: null,
    undoList: [],      
    hintPair: [],
    totalPairs: 0,
    matchedPairs: 0,
    secondsElapsed: 0,
    timerInterval: null,
    parkingBox: []
};

// --- 3. SISTEMA DE AUDIO Y ESTADOS ---
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
let isSoundMuted = false;

function toggleSound() {
    isSoundMuted = !isSoundMuted;
    const soundBtn = document.getElementById('sound-btn');
    const startSoundBtn = document.getElementById('start-sound-btn');
    const text = isSoundMuted ? '🔇' : '🔊';
    if (soundBtn) soundBtn.textContent = text;
    if (startSoundBtn) startSoundBtn.textContent = text;
}

// Reemplaza tu función toggleFullscreen actual en game.js por esta:
function toggleFullscreen() {
    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen().catch(err => {
                console.warn("Pantalla completa no disponible en este dispositivo:", err);
            });
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    }
}

function playSound(type) {
    if (isSoundMuted || !audioCtx) return;
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }

    const now = audioCtx.currentTime;

    if (type === 'select') {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(660, now + 0.08);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

        osc.start(now);
        osc.stop(now + 0.08);
    } 
    else if (type === 'match') {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(523.25, now);
        osc.frequency.setValueAtTime(659.25, now + 0.08);
        osc.frequency.setValueAtTime(783.99, now + 0.15);

        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

        osc.start(now);
        osc.stop(now + 0.3);
    } 
    else if (type === 'win') {
        const notes = [523.25, 659.25, 783.99, 1046.50];
        notes.forEach((freq, index) => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.connect(gain);
            gain.connect(audioCtx.destination);

            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, now + index * 0.12);

            gain.gain.setValueAtTime(0.12, now + index * 0.12);
            gain.gain.exponentialRampToValueAtTime(0.001, now + index * 0.12 + 0.3);

            osc.start(now + index * 0.12);
            osc.stop(now + index * 0.12 + 0.3);
        });
    }
}

// --- 4. CONFETI ---
let confettiAnimId = null;

function startConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];
    const colors = ['#8FBEEB', '#619CD4', '#E9DA8D', '#C7B34E', '#ffffff', '#2ecc71', '#3498db'];
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    for (let i = 0; i < 220; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 24 + 4;
        particles.push({
            x: centerX,
            y: centerY,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            size: Math.random() * 10 + 5,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 15,
            gravity: 0.22,
            drag: 0.96,
            opacity: 1
        });
    }

    function loop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((p, index) => {
            p.vx *= p.drag;
            p.vy *= p.drag;
            p.vy += p.gravity;
            p.x += p.vx;
            p.y += p.vy;
            p.rotation += p.rotationSpeed;

            if (p.y > canvas.height + 20 || p.x < -50 || p.x > canvas.width + 50) {
                particles.splice(index, 1);
                return;
            }

            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate((p.rotation * Math.PI) / 180);
            ctx.globalAlpha = p.opacity;
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
            ctx.restore();
        });

        confettiAnimId = requestAnimationFrame(loop);
    }

    loop();
}

function stopConfetti() {
    if (confettiAnimId) {
        cancelAnimationFrame(confettiAnimId);
        confettiAnimId = null;
    }
    const canvas = document.getElementById('confetti-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}

// --- 5. GESTIÓN DE PANTALLAS Y CRONÓMETRO ---
function startGame(levelKey) {
    gameState.currentLevelKey = levelKey;
    gameState.tiles = JSON.parse(JSON.stringify(levels[levelKey]));
    gameState.selectedTile = null;
    gameState.undoList = [];
    gameState.hintPair = [];
    gameState.parkingBox = [];
    
    gameState.totalPairs = gameState.tiles.length / 2;
    gameState.matchedPairs = 0;
    gameState.secondsElapsed = 0;

    renderParkingBox();
    document.getElementById('timer').textContent = "00:00";

    stopConfetti();
    document.getElementById('victory-modal').classList.add('hidden');

    clearInterval(gameState.timerInterval);
    gameState.timerInterval = setInterval(() => {
        gameState.secondsElapsed++;
        const minutes = Math.floor(gameState.secondsElapsed / 60).toString().padStart(2, '0');
        const seconds = (gameState.secondsElapsed % 60).toString().padStart(2, '0');
        document.getElementById('timer').textContent = `${minutes}:${seconds}`;
    }, 1000);

    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('game-screen').classList.remove('hidden');
    document.getElementById('level-title').textContent = levelKey === 'level1' ? 'Nivel 1: Pirámide' : 'Nivel 2: Cruz';

    renderBoard();
}

function restartLevel() {
    if (gameState.currentLevelKey) {
        startGame(gameState.currentLevelKey);
    }
}

function goToMenu() {
    clearInterval(gameState.timerInterval);
    stopConfetti();
    document.getElementById('victory-modal').classList.add('hidden');
    document.getElementById('game-screen').classList.add('hidden');
    document.getElementById('start-screen').classList.remove('hidden');
}

function openAbandonModal() {
    document.getElementById('abandon-modal').classList.remove('hidden');
}

function closeAbandonModal() {
    document.getElementById('abandon-modal').classList.add('hidden');
}

function confirmAbandon() {
    closeAbandonModal();
    goToMenu();
}

function openHelpModal() {
    document.getElementById('help-modal').classList.remove('hidden');
}

function closeHelpModal() {
    document.getElementById('help-modal').classList.add('hidden');
}

// --- 6. REGLAS: Fichas libres ---
function isTileFree(tile) {
    if (tile.status === 'removed') return false;

    const hasTileOnTop = gameState.tiles.some(other => {
        return other.status === 'active' &&
               other.z === tile.z + 1 &&
               Math.abs(other.x - tile.x) < 1 &&
               Math.abs(other.y - tile.y) < 1;
    });

    if (hasTileOnTop) return false;

    const hasLeftNeighbour = gameState.tiles.some(other => {
        return other.status === 'active' && 
               other.z === tile.z && 
               other.x === tile.x - 1 && 
               Math.abs(other.y - tile.y) < 1;
    });

    const hasRightNeighbour = gameState.tiles.some(other => {
        return other.status === 'active' && 
               other.z === tile.z && 
               other.x === tile.x + 1 && 
               Math.abs(other.y - tile.y) < 1;
    });

    return !hasLeftNeighbour || !hasRightNeighbour;
}

// --- 7. RENDERIZADOR CON CENTRADO DINÁMICO ---
// --- 7. RENDERIZADOR CON TAMAÑO DINÁMICO Y SCROLL ---
function renderBoard() {
    const boardElement = document.getElementById('board');
    boardElement.innerHTML = '';

    const tileWidth = 88;
    const tileHeight = 112;

    const levelTiles = gameState.tiles;
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    levelTiles.forEach(t => {
        if (t.x < minX) minX = t.x;
        if (t.x > maxX) maxX = t.x;
        if (t.y < minY) minY = t.y;
        if (t.y > maxY) maxY = t.y;
    });

    const gridCols = (maxX - minX + 1);
    const gridRows = (maxY - minY + 1);
    const maxZ = Math.max(...levelTiles.map(t => t.z));

    // Calculamos el tamaño real que ocuparán las fichas + un margen de resguardo
    const totalLayoutWidth = (gridCols * tileWidth) + (maxZ * 8) + 40;
    const totalLayoutHeight = (gridRows * tileHeight) + (maxZ * 8) + 40;

    // Asignamos el tamaño dinámico al tablero para que respete el espacio de las fichas
    boardElement.style.width = `${totalLayoutWidth}px`;
    boardElement.style.height = `${totalLayoutHeight}px`;

    const baseLeft = 20 - (minX * tileWidth);
    const baseTop = 20 - (minY * tileHeight);

    levelTiles.forEach(tile => {
        if (tile.status === 'removed') return;

        const tileDiv = document.createElement('div');
        tileDiv.classList.add('tile');

        const img = document.createElement('img');
        img.src = `images/${tile.pattern}.png`; 
        img.alt = tile.pattern;
        img.style.width = '78%';
        img.style.height = '78%';
        img.style.objectFit = 'contain';
        tileDiv.appendChild(img);

        const pixelX = baseLeft + (tile.x * tileWidth) - (tile.z * 8);
        const pixelY = baseTop + (tile.y * tileHeight) - (tile.z * 8);

        tileDiv.style.left = `${pixelX}px`;
        tileDiv.style.top = `${pixelY}px`;
        tileDiv.style.zIndex = tile.z * 10 + Math.round(tile.y);

        const free = isTileFree(tile);
        if (!free) {
            tileDiv.classList.add('blocked');
        }

        if (gameState.selectedTile && gameState.selectedTile.id === tile.id) {
            tileDiv.classList.add('selected'); 
        }

        if (gameState.hintPair.includes(tile.id)) {
            tileDiv.classList.add('hint');
        }

        tileDiv.addEventListener('click', () => {
            handleTileClick(tile);
        });

        tileDiv.addEventListener('dblclick', (e) => {
            e.preventDefault();
            handleTileDoubleClick(tile);
        });

        boardElement.appendChild(tileDiv);
    });

    document.getElementById('pairs-matched').textContent = gameState.matchedPairs;
    document.getElementById('pairs-total').textContent = gameState.totalPairs;
    
    updateActionButtonsUI();
    checkWinCondition();
}

function updateActionButtonsUI() {
    const undoBtn = document.getElementById('undo-btn');
    const hintBtn = document.getElementById('hint-btn');
    const parkingBtn = document.getElementById('parking-action-btn');

    if (undoBtn) {
        if (gameState.undoList.length > 0) {
            undoBtn.classList.remove('disabled');
        } else {
            undoBtn.classList.add('disabled');
        }
    }

    if (parkingBtn) {
        if (gameState.selectedTile && isTileFree(gameState.selectedTile)) {
            parkingBtn.classList.remove('disabled');
        } else {
            parkingBtn.classList.add('disabled');
        }
    }

    if (hintBtn) {
        const activeFreeTiles = gameState.tiles.filter(t => t.status === 'active' && isTileFree(t));
        let hasPairs = false;
        for (let i = 0; i < activeFreeTiles.length; i++) {
            for (let j = i + 1; j < activeFreeTiles.length; j++) {
                if (activeFreeTiles[i].pattern === activeFreeTiles[j].pattern) {
                    hasPairs = true;
                    break;
                }
            }
            if (hasPairs) break;
        }

        if (hasPairs) {
            hintBtn.classList.remove('disabled');
        } else {
            hintBtn.classList.add('disabled');
        }
    }
}

// --- 8. INTERACCIÓN Y EMPAREJAMIENTO ---
function handleTileClick(tile) {
    if (!isTileFree(tile)) return;

    gameState.hintPair = [];

    if (gameState.selectedTile && gameState.selectedTile.id === tile.id) {
        gameState.selectedTile = null;
        playSound('select');
    } else if (!gameState.selectedTile) {
        gameState.selectedTile = tile;
        playSound('select');
    } else {
        if (gameState.selectedTile.pattern === tile.pattern && gameState.selectedTile.id !== tile.id) {
            gameState.selectedTile.status = 'removed';
            tile.status = 'removed';

            gameState.undoList.push([gameState.selectedTile, tile]);
            gameState.matchedPairs++;
            playSound('match');
        } else {
            playSound('select');
        }
        gameState.selectedTile = null;
    }

    renderBoard();
}

// --- 9. CAJA DE RESERVA (PARKING) Y BOTÓN TÁCTIL ---
function sendSelectedToParking() {
    if (!gameState.selectedTile || !isTileFree(gameState.selectedTile)) return;
    const tileToPark = gameState.selectedTile;
    gameState.selectedTile = null;
    handleTileDoubleClick(tileToPark);
}

function renderParkingBox() {
    for (let i = 0; i < 4; i++) {
        const slotElement = document.querySelector(`.parked-slot[data-index="${i}"]`);
        if (!slotElement) continue;
        slotElement.innerHTML = ''; 

        if (gameState.parkingBox[i]) {
            const tileData = gameState.parkingBox[i];
            const img = document.createElement('img');
            img.src = `images/${tileData.pattern}.png`;
            img.alt = tileData.pattern;
            slotElement.appendChild(img);
        }
    }
}

function handleTileDoubleClick(tile) {
    if (tile.status === 'removed') return;

    const existingIndex = gameState.parkingBox.findIndex(t => t.pattern === tile.pattern);

    if (existingIndex !== -1) {
        gameState.parkingBox.splice(existingIndex, 1);
        tile.status = 'removed';
        gameState.matchedPairs++;
        playSound('match');
    } else {
        if (gameState.parkingBox.length >= 4) {
            tile.status = 'removed';
            gameState.parkingBox.push(tile);
            renderParkingBox();
            renderBoard();
            triggerGameOverLoss();
            return;
        } else {
            tile.status = 'removed';
            gameState.parkingBox.push(tile);
            playSound('select');
        }
    }

    renderParkingBox();
    renderBoard();
}

function triggerGameOverLoss() {
    clearInterval(gameState.timerInterval);
    playSound('win');
    
    const modal = document.getElementById('victory-modal');
    modal.querySelector('h2').innerText = "❌ ¡Caja Llena - Game Over!";
    modal.querySelector('p').innerText = "Te quedaste sin espacio en el aparcamiento sin formar pareja.";
    modal.classList.remove('hidden');
}

// --- 10. BOTONES EXTRA: Deshacer, Pista y Parking ---
function undoMove() {
    if (gameState.undoList.length === 0) return;

    const lastPair = gameState.undoList.pop();
    lastPair[0].status = 'active';
    lastPair[1].status = 'active';

    gameState.matchedPairs = Math.max(0, gameState.matchedPairs - 1);
    gameState.selectedTile = null;
    gameState.hintPair = [];
    playSound('select');
    renderBoard();
}

function showHint() {
    const activeFreeTiles = gameState.tiles.filter(t => t.status === 'active' && isTileFree(t));
    let foundPair = null;

    for (let i = 0; i < activeFreeTiles.length; i++) {
        for (let j = i + 1; j < activeFreeTiles.length; j++) {
            if (activeFreeTiles[i].pattern === activeFreeTiles[j].pattern) {
                foundPair = [activeFreeTiles[i], activeFreeTiles[j]];
                break;
            }
        }
        if (foundPair) break;
    }

    if (foundPair) {
        gameState.hintPair = [foundPair[0].id, foundPair[1].id];
        playSound('select');
        renderBoard();
    }
}

// --- 12. COMPROBAR VICTORIA ---
function checkWinCondition() {
    const activeTiles = gameState.tiles.filter(t => t.status === 'active');
    if (activeTiles.length === 0 && gameState.parkingBox.length === 0) {
        clearInterval(gameState.timerInterval);
        playSound('win');

        document.getElementById('final-time').textContent = document.getElementById('timer').textContent;
        document.getElementById('final-pairs').textContent = `${gameState.matchedPairs}/${gameState.totalPairs}`;

        setTimeout(() => {
            const modal = document.getElementById('victory-modal');
            modal.querySelector('h2').innerText = "🎉 ¡Nivel Completado! 🎉";
            modal.querySelector('p').innerText = "Has despejado todas las fichas del tablero.";
            modal.classList.remove('hidden');
            startConfetti();
        }, 300);
    }
}