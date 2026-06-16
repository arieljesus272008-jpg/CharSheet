const themes = {
    classic: {
        '--bg-os': '#008080', '--window-bg': '#ece9d8', '--window-border': '#0054e3',
        '--window-title': 'linear-gradient(to bottom, #0058e6 0%, #3a93ff 10%, #004cb5 100%)',
        '--panel-inputs-bg': '#ffffff', '--panel-inputs-text': '#000000',
        '--card-border': '#0054e3', '--card-text-accent': '#ff0055', '--card-bg': '#ffffff',
        '--block-bg': '#ffffff', '--block-border': '#000000', '--title-tag-bg': '#0054e3', '--text-color': '#333333'
    },
    classicOlive: {
        '--bg-os': '#7a8e57', '--window-bg': '#efebd3', '--window-border': '#6f834a',
        '--window-title': 'linear-gradient(to bottom, #8fa764, #5c6f3d)',
        '--panel-inputs-bg': '#faf8f0', '--panel-inputs-text': '#2d3b1e',
        '--card-border': '#6f834a', '--card-text-accent': '#b35900', '--card-bg': '#faf8f0',
        '--block-bg': '#e4dec2', '--block-border': '#3d4a27', '--title-tag-bg': '#6f834a', '--text-color': '#212a14'
    },
    classicSilver: {
        '--bg-os': '#616a76', '--window-bg': '#f0f0f3', '--window-border': '#80808a',
        '--window-title': 'linear-gradient(to bottom, #b5b5c0, #737383)',
        '--panel-inputs-bg': '#ffffff', '--panel-inputs-text': '#1c1c1f',
        '--card-border': '#737383', '--card-text-accent': '#0066cc', '--card-bg': '#ffffff',
        '--block-bg': '#e1e1e6', '--block-border': '#404045', '--title-tag-bg': '#737383', '--text-color': '#1a1a1c'
    },
    win95: {
        '--bg-os': '#4b7a7a', '--window-bg': '#c0c0c0', '--window-border': '#808080',
        '--window-title': 'linear-gradient(to right, #000080, #1084d0)',
        '--panel-inputs-bg': '#ffffff', '--panel-inputs-text': '#000000',
        '--card-border': '#000080', '--card-text-accent': '#000080', '--card-bg': '#ffffff',
        '--block-bg': '#c0c0c0', '--block-border': '#000000', '--title-tag-bg': '#000080', '--text-color': '#000000'
    },
    macOS9: {
        '--bg-os': '#5c758c', '--window-bg': '#dcdcdc', '--window-border': '#666666',
        '--window-title': 'linear-gradient(to bottom, #999999, #cccccc)',
        '--panel-inputs-bg': '#ffffff', '--panel-inputs-text': '#000000',
        '--card-border': '#333333', '--card-text-accent': '#444444', '--card-bg': '#ffffff',
        '--block-bg': '#eeeeee', '--block-border': '#666666', '--title-tag-bg': '#666666', '--text-color': '#111111'
    },
    neon: {
        '--bg-os': '#130f3a', '--window-bg': '#2b1f87', '--window-border': '#8426cd',
        '--window-title': 'linear-gradient(to bottom, #8426cd, #130f3a)',
        '--panel-inputs-bg': '#130f3a', '--panel-inputs-text': '#1bfca2',
        '--card-border': '#1bfca2', '--card-text-accent': '#8426cd', '--card-bg': '#130f3a',
        '--block-bg': '#2b1f87', '--block-border': '#29b2cc', '--title-tag-bg': '#8426cd', '--text-color': '#ffffff'
    },
    synthwave: {
        '--bg-os': '#240d36', '--window-bg': '#ff007f', '--window-border': '#390099',
        '--window-title': 'linear-gradient(to right, #ff0055, #ff5400)',
        '--panel-inputs-bg': '#180030', '--panel-inputs-text': '#ffbd00',
        '--card-border': '#ff007f', '--card-text-accent': '#ff007f', '--card-bg': '#180030',
        '--block-bg': '#240d36', '--block-border': '#ffbd00', '--title-tag-bg': '#ff5400', '--text-color': '#ffffff'
    },
    toxicGreen: {
        '--bg-os': '#0a0f0d', '--window-bg': '#1a2421', '--window-border': '#39ff14',
        '--window-title': 'linear-gradient(to right, #1f3a2b, #0a0f0d)',
        '--panel-inputs-bg': '#0a0f0d', '--panel-inputs-text': '#39ff14',
        '--card-border': '#39ff14', '--card-text-accent': '#00ffcc', '--card-bg': '#111615',
        '--block-bg': '#1a2421', '--block-border': '#39ff14', '--title-tag-bg': '#1f3a2b', '--text-color': '#ffffff'
    },
    tokyoDrift: {
        '--bg-os': '#0d0e15', '--window-bg': '#1b1d2a', '--window-border': '#ff0077',
        '--window-title': 'linear-gradient(to right, #00f0ff, #ff0077)',
        '--panel-inputs-bg': '#0d0e15', '--panel-inputs-text': '#00f0ff',
        '--card-border': '#ff0077', '--card-text-accent': '#00f0ff', '--card-bg': '#0d0e15',
        '--block-bg': '#1b1d2a', '--block-border': '#00f0ff', '--title-tag-bg': '#ff0077', '--text-color': '#ffffff'
    },
    matrix: {
        '--bg-os': '#000000', '--window-bg': '#0d0d0d', '--window-border': '#00ff00',
        '--window-title': 'linear-gradient(to bottom, #003300, #000000)',
        '--panel-inputs-bg': '#050f05', '--panel-inputs-text': '#00ff00',
        '--card-border': '#00ff00', '--card-text-accent': '#00ff00', '--card-bg': '#000000',
        '--block-bg': '#050f05', '--block-border': '#00ff00', '--title-tag-bg': '#005500', '--text-color': '#00ff00'
    },
    sunset: {
        '--bg-os': '#2bbaa5', '--window-bg': '#faecb6', '--window-border': '#f96635',
        '--window-title': 'linear-gradient(to bottom, #f96635, #f9a822)',
        '--panel-inputs-bg': '#faecb6', '--panel-inputs-text': '#f96635',
        '--card-border': '#f96635', '--card-text-accent': '#f96635', '--card-bg': '#faecb6',
        '--block-bg': '#93d3ae', '--block-border': '#2bbaa5', '--title-tag-bg': '#f9a822', '--text-color': '#000000'
    },
    desertMirage: {
        '--bg-os': '#d4a373', '--window-bg': '#f4f1de', '--window-border': '#e07a5f',
        '--window-title': 'linear-gradient(to right, #e07a5f, #f4f1de)',
        '--panel-inputs-bg': '#ffffff', '--panel-inputs-text': '#3d5a80',
        '--card-border': '#e07a5f', '--card-text-accent': '#e07a5f', '--card-bg': '#f4f1de',
        '--block-bg': '#f4f1de', '--block-border': '#3d5a80', '--title-tag-bg': '#e07a5f', '--text-color': '#2f3e46'
    },
    autumn: {
        '--bg-os': '#582f0e', '--window-bg': '#ddb892', '--window-border': '#7f5539',
        '--window-title': 'linear-gradient(to right, #9c6644, #7f5539)',
        '--panel-inputs-bg': '#ede0d4', '--panel-inputs-text': '#4a3728',
        '--card-border': '#7f5539', '--card-text-accent': '#9c6644', '--card-bg': '#ede0d4',
        '--block-bg': '#b7b7a4', '--block-border': '#582f0e', '--title-tag-bg': '#7f5539', '--text-color': '#211a14'
    },
    vintagePaper: {
        '--bg-os': '#3d3125', '--window-bg': '#d4c5b3', '--window-border': '#8c7864',
        '--window-title': 'linear-gradient(to bottom, #5a4b3c, #3d3125)',
        '--panel-inputs-bg': '#f4eae1', '--panel-inputs-text': '#4a3c31',
        '--card-border': '#5a4b3c', '--card-text-accent': '#8c7864', '--card-bg': '#eadacc',
        '--block-bg': '#f4eae1', '--block-border': '#5a4b3c', '--title-tag-bg': '#5a4b3c', '--text-color': '#2d2219'
    },
    cyberpunkYellow: {
        '--bg-os': '#111111', '--window-bg': '#fcee0a', '--window-border': '#000000',
        '--window-title': 'linear-gradient(to right, #000000, #333333)',
        '--panel-inputs-bg': '#ffffff', '--panel-inputs-text': '#000000',
        '--card-border': '#fcee0a', '--card-text-accent': '#00f0ff', '--card-bg': '#000000',
        '--block-bg': '#111111', '--block-border': '#fcee0a', '--title-tag-bg': '#fcee0a', '--text-color': '#ffffff'
    },
    crimson: {
        '--bg-os': '#222533', '--window-bg': '#8f9da9', '--window-border': '#b82a4b',
        '--window-title': 'linear-gradient(to bottom, #b82a4b, #222533)',
        '--panel-inputs-bg': '#f0f3f5', '--panel-inputs-text': '#b82a4b',
        '--card-border': '#b82a4b', '--card-text-accent': '#de2851', '--card-bg': '#f0f3f5',
        '--block-bg': '#8f9da9', '--block-border': '#222533', '--title-tag-bg': '#b82a4b', '--text-color': '#111111'
    },
    dracula: {
        '--bg-os': '#1e1f29', '--window-bg': '#282a36', '--window-border': '#ff79c6',
        '--window-title': 'linear-gradient(to right, #bd93f9, #ff79c6)',
        '--panel-inputs-bg': '#282a36', '--panel-inputs-text': '#50fa7b',
        '--card-border': '#bd93f9', '--card-text-accent': '#ff79c6', '--card-bg': '#1e1f29',
        '--block-bg': '#282a36', '--block-border': '#ff5555', '--title-tag-bg': '#bd93f9', '--text-color': '#f8f8f2'
    },
    abyssal: {
        '--bg-os': '#011627', '--window-bg': '#0b3c5d', '--window-border': '#00bfff',
        '--window-title': 'linear-gradient(to right, #011627, #0b3c5d)',
        '--panel-inputs-bg': '#011627', '--panel-inputs-text': '#00bfff',
        '--card-border': '#00bfff', '--card-text-accent': '#ff0077', '--card-bg': '#011627',
        '--block-bg': '#0b3c5d', '--block-border': '#00bfff', '--title-tag-bg': '#00bfff', '--text-color': '#ffffff'
    },
    voidPurple: {
        '--bg-os': '#090014', '--window-bg': '#1a0033', '--window-border': '#9d4edd',
        '--window-title': 'linear-gradient(to bottom, #7b2cbf, #1a0033)',
        '--panel-inputs-bg': '#090014', '--panel-inputs-text': '#e0aaff',
        '--card-border': '#9d4edd', '--card-text-accent': '#ff6b6b', '--card-bg': '#090014',
        '--block-bg': '#240046', '--block-border': '#9d4edd', '--title-tag-bg': '#7b2cbf', '--text-color': '#ffffff'
    },
    bloodMoon: {
        '--bg-os': '#100000', '--window-bg': '#2a0808', '--window-border': '#ff3333',
        '--window-title': 'linear-gradient(to right, #660000, #100000)',
        '--panel-inputs-bg': '#100000', '--panel-inputs-text': '#ff3333',
        '--card-border': '#ff3333', '--card-text-accent': '#ffffff', '--card-bg': '#1a0404',
        '--block-bg': '#2a0808', '--block-border': '#ffffff', '--title-tag-bg': '#ff3333', '--text-color': '#ffcccc'
    },
    muted: {
        '--bg-os': '#2a476c', '--window-bg': '#d6d1c2', '--window-border': '#41718a',
        '--window-title': 'linear-gradient(to bottom, #41718a, #7d6b7c)',
        '--panel-inputs-bg': '#e8e5da', '--panel-inputs-text': '#2a476c',
        '--card-border': '#2a476c', '--card-text-accent': '#7d6b7c', '--card-bg': '#e8e5da',
        '--block-bg': '#8ba9a1', '--block-border': '#2a476c', '--title-tag-bg': '#41718a', '--text-color': '#1f1f1f'
    },
    sakura: {
        '--bg-os': '#ffcad4', '--window-bg': '#ffe5ec', '--window-border': '#ff85a1',
        '--window-title': 'linear-gradient(to right, #ff85a1, #fbb1bd)',
        '--panel-inputs-bg': '#ffffff', '--panel-inputs-text': '#ff477e',
        '--card-border': '#ff85a1', '--card-text-accent': '#ff477e', '--card-bg': '#ffffff',
        '--block-bg': '#ffe5ec', '--block-border': '#ff85a1', '--title-tag-bg': '#ff85a1', '--text-color': '#4a2831'
    },
    matcha: {
        '--bg-os': '#adc1a3', '--window-bg': '#e0e9db', '--window-border': '#606c38',
        '--window-title': 'linear-gradient(to bottom, #606c38, #283618)',
        '--panel-inputs-bg': '#f4f7f2', '--panel-inputs-text': '#283618',
        '--card-border': '#606c38', '--card-text-accent': '#dda15e', '--card-bg': '#f4f7f2',
        '--block-bg': '#e0e9db', '--block-border': '#606c38', '--title-tag-bg': '#606c38', '--text-color': '#283618'
    },
    nordicIce: {
        '--bg-os': '#8d99ae', '--window-bg': '#edf2f4', '--window-border': '#2b2d42',
        '--window-title': 'linear-gradient(to right, #2b2d42, #8d99ae)',
        '--panel-inputs-bg': '#ffffff', '--panel-inputs-text': '#ef233c',
        '--card-border': '#2b2d42', '--card-text-accent': '#ef233c', '--card-bg': '#ffffff',
        '--block-bg': '#edf2f4', '--block-border': '#2b2d42', '--title-tag-bg': '#2b2d42', '--text-color': '#2b2d42'
    },
    lavenderFog: {
        '--bg-os': '#b3b3cc', '--window-bg': '#e6e6fa', '--window-border': '#7749a6',
        '--window-title': 'linear-gradient(to right, #7749a6, #b3b3cc)',
        '--panel-inputs-bg': '#ffffff', '--panel-inputs-text': '#5a3d7c',
        '--card-border': '#7749a6', '--card-text-accent': '#ff758c', '--card-bg': '#ffffff',
        '--block-bg': '#f0f0f8', '--block-border': '#7749a6', '--title-tag-bg': '#7749a6', '--text-color': '#2c1e3d'
    },
    gameboy: {
        '--bg-os': '#8b956d', '--window-bg': '#9bbc0f', '--window-border': '#0f380f',
        '--window-title': 'linear-gradient(to bottom, #306230, #0f380f)',
        '--panel-inputs-bg': '#8b956d', '--panel-inputs-text': '#0f380f',
        '--card-border': '#306230', '--card-text-accent': '#0f380f', '--card-bg': '#9bbc0f',
        '--block-bg': '#8b956d', '--block-border': '#0f380f', '--title-tag-bg': '#306230', '--text-color': '#0f380f'
    },
    evangelion01: {
        '--bg-os': '#1a002c', '--window-bg': '#70d6ff', '--window-border': '#8338ec',
        '--window-title': 'linear-gradient(to right, #8338ec, #3a0ca3)',
        '--panel-inputs-bg': '#1a002c', '--panel-inputs-text': '#ccff00',
        '--card-border': '#ccff00', '--card-text-accent': '#ff006e', '--card-bg': '#1a002c',
        '--block-bg': '#3a0ca3', '--block-border': '#ccff00', '--title-tag-bg': '#8338ec', '--text-color': '#ffffff'
    },
    steampunk: {
        '--bg-os': '#2b1a09', '--window-bg': '#b07d4e', '--window-border': '#613814',
        '--window-title': 'linear-gradient(to bottom, #874f1c, #2b1a09)',
        '--panel-inputs-bg': '#ffe3c2', '--panel-inputs-text': '#2b1a09',
        '--card-border': '#613814', '--card-text-accent': '#d4af37', '--card-bg': '#ffe3c2',
        '--block-bg': '#b07d4e', '--block-border': '#2b1a09', '--title-tag-bg': '#613814', '--text-color': '#1f1f1f'
    },
    minecraftOS: {
        '--bg-os': '#4a7227', '--window-bg': '#866043', '--window-border': '#5c3e26',
        '--window-title': 'linear-gradient(to bottom, #74543a, #443122)',
        '--panel-inputs-bg': '#312217', '--panel-inputs-text': '#ffffff',
        '--card-border': '#4a7227', '--card-text-accent': '#00aa00', '--card-bg': '#221710',
        '--block-bg': '#443122', '--block-border': '#4a7227', '--title-tag-bg': '#4a7227', '--text-color': '#ffffff'
    },
    bubblegum: {
        '--bg-os': '#ff70a6', '--window-bg': '#ff9770', '--window-border': '#ffbd00',
        '--window-title': 'linear-gradient(to right, #ff70a6, #ff9770)',
        '--panel-inputs-bg': '#ffffff', '--panel-inputs-text': '#ff70a6',
        '--card-border': '#ff70a6', '--card-text-accent': '#70d6ff', '--card-bg': '#ffffff',
        '--block-bg': '#ffedeb', '--block-border': '#ffbd00', '--title-tag-bg': '#ff70a6', '--text-color': '#4a001f'
    }
};

