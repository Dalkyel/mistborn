// ═══════════════════════════════════════════════════════
// LINKS — Mistborn: El Imperio Final
// Prólogo + Capítulos 1–3 (sin spoilers)
// ═══════════════════════════════════════════════════════

const links = [

  // ── Raíz a categorías ─────────────────────────────────
  { source: 'root', target: 'cat-kelsier',   label: 'protagonista', type: 'cat' },
  { source: 'root', target: 'cat-vin',       label: 'protagonista', type: 'cat' },
  { source: 'root', target: 'cat-mundo',     label: 'mundo',        type: 'cat' },
  { source: 'root', target: 'cat-magia',     label: 'alomancia',    type: 'cat' },
  { source: 'root', target: 'cat-facciones', label: 'poder',        type: 'cat' },
  { source: 'root', target: 'cat-tramas',    label: 'tramas',       type: 'cat' },
  { source: 'root', target: 'cat-eventos',   label: 'eventos',      type: 'arc' },

  // ══════════════════════════════════════════════════════
  // KELSIER
  // ══════════════════════════════════════════════════════

  { source: 'kelsier', target: 'cat-kelsier',             label: '',                       type: 'arc' },
  { source: 'kelsier', target: 'pozos-hathsin',           label: 'supervivió',             type: 'history' },
  { source: 'kelsier', target: 'alomancia',               label: 'practica — Mistborn',    type: 'magic' },
  { source: 'kelsier', target: 'mistborn',                label: 'es',                     type: 'magic' },
  { source: 'kelsier', target: 'quemar-estano',           label: 'quema (Prólogo)',         type: 'magic' },
  { source: 'kelsier', target: 'quemar-zinc',             label: 'quema (Cap.2–3)',         type: 'magic' },
  { source: 'kelsier', target: 'suerte-vin',              label: 'también quema',           type: 'magic' },
  { source: 'kelsier', target: 'alomancia-emocional',     label: 'usa a escala de sala',    type: 'magic' },
  { source: 'kelsier', target: 'ocho-metales',            label: 'bebe vial de',            type: 'magic' },
  { source: 'kelsier', target: 'tepper',                  label: 'desafía / provoca',       type: 'rel' },
  { source: 'kelsier', target: 'mennis',                  label: 'dialoga',                 type: 'rel' },
  { source: 'kelsier', target: 'brumas',                  label: 'camina en',               type: 'lore' },
  { source: 'kelsier', target: 'lord-renoux',             label: 'menciona',                type: 'lore' },
  { source: 'kelsier', target: 'robo-despensa',           label: 'ejecuta',                 type: 'event' },
  { source: 'kelsier', target: 'rescate-hija-jess',       label: 'ejecuta',                 type: 'event' },
  { source: 'kelsier', target: 'quema-manor',             label: 'ejecuta',                 type: 'event' },
  { source: 'kelsier', target: 'rebelion-skaa',           label: 'cataliza',                type: 'goal' },
  { source: 'kelsier', target: 'skaa-faccion',            label: 'es parte de',             type: 'rel' },
  { source: 'kelsier', target: 'marsh',                   label: 'hermano de',              type: 'rel' },
  { source: 'kelsier', target: 'dockson',                 label: 'socio de confianza',      type: 'rel' },
  { source: 'kelsier', target: 'gran-trabajo',            label: 'planea',                  type: 'goal' },
  { source: 'kelsier', target: 'kredik-shaw',             label: 'mira hacia',              type: 'goal' },
  { source: 'kelsier', target: 'banda-kelsier',           label: 'lidera',                  type: 'rel' },
  { source: 'kelsier', target: 'reclutar-marsh',          label: 'necesita',                type: 'trama' },
  { source: 'kelsier', target: 'kelsier-observa-vin',     label: 'protagoniza',             type: 'event' },
  { source: 'kelsier', target: 'kelsier-distrae-inquisidor', label: 'ejecuta',              type: 'event' },
  { source: 'kelsier', target: 'reunion-muro',            label: 'protagoniza',             type: 'event' },
  { source: 'kelsier', target: 'kelsier-irrumpe-guarida', label: 'protagoniza',             type: 'event' },
  { source: 'kelsier', target: 'prueba-vial',             label: 'conduce',                 type: 'event' },
  { source: 'kelsier', target: 'vin',                     label: 'recluta / explica',       type: 'rel' },
  { source: 'kelsier', target: 'milev',                   label: 'nombra crewleader',       type: 'event' },

  // ── Prólogo — personajes menores ──────────────────────
  { source: 'lord-tresting', target: 'cat-facciones',       label: '',                type: 'arc' },
  { source: 'lord-tresting', target: 'plantacion-tresting', label: 'controlaba',      type: 'geo' },
  { source: 'lord-tresting', target: 'obligador-prelan',    label: 'recibió visita',  type: 'rel' },
  { source: 'lord-tresting', target: 'nobleza',             label: 'pertenecía a',    type: 'rel' },
  { source: 'lord-tresting', target: 'quema-manor',         label: 'muere en',        type: 'event' },
  { source: 'lord-tresting', target: 'hija-jess',           label: 'secuestró',       type: 'conflict' },
  { source: 'lord-tresting', target: 'lord-venture',        label: 'trato comercial', type: 'rel' },

  { source: 'obligador-prelan', target: 'obligadores',      label: 'miembro de',   type: 'rel' },
  { source: 'obligador-prelan', target: 'ministerio-acero', label: 'sirvió al',    type: 'rel' },
  { source: 'obligador-prelan', target: 'quema-manor',      label: 'murió en',     type: 'event' },
  { source: 'obligador-prelan', target: 'lord-venture',     label: 'enviado por',  type: 'rel' },

  { source: 'tepper',    target: 'plantacion-tresting', label: 'vivía en',      type: 'geo' },
  { source: 'tepper',    target: 'skaa-faccion',        label: 'es parte de',   type: 'rel' },
  { source: 'mennis',    target: 'plantacion-tresting', label: 'vivía en',      type: 'geo' },
  { source: 'mennis',    target: 'cuevas-este',         label: 'ordenó huir a', type: 'goal' },
  { source: 'jess',      target: 'hija-jess',           label: 'madre de',      type: 'rel' },
  { source: 'hija-jess', target: 'rescate-hija-jess',   label: 'rescatada en',  type: 'event' },

  // ══════════════════════════════════════════════════════
  // VIN
  // ══════════════════════════════════════════════════════

  { source: 'vin', target: 'cat-vin',                  label: '',                         type: 'arc' },
  { source: 'vin', target: 'suerte-vin',               label: 'quema (Latón)',             type: 'magic' },
  { source: 'vin', target: 'quemar-zinc',              label: 'quema (Cap.3)',             type: 'magic' },
  { source: 'vin', target: 'alomancia',                label: 'practica — Mistborn',       type: 'magic' },
  { source: 'vin', target: 'mistborn',                 label: 'confirmada Cap.3',          type: 'magic' },
  { source: 'vin', target: 'alomancia-emocional',      label: 'usa / resiste',             type: 'magic' },
  { source: 'vin', target: 'reen',                     label: 'hermano / traición',        type: 'rel' },
  { source: 'vin', target: 'camon',                    label: 'fue miembro de',            type: 'rel' },
  { source: 'vin', target: 'ulef',                     label: 'traicionada por',           type: 'conflict' },
  { source: 'vin', target: 'luthadel',                 label: 'vive en',                   type: 'geo' },
  { source: 'vin', target: 'origen-vin',               label: 'misterio parcialmente resuelto', type: 'trama' },
  { source: 'vin', target: 'padre-vin',                label: 'padre es',                  type: 'rel' },
  { source: 'vin', target: 'madre-vin',                label: 'madre fue',                 type: 'rel' },
  { source: 'vin', target: 'arete-vin',                label: 'guarda',                    type: 'rel' },
  { source: 'vin', target: 'obsidiana-reen',           label: 'guarda',                    type: 'rel' },
  { source: 'vin', target: 'piedras-ciudades',         label: 'colecciona',                type: 'rel' },
  { source: 'vin', target: 'estafa-lord-jedue',        label: 'clave en',                  type: 'event' },
  { source: 'vin', target: 'paliza-camon',             label: 'víctima',                   type: 'event' },
  { source: 'vin', target: 'traicion-ulef',            label: 'víctima',                   type: 'event' },
  { source: 'vin', target: 'golpiza-guarida',          label: 'víctima / sobrevive',        type: 'event' },
  { source: 'vin', target: 'vin-resiste-alomancia',    label: 'protagoniza',               type: 'event' },
  { source: 'vin', target: 'prueba-vial',              label: 'protagoniza',               type: 'event' },
  { source: 'vin', target: 'origen-padre-vin',         label: 'revelación sobre',          type: 'event' },
  { source: 'vin', target: 'vin-detectada',            label: 'protagoniza',               type: 'trama' },
  { source: 'vin', target: 'skaa-faccion',             label: 'es parte de',               type: 'rel' },
  { source: 'vin', target: 'ceniza',                   label: 'observa / contrasta',       type: 'lore' },
  { source: 'vin', target: 'brumas',                   label: 'imagina ser como',          type: 'lore' },
  { source: 'vin', target: 'banda-kelsier',            label: 'reclutada implícitamente',  type: 'rel' },
  { source: 'vin', target: 'kelsier-irrumpe-guarida',  label: 'salvada en',               type: 'event' },

  { source: 'reen', target: 'vin',          label: 'moldeó',                type: 'rel' },
  { source: 'reen', target: 'camon',        label: 'dejó deuda con',        type: 'rel' },
  { source: 'reen', target: 'marsh',        label: 'conoció a',             type: 'history' },
  { source: 'reen', target: 'origen-vin',   label: 'clave del',             type: 'trama' },
  { source: 'reen', target: 'obsidiana-reen', label: 'dejó atrás',          type: 'rel' },
  { source: 'reen', target: 'madre-vin',    label: 'salvó a Vin de',        type: 'history' },

  { source: 'ulef', target: 'traicion-ulef',  label: 'protagoniza',    type: 'event' },
  { source: 'ulef', target: 'camon',          label: 'delató a Vin a', type: 'conflict' },

  { source: 'camon', target: 'banda-camon',     label: 'era líder de',       type: 'rel' },
  { source: 'camon', target: 'luthadel',        label: 'operaba en',         type: 'geo' },
  { source: 'camon', target: 'traicion-theron', label: 'ejecutó',            type: 'event' },
  { source: 'camon', target: 'golpiza-guarida', label: 'agresor',            type: 'conflict' },
  { source: 'camon', target: 'milev',           label: 'reemplazado por',    type: 'event' },

  { source: 'milev', target: 'camon',       label: 'reemplaza a',      type: 'rel' },
  { source: 'milev', target: 'banda-camon', label: 'nuevo líder de',   type: 'rel' },
  { source: 'milev', target: 'kelsier',     label: 'obedece a',        type: 'rel' },
  { source: 'milev', target: 'kelsier-irrumpe-guarida', label: 'participa en', type: 'event' },

  { source: 'theron', target: 'estafa-lord-jedue', label: 'diseñó (traicionado)', type: 'history' },
  { source: 'theron', target: 'camon',             label: 'traicionado por',      type: 'conflict' },

  { source: 'padre-vin', target: 'ministerio-acero', label: 'sirve en',          type: 'rel' },
  { source: 'padre-vin', target: 'obligadores',      label: 'es',                type: 'rel' },
  { source: 'padre-vin', target: 'nobleza',          label: 'es noble',          type: 'rel' },
  { source: 'padre-vin', target: 'origen-padre-vin', label: 'revelado en',       type: 'event' },
  { source: 'padre-vin', target: 'arete-vin',        label: 'vínculo a través de', type: 'lore' },
  { source: 'madre-vin', target: 'arete-vin',        label: 'dejó el',           type: 'rel' },
  { source: 'madre-vin', target: 'origen-padre-vin', label: 'revelada en',       type: 'event' },

  // ══════════════════════════════════════════════════════
  // EL MUNDO
  // ══════════════════════════════════════════════════════

  { source: 'cat-mundo', target: 'brumas',            label: '', type: 'arc' },
  { source: 'cat-mundo', target: 'ceniza',            label: '', type: 'arc' },
  { source: 'cat-mundo', target: 'senor-gobernante',  label: '', type: 'arc' },
  { source: 'cat-mundo', target: 'luthadel',          label: '', type: 'arc' },
  { source: 'cat-mundo', target: 'mistwraith',        label: '', type: 'arc' },
  { source: 'cat-mundo', target: 'sol-rojo',          label: '', type: 'arc' },
  { source: 'cat-mundo', target: 'terris',            label: '', type: 'arc' },
  { source: 'cat-mundo', target: 'kredik-shaw',       label: '', type: 'arc' },

  { source: 'senor-gobernante', target: 'ministerio-acero', label: 'comanda',                 type: 'rel' },
  { source: 'senor-gobernante', target: 'skaa-faccion',     label: 'dueño de',                type: 'rel' },
  { source: 'senor-gobernante', target: 'nobleza',          label: 'gobierna / otorgó Alomancia', type: 'rel' },
  { source: 'senor-gobernante', target: 'koloss',           label: 'comanda',                 type: 'rel' },
  { source: 'senor-gobernante', target: 'kredik-shaw',      label: 'habita en',               type: 'geo' },
  { source: 'senor-gobernante', target: 'voz-epigrafe-cap1', label: 'posiblemente habla',     type: 'trama' },
  { source: 'senor-gobernante', target: 'alomancia',        label: 'otorgó hace 1000 años',   type: 'history' },

  { source: 'ceniza', target: 'ashmounts',       label: 'producida por',  type: 'lore' },
  { source: 'ceniza', target: 'sol-rojo',        label: 'oscurece el',    type: 'lore' },
  { source: 'ceniza', target: 'river-channerel', label: 'llevada al',     type: 'lore' },
  { source: 'brumas', target: 'mistwraith',      label: 'alberga',        type: 'lore' },
  { source: 'luthadel', target: 'kredik-shaw',   label: 'centro de',      type: 'geo' },
  { source: 'luthadel', target: 'river-channerel', label: 'cruzada por',  type: 'geo' },
  { source: 'luthadel', target: 'grandes-casas', label: 'sede de',        type: 'geo' },
  { source: 'terris', target: 'profecia-terris', label: 'origen de',      type: 'lore' },
  { source: 'terris', target: 'voz-epigrafe-cap1', label: 'visitada por', type: 'history' },

  // ══════════════════════════════════════════════════════
  // FACCIONES
  // ══════════════════════════════════════════════════════

  { source: 'cat-facciones', target: 'skaa-faccion',    label: '', type: 'arc' },
  { source: 'cat-facciones', target: 'nobleza',         label: '', type: 'arc' },
  { source: 'cat-facciones', target: 'ministerio-acero', label: '', type: 'arc' },
  { source: 'cat-facciones', target: 'banda-camon',     label: '', type: 'arc' },
  { source: 'cat-facciones', target: 'grandes-casas',   label: '', type: 'arc' },
  { source: 'cat-facciones', target: 'banda-kelsier',   label: '', type: 'arc' },

  { source: 'ministerio-acero', target: 'obligadores',     label: 'incluye',  type: 'rel' },
  { source: 'ministerio-acero', target: 'inquisidores',    label: 'incluye',  type: 'rel' },
  { source: 'ministerio-acero', target: 'koloss',          label: 'comanda',  type: 'rel' },
  { source: 'ministerio-acero', target: 'canton-finanzas', label: 'incluye',  type: 'rel' },

  { source: 'nobleza', target: 'luthadel',       label: 'centrada en',     type: 'geo' },
  { source: 'nobleza', target: 'canales',        label: 'usa',             type: 'lore' },
  { source: 'nobleza', target: 'grandes-casas',  label: 'techo es',        type: 'rel' },
  { source: 'skaa-faccion', target: 'rebelion-skaa', label: 'protagoniza', type: 'trama' },

  { source: 'banda-camon', target: 'skaa-faccion', label: 'son',       type: 'rel' },
  { source: 'banda-camon', target: 'luthadel',     label: 'opera en',  type: 'geo' },
  { source: 'banda-camon', target: 'milev',        label: 'ahora liderada por', type: 'rel' },
  { source: 'grandes-casas', target: 'luthadel',   label: 'sede en',   type: 'geo' },
  { source: 'grandes-casas', target: 'lord-venture', label: 'posiblemente incluye', type: 'rel' },
  { source: 'canton-finanzas', target: 'luthadel', label: 'sede en',   type: 'geo' },
  { source: 'canton-finanzas', target: 'canales',  label: 'usa',       type: 'lore' },

  // ══════════════════════════════════════════════════════
  // MAGIA
  // ══════════════════════════════════════════════════════

  { source: 'cat-magia', target: 'alomancia',          label: '', type: 'arc' },
  { source: 'cat-magia', target: 'alomancia-emocional', label: '', type: 'arc' },

  { source: 'alomancia', target: 'quemar-estano',       label: 'incluye', type: 'magic' },
  { source: 'alomancia', target: 'suerte-vin',          label: 'incluye', type: 'magic' },
  { source: 'alomancia', target: 'quemar-zinc',         label: 'incluye', type: 'magic' },
  { source: 'alomancia', target: 'ocho-metales',        label: 'tiene',   type: 'magic' },
  { source: 'alomancia', target: 'mistborn',            label: 'tipo:',   type: 'magic' },
  { source: 'alomancia', target: 'misting',             label: 'tipo:',   type: 'magic' },
  { source: 'alomancia', target: 'smoker',              label: 'tipo:',   type: 'magic' },
  { source: 'alomancia', target: 'tineye',              label: 'tipo:',   type: 'magic' },
  { source: 'alomancia', target: 'seeker',              label: 'tipo:',   type: 'magic' },

  { source: 'alomancia-emocional', target: 'suerte-vin',   label: 'incluye Suavizar', type: 'magic' },
  { source: 'alomancia-emocional', target: 'quemar-zinc',  label: 'incluye Azuzar',   type: 'magic' },
  { source: 'alomancia-emocional', target: 'obligadores',  label: 'PROHIBIDO en',     type: 'conflict' },

  { source: 'mistborn', target: 'ocho-metales',   label: 'quema todos',      type: 'magic' },
  { source: 'mistborn', target: 'kelsier',        label: 'Kelsier es',       type: 'magic' },
  { source: 'mistborn', target: 'vin',            label: 'Vin es (Cap.3)',    type: 'magic' },
  { source: 'misting',  target: 'smoker',         label: 'variante:',        type: 'magic' },
  { source: 'misting',  target: 'tineye',         label: 'variante:',        type: 'magic' },
  { source: 'misting',  target: 'seeker',         label: 'variante:',        type: 'magic' },
  { source: 'smoker',   target: 'trap',           label: 'era',              type: 'rel' },
  { source: 'smoker',   target: 'clubs',          label: 'es',               type: 'rel' },
  { source: 'tineye',   target: 'clubs-familiar', label: 'es',               type: 'rel' },
  { source: 'quemar-zinc', target: 'suerte-vin',  label: 'opuesto a',        type: 'magic' },
  { source: 'seeker',   target: 'inquisidores',   label: 'versión más débil que', type: 'magic' },
  { source: 'seeker',   target: 'smoker',         label: 'contrarrestado por', type: 'magic' },

  // ── Objetos ───────────────────────────────────────────
  { source: 'arete-vin',      target: 'madre-vin',  label: 'perteneció a', type: 'rel' },
  { source: 'obsidiana-reen', target: 'reen',       label: 'dejada por',   type: 'rel' },

  // ══════════════════════════════════════════════════════
  // TRAMAS
  // ══════════════════════════════════════════════════════

  { source: 'cat-tramas', target: 'rebelion-skaa',    label: '', type: 'arc' },
  { source: 'cat-tramas', target: 'identidad-heroe',  label: '', type: 'arc' },
  { source: 'cat-tramas', target: 'origen-vin',       label: '', type: 'arc' },
  { source: 'cat-tramas', target: 'voz-epigrafe-cap1', label: '', type: 'arc' },
  { source: 'cat-tramas', target: 'profecia-terris',  label: '', type: 'arc' },
  { source: 'cat-tramas', target: 'gran-trabajo',     label: '', type: 'arc' },
  { source: 'cat-tramas', target: 'vin-detectada',    label: '', type: 'arc' },
  { source: 'cat-tramas', target: 'reclutar-marsh',   label: '', type: 'arc' },

  { source: 'voz-epigrafe-cap1', target: 'profecia-terris', label: 'menciona',         type: 'trama' },
  { source: 'voz-epigrafe-cap1', target: 'identidad-heroe', label: '¿misma persona?',  type: 'trama' },
  { source: 'voz-epigrafe-cap1', target: 'terris',          label: 'visitó',           type: 'trama' },
  { source: 'profecia-terris',   target: 'identidad-heroe', label: 'relacionada con',  type: 'trama' },
  { source: 'gran-trabajo',      target: 'kredik-shaw',     label: '¿objetivo?',       type: 'goal' },
  { source: 'gran-trabajo',      target: 'rebelion-skaa',   label: 'vinculado a',      type: 'trama' },
  { source: 'gran-trabajo',      target: 'banda-kelsier',   label: 'requiere',         type: 'goal' },
  { source: 'vin-detectada',     target: 'inquisidores',    label: 'lanzó al',         type: 'conflict' },
  { source: 'vin-detectada',     target: 'suerte-vin',      label: 'causada por uso de', type: 'event' },
  { source: 'reclutar-marsh',    target: 'marsh',           label: 'objetivo',         type: 'trama' },
  { source: 'reclutar-marsh',    target: 'ministerio-acero', label: 'infiltrar',       type: 'goal' },
  { source: 'origen-vin',        target: 'padre-vin',       label: 'parcialmente resuelto por', type: 'trama' },

  // ══════════════════════════════════════════════════════
  // EVENTOS
  // ══════════════════════════════════════════════════════

  { source: 'cat-eventos', target: 'robo-despensa',              label: '', type: 'arc' },
  { source: 'cat-eventos', target: 'rescate-hija-jess',          label: '', type: 'arc' },
  { source: 'cat-eventos', target: 'quema-manor',                label: '', type: 'arc' },
  { source: 'cat-eventos', target: 'estafa-lord-jedue',          label: '', type: 'arc' },
  { source: 'cat-eventos', target: 'paliza-camon',               label: '', type: 'arc' },
  { source: 'cat-eventos', target: 'reunion-muro',               label: '', type: 'arc' },
  { source: 'cat-eventos', target: 'traicion-theron',            label: '', type: 'arc' },
  { source: 'cat-eventos', target: 'kelsier-observa-vin',        label: '', type: 'arc' },
  { source: 'cat-eventos', target: 'inquisidor-aparece',         label: '', type: 'arc' },
  { source: 'cat-eventos', target: 'kelsier-distrae-inquisidor', label: '', type: 'arc' },
  { source: 'cat-eventos', target: 'traicion-ulef',              label: '', type: 'arc' },
  { source: 'cat-eventos', target: 'golpiza-guarida',            label: '', type: 'arc' },
  { source: 'cat-eventos', target: 'kelsier-irrumpe-guarida',    label: '', type: 'arc' },
  { source: 'cat-eventos', target: 'vin-resiste-alomancia',      label: '', type: 'arc' },
  { source: 'cat-eventos', target: 'prueba-vial',                label: '', type: 'arc' },
  { source: 'cat-eventos', target: 'origen-padre-vin',           label: '', type: 'arc' },

  // ── Cadenas causales ──────────────────────────────────
  { source: 'robo-despensa',            target: 'plantacion-tresting', label: 'ocurrió en',     type: 'geo' },
  { source: 'rescate-hija-jess',        target: 'quema-manor',         label: 'desencadenó',    type: 'event' },
  { source: 'quema-manor',              target: 'rebelion-skaa',       label: 'forzó inicio',   type: 'trama' },
  { source: 'quema-manor',              target: 'cuevas-este',         label: 'forzó huida a',  type: 'event' },
  { source: 'estafa-lord-jedue',        target: 'traicion-theron',     label: 'contiene',       type: 'event' },
  { source: 'estafa-lord-jedue',        target: 'vin',                 label: 'Vin la salvó',   type: 'event' },
  { source: 'estafa-lord-jedue',        target: 'high-prelan-arriev',  label: 'víctima',        type: 'event' },
  { source: 'estafa-lord-jedue',        target: 'canton-finanzas',     label: 'objetivo',       type: 'event' },
  { source: 'estafa-lord-jedue',        target: 'vin-detectada',       label: 'causó',          type: 'trama' },
  { source: 'traicion-theron',          target: 'camon',               label: 'ejecutada por',  type: 'event' },
  { source: 'traicion-ulef',            target: 'golpiza-guarida',     label: 'desencadenó',    type: 'event' },
  { source: 'golpiza-guarida',          target: 'kelsier-irrumpe-guarida', label: 'causa',      type: 'event' },
  { source: 'kelsier-irrumpe-guarida',  target: 'vin-resiste-alomancia', label: 'contiene',     type: 'event' },
  { source: 'kelsier-irrumpe-guarida',  target: 'prueba-vial',         label: 'lleva a',        type: 'event' },
  { source: 'prueba-vial',              target: 'origen-padre-vin',    label: 'lleva a',        type: 'event' },
  { source: 'inquisidor-aparece',       target: 'vin-detectada',       label: 'consecuencia',   type: 'trama' },
  { source: 'kelsier-distrae-inquisidor', target: 'vin-detectada',     label: 'responde a',     type: 'trama' },

  // ── Equipo de Kelsier ─────────────────────────────────
  { source: 'dockson', target: 'kelsier',              label: 'socio de',            type: 'rel' },
  { source: 'dockson', target: 'banda-kelsier',        label: 'miembro de',          type: 'rel' },
  { source: 'dockson', target: 'luthadel',             label: 'opera en',            type: 'geo' },
  { source: 'dockson', target: 'reunion-muro',         label: 'protagoniza',         type: 'event' },
  { source: 'dockson', target: 'kelsier-observa-vin',  label: 'junto a Kelsier',     type: 'event' },
  { source: 'dockson', target: 'kelsier-irrumpe-guarida', label: 'acompaña',         type: 'event' },
  { source: 'dockson', target: 'prueba-vial',          label: 'testigo',             type: 'event' },
  { source: 'dockson', target: 'vin',                  label: 'investigó',           type: 'history' },
  { source: 'dockson', target: 'marsh',                label: 'recibió aviso de',    type: 'history' },

  { source: 'marsh', target: 'kelsier',         label: 'hermano de',            type: 'rel' },
  { source: 'marsh', target: 'vin',             label: 'detectó poderes de',    type: 'history' },
  { source: 'marsh', target: 'dockson',         label: 'avisó a',               type: 'history' },
  { source: 'marsh', target: 'rebelion-skaa',   label: 'antes involucrado',     type: 'history' },
  { source: 'marsh', target: 'yeden',           label: 'conoce a',              type: 'rel' },
  { source: 'marsh', target: 'reclutar-marsh',  label: 'objetivo de',           type: 'trama' },

  { source: 'yeden',         target: 'rebelion-skaa', label: 'representa',   type: 'rel' },
  { source: 'yeden',         target: 'banda-kelsier', label: 'cliente de',   type: 'rel' },
  { source: 'yeden',         target: 'gran-trabajo',  label: 'financia',     type: 'goal' },
  { source: 'clubs',         target: 'banda-kelsier', label: 'será miembro', type: 'rel' },
  { source: 'clubs',         target: 'smoker',        label: 'es',           type: 'magic' },
  { source: 'clubs',         target: 'clubs-familiar', label: 'familiar es', type: 'rel' },
  { source: 'trap',          target: 'smoker',        label: 'era',          type: 'magic' },
  { source: 'trap',          target: 'ministerio-acero', label: 'cazado por', type: 'conflict' },
  { source: 'breeze',        target: 'banda-kelsier', label: 'miembro de',   type: 'rel' },
  { source: 'ham',           target: 'banda-kelsier', label: 'miembro de',   type: 'rel' },
  { source: 'clubs-familiar', target: 'banda-kelsier', label: 'será miembro', type: 'rel' },
  { source: 'clubs-familiar', target: 'tineye',       label: 'es',           type: 'magic' },
  { source: 'banda-kelsier', target: 'gran-trabajo',  label: 'ejecutará',    type: 'goal' },
  { source: 'banda-kelsier', target: 'rebelion-skaa', label: 'aliada con',   type: 'rel' },

  // ── Inquisidor ─────────────────────────────────────────
  { source: 'el-inquisidor', target: 'inquisidores',     label: 'es',           type: 'rel' },
  { source: 'el-inquisidor', target: 'ministerio-acero', label: 'sirve al',     type: 'rel' },
  { source: 'el-inquisidor', target: 'inquisidor-aparece', label: 'protagoniza', type: 'event' },
  { source: 'el-inquisidor', target: 'vin-detectada',    label: 'busca a Vin',  type: 'conflict' },
  { source: 'high-prelan-arriev', target: 'obligadores', label: 'miembro de',   type: 'rel' },
  { source: 'high-prelan-arriev', target: 'canton-finanzas', label: 'jefe del consejo', type: 'rel' },
  { source: 'high-prelan-arriev', target: 'el-inquisidor', label: 'salió con',  type: 'rel' },
  { source: 'kredik-shaw', target: 'senor-gobernante',   label: 'residencia de', type: 'geo' },
  { source: 'kredik-shaw', target: 'luthadel',           label: 'en el centro de', type: 'geo' },
  { source: 'pozos-hathsin', target: 'senor-gobernante', label: 'gestionados por', type: 'rel' },
  { source: 'plantacion-tresting', target: 'canales',    label: 'conectada por', type: 'geo' },

];
