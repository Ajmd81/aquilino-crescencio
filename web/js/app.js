/* ================================================================
   1) CONTENIDO EDITABLE
   ----------------------------------------------------------------
   Todo lo que el cliente debe cambiar está aquí: nombre del autor,
   biografía, el vídeo y las obras del carrusel (título, técnica,
   imagen y descripción).

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

  /* Cada obra: id único, título, técnica, imagen y descripción. */
  obras: [
    { id:"castillo", titulo:"«Castillo de Almodóvar del Río»", tecnica:"Óleo sobre lienzo",
      imagen:"assets/obras/castillo.jpg",
      desc:"Las torres almenadas del castillo se alzan sobre la arboleda y las palmeras, bajo un cielo azul con nubes." },

    { id:"clara", titulo:"«Clara»", tecnica:"Óleo sobre lienzo",
      imagen:"assets/obras/clara.jpg",
      desc:"Una niña rubia con pijama lila duerme abrazada a su osito de peluche. Un retrato tierno firmado por el autor." },

    { id:"recoleccion", titulo:"«La Primavera»", tecnica:"Óleo sobre lienzo",
      imagen:"assets/obras/recoleccion.jpg",
      desc:"Dos mujeres reposan junto a un cesto rebosante de fruta, con el campo y los árboles al fondo. Una de las composiciones de mayor formato de la exposición." },

    { id:"cordobesa", titulo:"«Cordobesa con guitarra y sombrero cordobés»", tecnica:"Óleo sobre lienzo",
      imagen:"assets/obras/cordobesa.jpg",
      desc:"Una mujer con sombrero cordobés se apoya en una guitarra, con la ciudad al fondo. Trazo firme y mirada serena, muy del estilo del autor." },

    { id:"maria", titulo:"«María»", tecnica:"Óleo sobre lienzo",
      imagen:"assets/obras/maria.jpg",
      desc:"Retrato de mujer sosteniendo un cántaro de barro, con una ventana abierta al paisaje y una figura en el camino." },

    { id:"mujermalaga", titulo:"«Mujer de Málaga»", tecnica:"Óleo sobre lienzo",
      imagen:"assets/obras/mujermalaga.jpg",
      desc:"Mujer sentada con un abanico en la mano ante un patio y un caserío, bajo un cielo limpio." },

    { id:"naranjas", titulo:"«Mujer con naranjas y limones»", tecnica:"Óleo sobre lienzo",
      imagen:"assets/obras/naranjas.jpg",
      desc:"Figura femenina que recoge naranjas en su regazo, junto a una maceta y un naranjo." },

    { id:"pies", titulo:"«La Chiquita Piconera»", tecnica:"Óleo sobre lienzo",
      imagen:"assets/obras/pies.jpg",
      desc:"Una mujer se refresca los pies en un lebrillo, sentada ante un paisaje abierto." },

    { id:"cantaro", titulo:"«La Fuensanta»", tecnica:"Óleo sobre lienzo",
      imagen:"assets/obras/cantaro.jpg",
      desc:"Mujer de falda roja apoyada en un gran cántaro de barro, junto a un muro." },

    { id:"melocotones", titulo:"«Bodegón. Melocotones y uvas»", tecnica:"Óleo sobre lienzo",
      imagen:"assets/obras/melocotones.jpg",
      desc:"Cestas de uvas y melocotones sobre fondo oscuro, con hojas y sarmientos de parra. Detalle minucioso en cada fruto." },

    { id:"brevas", titulo:"«Bodegón. Cesta de brevas»", tecnica:"Óleo sobre lienzo",
      imagen:"assets/obras/brevas.jpg",
      desc:"Cesto de brevas, higos y uvas sobre un mantel rematado con encaje. Calidez y volumen en las frutas maduras." },

    { id:"cestauvas", titulo:"«Bodegón. Cesta con uvas»", tecnica:"Óleo sobre lienzo",
      imagen:"assets/obras/cestauvas.jpg",
      desc:"Cesta de manzanas y uvas sobre un mantel de encaje, acompañada de un vaso de agua. Estudio de luz y transparencias." },

    { id:"rosas", titulo:"«Jarrón con rosas»", tecnica:"Óleo sobre lienzo",
      imagen:"assets/obras/rosas.jpg",
      desc:"Ramo de rosas en un jarrón de cerámica, sobre fondo oscuro y en marco oval dorado." },

    { id:"veleros", titulo:"«Galeones»", tecnica:"Óleo sobre lienzo",
      imagen:"assets/obras/veleros.jpg",
      desc:"Dos galeones navegan a toda vela sobre un mar agitado, bajo un cielo de nubes." },

    { id:"abanico", titulo:"«Abanico de amapolas»", tecnica:"Pintura a mano sobre abanico",
      imagen:"assets/obras/abanico.jpg",
      desc:"Amapolas pintadas a mano sobre un abanico, firmado «Crecencio». Una pieza singular dentro de la exposición." },

    /* ---------- Escenas religiosas ---------- */
    { id:"panespeces", titulo:"«Multiplicación de panes y peces»", tecnica:"Óleo sobre lienzo",
      imagen:"assets/obras/panespeces.jpg",
      desc:"Jesús, sentado junto a una hoguera bajo un árbol, asa los peces mientras señala la barca al atardecer sobre el lago. Luz cálida y reflejos dorados en el agua." },

    { id:"anunciacion", titulo:"«La Anunciación»", tecnica:"Óleo sobre lienzo",
      imagen:"assets/obras/anunciacion.jpg",
      desc:"El arcángel Gabriel, sobre una nube, se aparece a la Virgen en oración bajo el haz de luz del Espíritu Santo." },

    { id:"sagradafamilia", titulo:"«La Sagrada Familia»", tecnica:"Óleo sobre lienzo",
      imagen:"assets/obras/sagradafamilia.jpg",
      desc:"María, el Niño y San José en el taller de carpintería, con un castillo y las montañas al fondo." },

    { id:"samaritana", titulo:"«La samaritana»", tecnica:"Óleo sobre lienzo",
      imagen:"assets/obras/samaritana.jpg",
      desc:"Jesús conversa con la mujer de Samaria junto al pozo, entre naranjos y palmeras." },

    { id:"asuncion", titulo:"«Jesús recibe a la Virgen»", tecnica:"Óleo sobre lienzo",
      imagen:"assets/obras/asuncion.jpg",
      desc:"Cristo tiende las manos a la Virgen, que asciende entre nubes rodeada de querubines." },

    { id:"ermita", titulo:"«Ermita la Virgen de Guía»", tecnica:"Óleo sobre lienzo",
      imagen:"assets/obras/ermita.jpg",
      desc:"La ermita de piedra con su espadaña y su campana, enmarcada entre dos grandes árboles y la cancela de hierro." },

    /* ---------- Escenas rurales y paisajes ---------- */
    { id:"pastores", titulo:"«Los pastores»", tecnica:"Óleo sobre lienzo",
      imagen:"assets/obras/pastores.jpg",
      desc:"Una pastora con su cesto y un pastor recostado junto a su perro vigilan el rebaño en un prado florido, con la sierra al fondo." },

    { id:"pastor", titulo:"«El pastor»", tecnica:"Óleo sobre lienzo",
      imagen:"assets/obras/pastor.jpg",
      desc:"Un pequeño pastor cuida su rebaño a orillas de un lago, con un cortijo blanco entre la arboleda." },

    { id:"lavanderas", titulo:"«Lavanderas»", tecnica:"Óleo sobre lienzo",
      imagen:"assets/obras/lavanderas.jpg",
      desc:"Dos mujeres lavan la ropa en el río a los pies de un pueblo de montaña con su campanario." },

    { id:"segadoras", titulo:"«Segadoras»", tecnica:"Óleo sobre lienzo",
      imagen:"assets/obras/segadoras.jpg",
      desc:"Mujeres atan haces de trigo y los cargan en un carro tirado por un burro, en plena siega bajo las montañas." },

    { id:"almuerzo", titulo:"«Los segadores»", tecnica:"Óleo sobre lienzo",
      imagen:"assets/obras/almuerzo.jpg",
      desc:"Tres segadores hacen un alto para comer en el rastrojo: chorizo, pan, vino y un plato de migas sobre un mantel blanco." },

    { id:"perros", titulo:"«Día de monte»", tecnica:"Óleo sobre lienzo",
      imagen:"assets/obras/perros.jpg",
      desc:"Un hombre con chaleco naranja descansa entre las rocas del monte rodeado de sus perros." },

    { id:"caballos", titulo:"«Caballos»", tecnica:"Óleo sobre lienzo",
      imagen:"assets/obras/caballos.jpg",
      desc:"Un caballo blanco pasta junto a otro castaño en un prado, bajo un cielo otoñal." },

    { id:"caballosplaya", titulo:"«Caballos en la playa»", tecnica:"Óleo sobre lienzo",
      imagen:"assets/obras/caballosplaya.jpg",
      desc:"Tres caballos galopan por la orilla levantando espuma, bajo un atardecer encendido." },

    { id:"casa", titulo:"«Casa en la sierra»", tecnica:"Óleo sobre lienzo",
      imagen:"assets/obras/casa.jpg",
      desc:"Una casa de tejado a dos aguas entre árboles otoñales y montañas azuladas." },

    /* ---------- Bodegones ---------- */
    { id:"manzanasuvas", titulo:"«Bodegón. Manzanas y uvas»", tecnica:"Óleo sobre lienzo",
      imagen:"assets/obras/manzanasuvas.jpg",
      desc:"Cesta de asa con uvas blancas y negras y manzanas, sobre fondo verde y con grandes hojas de parra." },

    { id:"jarracopa", titulo:"«Bodegón. Jarra y copa»", tecnica:"Óleo sobre lienzo",
      imagen:"assets/obras/jarracopa.jpg",
      desc:"Jarra de barro, copa de cristal y un plato con fruta sobre un paño blanco, contra un fondo negro." },

    { id:"lirio", titulo:"«Bodegón. Lirio y botella»", tecnica:"Óleo sobre lienzo",
      imagen:"assets/obras/lirio.jpg",
      desc:"Un lirio amarillo en un vaso, una botella verde, peras e higos sobre un mantel blanco." },

    { id:"copacerezas", titulo:"«Bodegón. Copa de cerezas»", tecnica:"Óleo sobre lienzo",
      imagen:"assets/obras/copacerezas.jpg",
      desc:"Una copa colmada de cerezas sobre un mantel de encaje que cae en pliegues, sobre fondo negro." },

    { id:"copachampan", titulo:"«Bodegón. Copa de champán»", tecnica:"Óleo sobre lienzo",
      imagen:"assets/obras/copachampan.jpg",
      desc:"Copa de champán sobre un paño de seda, junto a un racimo de uvas blancas y hojas de parra." },

    { id:"jarracobre", titulo:"«Bodegón. Jarra de cobre y copa»", tecnica:"Óleo sobre lienzo",
      imagen:"assets/obras/jarracobre.jpg",
      desc:"Uvas, melocotones, una jarra de cobre y copas de vino sobre un mantel con puntilla." },

    { id:"limones", titulo:"«Bodegón. Cestillo de limones»", tecnica:"Óleo sobre lienzo",
      imagen:"assets/obras/limones.jpg",
      desc:"Limones enteros y uno partido en una bandeja sobre un mantel de encaje, con fondo negro." },

    { id:"caldero", titulo:"«Bodegón. Barreño de cobre»", tecnica:"Óleo sobre lienzo",
      imagen:"assets/obras/caldero.jpg",
      desc:"Un barreño de cobre, peras y naranjas sobre un mantel blanco, en tonos cálidos y tierras." },

    { id:"racimos", titulo:"«Bodegón. Uvas»", tecnica:"Óleo sobre lienzo",
      imagen:"assets/obras/racimos.jpg",
      desc:"Racimos de uvas blancas y negras con hojas de parra sobre un mantel de encaje, contra un fondo rojo." },

    { id:"sandia", titulo:"«Bodegón. Sandía y jarras»", tecnica:"Óleo sobre lienzo",
      imagen:"assets/obras/sandia.jpg",
      desc:"Jarras de metal y cristal, una copa, tajadas de sandía y melocotones sobre un mantel de encaje." },

    { id:"botellaverde", titulo:"«Bodegón. Botella y limones»", tecnica:"Óleo sobre lienzo",
      imagen:"assets/obras/botellaverde.jpg",
      desc:"Botella verde, un tarro con limones, una jarra de cristal y racimos de uvas con un paño de encaje." },

    { id:"frutero", titulo:"«Bodegón. Frutero dorado»", tecnica:"Óleo sobre lienzo",
      imagen:"assets/obras/frutero.jpg",
      desc:"Un frutero dorado con uvas, manzanas rojas y racimos sobre un largo mantel blanco con encaje." },

    { id:"cantaroverde", titulo:"«Bodegón. Cántaro y caldero»", tecnica:"Óleo sobre lienzo",
      imagen:"assets/obras/cantaroverde.jpg",
      desc:"Un cántaro vidriado, un caldero de cobre, ajos, pimientos y tomates: un bodegón de cocina." },

    { id:"ciruelas", titulo:"«Bodegón. Ciruelas y jarra de cobre»", tecnica:"Óleo sobre lienzo",
      imagen:"assets/obras/ciruelas.jpg",
      desc:"Un cuenco de ciruelas, racimos de uvas, un plato de porcelana y una jarra de cobre sobre un paño de encaje." },

    { id:"cestanaranjas", titulo:"«Bodegón. Cesta volcada»", tecnica:"Óleo sobre lienzo",
      imagen:"assets/obras/cestanaranjas.jpg",
      desc:"Una cesta de mimbre volcada deja caer uvas y naranjas junto a una jarra azul." },

    { id:"botellas", titulo:"«Bodegón. Botellas y plato»", tecnica:"Óleo sobre lienzo",
      imagen:"assets/obras/botellas.jpg",
      desc:"Una licorera de cristal, una botella verde, un plato decorado, higos y uvas sobre un tapete de encaje." },

    { id:"granadas", titulo:"«Bodegón. Copa con granadas»", tecnica:"Óleo sobre lienzo",
      imagen:"assets/obras/granadas.jpg",
      desc:"Granadas en una copa de cristal azul y una abierta sobre el mantel, con fondo azul claro." },

    { id:"uvascortina", titulo:"«Bodegón. Uvas y copa»", tecnica:"Óleo sobre lienzo",
      imagen:"assets/obras/uvascortina.jpg",
      desc:"Una cesta de uvas negras y una copa sobre un mantel de encaje, con una cortina blanca recogida al fondo." },

    { id:"fresas", titulo:"«Bodegón. Copa de fresas»", tecnica:"Óleo sobre lienzo",
      imagen:"assets/obras/fresas.jpg",
      desc:"Una copa de fresas y algunas sueltas sobre un mantel blanco de encaje, en tonos suaves." },

    /* ---------- Serie de gatos ---------- */
    { id:"gatopuerta", titulo:"«Gato tras la puerta»", tecnica:"Pintura sobre lienzo",
      imagen:"assets/obras/gatopuerta.jpg",
      desc:"Un gato negro de grandes ojos amarillos se asoma por una puerta entreabierta." },

    { id:"gatocaja", titulo:"«Gato en la caja»", tecnica:"Pintura sobre lienzo",
      imagen:"assets/obras/gatocaja.jpg",
      desc:"Un gatito negro asoma de una caja de cartón bajo la luna llena y un cielo de estrellas doradas." },

    { id:"gatotejado", titulo:"«Gato en el tejado»", tecnica:"Pintura sobre lienzo",
      imagen:"assets/obras/gatotejado.jpg",
      desc:"Un gato negro sentado sobre las tejas mira al cielo azul con ojos enormes." },

    { id:"gatoventana", titulo:"«Gato en la ventana»", tecnica:"Pintura sobre lienzo",
      imagen:"assets/obras/gatoventana.jpg",
      desc:"Un gato negro sonriente apoya las patas en el alféizar, entre tonos naranjas y crema." },
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
