// ═══════════════════════════════════════════════════════
// LINKS — Mistborn: El Imperio Final
// Prólogo + Capítulos 1–5 (sin spoilers)
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
  { source: 'kelsier', target: 'quemar-zinc',             label: 'quema',         type: 'magic' },
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
  { source: 'vin', target: 'quemar-zinc',              label: 'quema',             type: 'magic' },
  { source: 'vin', target: 'alomancia',                label: 'practica — Mistborn',       type: 'magic' },
  { source: 'vin', target: 'mistborn',                 label: 'confirmada',          type: 'magic' },
  { source: 'vin', target: 'alomancia-emocional',      label: 'usa / resiste',             type: 'magic' },
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

  { source: 'milev', target: 'banda-camon', label: 'nuevo líder de',   type: 'rel' },
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
  { source: 'misting',  target: 'smoker',         label: 'variante:',        type: 'magic' },
  { source: 'misting',  target: 'tineye',         label: 'variante:',        type: 'magic' },
  { source: 'misting',  target: 'seeker',         label: 'variante:',        type: 'magic' },
  { source: 'quemar-zinc', target: 'suerte-vin',  label: 'opuesto a',        type: 'magic' },
  { source: 'seeker',   target: 'inquisidores',   label: 'versión más débil que', type: 'magic' },
  { source: 'seeker',   target: 'smoker',         label: 'contrarrestado por', type: 'magic' },

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
  { source: 'profecia-terris',   target: 'identidad-heroe', label: 'relacionada con',  type: 'trama' },
  { source: 'gran-trabajo',      target: 'kredik-shaw',     label: '¿objetivo?',       type: 'goal' },
  { source: 'gran-trabajo',      target: 'rebelion-skaa',   label: 'vinculado a',      type: 'trama' },
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
  { source: 'estafa-lord-jedue',        target: 'high-prelan-arriev',  label: 'víctima',        type: 'event' },
  { source: 'estafa-lord-jedue',        target: 'canton-finanzas',     label: 'objetivo',       type: 'event' },
  { source: 'estafa-lord-jedue',        target: 'vin-detectada',       label: 'causó',          type: 'trama' },
  { source: 'traicion-ulef',            target: 'golpiza-guarida',     label: 'desencadenó',    type: 'event' },
  { source: 'golpiza-guarida',          target: 'kelsier-irrumpe-guarida', label: 'causa',      type: 'event' },
  { source: 'kelsier-irrumpe-guarida',  target: 'vin-resiste-alomancia', label: 'contiene',     type: 'event' },
  { source: 'kelsier-irrumpe-guarida',  target: 'prueba-vial',         label: 'lleva a',        type: 'event' },
  { source: 'prueba-vial',              target: 'origen-padre-vin',    label: 'lleva a',        type: 'event' },
  { source: 'inquisidor-aparece',       target: 'vin-detectada',       label: 'consecuencia',   type: 'trama' },
  { source: 'kelsier-distrae-inquisidor', target: 'vin-detectada',     label: 'responde a',     type: 'trama' },

  // ── Equipo de Kelsier ─────────────────────────────────
  { source: 'dockson', target: 'banda-kelsier',        label: 'miembro de',          type: 'rel' },
  { source: 'dockson', target: 'luthadel',             label: 'opera en',            type: 'geo' },
  { source: 'dockson', target: 'reunion-muro',         label: 'protagoniza',         type: 'event' },
  { source: 'dockson', target: 'kelsier-observa-vin',  label: 'junto a Kelsier',     type: 'event' },
  { source: 'dockson', target: 'kelsier-irrumpe-guarida', label: 'acompaña',         type: 'event' },
  { source: 'dockson', target: 'prueba-vial',          label: 'testigo',             type: 'event' },
  { source: 'dockson', target: 'vin',                  label: 'investigó',           type: 'history' },

  { source: 'marsh', target: 'vin',             label: 'detectó poderes de',    type: 'history' },
  { source: 'marsh', target: 'rebelion-skaa',   label: 'antes involucrado',     type: 'history' },
  { source: 'marsh', target: 'yeden',           label: 'conoce a',              type: 'rel' },

  { source: 'yeden',         target: 'rebelion-skaa', label: 'líder de',     type: 'rel' },
  { source: 'yeden',         target: 'banda-kelsier', label: 'cliente de',   type: 'rel' },
  { source: 'yeden',         target: 'gran-trabajo',  label: 'financia',     type: 'goal' },
  { source: 'yeden',         target: 'gran-reunion',  label: 'asistió a',    type: 'event' },
  { source: 'clubs',         target: 'smoker',        label: 'es',           type: 'magic' },
  { source: 'clubs',         target: 'clubs-familiar', label: 'familiar es', type: 'rel' },
  { source: 'clubs',         target: 'gran-reunion',  label: 'asistió y abandonó', type: 'event' },
  { source: 'clubs',         target: 'clubs-abandona', label: 'protagoniza', type: 'event' },
  { source: 'trap',          target: 'smoker',        label: 'era',          type: 'magic' },
  { source: 'trap',          target: 'ministerio-acero', label: 'cazado por', type: 'conflict' },
  { source: 'breeze',        target: 'banda-kelsier', label: 'miembro de',   type: 'rel' },
  { source: 'breeze',        target: 'misting',       label: 'es',           type: 'magic' },
  { source: 'breeze',        target: 'suerte-vin',    label: 'quema Latón',  type: 'magic' },
  { source: 'breeze',        target: 'gran-reunion',  label: 'asistió a',    type: 'event' },
  { source: 'breeze',        target: 'breeze-sootha-vin', label: 'protagoniza', type: 'event' },
  { source: 'ham',           target: 'banda-kelsier', label: 'miembro de',   type: 'rel' },
  { source: 'ham',           target: 'misting',       label: 'es',           type: 'magic' },
  { source: 'ham',           target: 'thug',          label: 'es',           type: 'magic' },
  { source: 'ham',           target: 'gran-reunion',  label: 'asistió a',    type: 'event' },
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
  { source: 'pozos-hathsin', target: 'senor-gobernante', label: 'mina de atium de', type: 'rel' },
  { source: 'pozos-hathsin', target: 'atium',            label: 'produce',      type: 'lore' },
  { source: 'pozos-hathsin', target: 'mare',             label: 'donde murió',  type: 'history' },
  { source: 'plantacion-tresting', target: 'canales',    label: 'conectada por', type: 'geo' },

  // ══════════════════════════════════════════════════════
  // CAPÍTULO 4
  // ══════════════════════════════════════════════════════

  // ── Kelsier — nuevas conexiones ───────────────────────
  { source: 'kelsier', target: 'mare',              label: 'esposa muerta',       type: 'rel' },
  { source: 'kelsier', target: 'snapping',          label: 'experimentó en Pozos', type: 'history' },
  { source: 'kelsier', target: 'undecimo-metal',    label: 'posee / usará',       type: 'goal' },
  { source: 'kelsier', target: 'matar-lord-ruler',  label: 'objetivo personal',   type: 'goal' },
  { source: 'kelsier', target: 'gran-reunion',      label: 'lideró',              type: 'event' },
  { source: 'kelsier', target: 'atium',             label: 'objetivo del robo',   type: 'goal' },
  { source: 'kelsier', target: 'guaricion-luthadel', label: 'debe neutralizar',   type: 'goal' },

  // ── Vin — nuevas conexiones Cap.4 ────────────────────
  { source: 'vin', target: 'gran-reunion',       label: 'asistió a',           type: 'event' },
  { source: 'vin', target: 'breeze-sootha-vin',  label: 'víctima / aprendió',  type: 'event' },
  { source: 'vin', target: 'snapping',           label: '¿cuándo Snapeó?',     type: 'trama' },

  // ── Nuevos eventos ────────────────────────────────────
  { source: 'cat-eventos', target: 'gran-reunion',       label: '', type: 'arc' },
  { source: 'cat-eventos', target: 'breeze-sootha-vin',  label: '', type: 'arc' },
  { source: 'cat-eventos', target: 'clubs-abandona',     label: '', type: 'arc' },

  { source: 'gran-reunion', target: 'banda-kelsier',     label: 'formó',          type: 'event' },
  { source: 'gran-reunion', target: 'gran-trabajo',      label: 'reveló el plan', type: 'event' },
  { source: 'gran-reunion', target: 'luthadel',          label: 'ocurrió en',     type: 'geo' },
  { source: 'clubs-abandona', target: 'gran-reunion',    label: 'ocurrió en',     type: 'event' },
  // ── Nuevos conceptos ──────────────────────────────────
  { source: 'cat-magia', target: 'snapping',        label: '', type: 'arc' },
  { source: 'cat-magia', target: 'undecimo-metal',  label: '', type: 'arc' },
  { source: 'cat-magia', target: 'atium',           label: '', type: 'arc' },
  { source: 'cat-magia', target: 'thug',            label: '', type: 'arc' },

  { source: 'alomancia', target: 'thug',            label: 'tipo:',  type: 'magic' },
  { source: 'alomancia', target: 'snapping',        label: 'activa mediante', type: 'magic' },
  { source: 'alomancia', target: 'atium',           label: 'incluye', type: 'magic' },
  { source: 'misting',   target: 'thug',            label: 'variante:', type: 'magic' },
  { source: 'ocho-metales', target: 'undecimo-metal', label: 'más allá de los', type: 'lore' },
  { source: 'undecimo-metal', target: 'matar-lord-ruler', label: 'clave para', type: 'goal' },
  { source: 'undecimo-metal', target: 'senor-gobernante', label: 'vulnerabilidad de', type: 'conflict' },
  { source: 'undecimo-metal', target: 'peninsula-lejana',  label: 'encontrado cerca de', type: 'geo' },
  { source: 'atium',     target: 'senor-gobernante', label: 'sustenta poder de', type: 'rel' },
  { source: 'atium',     target: 'gran-trabajo',     label: 'objetivo del robo', type: 'goal' },

  // ── Nuevas tramas ─────────────────────────────────────
  { source: 'cat-tramas', target: 'matar-lord-ruler', label: '', type: 'arc' },

  { source: 'matar-lord-ruler', target: 'mare',             label: 'motivada por',   type: 'history' },
  { source: 'matar-lord-ruler', target: 'senor-gobernante', label: 'objetivo',       type: 'conflict' },

  { source: 'gran-trabajo', target: 'guaricion-luthadel',   label: 'requiere neutralizar', type: 'goal' },
  { source: 'gran-trabajo', target: 'matar-lord-ruler',     label: 'incluye',        type: 'trama' },

  { source: 'mare',         target: 'senor-gobernante',     label: 'tomada por',     type: 'conflict' },

  // ── Facciones nuevas ──────────────────────────────────
  { source: 'cat-facciones', target: 'guaricion-luthadel',  label: '', type: 'arc' },
  { source: 'guaricion-luthadel', target: 'luthadel',       label: 'patrulla',       type: 'geo' },
  { source: 'guaricion-luthadel', target: 'ministerio-acero', label: 'bajo autoridad del', type: 'rel' },

  // ══════════════════════════════════════════════════════
  // CAPÍTULO 5 — LINKS
  // ══════════════════════════════════════════════════════

  // ── Kelsier — nuevas conexiones Cap.5 ────────────────
  { source: 'kelsier', target: 'gemmel',                    label: 'entrenado por',           type: 'history' },
  { source: 'kelsier', target: 'oreseur',                   label: 'contrató',                type: 'rel' },
  { source: 'kelsier', target: 'capa-mistborn',             label: 'porta',                   type: 'rel' },
  { source: 'kelsier', target: 'robo-keep-venture',         label: 'ejecuta',                 type: 'event' },
  { source: 'kelsier', target: 'kelsier-azotea-preparacion', label: 'protagoniza',            type: 'event' },
  { source: 'kelsier', target: 'keep-venture',              label: 'infiltra',                type: 'event' },
  { source: 'kelsier', target: 'tienda-clubs',              label: 'nueva base en',           type: 'geo' },

  // ── Vin — nuevas conexiones Cap.5 ────────────────────
  { source: 'vin', target: 'kelsier-azotea-preparacion',    label: 'observa',                 type: 'event' },

  // ── Clubs — nuevas conexiones ─────────────────────────
  { source: 'clubs', target: 'clubs-regresa',               label: 'protagoniza',             type: 'event' },
  { source: 'clubs', target: 'tienda-clubs',                label: 'opera desde',             type: 'geo' },
  { source: 'clubs', target: 'clubs-familiar',              label: 'acompaña a',              type: 'rel' },
  { source: 'clubs-familiar', target: 'clubs-regresa',      label: 'acompaña en',             type: 'event' },
  { source: 'clubs-familiar', target: 'tienda-clubs',       label: 'reside en',               type: 'geo' },

  // ── Mare — nuevas conexiones ──────────────────────────
  { source: 'mare', target: 'alomancia',                    label: 'era Tineye',              type: 'magic' },
  { source: 'mare', target: 'dockson',                      label: 'trio original con',       type: 'history' },

  // ── Gemmel ────────────────────────────────────────────
  { source: 'gemmel', target: 'undecimo-metal',             label: 'dirigió a Kelsier hacia', type: 'history' },
  { source: 'gemmel', target: 'mistborn',                   label: 'es',                      type: 'magic' },

  // ── OreSeur ───────────────────────────────────────────
  { source: 'oreseur', target: 'kandra',                    label: 'es',                      type: 'rel' },
  { source: 'oreseur', target: 'atium',                     label: 'Contrato pagado en',      type: 'rel' },

  // ── Kandra ────────────────────────────────────────────
  { source: 'cat-mundo', target: 'kandra',                  label: '',                        type: 'arc' },

  // ── Hazekillers ───────────────────────────────────────
  { source: 'cat-facciones', target: 'hazekillers',         label: '',                        type: 'arc' },
  { source: 'hazekillers', target: 'keep-venture',          label: 'defienden',               type: 'rel' },
  { source: 'hazekillers', target: 'nobleza',               label: 'empleados por',           type: 'rel' },
  { source: 'hazekillers', target: 'robo-keep-venture',     label: 'participan en',           type: 'event' },

  // ── Capa Mistborn ─────────────────────────────────────
  { source: 'cat-magia', target: 'capa-mistborn',           label: '',                        type: 'arc' },
  { source: 'capa-mistborn', target: 'mistborn',            label: 'símbolo de',              type: 'rel' },

  // ── La Oscuridad ──────────────────────────────────────
  { source: 'cat-tramas', target: 'la-oscuridad',           label: '',                        type: 'arc' },
  { source: 'la-oscuridad', target: 'identidad-heroe',      label: 'amenaza que debe destruir', type: 'trama' },
  { source: 'la-oscuridad', target: 'profecia-terris',      label: 'relacionada con',         type: 'trama' },

  // ── Keep Venture ─────────────────────────────────────
  { source: 'cat-mundo', target: 'keep-venture',            label: '',                        type: 'arc' },
  { source: 'keep-venture', target: 'luthadel',             label: 'en',                      type: 'geo' },
  { source: 'keep-venture', target: 'grandes-casas',        label: 'sede de',                 type: 'geo' },
  { source: 'keep-venture', target: 'lord-venture',         label: 'pertenece a',             type: 'rel' },
  { source: 'keep-venture', target: 'robo-keep-venture',    label: 'escenario de',            type: 'event' },

  // ── Tienda Clubs ─────────────────────────────────────
  { source: 'cat-mundo', target: 'tienda-clubs',            label: '',                        type: 'arc' },
  { source: 'tienda-clubs', target: 'luthadel',             label: 'en',                      type: 'geo' },
  { source: 'tienda-clubs', target: 'banda-kelsier',        label: 'base de',                 type: 'rel' },
  { source: 'tienda-clubs', target: 'smoker',               label: 'cubierta por cobre de',   type: 'magic' },

  // ── Nuevos eventos ────────────────────────────────────
  { source: 'cat-eventos', target: 'clubs-regresa',                label: '', type: 'arc' },
  { source: 'cat-eventos', target: 'kelsier-azotea-preparacion',   label: '', type: 'arc' },
  { source: 'cat-eventos', target: 'robo-keep-venture',            label: '', type: 'arc' },

  { source: 'clubs-regresa',              target: 'banda-kelsier',  label: 'completa al equipo', type: 'event' },
  { source: 'clubs-regresa',              target: 'tienda-clubs',   label: 'lleva al equipo a',  type: 'event' },
  { source: 'kelsier-azotea-preparacion', target: 'keep-venture',   label: 'elige objetivo',     type: 'event' },
  { source: 'kelsier-azotea-preparacion', target: 'robo-keep-venture', label: 'precede a',       type: 'event' },
  { source: 'kelsier-azotea-preparacion', target: 'mare',           label: 'recuerdo de',        type: 'history' },
  { source: 'robo-keep-venture',          target: 'atium',          label: 'obtiene',            type: 'goal' },
  { source: 'robo-keep-venture',          target: 'gran-trabajo',   label: 'financia',           type: 'goal' },

];

