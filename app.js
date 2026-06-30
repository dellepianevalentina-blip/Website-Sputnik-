/**
 * Sputnik 1 & Space Age Interactive Application
 * Main Logic File (Spanish Version - Exact content match)
 */

// --- 1. DYNAMIC STARFIELD BACKGROUND ---
const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');

let stars = [];
const STAR_COUNT = 100;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initStars();
}

function initStars() {
    stars = [];
    for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 1.8 + 0.2,
            opacity: Math.random(),
            pulseSpeed: Math.random() * 0.02 + 0.005,
            direction: Math.random() > 0.8 ? (Math.random() * 0.2 - 0.1) : 0
        });
    }
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#ffffff';
    
    for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        
        // Update opacity for pulsing effect
        star.opacity += star.pulseSpeed;
        if (star.opacity > 1 || star.opacity < 0.1) {
            star.pulseSpeed = -star.pulseSpeed;
        }
        
        // Drift stars slightly to make the background feel alive
        star.x += star.direction;
        if (star.x > canvas.width) star.x = 0;
        if (star.x < 0) star.x = canvas.width;
        
        ctx.globalAlpha = Math.max(0.1, Math.min(1, star.opacity));
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
    }
    
    ctx.globalAlpha = 1.0;
    requestAnimationFrame(drawStars);
}

// Initialize canvas background
window.addEventListener('resize', resizeCanvas);
resizeCanvas();
drawStars();


