// Central Controller Engine Links
const viewToggleBtn = document.getElementById('viewToggleBtn');
const toggleText = document.getElementById('toggleText');
const standardView = document.getElementById('standardView');
const jazzView = document.getElementById('jazzView');

viewToggleBtn.addEventListener('click', () => {
    viewToggleBtn.classList.toggle('active-mode');
    const isJazzMode = viewToggleBtn.classList.contains('active-mode');
    
    if (isJazzMode) {
        standardView.classList.remove('active-view');
        jazzView.classList.add('active-view');
        toggleText.innerText = "Back to Standard";
        initPremiumAssetPhysics();
    } else {
        jazzView.classList.remove('active-view');
        standardView.classList.add('active-view');
        toggleText.innerText = "Jazz It Up!";
        destroyPremiumAssetPhysics();
    }
});

/**
 * ========================================================
 * HIGH-PERFORMANCE LOCALIZED IMAGE 3D TILT ROTATION SYSTEM
 * ========================================================
 */
function applyAsset3DPhysics(e) {
    const asset = this.querySelector('.premium-3d-asset');
    if (!asset) return;
    
    const bounds = this.getBoundingClientRect();
    const centerX = bounds.left + bounds.width / 2;
    const centerY = bounds.top + bounds.height / 2;
    
    // Calculates clean localized tilt multipliers relative to cursor position
    const rotateX = (centerY - e.clientY) / 2.5;
    const rotateY = (e.clientX - centerX) / 2.5;
    
    // Extrudes image forward along Z-index out of its compartment
    asset.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(25px) scale(1.1)`;
}

function clearAsset3DPhysics() {
    const asset = this.querySelector('.premium-3d-asset');
    if (asset) {
        asset.style.transform = 'translateZ(0px) rotateX(0deg) rotateY(0deg) scale(1)';
    }
}

function initPremiumAssetPhysics() {
    // Hooks calculations onto both the main character chamber and small grids
    const hosts = document.querySelectorAll('.mini-toy-compartment, .figure-chamber');
    hosts.forEach(host => {
        host.addEventListener('mousemove', applyAsset3DPhysics);
        host.addEventListener('mouseleave', clearAsset3DPhysics);
    });
}

function destroyPremiumAssetPhysics() {
    const hosts = document.querySelectorAll('.mini-toy-compartment, .figure-chamber');
    hosts.forEach(host => {
        host.removeEventListener('mousemove', applyAsset3DPhysics);
        host.removeEventListener('mouseleave', clearAsset3DPhysics);
        const asset = host.querySelector('.premium-3d-asset');
        if (asset) asset.style.transform = 'none';
    });
}

function wavePlant() {
    const plantImg = document.getElementById('plantImg');
    plantImg.classList.add('wave-action');
    setTimeout(() => { plantImg.classList.remove('wave-action'); }, 800);
}

/**
 * Packaging Vocal Sound Module Simulation Trigger
 */
function activateVoiceAI(event) {
    event.stopPropagation();
    const chamber = document.querySelector('.figure-chamber');
    
    if (chamber.classList.contains('ai-talking')) return;
    chamber.classList.add('ai-talking');
    
    setTimeout(() => {
        chamber.classList.remove('ai-talking');
        openDrawer('ai-voice-response');
    }, 2200);
}

// Clean Professional Data Registry Matrix mapping directly to modal fields
const drawerContentRegistry = {
    'comp-doll': `
        <h2 style="font-family: 'Fredoka', sans-serif; color: #4e2a59; font-size: 1.4rem;">🧕🏽 Aaileen Sarwar Syed</h2>
        <p style="margin-top: 10px; color: #5d5d6e; font-size: 0.92rem; line-height: 1.6;">
            <strong>Cybersecurity MS Graduate.</strong> IT/networking learner. AI tools enthusiast. TEDx speaker. CTF competitor.
            Currently building a career around troubleshooting, security fundamentals, networking, AI-assisted workflows, and making tech easier to understand.
        </p>
        <p style="margin-top: 10px; color: #4e2a59; font-weight: 800; font-size: 0.9rem;">
            Side quest status: actively building, applying, studying, and caffeinating.
        </p>`,

    'comp-laptop': `
        <h2 style="font-family: 'Fredoka', sans-serif; color: #4e2a59; font-size: 1.25rem;">💻 AI-Assisted Firewall Rule Generator</h2>
        <div style="margin-top: 10px; color: #5d5d6e; font-size: 0.88rem; line-height: 1.55;">
            <p style="margin-bottom: 8px;">Built an educational security tool that converts plain-English server/network requirements into Linux iptables firewall rules.</p>
            <p style="margin-bottom: 8px;">Uses a default-deny model, explicit allow rules, and least-privilege reasoning.</p>
            <p>Flags risky configurations like broad SSH exposure and explains the security logic behind each rule.</p>
        </div>`,

    'comp-coffee': `
        <h2 style="font-family: 'Fredoka', sans-serif; color: #4e2a59; font-size: 1.25rem;">☕ Fuel System</h2>
        <div style="background: #fff3f5; border: 2px dashed #f9a3b8; padding: 14px; border-radius: 12px; margin-top: 12px;">
            <p style="color: #22222a; font-weight: 700; font-size: 0.95rem;">Current stack: coffee, curiosity, and one too many tabs open.</p>
            <p style="color: #5d5d6e; font-size: 0.88rem; margin-top: 4px;">Used for: late-night labs, job applications, cert studying, and pretending subnetting is emotionally simple.</p>
        </div>`,

    'comp-tedx': `
    <h2 style="font-family: 'Fredoka', sans-serif; color: #4e2a59; font-size: 1.25rem;">🎙️ TEDxLewis University Speaker</h2>
    <p style="margin-top: 10px; color: #5d5d6e; font-size: 0.88rem; line-height: 1.55;">
        Delivered a TEDx talk focused on international student hiring barriers, communication, and opportunity.
        This shaped how I think about confidence, technical communication, and taking up space professionally.
    </p>

    <div class="video-embed-wrapper">
        <iframe 
            src="https://www.youtube.com/embed/HxbVofakGqA"
            title="TEDxLewis University Talk"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen>
        </iframe>
    </div>
`,

    'comp-router': `
        <h2 style="font-family: 'Fredoka', sans-serif; color: #4e2a59; font-size: 1.25rem;">📟 Networking & IT Support Core</h2>
        <div style="margin-top: 10px; color: #5d5d6e; font-size: 0.88rem; line-height: 1.55;">
            <p style="margin-bottom: 6px;">Resolved 30+ weekly support tickets involving Windows systems, applications, remote access, VPN connectivity, endpoint alerts, and network troubleshooting.</p>
            <p style="margin-bottom: 6px;">Assisted with Cisco router/switch troubleshooting, LAN connectivity validation, IP assignments, DNS, DHCP, VPN, firewall logic, and remote desktop support.</p>
            <p>Configured and monitored 15+ client environments using PRTG, Sophos, and Webroot.</p>
        </div>`,

    'comp-book': `
        <h2 style="font-family: 'Fredoka', sans-serif; color: #4e2a59; font-size: 1.25rem;">📚 Project Shelf</h2>
        <div style="margin-top: 10px; color: #5d5d6e; font-size: 0.88rem; line-height: 1.55;">
            <p style="margin-bottom: 8px;"><strong>Authentify AI:</strong> Built a YOLOv5/CNN deepfake detection model with long-range attention and 92% detection accuracy on 10,000+ images.</p>
            <p><strong>Blockchain Cloud Security:</strong> Designed a decentralized storage system using Ethereum smart contracts, SHA-256 hashing, and IPFS integration.</p>
        </div>`,

    'comp-cat': `
        <h2 style="font-family: 'Fredoka', sans-serif; color: #4e2a59; font-size: 1.25rem;">🔍 Google Search Priority User Program</h2>
        <p style="margin-top: 10px; color: #5d5d6e; font-size: 0.88rem; line-height: 1.55;">
            Selected for a Google user research and feedback program focused on emerging AI-powered Search features,
            digital discovery experiences, relevance, usability, and search quality.
        </p>
        <p style="margin-top: 8px; color: #4e2a59; font-weight: 800; font-size: 0.88rem;">
            Translation: I have opinions about search results, and now they are useful.
        </p>`,

    'comp-medal': `
        <h2 style="font-family: 'Fredoka', sans-serif; color: #4e2a59; font-size: 1.25rem;">🏆 CTF & Cyber Competition Wins</h2>
        <div style="margin-top: 10px; color: #5d5d6e; font-size: 0.88rem; line-height: 1.55;">
            <p style="margin-bottom: 8px;"><strong>3rd Place:</strong> Capture the Flame CTF Advanced Track at University of Illinois Chicago.</p>
            <p><strong>National Cyber League:</strong> Ranked 466 out of 6,981 nationally through Cyber Skyline competition work.</p>
        </div>`,

    'comp-keyboard': `
        <h2 style="font-family: 'Fredoka', sans-serif; color: #4e2a59; font-size: 1.25rem;">⌨️ Tools I’m Building With</h2>
        <p style="margin-top: 10px; color: #5d5d6e; font-size: 0.88rem; line-height: 1.55;">
            Linux, Windows, VMware, PowerShell, Python, GitHub, Wireshark, Nmap, Excel, Power BI, Claude, Google AI Studio,
            and whatever tool helps me understand the problem faster without skipping the learning.
        </p>`,

    'badge-ga': `
        <h2 style="font-family: 'Fredoka', sans-serif; color: #4e2a59; font-size: 1.25rem;">🏢 Graduate Assistant Experience</h2>
        <div style="margin-top: 10px; color: #5d5d6e; font-size: 0.88rem; line-height: 1.55;">
            <p style="margin-bottom: 6px;">Supported academic and operational systems for 200+ students each semester.</p>
            <p style="margin-bottom: 6px;">Maintained records, reporting, process documentation, access guidance, and troubleshooting workflows.</p>
            <p>Designed newsletters and supported engagement work that increased partner engagement by 30% and participation by 60%.</p>
        </div>`
};

const drawerOverlay = document.getElementById('drawerOverlay');
const drawerInnerTarget = document.getElementById('drawerInnerTarget');

function openDrawer(key) {
    if (drawerContentRegistry[key]) {
        drawerInnerTarget.innerHTML = drawerContentRegistry[key];
        drawerOverlay.style.display = 'flex';
    }
}

function closeDrawer(e) {
    if (e.target === drawerOverlay) forceCloseDrawer();
}

function forceCloseDrawer() {
    drawerOverlay.style.display = 'none';
}

const themeToggleBtn = document.getElementById('themeToggleBtn');
const themeText = document.getElementById('themeText');
const themeIcon = document.getElementById('themeIcon');
const avatarDollImg = document.getElementById('avatarDollImg');

function applyTheme(theme) {
    const isDark = theme === 'dark';

    document.body.classList.toggle('dark-mode', isDark);

    if (themeText) themeText.innerText = isDark ? 'Light Mode' : 'Dark Mode';
    if (themeIcon) themeIcon.innerText = isDark ? '☀' : '☾';

    if (avatarDollImg) {
        const lightSrc = avatarDollImg.getAttribute('data-light-src');
        const darkSrc = avatarDollImg.getAttribute('data-dark-src');
        avatarDollImg.src = isDark ? darkSrc : lightSrc;
    }

    localStorage.setItem('portfolioTheme', theme);
}

const savedTheme = localStorage.getItem('portfolioTheme') || 'light';
applyTheme(savedTheme);

themeToggleBtn.addEventListener('click', () => {
    const currentlyDark = document.body.classList.contains('dark-mode');
    applyTheme(currentlyDark ? 'light' : 'dark');
});

/* ===================================================== */
/* CASE STUDY MODAL SYSTEM                               */
/* ===================================================== */

const caseStudyOverlay = document.getElementById('caseStudyOverlay');
const caseStudyInnerTarget = document.getElementById('caseStudyInnerTarget');

const caseStudyRegistry = {
    firewall: `
        <span class="case-study-kicker">AI + Network Security</span>
        <h2>AI-Assisted Firewall Rule and Network Security Policy Generator</h2>
        <p>
            This project is an educational cybersecurity tool that converts plain-English server or network requirements
            into Linux iptables firewall rules using a default-deny model.
        </p>

        <div class="case-study-metric-grid">
            <div class="case-study-metric">
                <strong>Default-Deny</strong>
                <span>Security posture</span>
            </div>
            <div class="case-study-metric">
                <strong>iptables</strong>
                <span>Linux firewall logic</span>
            </div>
            <div class="case-study-metric">
                <strong>AI-Assisted</strong>
                <span>Plain-English to rules</span>
            </div>
        </div>

        <h3>Problem</h3>
        <p>
            Firewall rule creation can be confusing for beginners because business requirements and technical rules
            are often written in very different language.
        </p>

        <h3>What I Built</h3>
        <ul>
            <li>A tool that takes plain-English requirements and translates them into example Linux iptables rules.</li>
            <li>A default-deny approach where only necessary traffic is explicitly allowed.</li>
            <li>Explanations for SSH, HTTP, HTTPS, and ICMP rule decisions.</li>
            <li>Risk flags for configurations such as broad SSH exposure.</li>
        </ul>

        <h3>What This Demonstrates</h3>
        <ul>
            <li>Firewall rule logic and least-privilege thinking.</li>
            <li>Network security policy translation.</li>
            <li>AI-assisted technical workflows without skipping security reasoning.</li>
            <li>Ability to explain security controls clearly to technical and non-technical audiences.</li>
        </ul>

        <div class="case-study-placeholder">
            <strong>Coming soon:</strong> screenshots, architecture diagram, input/output examples, risk scoring logic,
            sample iptables rules, and project walkthrough.
        </div>
    `,

    authentify: `
        <span class="case-study-kicker">AI + Security Research</span>
        <h2>Authentify AI — Long-Range Attention for Deepfake Detection</h2>
        <p>
            Authentify AI is a deepfake detection project using YOLOv5 face extraction and a CNN-based model with
            long-range attention to classify manipulated visual content.
        </p>

        <div class="case-study-metric-grid">
            <div class="case-study-metric">
                <strong>92%</strong>
                <span>Detection accuracy</span>
            </div>
            <div class="case-study-metric">
                <strong>10k+</strong>
                <span>Image dataset</span>
            </div>
            <div class="case-study-metric">
                <strong>YOLOv5</strong>
                <span>Face extraction</span>
            </div>
        </div>

        <h3>Problem</h3>
        <p>
            Deepfakes create risks around identity trust, misinformation, and digital authenticity. This project explored
            how computer vision can support verification workflows.
        </p>

        <h3>What I Built</h3>
        <ul>
            <li>Used YOLOv5 for face detection and preprocessing.</li>
            <li>Built a CNN model enhanced with long-range attention concepts.</li>
            <li>Evaluated performance across a 10,000+ image dataset.</li>
            <li>Documented model behavior, accuracy, and security relevance.</li>
        </ul>

        <div class="case-study-placeholder">
            <strong>Coming soon:</strong> model pipeline diagram, sample preprocessing screenshots, evaluation metrics,
            confusion matrix, and project summary.
        </div>
    `,

    blockchain: `
        <span class="case-study-kicker">Blockchain + Cloud Security</span>
        <h2>Blockchain Technique for Decentralized Cloud Environments</h2>
        <p>
            This project explored decentralized file storage using Ethereum smart contracts, SHA-256 hashing,
            and IPFS integration to improve storage reliability and integrity verification.
        </p>

        <div class="case-study-metric-grid">
            <div class="case-study-metric">
                <strong>IPFS</strong>
                <span>Decentralized storage</span>
            </div>
            <div class="case-study-metric">
                <strong>SHA-256</strong>
                <span>Integrity validation</span>
            </div>
            <div class="case-study-metric">
                <strong>Ethereum</strong>
                <span>Smart contracts</span>
            </div>
        </div>

        <h3>Problem</h3>
        <p>
            Traditional centralized cloud storage can create concerns around data reliability, tampering,
            and single points of failure.
        </p>

        <h3>What I Built</h3>
        <ul>
            <li>Designed a decentralized file storage workflow using IPFS.</li>
            <li>Used SHA-256 hashing to support integrity checks.</li>
            <li>Integrated Ethereum smart contract concepts for verification and trust.</li>
            <li>Explored how decentralized architecture can support cloud security goals.</li>
        </ul>

        <div class="case-study-placeholder">
            <strong>Coming soon:</strong> architecture diagram, screenshots, smart contract logic, workflow explanation,
            and security analysis.
        </div>
    `
};

function openCaseStudy(key) {
    if (!caseStudyRegistry[key]) return;

    caseStudyInnerTarget.innerHTML = caseStudyRegistry[key];
    caseStudyOverlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeCaseStudy(event) {
    if (event.target === caseStudyOverlay) {
        forceCloseCaseStudy();
    }
}

function forceCloseCaseStudy() {
    caseStudyOverlay.style.display = 'none';
    caseStudyInnerTarget.innerHTML = '';
    document.body.style.overflow = '';
}