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
        <p style="margin-top: 10px; color: #5d5d6e; font-size: 0.92rem; line-height: 1.6;"><strong>Cybersecurity Professional Profile:</strong> Early-career Network/IT specialist possessing a strong core in LAN/WAN validation, Cisco router settings, and automated ruleset parsing systems. Currently pursuing her Master of Science in Cybersecurity at Lewis University (GPA: 3.9/4.0).</p>`,
    
    'comp-laptop': `
        <h2 style="font-family: 'Fredoka', sans-serif; color: #4e2a59; font-size: 1.25rem;">💻 Project: AI Firewall Security Policy Tool</h2>
        <div style="margin-top: 10px; color: #5d5d6e; font-size: 0.88rem; line-height: 1.55;">
            <p style="margin-bottom: 8px;">• Developed a core educational security parsing utility at Lewis University converting natural plain-English server requirements directly into functional Linux iptables parameters.</p>
            <p style="margin-bottom: 8px;">• Enforces absolute least-privilege logic across connection frameworks by maintaining a strict, default-deny network posture blueprint.</p>
            <p>• Automatically flags risky configurations such as broad SSH exposure and demonstrates business translation into security controls.</p>
        </div>`,
    
    'comp-coffee': `
        <h2 style="font-family: 'Fredoka', sans-serif; color: #4e2a59; font-size: 1.25rem;">☕ Current Coffee Order</h2>
        <div style="background: #fff3f5; border: 2px dashed #f9a3b8; padding: 14px; border-radius: 12px; margin-top: 12px;">
            <p style="color: #22222a; font-weight: 700; font-size: 0.95rem;">Order: Caramel Macchiato, Extra Hot, Extra Whipping Cream</p>
            <p style="color: #5d5d6e; font-size: 0.88rem; margin-top: 4px;">Status: Actively fueling late-night lab evaluations</p>
        </div>`,
    
    'comp-tedx': `
        <h2 style="font-family: 'Fredoka', sans-serif; color: #4e2a59; font-size: 1.25rem;">🎙️ TEDxLewisUniversity Speaker</h2>
        <p style="margin-top: 10px; color: #5d5d6e; font-size: 0.88rem; line-height: 1.55;">Delivered a main-stage presentation focused on exploring international student hiring barriers, breaking down systemic workforce communication gaps, and uncovering professional discovery opportunities.</p>
        <p style="color: #5d5d6e; font-size: 0.88rem; margin-top: 4px;"><a href="https://www.youtube.com/watch?v=HxbVofakGqA" target="_blank" rel="noopener noreferrer">Watch the Talk</a></p>`,
    
    'comp-router': `
        <h2 style="font-family: 'Fredoka', sans-serif; color: #4e2a59; font-size: 1.25rem;">📟 IT Analyst Intern // eFusion Solutions</h2>
        <div style="margin-top: 10px; color: #5d5d6e; font-size: 0.88rem; line-height: 1.55;">
            <p style="margin-bottom: 6px;">• Resolved 30+ weekly enterprise support tickets covering Windows systems, apps, remote desktop utilities, and complex VPN topology troubleshooting.</p>
            <p style="margin-bottom: 6px;">• Audited and tracked performance logs across 15+ remote server instances leveraging PRTG arrays, Sophos tracking agents, and Webroot filters.</p>
            <p style="margin-bottom: 6px;">• Conducted packet analysis using Wireshark to isolate telemetry variations, tracking layer-2/layer-3 transport loops, TCP flags, and DNS system faults.</p>
            <p>• Supported senior administrators during remote network deployments and managed structured change documentation workflows.</p>
        </div>`,
    
    'comp-book': `
        <h2 style="font-family: 'Fredoka', sans-serif; color: #4e2a59; font-size: 1.25rem;">📚 Academic Research Core</h2>
        <div style="margin-top: 10px; color: #5d5d6e; font-size: 0.88rem; line-height: 1.55;">
            <p style="margin-bottom: 8px;"><strong>• Authentify AI:</strong> Engineered a robust deep learning deepfake detection model coupling YOLOv5 face extraction with a custom CNN utilizing long-range attention fields, yielding a 92% verification response over 10,000+ reference image sets.</p>
            <p><strong>• Blockchain Decentralized Cloud:</strong> Designed a decentralized storage array using Ethereum smart contracts, SHA-256 validation matrices, and IPFS integration to maximize enterprise file reliability metrics.</p>
        </div>`,
    
    'comp-cat': `
        <h2 style="font-family: 'Fredoka', sans-serif; color: #4e2a59; font-size: 1.25rem;">🐱 Google Search Priority Program Suite</h2>
        <p style="margin-top: 10px; color: #5d5d6e; font-size: 0.88rem; line-height: 1.55;">Active evaluation analyst within Google's user research collective, executing usability, performance, and security testing tracks over emerging large-scale generative discovery features and model interfaces.</p>`,
    
    'comp-medal': `
        <h2 style="font-family: 'Fredoka', sans-serif; color: #4e2a59; font-size: 1.25rem;">🏆 Competitions & Leadership Indexes</h2>
        <div style="margin-top: 10px; color: #5d5d6e; font-size: 0.88rem; line-height: 1.55;">
            <p style="margin-bottom: 8px;"><strong>• 3rd Place Winner:</strong> Capture the Flame CTF Advanced Track at UIC, clearing challenges spanning network digital forensics, complex OSINT mapping, and vulnerability resolution loops.</p>
            <p><strong>• National Cyber League:</strong> Ranked 466 out of 6,981 competitive candidates within the National Cyber Skyline league matrix.</p>
        </div>`,
    
    'comp-keyboard': `
        <h2 style="font-family: 'Fredoka', sans-serif; color: #4e2a59; font-size: 1.25rem;">⌨️ System Controls & Automation Tools</h2>
        <p style="margin-top: 10px; color: #5d5d6e; font-size: 0.88rem; line-height: 1.55;">Utilizing Linux-based environments, PowerShell script loops, and Python (Pandas/Matplotlib) orchestration to validate course labs and maintain system logs. Holds an active Claude 101 certification.</p>`,
    
    'badge-ga': `
        <h2 style="font-family: 'Fredoka', sans-serif; color: #4e2a59; font-size: 1.25rem;">🏢 Academic Systems Assistant // Lewis University</h2>
        <div style="margin-top: 10px; color: #5d5d6e; font-size: 0.88rem; line-height: 1.55;">
            <p style="margin-bottom: 6px;">• Supports master operational data profiles and access guidance for more than 200 operational users per term.</p>
            <p style="margin-bottom: 6px;">• Maintains Master Course List data architecture to protect records accessibility for staff and university leads.</p>
            <p>• Authors targeted newsletters via Constant Contact, lifting tracking engagement metrics by 30% and student activity by 60%.</p>
        </div>`,

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
function applyAsset3DPhysics(e) {
    const asset = this.querySelector('.premium-3d-asset');
    if (!asset) return;
    
    const bounds = this.getBoundingClientRect();
    const centerX = bounds.left + bounds.width / 2;
    const centerY = bounds.top + bounds.height / 2;
    
    // Calculates localized tilt
    const rotateX = (centerY - e.clientY) / 2.5;
    const rotateY = (e.clientX - centerX) / 2.5;
    
    // Only applies to items with .premium-3d-asset inside a grid compartment
    asset.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(25px) scale(1.1)`;
}

function clearAsset3DPhysics() {
    const asset = this.querySelector('.premium-3d-asset');
    if (asset) {
        asset.style.transform = 'translateZ(0px) rotateX(0deg) rotateY(0deg) scale(1)';
    }
}

function initPremiumAssetPhysics() {
    const hosts = document.querySelectorAll('.mini-toy-compartment');
    hosts.forEach(host => {
        host.addEventListener('mousemove', applyAsset3DPhysics);
        host.addEventListener('mouseleave', clearAsset3DPhysics);
    });
}

function destroyPremiumAssetPhysics() {
    const hosts = document.querySelectorAll('.mini-toy-compartment');
    hosts.forEach(host => {
        host.removeEventListener('mousemove', applyAsset3DPhysics);
        host.removeEventListener('mouseleave', clearAsset3DPhysics);
        const asset = host.querySelector('.premium-3d-asset');
        if (asset) asset.style.transform = 'none';
    });
}