// --- 2. HISTORICAL DATA FOR MODALS ---
const modalContentData = {
    'modal-context': {
        icon: '🌍',
        title: '1. Contexto histórico',
        subtitle: '¿Qué estaba pasando en el mundo en ese momento?',
        html: `
            <p>En 1957 el mundo estaba dividido por la <strong>Guerra Fría</strong>, una rivalidad política, económica, militar e ideológica entre Estados Unidos y la Unión Soviética. Aunque ambas potencias evitaron enfrentarse directamente en una guerra, competían por demostrar cuál sistema era superior: el capitalismo o el comunismo.</p>
            
            <p>En este contexto, la tecnología y la ciencia se transformaron en herramientas de prestigio y poder. El espacio era importante porque los mismos cohetes capaces de lanzar satélites podían utilizarse para transportar armas nucleares a grandes distancias. Por eso, los avances espaciales tenían también un significado militar y estratégico.</p>
            
            <div class="comparison-container">
                <div class="comparison-column usa">
                    <h5>🇺🇸 Bloque Capitalista</h5>
                    <p>Liderado por Estados Unidos, defendiendo la democracia liberal y la libre empresa, buscando contener la influencia soviética global.</p>
                </div>
                <div class="comparison-column ussr">
                    <h5>☭ Bloque Comunista</h5>
                    <p>Liderado por la Unión Soviética, impulsando una economía planificada por el Estado y buscando expandir el socialismo internacionalmente.</p>
                </div>
            </div>
        `
    },
    'modal-sputnik1': {
        icon: '🚀',
        title: '2. El hecho o proceso',
        subtitle: 'El Lanzamiento Histórico',
        html: `
            <div class="modal-img-container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/be/Sputnik_asm.jpg" class="modal-img" alt="Sputnik 1">
                <div class="modal-img-caption">Esfera de aluminio pulido del Sputnik 1 lista para ser ensamblada en el cohete R-7.</div>
            </div>
            
            <p>El <strong>4 de octubre de 1957</strong>, la Unión Soviética lanzó el <strong>Sputnik 1</strong>, el primer satélite artificial de la historia.</p>
            
            <p>El proyecto fue desarrollado por científicos e ingenieros soviéticos dirigidos por <strong>Serguéi Koroliov</strong>. El satélite fue puesto en órbita mediante un cohete <strong>R-7 Semyorka</strong>.</p>
            
            <p>El Sputnik 1 era una esfera metálica de unos 58 cm de diámetro con cuatro antenas. Desde el espacio emitía señales de radio que podían ser captadas por estaciones de todo el mundo. Permaneció en órbita durante aproximadamente tres meses antes de desintegrarse al reingresar en la atmósfera.</p>
            
            <p>Su lanzamiento sorprendió al mundo y demostró que la Unión Soviética había logrado una importante ventaja tecnológica.</p>

            <h4 style="margin: 1.5rem 0 0.5rem; color:#93c5fd; font-family:'Orbitron';">Ficha Técnica Oficial:</h4>
            <table class="specs-table">
                <tbody>
                    <tr>
                        <td>Lanzamiento</td>
                        <td>Por la Unión Soviética el 4 de octubre de 1957.</td>
                    </tr>
                    <tr>
                        <td>Hito</td>
                        <td>Primer satélite artificial en orbitar la Tierra.</td>
                    </tr>
                    <tr>
                        <td>Anuncio oficial</td>
                        <td>Realizado por la agencia de noticias soviética Tass.</td>
                    </tr>
                    <tr>
                        <td>Lugar de lanzamiento</td>
                        <td>Instalación de pruebas de cohetes cerca de Tyuratam, Kazajistán.</td>
                    </tr>
                    <tr>
                        <td>Estructura y material</td>
                        <td>Esfera de aluminio de 22 pulgadas (56 cm) de diámetro.</td>
                    </tr>
                    <tr>
                        <td>Peso</td>
                        <td>183 libras (unos 83 kg).</td>
                    </tr>
                    <tr>
                        <td>Equipamiento</td>
                        <td>Cuatro antenas y una radiobaliza que emitía señales acústicas (pitidos) regulares.</td>
                    </tr>
                    <tr>
                        <td>Órbita terrestre</td>
                        <td>Cada 96 minutos.</td>
                    </tr>
                    <tr>
                        <td>Fin de misión</td>
                        <td>Permaneció en órbita unos tres meses y cayó de nuevo a la Tierra el 4 de enero de 1958.</td>
                    </tr>
                </tbody>
            </table>
        `
    },
    'modal-sputnik2': {
        icon: '🐕',
        title: 'Sputnik 2 & Laika',
        subtitle: 'El Primer Ser Vivo en Órbita',
        html: `
            <div class="modal-img-container">
                <img src="https://media.newyorker.com/photos/59fb65a52d0aaf4a81445779/1:1/w_2603,h_2603,c_limit/Wellerstein-Laika.jpg" class="modal-img" alt="Laika en el Sputnik 2">
                <div class="modal-img-caption">Ilustración artística de Laika a bordo de la cabina presurizada del Sputnik 2.</div>
            </div>
            
            <p>La Unión Soviética lanzó el <strong>Sputnik 2 el 3 de noviembre de 1957</strong>, menos de un mes después del Sputnik 1.</p>
            
            <p>El Sputnik 2 transportaba a <strong>Laika</strong>, el primer ser vivo en orbitar la Tierra.</p>
            
            <p>Especificaciones adicionales de la misión:</p>
            <ul>
                <li><strong>Peso de la nave:</strong> 1.120 libras (unos 508 kg).</li>
                <li><strong>Duración:</strong> Permaneció en órbita durante casi 200 días.</li>
                <li><strong>Hito biológico:</strong> Demostró que un animal superior podía sobrevivir en condiciones de microgravedad.</li>
            </ul>
        `
    },
    'modal-korolev': {
        icon: '👨‍🚀',
        title: 'Serguéi Koroliov',
        subtitle: 'El Diseñador Jefe',
        html: `
            <div class="modal-img-container">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQah14IC74rW15zzZP6zmqJgkAHEUUUPw69t_dq_VgUvURPREEMficvKZ5Cxn2lmVEiNpcNYeIMVC8c-4L-PCkrAMfUksP2LehOOGzGKQ&s=10" class="modal-img" alt="Serguéi Koroliov">
                <div class="modal-img-caption">Ilustración de Serguéi Koroliov, pionero de la ingeniería aeroespacial soviética.</div>
            </div>
            
            <p>El proyecto del Sputnik 1 fue desarrollado por un talentoso equipo de científicos e ingenieros soviéticos dirigidos en secreto por el célebre diseñador de cohetes <strong>Serguéi Koroliov</strong>.</p>
            
            <p>Bajo su liderazgo intelectual, la Unión Soviética no solo construyó el satélite sino que diseñó y probó con éxito el cohete <strong>R-7 Semyorka</strong>, convirtiéndose en el pilar tecnológico que colocó a la URSS a la cabeza de la Carrera Espacial en sus etapas iniciales.</p>
        `
    },
    'modal-impact': {
        icon: '📈',
        title: '4. Impacto y consecuencias',
        subtitle: '¿Qué cambió después? ¿Cómo reaccionó el mundo?',
        html: `
            <p>El lanzamiento del Sputnik produjo importantes cambios:</p>
            <ul>
                <li>Inició formalmente la <strong>Carrera Espacial</strong> entre Estados Unidos y la Unión Soviética.</li>
                <li>Generó preocupación en Estados Unidos por el avance tecnológico soviético.</li>
                <li>Impulsó mayores inversiones en educación científica y tecnológica.</li>
                <li>En 1958 se creó la <strong>NASA</strong> para coordinar el programa espacial estadounidense.</li>
                <li>Aceleró el desarrollo de satélites, telecomunicaciones y nuevas tecnologías espaciales.</li>
                <li>Para la Guerra Fría, el Sputnik fue una victoria propagandística para la Unión Soviética, ya que demostró su capacidad científica y tecnológica ante el mundo.</li>
            </ul>
            
            <h4 style="margin: 1.5rem 0 0.5rem; color:#93c5fd; font-family:'Orbitron';">Detalles del Impacto Histórico:</h4>
            <ul>
                <li>El lanzamiento sorprendió a muchos científicos y funcionarios gubernamentales estadounidenses.</li>
                <li>Fue considerado un gran logro tecnológico de la Unión Soviética.</li>
                <li>El acontecimiento mejoró notablemente la imagen internacional de la Unión Soviética.</li>
                <li>Muchos estadounidenses temían que el éxito espacial soviético implicara que la tecnología de misiles soviética también fuera más avanzada.</li>
                <li>El lanzamiento provocó una gran preocupación y debate en Estados Unidos.</li>
                <li>Contribuyó a iniciar lo que se conoció como la Era Espacial.</li>
                <li>Llevó a Estados Unidos a aumentar el gasto en:
                    <ul>
                        <li>Programas espaciales y aeroespaciales.</li>
                        <li>Educación en ciencia e ingeniería.</li>
                        <li>Investigación y desarrollo.</li>
                    </ul>
                </li>
                <li>El acontecimiento intensificó la competencia de la Guerra Fría entre Estados Unidos y la Unión Soviética.</li>
            </ul>
        `
    },
    'modal-sources': {
        icon: '📰',
        title: '3. Una fuente histórica',
        subtitle: 'Evidencia documental de 1957',
        html: `
            <p><strong>Fuente primaria: Titular de prensa de 1957</strong></p>
            
            <div class="source-quote-box">
                "Soviet Fires Earth Satellite Into Space"
                <div class="source-meta">— Titular publicado por el periódico <em>The New York Times</em> el 5 de octubre de 1957.</div>
            </div>
            
            <p><strong>¿Por qué la elegimos?</strong></p>
            <p>Porque es una fuente contemporánea al acontecimiento y muestra el impacto inmediato que tuvo la noticia en Occidente. Refleja la sorpresa y preocupación que generó el éxito soviético en plena Guerra Fría. Además, permite observar cómo los medios de comunicación presentaron el acontecimiento a la sociedad de la época.</p>
            
            <p style="margin-top: 1.5rem;"><strong>Enlace al archivo histórico:</strong> <a href="https://archive.nytimes.com/www.nytimes.com/partners/aol/special/sputnik/sput-01.html" target="_blank" style="color:var(--neon-blue); text-decoration:none;">The New York Times Sputnik Archive</a></p>
        `
    },
    
    // --- TIMELINE INTERACTIVE NODES SPECIFIC DATA ---
    'tl-sputnik1': {
        icon: '🛰️',
        title: 'Lanzamiento del Sputnik 1',
        subtitle: '4 de Octubre de 1957',
        html: `
            <p>El 4 de octubre de 1957, la Unión Soviética lanzó el Sputnik 1, el primer satélite artificial de la historia.</p>
            <p>Fue puesto en órbita mediante un cohete R-7 Semyorka bajo la dirección de Serguéi Koroliov. Emitía pitidos acústicos regulares que podían ser captados en todo el planeta.</p>
        `
    },
    'tl-sputnik2': {
        icon: '🐕',
        title: 'Lanzamiento del Sputnik 2',
        subtitle: '3 de Noviembre de 1957',
        html: `
            <p>La Unión Soviética lanzó el Sputnik 2 el 3 de noviembre de 1957, menos de un mes después del Sputnik 1.</p>
            <p>Transportaba a Laika, el primer ser vivo en orbitar la Tierra. La nave pesaba 1.120 libras (unos 508 kg) y permaneció en órbita durante casi 200 días.</p>
        `
    },
    'tl-nasa': {
        icon: '🏢',
        title: 'Fundación de la NASA',
        subtitle: '29 de Julio de 1958',
        html: `
            <p>En 1958 se creó la NASA para coordinar el programa espacial estadounidense en respuesta a los hitos espaciales de la Unión Soviética, firmándose la Ley de Aeronáutica y del Espacio.</p>
        `
    },
    'tl-gagarin': {
        icon: '👨‍🚀',
        title: 'Yuri Gagarin en Órbita',
        subtitle: '12 de Abril de 1961',
        html: `
            <p>El piloto de pruebas soviético Yuri Gagarin se convierte en el primer ser humano en viajar al espacio exterior a bordo de la nave Vostok 1.</p>
        `
    },
    'tl-apollo': {
        icon: '🌕',
        title: 'Llegada a la Luna',
        subtitle: '20 de Julio de 1969',
        html: `
            <p>La misión norteamericana Apolo 11 desciende sobre la Luna, marcando el pico más importante de la carrera espacial militar y propagandística de la época.</p>
        `
    },
    'tl-present': {
        icon: '🌌',
        title: 'Conexión con el presente',
        subtitle: 'El Legado Espacial hoy',
        html: `
            <p>El Sputnik 1 marcó el comienzo de la era espacial que continúa hasta hoy. Gracias a los avances iniciados durante aquella competencia, actualmente utilizamos satélites para la navegación GPS, las comunicaciones, internet, la meteorología y la observación de la Tierra.</p>
            <p>Además, la exploración espacial sigue siendo un espacio de competencia y cooperación internacional. Países como Estados Unidos, China, India y otros continúan desarrollando programas espaciales, mientras empresas como SpaceX participan activamente en la exploración del espacio.</p>
        `
    }
};


