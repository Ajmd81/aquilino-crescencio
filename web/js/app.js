/* ================================================================
   1) CONTENIDO EDITABLE
   ----------------------------------------------------------------
   Todo lo que el cliente debe cambiar está aquí: nombre del autor,
   biografía, el vídeo y las obras del carrusel (título, técnica,
   año, imagen y descripción).

   Para AÑADIR un cuadro: copia un bloque de "obras", pon su imagen
   en assets/obras/ y rellena los datos. El carrusel y el desplegable
   de reseñas se actualizan solos.
   ================================================================ */
const CONTENIDO = {
  marca: "Aquilino Crescencio",
  hero:  { titular: "El realismo de <em>Aquilino Crescencio</em>",
           entradilla: "Paisano de Villanueva del Duque, descubrió la pintura a los 50 años de forma autodidacta. Más de quince años después, su casa reúne una exposición de óleos de trazo y realismo inconfundibles. Recórrela obra por obra y deja tu reseña." },
  bio:   { lead: "Paisano de Villanueva del Duque que descubrió la pintura a los 50 años, de forma autodidacta." },

  /* --------------------------------------------------------------
     VÍDEO DEL RECORRIDO
       · Archivo:  tipo:"mp4",     fuente:"assets/recorrido.mp4"
       · YouTube:  tipo:"youtube", fuente:"ID_DEL_VIDEO"   (lo que va tras v=)
       · Vimeo:    tipo:"vimeo",   fuente:"ID_DEL_VIDEO"
     Déjalo con tipo:"" y se muestra un marcador de posición.
     -------------------------------------------------------------- */
  video: { tipo:"youtube", fuente:"G4S4Lh3Zq54" },

  /* Cada obra: id único, título, técnica, año, imagen y descripción.
     Los títulos marcados (provisional) no figuraban en cartela: cámbialos
     si conoces el real. */
  obras: [
    { id:"recoleccion", titulo:"«La recolección»", tecnica:"Óleo sobre lienzo", anio:"Año por confirmar",
      imagen:"assets/obras/recoleccion.jpg",
      desc:"Dos mujeres reposan junto a un cesto rebosante de fruta, con el campo y los árboles al fondo. Una de las composiciones de mayor formato de la exposición. (Título provisional.)" },

    { id:"cordobesa", titulo:"«Cordobesa con guitarra y sombrero cordobés»", tecnica:"Óleo sobre lienzo", anio:"Año por confirmar",
      imagen:"assets/obras/cordobesa.jpg",
      desc:"Una mujer con sombrero cordobés se apoya en una guitarra, con la ciudad al fondo. Trazo firme y mirada serena, muy del estilo del autor." },

    { id:"maria", titulo:"«María»", tecnica:"Óleo sobre lienzo", anio:"Año por confirmar",
      imagen:"assets/obras/maria.jpg",
      desc:"Retrato de mujer sosteniendo un cántaro de barro, con una ventana abierta al paisaje y una figura en el camino." },

    { id:"mujermalaga", titulo:"«Mujer de Málaga»", tecnica:"Óleo sobre lienzo", anio:"Año por confirmar",
      imagen:"assets/obras/mujermalaga.jpg",
      desc:"Mujer sentada con un abanico en la mano ante un patio y un caserío, bajo un cielo limpio." },

    { id:"naranjas", titulo:"«Mujer con naranjas»", tecnica:"Óleo sobre lienzo", anio:"Año por confirmar",
      imagen:"assets/obras/naranjas.jpg",
      desc:"Figura femenina que recoge naranjas en su regazo, junto a una maceta y un naranjo. (Título provisional.)" },

    { id:"pies", titulo:"«Mujer lavándose los pies»", tecnica:"Óleo sobre lienzo", anio:"Año por confirmar",
      imagen:"assets/obras/pies.jpg",
      desc:"Una mujer se refresca los pies en un lebrillo, sentada ante un paisaje abierto. (Título provisional.)" },

    { id:"cantaro", titulo:"«Mujer con cántaro»", tecnica:"Óleo sobre lienzo", anio:"Año por confirmar",
      imagen:"assets/obras/cantaro.jpg",
      desc:"Mujer de falda roja apoyada en un gran cántaro de barro, junto a un muro. (Título provisional.)" },

    { id:"melocotones", titulo:"«Bodegón. Melocotones y uvas»", tecnica:"Óleo sobre lienzo", anio:"Año por confirmar",
      imagen:"assets/obras/melocotones.jpg",
      desc:"Cestas de uvas y melocotones sobre fondo oscuro, con hojas y sarmientos de parra. Detalle minucioso en cada fruto." },

    { id:"brevas", titulo:"«Bodegón. Cesta de brevas»", tecnica:"Óleo sobre lienzo", anio:"Año por confirmar",
      imagen:"assets/obras/brevas.jpg",
      desc:"Cesto de brevas, higos y uvas sobre un mantel rematado con encaje. Calidez y volumen en las frutas maduras." },

    { id:"cestauvas", titulo:"«Bodegón. Cesta con uvas»", tecnica:"Óleo sobre lienzo", anio:"Año por confirmar",
      imagen:"assets/obras/cestauvas.jpg",
      desc:"Cesta de manzanas y uvas sobre un mantel de encaje, acompañada de un vaso de agua. Estudio de luz y transparencias." },

    { id:"rosas", titulo:"«Jarrón con rosas»", tecnica:"Óleo sobre lienzo", anio:"Año por confirmar",
      imagen:"assets/obras/rosas.jpg",
      desc:"Ramo de rosas en un jarrón de cerámica, sobre fondo oscuro y en marco oval dorado. (Título provisional.)" },

    { id:"veleros", titulo:"«Veleros»", tecnica:"Óleo sobre lienzo", anio:"Año por confirmar",
      imagen:"assets/obras/veleros.jpg",
      desc:"Dos veleros navegan a toda vela sobre un mar agitado, bajo un cielo de nubes. (Título provisional.)" },

    { id:"abanico", titulo:"«Abanico de amapolas»", tecnica:"Pintura a mano sobre abanico", anio:"Año por confirmar",
      imagen:"assets/obras/abanico.jpg",
      desc:"Amapolas pintadas a mano sobre un abanico, firmado «Crecencio». Una pieza singular dentro de la exposición." },
  ]
};

