// CORREGIDOS, COMPLETADOS Y RE-MAPEADOS LOS 30 TEMAS DEL SISTEMA RETRO
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
        '--card-border': '#808080', '--card-text-accent': '#000080', '--card-bg': '#ffffff',
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
        '--bg-os': '#0a1405', '--window-bg': '#182e0e', '--window-border': '#39ff14',
        '--window-title': 'linear-gradient(to bottom, #1c450c, #0a1405)',
        '--panel-inputs-bg': '#050a02', '--panel-inputs-text': '#39ff14',
        '--card-border': '#39ff14', '--card-text-accent': '#ccff00', '--card-bg': '#050a02',
        '--block-bg': '#182e0e', '--block-border': '#39ff14', '--title-tag-bg': '#1c450c', '--text-color': '#ffffff'
    },
    tokyoDrift: {
        '--bg-os': '#0d0e15', '--window-bg': '#1a1c29', '--window-border': '#ff007f',
        '--window-title': 'linear-gradient(to right, #00f0ff, #ff007f)',
        '--panel-inputs-bg': '#0f1017', '--panel-inputs-text': '#00f0ff',
        '--card-border': '#ff007f', '--card-text-accent': '#00f0ff', '--card-bg': '#1a1c29',
        '--block-bg': '#0d0e15', '--block-border': '#ff007f', '--title-tag-bg': '#ff007f', '--text-color': '#ffffff'
    },
    matrix: {
        '--bg-os': '#000000', '--window-bg': '#0d0d0d', '--window-border': '#00ff00',
        '--window-title': 'linear-gradient(to bottom, #003300, #000000)',
        '--panel-inputs-bg': '#050f05', '--panel-inputs-text': '#00ff00',
        '--card-border': '#00ff00', '--card-text-accent': '#00ff00', '--card-bg': '#000000',
        '--block-bg': '#050f05', '--block-border': '#00ff00', '--title-tag-bg': '#005500', '--text-color': '#00ff00'
    },
    sunset: {
        '--bg-os': '#2b101d', '--window-bg': '#472234', '--window-border': '#f9844a',
        '--window-title': 'linear-gradient(to right, #f9844a, #f9c74f)',
        '--panel-inputs-bg': '#1e0b14', '--panel-inputs-text': '#f9c74f',
        '--card-border': '#f9844a', '--card-text-accent': '#f9844a', '--card-bg': '#472234',
        '--block-bg': '#2b101d', '--block-border': '#f9c74f', '--title-tag-bg': '#f9844a', '--text-color': '#ffffff'
    },
    desertMirage: {
        '--bg-os': '#b87d4b', '--window-bg': '#e6ccb2', '--window-border': '#7f5539',
        '--window-title': 'linear-gradient(to bottom, #9c6644, #7f5539)',
        '--panel-inputs-bg': '#fffbf7', '--panel-inputs-text': '#4a3221',
        '--card-border': '#7f5539', '--card-text-accent': '#b87d4b', '--card-bg': '#e6ccb2',
        '--block-bg': '#ddb892', '--block-border': '#4a3221', '--title-tag-bg': '#7f5539', '--text-color': '#4a3221'
    },
    autumn: {
        '--bg-os': '#3e2723', '--window-bg': '#d7ccc8', '--window-border': '#5d4037',
        '--window-title': 'linear-gradient(to right, #8d6e63, #5d4037)',
        '--panel-inputs-bg': '#efebe9', '--panel-inputs-text': '#3e2723',
        '--card-border': '#5d4037', '--card-text-accent': '#e64a19', '--card-bg': '#d7ccc8',
        '--block-bg': '#bcaaa4', '--block-border': '#3e2723', '--title-tag-bg': '#5d4037', '--text-color': '#2d1d1a'
    },
    vintagePaper: {
        '--bg-os': '#2b261f', '--window-bg': '#dfd5c6', '--window-border': '#5c4e3c',
        '--window-title': 'linear-gradient(to bottom, #8a765d, #5c4e3c)',
        '--panel-inputs-bg': '#f4eee1', '--panel-inputs-text': '#2b261f',
        '--card-border': '#5c4e3c', '--card-text-accent': '#8e2814', '--card-bg': '#f4eee1',
        '--block-bg': '#d0c3b0', '--block-border': '#2b261f', '--title-tag-bg': '#5c4e3c', '--text-color': '#2b261f'
    },
    cyberpunkYellow: {
        '--bg-os': '#000000', '--window-bg': '#fcee0a', '--window-border': '#000000',
        '--window-title': 'linear-gradient(to right, #000000, #333333)',
        '--panel-inputs-bg': '#000000', '--panel-inputs-text': '#fcee0a',
        '--card-border': '#000000', '--card-text-accent': '#00f0ff', '--card-bg': '#fcee0a',
        '--block-bg': '#000000', '--block-border': '#00f0ff', '--title-tag-bg': '#000000', '--text-color': '#ffffff'
    },
    crimson: {
        '--bg-os': '#1a0505', '--window-bg': '#3a0f0f', '--window-border': '#ff0000',
        '--window-title': 'linear-gradient(to bottom, #990000, #1a0505)',
        '--panel-inputs-bg': '#100202', '--panel-inputs-text': '#ff3333',
        '--card-border': '#ff0000', '--card-text-accent': '#ff3333', '--card-bg': '#100202',
        '--block-bg': '#3a0f0f', '--block-border': '#ff0000', '--title-tag-bg': '#990000', '--text-color': '#ffffff'
    },
    dracula: {
        '--bg-os': '#1e1f29', '--window-bg': '#282a36', '--window-border': '#bd93f9',
        '--window-title': 'linear-gradient(to bottom, #44475a, #282a36)',
        '--panel-inputs-bg': '#1e1f29', '--panel-inputs-text': '#50fa7b',
        '--card-border': '#bd93f9', '--card-text-accent': '#ff79c6', '--card-bg': '#282a36',
        '--block-bg': '#44475a', '--block-border': '#bd93f9', '--title-tag-bg': '#6272a4', '--text-color': '#f8f8f2'
    },
    abyssal: {
        '--bg-os': '#020b14', '--window-bg': '#0a1c2e', '--window-border': '#00aeff',
        '--window-title': 'linear-gradient(to bottom, #005580, #020b14)',
        '--panel-inputs-bg': '#01070d', '--panel-inputs-text': '#00aeff',
        '--card-border': '#00aeff', '--card-text-accent': '#00ffc4', '--card-bg': '#0a1c2e',
        '--block-bg': '#01070d', '--block-border': '#00aeff', '--title-tag-bg': '#005580', '--text-color': '#ffffff'
    },
    voidPurple: {
        '--bg-os': '#0b0514', '--window-bg': '#1a0c30', '--window-border': '#aa00ff',
        '--window-title': 'linear-gradient(to right, #aa00ff, #3d0066)',
        '--panel-inputs-bg': '#05020a', '--panel-inputs-text': '#df80ff',
        '--card-border': '#aa00ff', '--card-text-accent': '#ff00aa', '--card-bg': '#1a0c30',
        '--block-bg': '#05020a', '--block-border': '#df80ff', '--title-tag-bg': '#3d0066', '--text-color': '#ffffff'
    },
    bloodMoon: {
        '--bg-os': '#140000', '--window-bg': '#2a0000', '--window-border': '#ff1a1a',
        '--window-title': 'linear-gradient(to bottom, #660000, #140000)',
        '--panel-inputs-bg': '#0a0000', '--panel-inputs-text': '#ff1a1a',
        '--card-border': '#ff1a1a', '--card-text-accent': '#ff6600', '--card-bg': '#2a0000',
        '--block-bg': '#0a0000', '--block-border': '#ff1a1a', '--title-tag-bg': '#660000', '--text-color': '#ffffff'
    },
    muted: {
        '--bg-os': '#d1d5db', '--window-bg': '#f3f4f6', '--window-border': '#9ca3af',
        '--window-title': 'linear-gradient(to bottom, #9ca3af, #6b7280)',
        '--panel-inputs-bg': '#ffffff', '--panel-inputs-text': '#374151',
        '--card-border': '#9ca3af', '--card-text-accent': '#4b5563', '--card-bg': '#ffffff',
        '--block-bg': '#f3f4f6', '--block-border': '#9ca3af', '--title-tag-bg': '#6b7280', '--text-color': '#1f2937'
    },
    sakura: {
        '--bg-os': '#ffccd5', '--window-bg': '#fff0f3', '--window-border': '#ff85a2',
        '--window-title': 'linear-gradient(to right, #ff85a2, #fca311)',
        '--panel-inputs-bg': '#ffffff', '--panel-inputs-text': '#ff4d6d',
        '--card-border': '#ff85a2', '--card-text-accent': '#ff4d6d', '--card-bg': '#fff0f3',
        '--block-bg': '#ffccd5', '--block-border': '#ff4d6d', '--title-tag-bg': '#ff85a2', '--text-color': '#590d22'
    },
    matcha: {
        '--bg-os': '#adc178', '--window-bg': '#f0eae1', '--window-border': '#6c584c',
        '--window-title': 'linear-gradient(to bottom, #a98467, #6c584c)',
        '--panel-inputs-bg': '#ffffff', '--panel-inputs-text': '#6c584c',
        '--card-border': '#6c584c', '--card-text-accent': '#adc178', '--card-bg': '#f0eae1',
        '--block-bg': '#dde5b6', '--block-border': '#6c584c', '--title-tag-bg': '#a98467', '--text-color': '#6c584c'
    },
    nordicIce: {
        '--bg-os': '#8e9aaf', '--window-bg': '#e2eafc', '--window-border': '#b6ccfe',
        '--window-title': 'linear-gradient(to bottom, #abc4ff, #8e9aaf)',
        '--panel-inputs-bg': '#ffffff', '--panel-inputs-text': '#463f3a',
        '--card-border': '#b6ccfe', '--card-text-accent': '#abc4ff', '--card-bg': '#e2eafc',
        '--block-bg': '#ccdbfd', '--block-border': '#463f3a', '--title-tag-bg': '#abc4ff', '--text-color': '#22333b'
    },
    lavenderFog: {
        '--bg-os': '#bdb2ff', '--window-bg': '#f0e6ff', '--window-border': '#9d4edd',
        '--window-title': 'linear-gradient(to right, #9d4edd, #c77dff)',
        '--panel-inputs-bg': '#ffffff', '--panel-inputs-text': '#5a189a',
        '--card-border': '#9d4edd', '--card-text-accent': '#e0aaff', '--card-bg': '#f0e6ff',
        '--block-bg': '#e0aaff', '--block-border': '#5a189a', '--title-tag-bg': '#9d4edd', '--text-color': '#3c096c'
    },
    gameboy: {
        '--bg-os': '#8b956d', '--window-bg': '#9bbc0f', '--window-border': '#0f380f',
        '--window-title': 'linear-gradient(to bottom, #306230, #0f380f)',
        '--panel-inputs-bg': '#8b956d', '--panel-inputs-text': '#0f380f',
        '--card-border': '#0f380f', '--card-text-accent': '#306230', '--card-bg': '#9bbc0f',
        '--block-bg': '#8b956d', '--block-border': '#0f380f', '--title-tag-bg': '#306230', '--text-color': '#0f380f'
    },
    evangelion01: {
        '--bg-os': '#2b0f54', '--window-bg': '#70d6ff', '--window-border': '#a3333d',
        '--window-title': 'linear-gradient(to right, #70d6ff, #ff9e00)',
        '--panel-inputs-bg': '#1a0533', '--panel-inputs-text': '#70d6ff',
        '--card-border': '#ff9e00', '--card-text-accent': '#ff9e00', '--card-bg': '#2b0f54',
        '--block-bg': '#1a0533', '--block-border': '#70d6ff', '--title-tag-bg': '#ff9e00', '--text-color': '#ffffff'
    },
    steampunk: {
        '--bg-os': '#462511', '--window-bg': '#d4a373', '--window-border': '#b07d62',
        '--window-title': 'linear-gradient(to bottom, #8a5a44, #462511)',
        '--panel-inputs-bg': '#fefae0', '--panel-inputs-text': '#462511',
        '--card-border': '#8a5a44', '--card-text-accent': '#e07a5f', '--card-bg': '#d4a373',
        '--block-bg': '#ccd5ae', '--block-border': '#462511', '--title-tag-bg': '#8a5a44', '--text-color': '#2f1609'
    },
    minecraftOS: {
        '--bg-os': '#4d3319', '--window-bg': '#866242', '--window-border': '#5c8e32',
        '--window-title': 'linear-gradient(to bottom, #5c8e32, #3b5c20)',
        '--panel-inputs-bg': '#312111', '--panel-inputs-text': '#ffffff',
        '--card-border': '#5c8e32', '--card-text-accent': '#ffaa00', '--card-bg': '#866242',
        '--block-bg': '#312111', '--block-border': '#5c8e32', '--title-tag-bg': '#5c8e32', '--text-color': '#ffffff'
    },
    bubblegum: {
        '--bg-os': '#ff758f', '--window-bg': '#ffb3c1', '--window-border': '#ff4d6d',
        '--window-title': 'linear-gradient(to right, #ff4d6d, #ff758f)',
        '--panel-inputs-bg': '#ffffff', '--panel-inputs-text': '#c9184a',
        '--card-border': '#ff4d6d', '--card-text-accent': '#ff4d6d', '--card-bg': '#ffb3c1',
        '--block-bg': '#fff0f3', '--block-border': '#ff4d6d', '--title-tag-bg': '#ff4d6d', '--text-color': '#590d22'
    }
};

