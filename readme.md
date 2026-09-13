# Catálogo IoT Industrial — Sensores, Robôs e Placas

Catálogo técnico e educativo sobre os principais componentes da automação industrial e da Internet das Coisas (IoT): sensores, robôs industriais e placas microcontroladoras (Arduino e ESP32).

Site estático (HTML, CSS e JavaScript puro), sem dependências ou build — basta abrir o `index.html` no navegador ou hospedar os arquivos em qualquer serviço estático (GitHub Pages, Vercel, Netlify etc.).

## Estrutura do site

├── index.html → Página inicial (conceitos + acesso às 3 categorias)
├── sensores.html → Catálogo de sensores (com filtro por categoria)
├── robos.html → Catálogo dos 7 modelos de robôs industriais
├── placas.html → Placas microcontroladoras + vídeos de demonstração
├── arduino.html → Página detalhada do Arduino Uno
├── esp32.html → Página detalhada do ESP32
├── sobre.html → Sobre o desenvolvedor / contato
├── sensor-*.html → 10 páginas individuais de sensores
├── cartesiano.html, scara.html, articulado.html,
│ cilindrico.html, delta.html, polar.html,
│ colaborativo.html → 7 páginas individuais de robôs
├── style.css → Estilos globais (paleta escura, teal/âmbar)
├── script.js → Menu mobile + filtro de sensores
├── img/ → Imagens de sensores, robôs, placas e ícones
└── video/ → Vídeos reais de demonstração em protoboard


## Páginas e conteúdo

- **Início** — hero, 4 cards de conceitos (IoT, Sensoriamento, Robótica, Placas) e acesso rápido às 3 categorias do catálogo.
- **Sensores** — 10 sensores (DHT11, DHT22, LM35, DS18B20, LDR, BH1750, HC-SR04, PIR HC-SR501, indutivo LJ12A3, capacitivo LJ18A3), com filtro por categoria e páginas individuais contendo conceito, especificações e exemplo de código Arduino.
- **Robôs** — 7 modelos industriais (Cartesiano, SCARA, Articulado, Cilíndrico, Delta, Polar, Colaborativo), cada um com conceito, funcionamento, características técnicas, aplicações, integração com IoT e modelos comerciais.
- **Placas** — hub com os cards do Arduino Uno e do ESP32, além da seção **"Demonstrações em protoboard"** com 3 vídeos reais de circuitos montados (sensor PIR, potenciômetro com LEDs, e circuito com LED/buzzer).
- **Arduino Uno** e **ESP32** — páginas detalhadas no mesmo padrão visual das páginas de robôs (chips de especificação, blocos de conteúdo numerados), incluindo a foto da placa e uma comparação rápida entre as duas.
- **Sobre o Dev** — foto, nome e contatos (Instagram, WhatsApp, e-mail, GitHub).

## Tecnologias

- HTML5 + CSS3 (variáveis CSS, grid/flexbox, dark mode nativo)
- JavaScript vanilla (sem frameworks)
- Fontes: Space Grotesk, Inter e IBM Plex Mono (Google Fonts)

## Como rodar localmente

Não precisa de servidor nem instalação — basta abrir `index.html` diretamente no navegador. Se preferir rodar com um servidor local (recomendado para os vídeos carregarem sem restrição de CORS em alguns navegadores):

```bash
python3 -m http.server 8000
```

E acesse `http://localhost:8000`.

## Créditos

Desenvolvido por **Davi Hames Airoso**.