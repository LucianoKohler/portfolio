const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');
const vendorDir = path.join(distDir, 'vendor');
const swiperDist = path.join(vendorDir, 'swiper');
const lucideDist = path.join(vendorDir, 'lucide');

// 1. Cria a estrutura de pastas na dist
fs.mkdirSync(swiperDist, { recursive: true });
fs.mkdirSync(lucideDist, { recursive: true });
fs.mkdirSync(path.join(distDir, 'js'), { recursive: true });

// 2. Copia a pasta js e assets da src para a dist
if (fs.existsSync('src/js')) {
  fs.cpSync('src/js', path.join(distDir, 'js'), { recursive: true });
}
if (fs.existsSync('src/assets')) {
  fs.cpSync('src/assets', path.join(distDir, 'assets'), { recursive: true });
}

// 3. Copia os arquivos essenciais do node_modules para dist/vendor
fs.copyFileSync(
  'node_modules/swiper/swiper-bundle.min.css',
  path.join(swiperDist, 'swiper-bundle.min.css')
);
fs.copyFileSync(
  'node_modules/swiper/swiper-bundle.min.js',
  path.join(swiperDist, 'swiper-bundle.min.js')
);

const lucidePaths = [
  'node_modules/lucide/dist/umd/lucide.min.js',
  'node_modules/lucide/dist/umd/lucide.js'
];

let lucideFound = false;
for (const p of lucidePaths) {
  if (fs.existsSync(p)) {
    fs.copyFileSync(p, path.join(lucideDist, 'lucide.min.js'));
    lucideFound = true;
    break;
  }
}

if (!lucideFound) {
  console.warn('Aviso: Arquivo do Lucide não encontrado no node_modules.');
}

// 4. Lê o src/index.html, ajusta os caminhos de desenvolvimento para produção e salva na raiz da dist
let html = fs.readFileSync('src/index.html', 'utf8');

// Ajusta os caminhos do node_modules para a pasta vendor/
html = html.replace("/dist/css/output.css", './css/output.css');
html = html.replace(/\.\.\/node_modules\/swiper\//g, './vendor/swiper/');
html = html.replace(/\.\.\/node_modules\/lucide\/dist\/umd\//g, './vendor/lucide/');

fs.writeFileSync(path.join(distDir, 'index.html'), html);

console.log('Build estruturado com sucesso em /dist');