document.addEventListener("DOMContentLoaded", () => {
    // MANAGEMENT DE PESTAÑAS (WINDOWS MULTI-PANEL)
    const tabP1 = document.getElementById('tab-trigger-p1');
    const tabP2 = document.getElementById('tab-trigger-p2');
    const panelP1 = document.getElementById('panel-page-1');
    const panelP2 = document.getElementById('panel-page-2');
    const downloadZone = document.getElementById('output-download-zone');

    tabP1.addEventListener('click', () => {
        tabP1.classList.add('active'); tabP2.classList.remove('active');
        panelP1.classList.add('active-content'); panelP2.classList.remove('active-content');
        downloadZone.style.display = 'none';
    });
    tabP2.addEventListener('click', () => {
        tabP2.classList.add('active'); tabP1.classList.remove('active');
        panelP2.classList.add('active-content'); panelP1.classList.remove('active-content');
        downloadZone.style.display = 'none';
    });

    // DINÁMICA DE ENTRADA DE TEXTOS DE IDENTIDAD
    const fields = ['name', 'class', 'height', 'age', 'backstory', 'likes', 'dislikes', 'trivia'];
    fields.forEach(id => {
        const inputEl = document.getElementById(`input-${id}`);
        if (inputEl) {
            inputEl.addEventListener('input', () => {
                let val = inputEl.value;
                if (!val) {
                    if (id === 'backstory') val = "Ningún registro cargado en el sistema.";
                    else if (id === 'likes' || id === 'dislikes') val = "Variables vacías.";
                    else if (id === 'trivia') val = "Esperando indexación de anomalías...";
                    else val = "--------";
                }
                document.getElementById(`card-${id}`).innerText = val;
            });
        }
    });

    // DINÁMICA DE SLIDERS DE ATRIBUTOS
    ['str', 'agi', 'mag', 'res'].forEach(stat => {
        const slider = document.getElementById(`range-line-${stat}`);
        if (slider) {
            slider.addEventListener('input', () => {
                const val = slider.value;
                document.getElementById(`val-${stat}`).innerText = val;
                document.getElementById(`bar-${stat}`).style.width = `${val * 10}%`;
            });
        }
    });

    // SELECTOR GLOBAL DE TEMAS RETRO
    const themeSelector = document.getElementById('theme-selector');
    themeSelector.addEventListener('change', () => {
        const vars = themes[themeSelector.value];
        if (vars) {
            for (const [key, value] of Object.entries(vars)) {
                document.documentElement.style.setProperty(key, value);
            }
        }
    });

    // SELECTORES MANUALES PERSONALIZADOS
    const bgPicker = document.getElementById('custom-bg-picker');
    const accentPicker = document.getElementById('custom-accent-picker');
    const updateColors = () => {
        document.documentElement.style.setProperty('--bg-os', bgPicker.value);
        document.documentElement.style.setProperty('--card-text-accent', accentPicker.value);
        document.documentElement.style.setProperty('--window-border', accentPicker.value);
        document.documentElement.style.setProperty('--card-border', accentPicker.value);
        document.documentElement.style.setProperty('--title-tag-bg', accentPicker.value);
    };
    bgPicker.addEventListener('input', updateColors);
    accentPicker.addEventListener('input', updateColors);

    // --- CONFIGURACIÓN DE LAS 6 MATRICES CANVAS SIMULTÁNEAS (INCLUIDO LADO DERECHO E IZQUIERDO) ---
    const canvasConfig = {
        main: { canvasId: 'avatar-canvas', placeholderId: 'placeholder-text-main', padId: 'controls-pad-main', img: null, x: 0, y: 0, scale: 1 },
        item: { canvasId: 'item-canvas', placeholderId: 'placeholder-text-item', padId: 'controls-pad-item', img: null, x: 0, y: 0, scale: 1 },
        fbFront: { canvasId: 'canvas-fb-front', placeholderId: 'placeholder-fb-front', padId: 'pad-fb-front', img: null, x: 0, y: 0, scale: 1 },
        fbBack: { canvasId: 'canvas-fb-back', placeholderId: 'placeholder-fb-back', padId: 'pad-fb-back', img: null, x: 0, y: 0, scale: 1 },
        fbLeft: { canvasId: 'canvas-fb-left', placeholderId: 'placeholder-fb-left', padId: 'pad-fb-left', img: null, x: 0, y: 0, scale: 1 },
        fbRight: { canvasId: 'canvas-fb-right', placeholderId: 'placeholder-fb-right', padId: 'pad-fb-right', img: null, x: 0, y: 0, scale: 1 }
    };

    const redraw = (key) => {
        const c = canvasConfig[key];
        if (!c.img) return;
        const canvas = document.getElementById(c.canvasId);
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(c.img, c.x, c.y, c.img.width * c.scale, c.img.height * c.scale);
    };

    const initImage = (file, key) => {
        if (!file) return;
        const r = new FileReader();
        r.onload = (e) => {
            const img = new Image();
            img.crossOrigin = "anonymous"; // Parche anti-bloqueo para despliegues HTTP/GitHub Pages
            img.src = e.target.result;
            img.onload = () => {
                const c = canvasConfig[key];
                c.img = img;
                const canvas = document.getElementById(c.canvasId);
                document.getElementById(c.placeholderId).style.display = 'none';
                document.getElementById(c.padId).style.display = 'flex';
                
                let sW = canvas.width / img.width;
                let sH = canvas.height / img.height;
                c.scale = Math.min(sW, sH);
                c.x = (canvas.width - img.width * c.scale) / 2;
                c.y = (canvas.height - img.height * c.scale) / 2;
                redraw(key);
            };
        };
        r.readAsDataURL(file);
    };

    // Escuchas de archivos nativos
    document.getElementById('input-file').addEventListener('change', (e) => initImage(e.target.files[0], 'main'));
    document.getElementById('input-file-item').addEventListener('change', (e) => initImage(e.target.files[0], 'item'));
    document.getElementById('input-fbody-front').addEventListener('change', (e) => initImage(e.target.files[0], 'fbFront'));
    document.getElementById('input-fbody-back').addEventListener('change', (e) => initImage(e.target.files[0], 'fbBack'));
    document.getElementById('input-fbody-left').addEventListener('change', (e) => initImage(e.target.files[0], 'fbLeft'));
    document.getElementById('input-fbody-right').addEventListener('change', (e) => initImage(e.target.files[0], 'fbRight'));

    // Vinculación de pads direccionales matemáticos
    const bindPad = (key, prefix) => {
        document.getElementById(`btn-${prefix}-up`).addEventListener('click', () => { canvasConfig[key].y -= 15; redraw(key); });
        document.getElementById(`btn-${prefix}-down`).addEventListener('click', () => { canvasConfig[key].y += 15; redraw(key); });
        document.getElementById(`btn-${prefix}-left`).addEventListener('click', () => { canvasConfig[key].x -= 15; redraw(key); });
        document.getElementById(`btn-${prefix}-right`).addEventListener('click', () => { canvasConfig[key].x += 15; redraw(key); });
        document.getElementById(`btn-${prefix}-plus`).addEventListener('click', () => { canvasConfig[key].scale += 0.05; redraw(key); });
        document.getElementById(`btn-${prefix}-minus`).addEventListener('click', () => { canvasConfig[key].scale -= 0.05; redraw(key); });
    };

    bindPad('main', 'main'); bindPad('item', 'item');
    bindPad('fbFront', 'fb-front'); bindPad('fbBack', 'fb-back');
    bindPad('fbLeft', 'fb-left'); bindPad('fbRight', 'fb-right');


    // --- INYECTOR DINÁMICO DE PALETA PURA (MODEL SHEET) ---
    const purePaletteContainer = document.getElementById('pure-palette-container');
    const embeddedColorRow = document.getElementById('embedded-color-row');
    const btnAddColorSlot = document.getElementById('btn-add-color-slot');
    let paletteColors = ['#ff0055', '#00ff88', '#00aeff'];

    const renderPaletteNodes = () => {
        purePaletteContainer.innerHTML = '';
        embeddedColorRow.innerHTML = '';

        paletteColors.forEach((color, idx) => {
            // Nodo UI del Formulario
            const node = document.createElement('div');
            node.className = 'color-pure-node';
            node.style.backgroundColor = color;

            const picker = document.createElement('input');
            picker.type = 'color'; picker.value = color;
            picker.addEventListener('input', (e) => {
                paletteColors[idx] = e.target.value;
                node.style.backgroundColor = e.target.value;
                renderPaletteNodes();
            });

            const delBtn = document.createElement('button');
            delBtn.className = 'btn-remove-color'; delBtn.innerText = '×';
            delBtn.addEventListener('click', (e) => {
                e.stopPropagation(); paletteColors.splice(idx, 1); renderPaletteNodes();
            });

            node.appendChild(picker); node.appendChild(delBtn);
            purePaletteContainer.appendChild(node);

            // Clon de visualización estricta dentro del Lienzo Renderizable
            const embeddedNode = document.createElement('div');
            embeddedNode.className = 'emb-node';
            embeddedNode.style.backgroundColor = color;
            embeddedColorRow.appendChild(embeddedNode);
        });
    };
    btnAddColorSlot.addEventListener('click', () => { paletteColors.push('#888888'); renderPaletteNodes(); });
    renderPaletteNodes();


    // --- ENCAPSULADOR DE EXPORTACIÓN CON ASIGNACIÓN DE CANVASES SEGURO ---
    const imageContainer = document.getElementById('image-target-container');

    const executeRender = (targetElement, fileName) => {
        imageContainer.innerHTML = "<p style='font-size:8px; color:#555;'>Procesando y empaquetando matrices gráficas...</p>";
        downloadZone.style.display = 'block';
        downloadZone.scrollIntoView({ behavior: 'smooth' });

        html2canvas(targetElement, {
            scale: 2, 
            useCORS: true, 
            allowTaint: false, // Evita corromper el Canvas en GitHub Pages
            logging: false,
            backgroundColor: null,
            onclone: (clonedDoc) => {
                // Sincronizar estados de buffers de imágenes internas entre DOMs
                const originalCanvases = targetElement.querySelectorAll('canvas');
                const clonedCanvases = clonedDoc.querySelectorAll('canvas');
                clonedCanvases.forEach((clonedCanvas, i) => {
                    if (originalCanvases[i]) {
                        const ctx = clonedCanvas.getContext('2d');
                        ctx.drawImage(originalCanvases[i], 0, 0);
                    }
                });
            }
        }).then(canvasResult => {
            const url = canvasResult.toDataURL('image/png');
            imageContainer.innerHTML = `<img src="${url}" alt="Export Final">`;
        }).catch(err => {
            imageContainer.innerHTML = `<p style='color:red;'>Error del compilador: ${err.message}</p>`;
        });
    };

    document.getElementById('btn-compile-p1').addEventListener('click', () => executeRender(document.getElementById('char-card'), 'Ficha_Core'));
    document.getElementById('btn-compile-p2').addEventListener('click', () => executeRender(document.getElementById('model-card'), 'Model_Sheet'));

    // COMPILACIÓN TOTAL UNIFICADA (FICHA + MODEL JUNTOS)
    const compileMasterPack = () => {
        const ghostWrapper = document.createElement('div');
        ghostWrapper.style.position = 'absolute'; ghostWrapper.style.top = '-9999px'; ghostWrapper.style.left = '-9999px';
        ghostWrapper.style.display = 'flex'; ghostWrapper.style.gap = '20px'; ghostWrapper.style.background = 'var(--bg-os)';
        ghostWrapper.style.padding = '20px';

        const cloneCard = document.getElementById('char-card').cloneNode(true);
        const cloneModel = document.getElementById('model-card').cloneNode(true);

        ghostWrapper.appendChild(cloneCard); ghostWrapper.appendChild(cloneModel);
        document.body.appendChild(ghostWrapper);

        imageContainer.innerHTML = "<p style='font-size:8px; color:#555;'>Compilando paquete maestro unificado...</p>";
        downloadZone.style.display = 'block';
        downloadZone.scrollIntoView({ behavior: 'smooth' });

        html2canvas(ghostWrapper, {
            scale: 1.5, useCORS: true, allowTaint: false, logging: false, backgroundColor: null,
            onclone: (clonedDoc) => {
                const sourceCanvases = [
                    ...document.getElementById('char-card').querySelectorAll('canvas'),
                    ...document.getElementById('model-card').querySelectorAll('canvas')
                ];
                const targetCanvases = clonedDoc.querySelectorAll('canvas');
                targetCanvases.forEach((clonedCanvas, i) => {
                    if (sourceCanvases[i]) {
                        clonedCanvas.getContext('2d').drawImage(sourceCanvases[i], 0, 0);
                    }
                });
            }
        }).then(canvasResult => {
            const url = canvasResult.toDataURL('image/png');
            imageContainer.innerHTML = `<img src="${url}" alt="Ficha Completa Master">`;
            document.body.removeChild(ghostWrapper);
        }).catch(err => {
            imageContainer.innerHTML = `<p style='color:red;'>Error Maestro: ${err.message}</p>`;
            if(ghostWrapper.parentNode) document.body.removeChild(ghostWrapper);
        });
    };

    document.getElementById('btn-compile-all-p1').addEventListener('click', compileMasterPack);
    document.getElementById('btn-compile-all-p2').addEventListener('click', compileMasterPack);
});
