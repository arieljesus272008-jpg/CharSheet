// COMPLETADOS Y RE-CORREGIDOS TODOS LOS 30 TEMAS RETRO/CYBERPUNK DEL SELECTOR
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
        '--bg-os': '#5a6984', '--window-bg': '#dddddd', '--window-border': '#666666',
        '--window-title': 'linear-gradient(to bottom, #cccccc, #aaaaaa)',
        '--panel-inputs-bg': '#ffffff', '--panel-inputs-text': '#000000',
        '--card-border': '#444444', '--card-text-accent': '#333333', '--card-bg': '#ffffff',
        '--block-bg': '#eeeeee', '--block-border': '#444444', '--title-tag-bg': '#666666', '--text-color': '#111111'
    },
    neon: {
        '--bg-os': '#130f3a', '--window-bg': '#2b1f87', '--window-border': '#8426cd',
        '--window-title': 'linear-gradient(to bottom, #8426cd, #130f3a)',
        '--panel-inputs-bg': '#130f3a', '--panel-inputs-text': '#1bfca2',
        '--card-border': '#1bfca2', '--card-text-accent': '#ff0055', '--card-bg': '#130f3a',
        '--block-bg': '#2b1f87', '--block-border': '#29b2cc', '--title-tag-bg': '#8426cd', '--text-color': '#ffffff'
    },
    synthwave: {
        '--bg-os': '#2b0b3d', '--window-bg': '#ff007f', '--window-border': '#390099',
        '--window-title': 'linear-gradient(to right, #ff007f, #ff7b00)',
        '--panel-inputs-bg': '#1a002c', '--panel-inputs-text': '#00ffff',
        '--card-border': '#ff7b00', '--card-text-accent': '#ff007f', '--card-bg': '#1a002c',
        '--block-bg': '#2b0b3d', '--block-border': '#00ffff', '--title-tag-bg': '#ff007f', '--text-color': '#ffffff'
    },
    toxicGreen: {
        '--bg-os': '#0a1405', '--window-bg': '#182e0e', '--window-border': '#39ff14',
        '--window-title': 'linear-gradient(to bottom, #1c450c, #0a1405)',
        '--panel-inputs-bg': '#050a02', '--panel-inputs-text': '#39ff14',
        '--card-border': '#39ff14', '--card-text-accent': '#ccff00', '--card-bg': '#050a02',
        '--block-bg': '#182e0e', '--block-border': '#39ff14', '--title-tag-bg': '#1c450c', '--text-color': '#ffffff'
    },
    tokyoDrift: {
        '--bg-os': '#0f0c1b', '--window-bg': '#1d1936', '--window-border': '#ff007c',
        '--window-title': 'linear-gradient(to right, #ff007c, #00ffff)',
        '--panel-inputs-bg': '#0b0914', '--panel-inputs-text': '#00ffff',
        '--card-border': '#00ffff', '--card-text-accent': '#ff007c', '--card-bg': '#0b0914',
        '--block-bg': '#1d1936', '--block-border': '#ff007c', '--title-tag-bg': '#ff007c', '--text-color': '#ffffff'
    },
    matrix: {
        '--bg-os': '#000000', '--window-bg': '#0d0d0d', '--window-border': '#00ff00',
        '--window-title': 'linear-gradient(to bottom, #003300, #000000)',
        '--panel-inputs-bg': '#050f05', '--panel-inputs-text': '#00ff00',
        '--card-border': '#00ff00', '--card-text-accent': '#00ff00', '--card-bg': '#000000',
        '--block-bg': '#050f05', '--block-border': '#00ff00', '--title-tag-bg': '#005500', '--text-color': '#00ff00'
    },
    sunset: {
        '--bg-os': '#3d1e11', '--window-bg': '#ff7e47', '--window-border': '#ffb03a',
        '--window-title': 'linear-gradient(to right, #ff3a3a, #ffb03a)',
        '--panel-inputs-bg': '#261108', '--panel-inputs-text': '#ffb03a',
        '--card-border': '#ff3a3a', '--card-text-accent': '#ffb03a', '--card-bg': '#261108',
        '--block-bg': '#3d1e11', '--block-border': '#ff7e47', '--title-tag-bg': '#ff3a3a', '--text-color': '#ffffff'
    },
    desertMirage: {
        '--bg-os': '#bc6c25', '--window-bg': '#dda15e', '--window-border': '#606c38',
        '--window-title': 'linear-gradient(to bottom, #606c38, #283618)',
        '--panel-inputs-bg': '#fefae0', '--panel-inputs-text': '#283618',
        '--card-border': '#606c38', '--card-text-accent': '#bc6c25', '--card-bg': '#fefae0',
        '--block-bg': '#dda15e', '--block-border': '#283618', '--title-tag-bg': '#606c38', '--text-color': '#283618'
    },
    autumn: {
        '--bg-os': '#5c201e', '--window-bg': '#bc4749', '--window-border': '#f77f00',
        '--window-title': 'linear-gradient(to right, #d62828, #f77f00)',
        '--panel-inputs-bg': '#381615', '--panel-inputs-text': '#fcbf49',
        '--card-border': '#d62828', '--card-text-accent': '#f77f00', '--card-bg': '#381615',
        '--block-bg': '#bc4749', '--block-border': '#fcbf49', '--title-tag-bg': '#d62828', '--text-color': '#ffffff'
    },
    vintagePaper: {
        '--bg-os': '#655341', '--window-bg': '#d4b996', '--window-border': '#8b5e3c',
        '--window-title': 'linear-gradient(to bottom, #a47e5c, #655341)',
        '--panel-inputs-bg': '#f4eccf', '--panel-inputs-text': '#432818',
        '--card-border': '#8b5e3c', '--card-text-accent': '#9e2a2b', '--card-bg': '#f4eccf',
        '--block-bg': '#d4b996', '--block-border': '#432818', '--title-tag-bg': '#8b5e3c', '--text-color': '#432818'
    },
    cyberpunkYellow: {
        '--bg-os': '#000000', '--window-bg': '#fcee0a', '--window-border': '#000000',
        '--window-title': 'linear-gradient(to right, #000000, #333333)',
        '--panel-inputs-bg': '#000000', '--panel-inputs-text': '#fcee0a',
        '--card-border': '#000000', '--card-text-accent': '#00f0ff', '--card-bg': '#fcee0a',
        '--block-bg': '#000000', '--block-border': '#00f0ff', '--title-tag-bg': '#000000', '--text-color': '#ffffff'
    },
    crimson: {
        '--bg-os': '#220000', '--window-bg': '#4a0000', '--window-border': '#ff0000',
        '--window-title': 'linear-gradient(to bottom, #990000, #220000)',
        '--panel-inputs-bg': '#110000', '--panel-inputs-text': '#ff3333',
        '--card-border': '#ff0000', '--card-text-accent': '#ff5555', '--card-bg': '#110000',
        '--block-bg': '#4a0000', '--block-border': '#ff0000', '--title-tag-bg': '#990000', '--text-color': '#ffffff'
    },
    dracula: {
        '--bg-os': '#282a36', '--window-bg': '#44475a', '--window-border': '#bd93f9',
        '--window-title': 'linear-gradient(to right, #bd93f9, #ff79c6)',
        '--panel-inputs-bg': '#282a36', '--panel-inputs-text': '#f8f8f2',
        '--card-border': '#bd93f9', '--card-text-accent': '#ff79c6', '--card-bg': '#282a36',
        '--block-bg': '#44475a', '--block-border': '#50fa7b', '--title-tag-bg': '#bd93f9', '--text-color': '#f8f8f2'
    },
    abyssal: {
        '--bg-os': '#03071e', '--window-bg': '#0a1128', '--window-border': '#0077b6',
        '--window-title': 'linear-gradient(to bottom, #0096c7, #03071e)',
        '--panel-inputs-bg': '#000814', '--panel-inputs-text': '#90e0ef',
        '--card-border': '#0077b6', '--card-text-accent': '#ffb703', '--card-bg': '#000814',
        '--block-bg': '#0a1128', '--block-border': '#0096c7', '--title-tag-bg': '#0077b6', '--text-color': '#ffffff'
    },
    voidPurple: {
        '--bg-os': '#090014', '--window-bg': '#1c0035', '--window-border': '#7b2cbf',
        '--window-title': 'linear-gradient(to right, #9d4edd, #3c096c)',
        '--panel-inputs-bg': '#05000a', '--panel-inputs-text': '#e0aaff',
        '--card-border': '#7b2cbf', '--card-text-accent': '#ff00aa', '--card-bg': '#05000a',
        '--block-bg': '#1c0035', '--block-border': '#9d4edd', '--title-tag-bg': '#7b2cbf', '--text-color': '#ffffff'
    },
    bloodMoon: {
        '--bg-os': '#140000', '--window-bg': '#3c0000', '--window-border': '#da1e37',
        '--window-title': 'linear-gradient(to bottom, #bd1f36, #140000)',
        '--panel-inputs-bg': '#0a0000', '--panel-inputs-text': '#ff4d6d',
        '--card-border': '#da1e37', '--card-text-accent': '#da1e37', '--card-bg': '#0a0000',
        '--block-bg': '#3c0000', '--block-border': '#ff758f', '--title-tag-bg': '#da1e37', '--text-color': '#ffffff'
    },
    muted: {
        '--bg-os': '#cad2c5', '--window-bg': '#84a59d', '--window-border': '#52796f',
        '--window-title': 'linear-gradient(to right, #52796f, #354f52)',
        '--panel-inputs-bg': '#f6fff8', '--panel-inputs-text': '#2f3e46',
        '--card-border': '#52796f', '--card-text-accent': '#f28482', '--card-bg': '#f6fff8',
        '--block-bg': '#84a59d', '--block-border': '#354f52', '--title-tag-bg': '#52796f', '--text-color': '#2f3e46'
    },
    sakura: {
        '--bg-os': '#ffcad4', '--window-bg': '#ffb5a7', '--window-border': '#fcd5ce',
        '--window-title': 'linear-gradient(to right, #ffb5a7, #fcd5ce)',
        '--panel-inputs-bg': '#f8edeb', '--panel-inputs-text': '#4a3035',
        '--card-border': '#fcd5ce', '--card-text-accent': '#ff7096', '--card-bg': '#f8edeb',
        '--block-bg': '#ffb5a7', '--block-border': '#ff7096', '--title-tag-bg': '#ffb5a7', '--text-color': '#4a3035'
    },
    matcha: {
        '--bg-os': '#adc178', '--window-bg': '#dde5b6', '--window-border': '#6c584c',
        '--window-title': 'linear-gradient(to bottom, #a3b18a, #588157)',
        '--panel-inputs-bg': '#f0ead2', '--panel-inputs-text': '#6c584c',
        '--card-border': '#6c584c', '--card-text-accent': '#a3b18a', '--card-bg': '#f0ead2',
        '--block-bg': '#dde5b6', '--block-border': '#588157', '--title-tag-bg': '#6c584c', '--text-color': '#6c584c'
    },
    nordicIce: {
        '--bg-os': '#2b2d42', '--window-bg': '#8d99ae', '--window-border': '#edf2f4',
        '--window-title': 'linear-gradient(to right, #1d3557, #457b9d)',
        '--panel-inputs-bg': '#edf2f4', '--panel-inputs-text': '#1d3557',
        '--card-border': '#457b9d', '--card-text-accent': '#e63946', '--card-bg': '#edf2f4',
        '--block-bg': '#8d99ae', '--block-border': '#1d3557', '--title-tag-bg': '#457b9d', '--text-color': '#1d3557'
    },
    lavenderFog: {
        '--bg-os': '#bdb2ff', '--window-bg': '#e8e8ff', '--window-border': '#9bf6ff',
        '--window-title': 'linear-gradient(to right, #bdb2ff, #ffc6ff)',
        '--panel-inputs-bg': '#ffffff', '--panel-inputs-text': '#4a00e0',
        '--card-border': '#ffc6ff', '--card-text-accent': '#bdb2ff', '--card-bg': '#ffffff',
        '--block-bg': '#e8e8ff', '--block-border': '#4a00e0', '--title-tag-bg': '#bdb2ff', '--text-color': '#4a00e0'
    },
    gameboy: {
        '--bg-os': '#8b956d', '--window-bg': '#9bbc0f', '--window-border': '#0f380f',
        '--window-title': 'linear-gradient(to bottom, #8bac0f, #306230)',
        '--panel-inputs-bg': '#9bbc0f', '--panel-inputs-text': '#0f380f',
        '--card-border': '#0f380f', '--card-text-accent': '#306230', '--card-bg': '#9bbc0f',
        '--block-bg': '#8bac0f', '--block-border': '#0f380f', '--title-tag-bg': '#306230', '--text-color': '#0f380f'
    },
    evangelion01: {
        '--bg-os': '#2b0f54', '--window-bg': '#70d6ff', '--window-border': '#a3333d',
        '--window-title': 'linear-gradient(to right, #70d6ff, #ff9e00)',
        '--panel-inputs-bg': '#1a0533', '--panel-inputs-text': '#70d6ff',
        '--card-border': '#ff9e00', '--card-text-accent': '#ff9e00', '--card-bg': '#2b0f54',
        '--block-bg': '#1a0533', '--block-border': '#70d6ff', '--title-tag-bg': '#ff9e00', '--text-color': '#ffffff'
    },
    steampunk: {
        '--bg-os': '#2b1d0c', '--window-bg': '#6e471b', '--window-border': '#b07d35',
        '--window-title': 'linear-gradient(to right, #8c5823, #b07d35)',
        '--panel-inputs-bg': '#1a1006', '--panel-inputs-text': '#f4cb84',
        '--card-border': '#b07d35', '--card-text-accent': '#de9e43', '--card-bg': '#1a1006',
        '--block-bg': '#6e471b', '--block-border': '#f4cb84', '--title-tag-bg': '#8c5823', '--text-color': '#ffffff'
    },
    minecraftOS: {
        '--bg-os': '#4d3319', '--window-bg': '#866242', '--window-border': '#5c8e32',
        '--window-title': 'linear-gradient(to bottom, #5c8e32, #3b5c20)',
        '--panel-inputs-bg': '#312111', '--panel-inputs-text': '#ffffff',
        '--card-border': '#5c8e32', '--card-text-accent': '#ffaa00', '--card-bg': '#866242',
        '--block-bg': '#312111', '--block-border': '#5c8e32', '--title-tag-bg': '#5c8e32', '--text-color': '#ffffff'
    },
    bubblegum: {
        '--bg-os': '#ff70a6', '--window-bg': '#ff97b7', '--window-border': '#ffb3c6',
        '--window-title': 'linear-gradient(to right, #ff70a6, #ffb3c6)',
        '--panel-inputs-bg': '#fff0f3', '--panel-inputs-text': '#700022',
        '--card-border': '#ff70a6', '--card-text-accent': '#ff477e', '--card-bg': '#fff0f3',
        '--block-bg': '#ff97b7', '--block-border': '#700022', '--title-tag-bg': '#ff70a6', '--text-color': '#700022'
    }
};