// --- 3. MODAL DIALOG DISPLAY LOGIC ---
const modalBackdrop = document.getElementById('info-modal');
const modalPlaceholder = document.getElementById('modal-body-placeholder');
const modalCloseBtn = document.getElementById('modal-close');

function openModal(dataId) {
    const data = modalContentData[dataId];
    if (!data) return;
    
    // Inject HTML layout inside modal directly in Spanish
    modalPlaceholder.innerHTML = `
        <div class="modal-detail-header">
            <div class="card-icon" style="font-size: 3rem; margin-bottom: 0.5rem;">${data.icon}</div>
            <h3 class="modal-detail-title">${data.title}</h3>
            <div class="modal-detail-subtitle">${data.subtitle}</div>
        </div>
        <div class="modal-detail-body">
            ${data.html}
        </div>
    `;
    
    modalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden'; // Disable page scrolling
}

function closeModal() {
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = ''; // Restore page scrolling
    setTimeout(() => {
        modalPlaceholder.innerHTML = '';
    }, 400);
}

// Attach Event Listeners to cards
document.querySelectorAll('.card-interactive').forEach(card => {
    card.addEventListener('click', () => {
        const targetId = card.getAttribute('data-target');
        openModal(targetId);
    });
});

// Attach Event Listeners to timeline cards/nodes
document.querySelectorAll('.timeline-node').forEach(node => {
    node.addEventListener('click', () => {
        const targetId = node.getAttribute('data-event');
        openModal(targetId);
    });
});