/* ================================================================
   2) ESTADO + UTILIDADES
   ================================================================ */
const $  = (s, c=document) => c.querySelector(s);
const $$ = (s, c=document) => [...c.querySelectorAll(s)];
const obras = CONTENIDO.obras;
let obraActivaIdx = 0;

/* aplica textos editables del config a la página */
function pintarContenido(){
  $$('[data-bind="marca"],[data-bind="marca2"],[data-bind="marca3"]').forEach(e=>e.textContent = CONTENIDO.marca);
  $('[data-bind="titularHero"]').innerHTML = CONTENIDO.hero.titular;
  $('[data-bind="entradilla"]').textContent = CONTENIDO.hero.entradilla;
  $('[data-bind="bioLead"]').textContent = CONTENIDO.bio.lead;
  $('#anioActual').textContent = new Date().getFullYear();
  document.title = "Exposición — " + CONTENIDO.marca;
}

/* ================================================================
   3) CARRUSEL DE OBRAS
   ================================================================ */
function construirCarrusel(){
  const minis = $('#crMinis');
  minis.innerHTML = obras.map((o,i)=>
    `<button class="cr-mini" data-idx="${i}" aria-label="${o.titulo.replace(/«|»/g,'')}">
       <img src="${o.imagen}" alt="" loading="lazy">
     </button>`).join('');
  $$('.cr-mini', minis).forEach(b=>
    b.addEventListener('click', ()=> seleccionar(+b.dataset.idx)));
  seleccionar(0);
}

function seleccionar(i){
  obraActivaIdx = (i + obras.length) % obras.length;
  const o = obras[obraActivaIdx];

  const img = $('#crImg');
  img.src = o.imagen;
  img.alt = o.titulo.replace(/«|»/g,'');

  $('#obraTecnica').textContent = o.tecnica;
  $('#obraTitulo').textContent  = o.titulo;
  $('#obraAnio').textContent    = o.anio;
  $('#obraDesc').textContent    = o.desc;
  $('#reseñarObra').disabled    = false;
  $('#crProgreso').textContent  = `Obra ${obraActivaIdx+1} de ${obras.length}`;

  $$('.cr-mini').forEach((b, idx)=>{
    const activa = idx === obraActivaIdx;
    b.classList.toggle('activa', activa);
    if(activa) b.scrollIntoView({block:'nearest', inline:'center', behavior:'smooth'});
  });
}

function mover(paso){ seleccionar(obraActivaIdx + paso); }