document.addEventListener("DOMContentLoaded", () => {
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

    // VINCULACIÓN DINÁMICA DE TEXTOS (INCLUYE CANCIÓN 'song')
    const fields = ['name', 'class', 'height', 'age', 'backstory', 'likes', 'dislikes', 'trivia', 'song'];
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
                const cardTarget = document.getElementById(`card-${id}`);
                if(cardTarget) cardTarget.innerText = val;
            });
        }
    });

    // DINÁMICA SLIDERS MATRIZ
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

    // SELECTOR DE TEMAS COMPLETO (ARREGLADO)
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

    // AJUSTES MANUALES COLOR
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
        document.getElementById(`btn-${prefix}-up`)?.addEventListener('click', () => { canvasConfig[key].y -= 15; redraw(key); });
        document.getElementById(`btn-${prefix}-down`)?.addEventListener('click', () => { canvasConfig[key].y += 15; redraw(key); });
        document.getElementById(`btn-${prefix}-left`)?.addEventListener('click', () => { canvasConfig[key].x -= 15; redraw(key); });
        document.getElementById(`btn-${prefix}-right`)?.addEventListener('click', () => { canvasConfig[key].x += 15; redraw(key); });
        document.getElementById(`btn-${prefix}-plus`)?.addEventListener('click', () => { canvasConfig[key].scale += 0.05; redraw(key); });
        document.getElementById(`btn-${prefix}-minus`)?.addEventListener('click', () => { canvasConfig[key].scale -= 0.05; redraw(key); });
    };

    bindPad('main', 'main'); bindPad('item', 'item');
    bindPad('fbFront', 'fb-front'); bindPad('fbBack', 'fb-back');
    bindPad('fbLeft', 'fb-left'); bindPad('fbRight', 'fb-right');

    // --- GESTIÓN DE PALETA PURA (MODEL SHEET) ---
    const purePaletteContainer = document.getElementById('pure-palette-container');
    const btnAddColorSlot = document.getElementById('btn-add-color-slot');
    let paletteColors = ['#ff0055', '#00ff88', '#00aeff'];

    const renderPaletteNodes = () => {
        if(!purePaletteContainer) return;
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

    // --- COMPILACIÓN RASTER (HTML2CANVAS) ---
    const imageContainer = document.getElementById('image-target-container');

    const executeRender = (targetElement, fileName) => {
        imageContainer.innerHTML = "<p style='font-size:8px; color:#ff0055;'>Iniciando extracción forzada de sectores corruptos de memoria...</p>";
        downloadZone.style.display = 'block';
        downloadZone.scrollIntoView({ behavior: 'smooth' });

        html2canvas(targetElement, {
            scale: 2, useCORS: true, allowTaint: false, logging: false, backgroundColor: null,
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
                <a href="${url}" download="${fileName}.png" class="btn-xp" style="display:inline-block; text-decoration:none; text-align:center; width:auto; padding:10px 20px;">⬇️ DESCARGAR ARCHIVO FIJO</a>
            `;
        }).catch(err => {
            imageContainer.innerHTML = `<p style='color:red;'>Falla Crítica de Compilación: ${err.message}</p>`;
        });
    };

    document.getElementById('btn-compile-p1')?.addEventListener('click', () => executeRender(document.getElementById('char-card'), 'Ficha_Sujeto_Corrupta'));
    document.getElementById('btn-compile-p2')?.addEventListener('click', () => executeRender(document.getElementById('model-card'), 'Model_Sheet_Corrupto'));

    const compileMasterPack = () => {
        const ghostWrapper = document.createElement('div');
        ghostWrapper.className = 'global-giant-pack';
        ghostWrapper.style.position = 'absolute'; ghostWrapper.style.top = '-9999px'; ghostWrapper.style.left = '-9999px';

        const originalCard = document.getElementById('char-card');
        const originalModel = document.getElementById('model-card');
        const cloneCard = originalCard.cloneNode(true);
        const cloneModel = originalModel.cloneNode(true);

        ghostWrapper.appendChild(cloneCard); ghostWrapper.appendChild(cloneModel);
        document.body.appendChild(ghostWrapper);

        imageContainer.innerHTML = "<p style='font-size:8px; color:#00ffff;'>Reensamblando clústeres dañados (Ficha + Model)...</p>";
        downloadZone.style.display = 'block'; downloadZone.scrollIntoView({ behavior: 'smooth' });

        html2canvas(ghostWrapper, {
            scale: 1.5, useCORS: true, allowTaint: false, logging: false, backgroundColor: null,
            onclone: (clonedDoc) => {
                const sourceCanvases = [...originalCard.querySelectorAll('canvas'), ...originalModel.querySelectorAll('canvas')];
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
                <a href="${url}" download="DataPack_Corrupto_Total.png" class="btn-xp" style="display:inline-block; text-decoration:none; text-align:center; width:auto; padding:10px 20px;">⬇️ DESCARGAR HOJA MAESTRA (PNG)</a>
            `;
            document.body.removeChild(ghostWrapper);
        }).catch(err => {
            imageContainer.innerHTML = `<p style='color:red;'>Error Fatal: ${err.message}</p>`;
            if(ghostWrapper.parentNode) document.body.removeChild(ghostWrapper);
        });
    };

    document.getElementById('btn-compile-all-p1')?.addEventListener('click', compileMasterPack);
    document.getElementById('btn-compile-all-p2')?.addEventListener('click', compileMasterPack);

    // --- LOOP DE INTERRUPCIONES DE SOFTWARE CORRUPTO ---
    const popupNormal = document.getElementById('system-warning-popup');
    const popupZero = document.getElementById('zero-warning-popup');
    const mainWindow = document.querySelector('.window');

    setInterval(() => {
        const rand = Math.random();
        
        // 1. Micro-colapsos gráficos espontáneos (50% de probabilidad)
        if (rand > 0.5) {
            mainWindow.classList.add('system-crash');
            setTimeout(() => mainWindow.classList.remove('system-crash'), Math.floor(Math.random() * 250 + 100));
        }
        
        // 2. Desencadenar Pop-ups de advertencia
        if (rand > 0.8) {
            // Evaluamos si abrimos el popup de audio normal o el del PUNTO ZERO
            if (Math.random() > 0.5) {
                if(popupZero && popupZero.style.display !== 'block') {
                    popupZero.style.display = 'block';
                    popupZero.style.top = Math.floor(Math.random() * 25 + 20) + '%';
                    popupZero.style.left = Math.floor(Math.random() * 25 + 20) + '%';
                }
            } else {
                if(popupNormal && popupNormal.style.display !== 'block') {
                    popupNormal.style.display = 'block';
                    popupNormal.style.top = Math.floor(Math.random() * 30 + 15) + '%';
                    popupNormal.style.left = Math.floor(Math.random() * 30 + 15) + '%';
                }
            }
        }
    }, 10000);

    window.triggerHeavyGlitch = function() {
        if(popupNormal) popupNormal.style.display = 'none';
        mainWindow.classList.add('system-crash');
        setTimeout(() => mainWindow.classList.remove('system-crash'), 800);
    };

    // --- SISTEMA CRÍTICO NARRATIVO: PUNTO ZERO + BSOD ---
    window.triggerPuntoZeroBSOD = function() {
        // 1. Ocultar el Pop-up inmediatamente
        if(popupZero) popupZero.style.display = 'none';
        
        // 2. Forzar visualización de la Pantalla Azul (BSOD)
        const bsodElement = document.getElementById('bsod-screen');
        const percentageElement = document.getElementById('bsod-percentage');
        if (bsodElement) bsodElement.style.display = 'flex';
        
        // 3. Simulación realista de volcado de datos progresivo
        let count = 0;
        if(percentageElement) percentageElement.innerText = count;
        
        const countInterval = setInterval(() => {
            count += Math.floor(Math.random() * 18) + 6;
            if (count >= 100) {
                count = 100;
                clearInterval(countInterval);
            }
            if(percentageElement) percentageElement.innerText = count;
        }, 200);

        // 4. Tras 3.8 segundos, el clúster se estabiliza y regresa a la normalidad
        setTimeout(() => {
            clearInterval(countInterval);
            if (bsodElement) bsodElement.style.display = 'none';
            
            // Provocar un fuerte micro-flicker de retorno energético del sistema
            mainWindow.classList.add('system-crash');
            setTimeout(() => mainWindow.classList.remove('system-crash'), 500);
        }, 3800);
    };
});