// Close modal triggers
modalCloseBtn.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
        closeModal();
    }
});

// Keyboard close handler (Escape key)
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('active')) {
        closeModal();
    }
});


// --- 4. WEB AUDIO API SPUTNIK SOUND SYNTHESIZER ---
let audioCtx = null;
let isPlaying = false;
let beaconTimerId = null;

const playSoundBtn = document.getElementById('play-sound-btn');
const navBeaconBtn = document.getElementById('beacon-btn');
const audioDot = document.getElementById('audio-status-dot');
const freqSlider = document.getElementById('freq-slider');
const speedSlider = document.getElementById('speed-slider');

const playBtnTextSpan = document.getElementById('play-btn-text');
const headerBeaconTextSpan = document.getElementById('header-beacon-text');
const freqLabel = document.getElementById('freq-label');
const speedLabel = document.getElementById('speed-label');

// Pulsing visual indicator (Sputnik signal SVG waves)
const sputnikWaves = document.querySelectorAll('.pulse-wave');

function initAudioContext() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
}

function playBeep() {
    if (!audioCtx) return;
    
    const now = audioCtx.currentTime;
    
    // Create synthesizer nodes
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    // Wave type: Sputnik had a rich analog sound
    osc.type = 'sine';
    
    // Pitch configuration (frequency)
    const frequency = parseFloat(freqSlider.value);
    osc.frequency.setValueAtTime(frequency, now);
    
    // Pulse envelope (volume)
    gainNode.gain.setValueAtTime(0, now);
    gainNode.gain.linearRampToValueAtTime(0.3, now + 0.015); // Fast attack
    gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.28); // Smooth decay
    
    // Start and stop oscillator
    osc.start(now);
    osc.stop(now + 0.3); // beep duration
    
    // Trigger pulse visual wave animations synced with audio beep
    sputnikWaves.forEach(wave => {
        wave.style.animation = 'none';
        wave.offsetHeight; // Force reflow
        wave.style.animation = 'waveSignal 1.2s cubic-bezier(0.1, 0.8, 0.3, 1) forwards';
    });
}