/* ================================================================
   5) RESEÑAS  (conectadas a la API de Spring Boot)
   ----------------------------------------------------------------
   API.base:
     ""  -> mismo origen: GET/POST /api/resenas (front y back juntos)
     "https://resenas-api-production.up.railway.app"  -> API en otro dominio

   Contrato:
     GET  {base}/api/resenas[?obra=ID]  -> [{id, obraId, nombre, puntuacion, texto, fecha}]
     POST {base}/api/resenas  (JSON)    -> { obraId, nombre, puntuacion, texto }

   Si la API no responde, las reseñas siguen funcionando en local (localStorage).
   ================================================================ */
/* En LOCAL apunta a tu backend. Para PRODUCCIÓN (Vercel) cámbialo por la URL
   pública de Railway, p.ej. "https://resenas-api-production.up.railway.app". */
const API = { base: "https://aquilino-crescencio-production.up.railway.app" };

const STORE_KEY = 'resenas_pintor_v1';
let resenas = [];
let puntuacionSel = 0;
let modoLocal = false;   // true = sin backend disponible, se usa localStorage

async function cargarResenas(){
  try{
    const res = await fetch(API.base + '/api/resenas');
    if(!res.ok) throw new Error('HTTP ' + res.status);
    resenas = await res.json();
    modoLocal = false;
    $('#avisoStore').hidden = true;
  }catch(e){
    modoLocal = true;
    $('#avisoStore').hidden = false;
    try{ resenas = JSON.parse(localStorage.getItem(STORE_KEY)) || []; }
    catch(_){ resenas = []; }
  }
  pintarResenas();
}

function persistirLocal(){
  try{ localStorage.setItem(STORE_KEY, JSON.stringify(resenas)); }catch(e){}
}

function poblarSelectObras(){
  const sel = $('#rObra');
  sel.innerHTML = '<option value="general">Impresión general de la exposición</option>'
    + obras.map(o=>`<option value="${o.id}">${o.titulo}</option>`).join('');
}

function construirEstrellas(){
  const cont = $('#estrellas');
  for(let n=1;n<=5;n++){
    const b = document.createElement('button');
    b.type='button'; b.dataset.v=n; b.setAttribute('role','radio');
    b.setAttribute('aria-label', `${n} de 5`); b.setAttribute('aria-checked','false');
    b.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.3 6.9.7-5.1 4.7 1.4 6.8L12 17.8 5.9 21.2l1.4-6.8L2.2 9.7l6.9-.7z"/></svg>';
    b.addEventListener('mouseenter', ()=> pintarEstrellas(n, true));
    b.addEventListener('mouseleave', ()=> pintarEstrellas(puntuacionSel, false));
    b.addEventListener('click', ()=>{ puntuacionSel = n; pintarEstrellas(n, false);
      $$('#estrellas button').forEach(x=>x.setAttribute('aria-checked', x.dataset.v==n)); });
    cont.appendChild(b);
  }
}
function pintarEstrellas(n, previa){
  $$('#estrellas button').forEach(b=>{
    const on = (+b.dataset.v) <= n;
    b.classList.toggle('on', on && !previa);
    b.classList.toggle('previa', on && previa);
  });
}

function estrellasTexto(n){ return '★★★★★☆☆☆☆☆'.slice(5-n, 10-n); }
function nombreObra(id){
  if(id==='general') return 'Exposición';
  const o = obras.find(x=>x.id===id); return o ? o.titulo : 'Obra';
}
function fechaCorta(iso){
  try{ return new Date(iso).toLocaleDateString('es-ES',{day:'numeric',month:'long',year:'numeric'}); }
  catch(e){ return ''; }
}

function pintarResenas(){
  const cont = $('#listaResenas');
  if(resenas.length===0){
    cont.innerHTML = `<div class="vacio"><strong>Aún no hay reseñas.</strong><br>Sé la primera persona en comentar una obra.</div>`;
    return;
  }
  cont.innerHTML = resenas.map(r=>`
    <article class="resena">
      <div class="resena-top">
        <span class="quien">${escapar(r.nombre)}</span>
        <span class="obra-tag">${escapar(nombreObra(r.obraId))}</span>
      </div>
      <div class="resena-top">
        <span class="estrellas-fijas" aria-label="${r.puntuacion} de 5">${estrellasTexto(r.puntuacion)}</span>
        <span class="fecha">${fechaCorta(r.fecha)}</span>
      </div>
      <p class="texto">${escapar(r.texto)}</p>
    </article>`).join('');
}

function escapar(s){ const d=document.createElement('div'); d.textContent=s??''; return d.innerHTML; }