document.addEventListener("DOMContentLoaded", () => {
    // MANAGEMENT DE PESTAÑAS
    const tabP1 = document.getElementById('tab-trigger-p1');
    const tabP2 = document.getElementById('tab-trigger-p2');
    const panelP1 = document.getElementById('panel-page-1');
    const panelP2 = document.getElementById('panel-page-2');
    const downloadZone = document.getElementById('output-download-zone');

    if (tabP1 && tabP2) {
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
    }

    // VINCULACIÓN DE INPUTS TEXT
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

    // DINÁMICA DE SLIDERS
    ['str', 'agi', 'mag', 'res'].forEach(stat => {
        const slider = document.getElementById(`range-${stat}`);
        if (slider) {
            slider.addEventListener('input', () => {
                const val = slider.value;
                document.getElementById(`val-${stat}`).innerText = val;
                document.getElementById(`bar-${stat}`).style.width = `${val * 10}%`;
            });
        }
    });

    // SELECTOR DE TEMAS CORREGIDO
    const themeSelector = document.getElementById('theme-selector');
    if (themeSelector) {
        themeSelector.addEventListener('change', () => {
            const vars = themes[themeSelector.value];
            if (vars) {
                for (const [key, value] of Object.entries(vars)) {
                    document.documentElement.style.setProperty(key, value);
                }
            }
        });
    }

    // SELECTORES MANUALES
    const bgPicker = document.getElementById('custom-bg-picker');
    const accentPicker = document.getElementById('custom-accent-picker');
    const updateColors = () => {
        document.documentElement.style.setProperty('--bg-os', bgPicker.value);
        document.documentElement.style.setProperty('--card-text-accent', accentPicker.value);
        document.documentElement.style.setProperty('--window-border', accentPicker.value);
        document.documentElement.style.setProperty('--card-border', accentPicker.value);
        document.documentElement.style.setProperty('--title-tag-bg', accentPicker.value);
    };
    if (bgPicker) bgPicker.addEventListener('input', updateColors);
    if (accentPicker) accentPicker.addEventListener('input', updateColors);

    // --- CONFIGURACIÓN DE LIENZOS (CANVAS) ---
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
            // AJUSTE CRÍTICO GITHUB: Configurar CORS vacío antes de inyectar la fuente de datos Base64
            img.crossOrigin = "anonymous";
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

    document.getElementById('input-file')?.addEventListener('change', (e) => initImage(e.target.files[0], 'main'));
    document.getElementById('input-file-item')?.addEventListener('change', (e) => initImage(e.target.files[0], 'item'));
    document.getElementById('input-fbody-front')?.addEventListener('change', (e) => initImage(e.target.files[0], 'fbFront'));
    document.getElementById('input-fbody-back')?.addEventListener('change', (e) => initImage(e.target.files[0], 'fbBack'));
    document.getElementById('input-fbody-left')?.addEventListener('change', (e) => initImage(e.target.files[0], 'fbLeft'));
    document.getElementById('input-fbody-right')?.addEventListener('change', (e) => initImage(e.target.files[0], 'fbRight'));

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


    // --- GESTIÓN DE PALETA PURA ---
    const purePaletteContainer = document.getElementById('pure-palette-container');
    const btnAddColorSlot = document.getElementById('btn-add-color-slot');
    let paletteColors = ['#ff0055', '#00ff88', '#00aeff'];

    const renderPaletteNodes = () => {
        purePaletteContainer.innerHTML = '';
        paletteColors.forEach((color, idx) => {
            const node = document.createElement('div');
            node.classList.add('color-pure-node');
            node.style.backgroundColor = color;

            const picker = document.createElement('input');
            picker.type = 'color'; picker.value = color;
            picker.addEventListener('input', (e) => {
                paletteColors[idx] = e.target.value;
                node.style.backgroundColor = e.target.value;
            });

            const delBtn = document.createElement('button');
            delBtn.classList.add('btn-remove-color'); delBtn.innerText = '×';
            delBtn.addEventListener('click', (e) => {
                e.stopPropagation(); paletteColors.splice(idx, 1); renderPaletteNodes();
            });

            node.appendChild(picker); node.appendChild(delBtn);
            purePaletteContainer.appendChild(node);
        });
    };
    if (btnAddColorSlot) btnAddColorSlot.addEventListener('click', () => { paletteColors.push('#888888'); renderPaletteNodes(); });
    renderPaletteNodes();


    // --- SISTEMA CRÍTICO DE COMPILACIÓN SEGURO COMPATIBLE CON GITHUB PAGES ---
    const imageContainer = document.getElementById('image-target-container');

    const executeRender = (targetElement, fileName) => {
        imageContainer.innerHTML = "<p style='font-size:8px; color:#555;'>Procesando y rasterizando píxeles de memoria...</p>";
        downloadZone.style.display = 'block';
        downloadZone.scrollIntoView({ behavior: 'smooth' });

        // AJUSTE PARA GITHUB: Forzar uso de CORS, desactivar Taint y permitir proxies remotos
        html2canvas(targetElement, {
            scale: 2, 
            useCORS: true, 
            allowTaint: false, // ¡Cambio crítico! True ensucia el lienzo en dominios reales de internet
            logging: false,
            backgroundColor: null,
            onclone: (clonedDoc) => {
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
            imageContainer.innerHTML = `
                <img src="${url}" alt="Export Final">
                <br><br>
                <a href="${url}" download="${fileName}.png" class="btn-xp" style="display:inline-block; text-decoration:none; text-align:center; width:auto; padding:10px 20px;">⬇️ DESCARGAR ARCHIVO DIRECTO</a>
            `;
        }).catch(err => {
            imageContainer.innerHTML = `<p style='color:red;'>Error del compilador de GitHub: ${err.message}</p>`;
        });
    };

    // Compilaciones individuales (Ficha o Model Sheet sueltos)
    document.getElementById('btn-compile-p1')?.addEventListener('click', () => executeRender(document.getElementById('char-card'), 'Ficha_Personaje'));
    document.getElementById('btn-compile-p2')?.addEventListener('click', () => executeRender(document.getElementById('model-card'), 'Model_Sheet_Personaje'));

    // COMPILACIÓN COMPLETA (Ficha + Model Sheet Juntos)
    const compileMasterPack = () => {
        const ghostWrapper = document.createElement('div');
        ghostWrapper.className = 'global-giant-pack';
        ghostWrapper.style.position = 'absolute';
        ghostWrapper.style.top = '-9999px';
        ghostWrapper.style.left = '-9999px';
        ghostWrapper.style.display = 'flex';

        const originalCard = document.getElementById('char-card');
        const originalModel = document.getElementById('model-card');
        
        const cloneCard = originalCard.cloneNode(true);
        const cloneModel = originalModel.cloneNode(true);

        ghostWrapper.appendChild(cloneCard);
        ghostWrapper.appendChild(cloneModel);
        document.body.appendChild(ghostWrapper);

        imageContainer.innerHTML = "<p style='font-size:8px; color:#555;'>Procesando Ficha Completa + Model Sheet de forma síncrona en servidor...</p>";
        downloadZone.style.display = 'block';
        downloadZone.scrollIntoView({ behavior: 'smooth' });

        html2canvas(ghostWrapper, {
            scale: 1.5, 
            useCORS: true, 
            allowTaint: false, // Protección activa para GitHub Pages
            logging: false,
            backgroundColor: null,
            onclone: (clonedDoc) => {
                const sourceCanvases = [
                    ...originalCard.querySelectorAll('canvas'),
                    ...originalModel.querySelectorAll('canvas')
                ];
                const targetCanvases = clonedDoc.querySelectorAll('canvas');
                
                targetCanvases.forEach((clonedCanvas, i) => {
                    if (sourceCanvases[i]) {
                        const ctx = clonedCanvas.getContext('2d');
                        ctx.drawImage(sourceCanvases[i], 0, 0);
                    }
                });
            }
        }).then(canvasResult => {
            const url = canvasResult.toDataURL('image/png');
            imageContainer.innerHTML = `
                <img src="${url}" alt="Ficha Completa Master">
                <br><br>
                <a href="${url}" download="Ficha_Completa_y_ModelSheet.png" class="btn-xp" style="display:inline-block; text-decoration:none; text-align:center; width:auto; padding:10px 20px;">⬇️ DESCARGAR HOJA MAESTRA COMPLETA (PNG)</a>
            `;
            document.body.removeChild(ghostWrapper);
        }).catch(err => {
            imageContainer.innerHTML = `<p style='color:red;'>Error en empaquetado maestro: ${err.message}</p>`;
            if(ghostWrapper.parentNode) document.body.removeChild(ghostWrapper);
        });
    };

    document.getElementById('btn-compile-all-p1')?.addEventListener('click', compileMasterPack);
    document.getElementById('btn-compile-all-p2')?.addEventListener('click', compileMasterPack);
});