function startTransmitter() {
    initAudioContext();
    isPlaying = true;
    
    // Enable sliders
    freqSlider.disabled = false;
    speedSlider.disabled = false;
    
    // Update button states
    playSoundBtn.classList.add('playing');
    navBeaconBtn.classList.add('active');
    audioDot.classList.add('active');
    
    // Update labels text
    playBtnTextSpan.textContent = 'Detener Señal';
    headerBeaconTextSpan.textContent = 'Transmisor: ACTIVO';
    
    // Trigger first beep immediately
    playBeep();
    
    // Start interval schedule loop
    scheduleBeaconLoop();
}

function stopTransmitter() {
    isPlaying = false;
    
    // Clear timer
    if (beaconTimerId) {
        clearInterval(beaconTimerId);
        beaconTimerId = null;
    }
    
    // Disable sliders
    freqSlider.disabled = true;
    speedSlider.disabled = true;
    
    // Update buttons states
    playSoundBtn.classList.remove('playing');
    navBeaconBtn.classList.remove('active');
    audioDot.classList.remove('active');
    
    // Update labels text
    playBtnTextSpan.textContent = 'Emitir Señal';
    headerBeaconTextSpan.textContent = 'Transmisor: APAGADO';
    
    // Stop wave animations
    sputnikWaves.forEach(wave => {
        wave.style.animation = '';
    });
}

function scheduleBeaconLoop() {
    if (beaconTimerId) {
        clearInterval(beaconTimerId);
    }
    const interval = parseInt(speedSlider.value);
    beaconTimerId = setInterval(() => {
        if (isPlaying) {
            playBeep();
        }
    }, interval);
}

// Play buttons listeners
playSoundBtn.addEventListener('click', () => {
    if (isPlaying) {
        stopTransmitter();
    } else {
        startTransmitter();
    }
});

navBeaconBtn.addEventListener('click', () => {
    if (isPlaying) {
        stopTransmitter();
    } else {
        startTransmitter();
    }
});

// Slider handlers
freqSlider.addEventListener('input', () => {
    const value = freqSlider.value;
    freqLabel.textContent = `Frecuencia de Tono: ${value} Hz`;
});

speedSlider.addEventListener('input', () => {
    const value = speedSlider.value;
    speedLabel.textContent = `Intervalo: ${value} ms`;
    
    // Reschedule the loop dynamically if playing
    if (isPlaying) {
        scheduleBeaconLoop();
    }
});

// Page Initialization Logging
document.addEventListener('DOMContentLoaded', () => {
    console.log("🛰️ Transmisor Sputnik listo. Sistemas en verde.");
});