async function publicarResena(){
  const nombre = $('#rNombre').value.trim();
  const obraId = $('#rObra').value;
  const texto  = $('#rTexto').value.trim();
  const err = $('#formError');

  if(!nombre){ err.textContent='Escribe tu nombre para firmar la reseña.'; return; }
  if(!puntuacionSel){ err.textContent='Elige una puntuación de 1 a 5 estrellas.'; return; }
  if(texto.length<4){ err.textContent='Cuéntanos un poco más sobre la obra.'; return; }
  err.textContent='';

  const nueva = { obraId, nombre, puntuacion:puntuacionSel, texto };
  const btn = $('#publicar');
  btn.disabled = true; btn.textContent = 'Publicando…';

  try{
    if(modoLocal) throw new Error('sin-backend');
    const res = await fetch(API.base + '/api/resenas', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(nueva)
    });
    if(!res.ok) throw new Error('HTTP ' + res.status);
    const creada = await res.json();   // {id, obraId, nombre, puntuacion, texto, fecha}
    resenas.unshift(creada);
  }catch(e){
    // sin servidor: guardamos en este navegador
    modoLocal = true; $('#avisoStore').hidden = false;
    resenas.unshift({ ...nueva, fecha:new Date().toISOString() });
    persistirLocal();
  }

  btn.disabled = false; btn.textContent = 'Publicar reseña';
  pintarResenas();

  // reset
  $('#rNombre').value=''; $('#rTexto').value=''; puntuacionSel=0; pintarEstrellas(0,false);
  $$('#estrellas button').forEach(x=>x.setAttribute('aria-checked','false'));
  $('#rObra').value='general';
}

/* ================================================================
   5b) VÍDEO DEL RECORRIDO
   ================================================================ */
function renderVideo(){
  const cont = $('#videoWrap');
  const v = CONTENIDO.video || {};
  if(v.tipo === 'mp4' && v.fuente){
    cont.innerHTML = `<video class="reel" controls preload="metadata">
        <source src="${v.fuente}" type="video/mp4">
        Tu navegador no puede reproducir el vídeo.
      </video>`;
  } else if(v.tipo === 'youtube' && v.fuente){
    cont.innerHTML = `<div class="video-iframe"><iframe
        src="https://www.youtube-nocookie.com/embed/${v.fuente}"
        title="Recorrido por la exposición" loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe></div>`;
  } else if(v.tipo === 'vimeo' && v.fuente){
    cont.innerHTML = `<div class="video-iframe"><iframe
        src="https://player.vimeo.com/video/${v.fuente}"
        title="Recorrido por la exposición" loading="lazy"
        allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>`;
  } else {
    cont.innerHTML = `<div class="video-ph">
        <div>
          <div class="play"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div>
          <p>El vídeo del recorrido se mostrará aquí.</p>
          <p><small>Configúralo en CONTENIDO.video</small></p>
        </div>
      </div>`;
  }
}

/* ================================================================
   6) ARRANQUE
   ================================================================ */
function init(){
  pintarContenido();
  renderVideo();
  construirCarrusel();
  poblarSelectObras();
  construirEstrellas();
  cargarResenas();   // asíncrono: pinta al recibir respuesta de la API (o el local)

  // carrusel
  $('#crPrev').addEventListener('click', ()=> mover(-1));
  $('#crNext').addEventListener('click', ()=> mover(1));
  $('#carrusel').addEventListener('keydown', e=>{
    if(e.key==='ArrowRight') mover(1);
    if(e.key==='ArrowLeft')  mover(-1);
  });

  // "Reseñar esta obra" -> baja al formulario con la obra preseleccionada
  $('#reseñarObra').addEventListener('click', ()=>{
    $('#rObra').value = obras[obraActivaIdx].id;
    $('#resenas').scrollIntoView({behavior:'smooth'});
    setTimeout(()=> $('#rNombre').focus(), 500);
  });

  // reseñas
  $('#publicar').addEventListener('click', publicarResena);

  // menú móvil
  const toggle = $('#navToggle'), links = $('#navLinks');
  toggle.addEventListener('click', ()=>{
    const open = links.classList.toggle('abierto');
    toggle.setAttribute('aria-expanded', open);
  });
  $$('#navLinks a').forEach(a=> a.addEventListener('click', ()=>{
    links.classList.remove('abierto'); toggle.setAttribute('aria-expanded','false');
  }));
}
document.addEventListener('DOMContentLoaded', init);
