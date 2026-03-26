// ═══════════════════════════════════════════════════════
// NODES — Mistborn: El Imperio Final
// Prólogo + Capítulos 1–5 (sin spoilers)
// Estructura: Personaje = quién + estado + "ver nodo X"
//             Evento    = secuencia narrativa completa
//             Concepto  = definición general
//             Lugar/Facción = descripción + estado + refs
// ═══════════════════════════════════════════════════════

const nodes = [

  // ── NODO CENTRAL ──────────────────────────────────────
  {
    id: 'root', label: 'Mistborn\nEl Imperio Final', group: 'CENTER', type: 'Novela',
    desc: 'Primer libro de la trilogía Mistborn de Brandon Sanderson. Un mundo donde la ceniza cae del cielo, las brumas cubren la noche y el Señor Gobernante lleva mil años en el poder. Dos protagonistas Mistborn: Kelsier, el Superviviente, y Vin, joven skaa cuyo padre es un high prelan del Ministerio del Acero.',
    star: ''
  },

  // ── CATEGORÍAS ────────────────────────────────────────
  {
    id: 'cat-kelsier', label: 'POV\nKelsier', group: 'CAT', type: 'Categoría',
    desc: 'Nodos del punto de vista de Kelsier: Prólogo, Cap.2, Cap.3, Cap.4, Cap.5.',
    star: ''
  },
  {
    id: 'cat-vin', label: 'POV\nVin', group: 'CAT', type: 'Categoría',
    desc: 'Nodos del punto de vista de Vin: Cap.1, Cap.2, Cap.3, Cap.4, Cap.5.',
    star: ''
  },
  {
    id: 'cat-mundo', label: 'El Mundo', group: 'CAT', type: 'Categoría',
    desc: 'Geografía, fenómenos naturales y cosmología del Imperio Final.',
    star: ''
  },
  {
    id: 'cat-magia', label: 'Alomancia', group: 'CAT', type: 'Categoría',
    desc: 'El sistema de magia del Imperio Final y sus reglas. Kelsier y Vin son Mistborn. Ham quema Peltre (Thug). Breeze quema Latón (Soother). El Snapping despierta los poderes. Hay 10 metales conocidos + el Undécimo Metal secreto.',
    star: ''
  },
  {
    id: 'cat-facciones', label: 'Facciones\n& Poder', group: 'CAT', type: 'Categoría',
    desc: 'Estructuras de poder: nobleza, skaa, Ministerio del Acero, inframundo criminal.',
    star: ''
  },
  {
    id: 'cat-tramas', label: 'Tramas', group: 'CAT', type: 'Categoría',
    desc: 'Hilos argumentales abiertos del Prólogo al Cap.5.',
    star: ''
  },
  {
    id: 'cat-eventos', label: 'Eventos', group: 'CAT', type: 'Categoría',
    desc: 'Eventos clave del Prólogo al Cap.5.',
    star: ''
  },

  // ══════════════════════════════════════════════════════
  // PERSONAJES — quién + estado actual + "ver nodo X"
  // ══════════════════════════════════════════════════════

  // ── Protagonistas ─────────────────────────────────────
  {
    id: 'kelsier', label: 'Kelsier', group: 'KELS', type: 'Personaje — Mistborn (Medio-Sangre)',
    desc: 'Conocido como "El Superviviente de Hathsin." Medio-sangre (padre noble, madre skaa). Cicatrices longitudinales en brazos — marca de los Pozos de Hathsin. Carismático, audaz, siempre sonriendo. Mistborn confirmado. No era Alomante antes de los Pozos: "Snapeó" allí bajo el trauma extremo, despertando sus poderes. Antes de los Pozos era ya el crewleader más infame de Luthadel, sin Alomancia. Junto a Dockson (skaa escapado de plantación) y Mare (Tineye), pusieron de rodillas a Grandes Casas. Fue capturado solo cuando el Lord Gobernante mismo le tendió una trampa al intentar robar en Kredik Shaw. Entrenado en Alomancia por Gemmel, "el viejo lunático", tras escapar de los Pozos. Su esposa Mare murió en los Pozos. Posee el Undécimo Metal. Ha planeado el gran trabajo durante ocho meses. Estado actual: el equipo está completo con Clubs, Vin es parte oficial, robó atium de Keep Venture. Ver nodo: quema-manor, kelsier-distrae-inquisidor, kelsier-irrumpe-guarida, prueba-vial, reunion-muro, gran-reunion, clubs-regresa, robo-keep-venture.',
    star: '★★★ Antes de los Pozos era el crewleader más infame de Luthadel — sin Alomancia alguna. Junto a Dockson y Mare pusieron de rodillas a las Grandes Casas. Fue Gemmel quien lo entrenó en Alomancia tras su escape. Motivación triple: robar el atium, overthrow el Imperio, vengar a Mare. "El Lord Ruler y yo tenemos una deuda pendiente."'
  },
  {
    id: 'vin', label: 'Vin', group: 'KELS', type: 'Personaje — Mistborn (Skaa / Medio-Sangre)',
    desc: 'Joven skaa de 16 años, menuda, aspecto juvenil. Segunda protagonista. Criada por su hermano Reen con filosofía brutal: "Cualquiera te traicionará." Llama "Suerte" a su Alomancia. Mistborn confirmada (Cap.3). En el Cap.4: Breeze la Suavizó sin que ella lo notara — pudo resistir a Kelsier pero no a Breeze — primera señal de que sus defensas tienen límites. Kelsier revela ante todo el equipo que es Mistborn. Decide quedarse y cooperar con el plan de Kelsier, no por convicción sino porque necesita aprender Alomancia para ser libre. "Me ataré a este Kelsier si eso me lleva a la libertad eventual." Estado actual: parte oficial del equipo, el grupo sabe que es Mistborn. Ver nodo: traicion-ulef, golpiza-guarida, vin-resiste-alomancia, prueba-vial, origen-padre-vin, gran-reunion.',
    star: '★★★ MISTBORN CONFIRMADA. En Cap.4 Breeze la Suavizó sin que lo notara — algo que Kelsier no logró. Sus defensas son entrenamiento, no instinto puro. "Nunca confíes en alguien que te da buenas noticias — es la forma más vieja de engañar a alguien." Y aun así se queda.'
  },

  // ── Equipo de Kelsier ─────────────────────────────────
  {
    id: 'dockson', label: 'Dockson', group: 'KELS', type: 'Personaje — Socio / Planificador',
    desc: 'Socio de confianza de Kelsier. Complexión moderada, cara cuadrada, cabello negro, media barba corta. Traje nobiliario como Kelsier — mentira: no es noble. Skaa escapado de una plantación. Antes de los Pozos de Hathsin ya era socio de Kelsier y de Mare, cuando los tres operaban sin Alomancia. Estado actual: ha eliminado los dos espías del Ministerio que seguían a Camon, testigo del robo en Keep Venture. Ver nodo: reunion-muro, kelsier-observa-vin, kelsier-irrumpe-guarida, prueba-vial, kelsier-azotea-preparacion.',
    star: '★ "Dije que me volví aburrido, Kell. No descuidado." El organizador detrás de Kelsier.'
  },
  {
    id: 'marsh', label: 'Marsh', group: 'KELS', type: 'Personaje — Hermano de Kelsier (Ausente)',
    desc: 'Hermano de Kelsier, también medio-sangre. Desaprueba profundamente los métodos de su hermano. Estado actual: no quiere nada con Kelsier ni con la rebelión, pero Kelsier lo necesita para infiltrarse entre los obligadores. Fue el primero en detectar los poderes de Vin, meses antes. Ver nodo: reclutar-marsh.',
    star: '★★ Detectó a Vin antes que nadie. Hermanos en lados opuestos de la misma causa.'
  },
  {
    id: 'breeze', label: 'Breeze', group: 'KELS', type: 'Personaje — Soother / Misting Latón',
    desc: 'Soother — quema Latón para Suavizar emociones ajenas. Mayor y algo corpulento. Viste con impecable elegancia: chaleco ciruela, botones dorados, sobretodo negro, sombrero de ala corta, bastón de duelo. Habla con familiaridad inmediata y condescendencia afectuosa. En el Cap.4 Suavizó a Vin para que le trajera vino sin que ella lo notara — algo que Kelsier no había logrado. Cuando Ham lo confronta por la ética del acto, lo desestima: "Le ofrecí ánimo, solo que por medios irregulares." Estado actual: se unió al equipo en la gran reunión. Ver nodo: gran-reunion.',
    star: '★★ Más sutil que Kelsier con la Alomancia emocional — Vin no lo detectó hasta después. La diferencia entre resistir a Kelsier y no resistir a Breeze revela que sus defensas dependen del contexto, no solo del poder.'
  },
  {
    id: 'ham', label: 'Ham\n(Hammond)', group: 'KELS', type: 'Personaje — Thug / Misting Peltre',
    desc: 'Nombre completo: Hammond. Thug — quema Peltre para aumentar fuerza física y resistencia. Complexión impresionantemente musculosa, shirt sin mangas, cabello corto y erguido. Compañero habitual de Breeze. Rol en el equipo: seguridad general, liderazgo de guerreros y combate cuando sea necesario. Carácter filosófico — pregunta constantemente sobre la ética de la Alomancia ("si alguien comete un crimen bajo tu Suavizado, ¿es tu culpa o la suya?"). Breeze lo llama "demasiado rígido." Estado actual: se unió al equipo en la gran reunión del Cap.4. Ver nodo: gran-reunion.',
    star: '★ "Sé que me uniré a tu banda sin importar cuál sea el trabajo." Leal pero no sin cuestionamientos.'
  },
  {
    id: 'trap', label: 'Trap 💀', group: 'KELS', type: 'Personaje — Smoker (Muerto)',
    desc: 'Smoker del antiguo círculo de Kelsier — quemaba Cobre. Estado actual: muerto. El Ministerio del Acero lo decapitó hace un par de meses, sin enviarlo siquiera a los Pozos. En el Cap.4 Breeze y Ham lo recuerdan con afecto.',
    star: '★ "El Ministerio alcanza a todo el mundo tarde o temprano." Su muerte dejó al equipo sin Smoker.'
  },
  {
    id: 'clubs', label: 'Clubs', group: 'KELS', type: 'Personaje — Smoker (Miembro del Equipo)',
    desc: 'Smoker — uno de los mejores de la ciudad según Kelsier. Cara retorcida como madera anudada, cojea al caminar, ojos perpetuamente desaprobadores. Tiene una tienda como fachada, que ahora sirve de base al equipo. Abandonó la reunión al escuchar el plan completo — no por cobardía, sino para pensar sin la influencia de Breeze. Volvió por su propio pie, sin Soother en la sala, y declaró que se unía no por dinero, sino porque lleva toda su vida escondiendo Mistings del Lord Ruler y él los atrapa a todos de todas formas. Prefiere escupirle en la cara antes de caer. Su sobrino adolescente, desgarbado y silencioso, lo acompañó a la guarida. Estado actual: Smoker oficial del equipo, base operativa en su tienda. Ver nodo: gran-reunion, clubs-abandona, clubs-regresa.',
    star: '★★★ No se une para ganar — se une porque perder con estilo tiene su propia dignidad. El equipo tiene ahora base y cobertura de cobre permanente.'
  },
  {
    id: 'clubs-familiar', label: 'Sobrino\nde Clubs', group: 'KELS', type: 'Personaje — Misting (Sin Nombre Aún)',
    desc: 'Sobrino adolescente de Clubs. Delgado, desgarbado, de aspecto torpe. Acompaña a Clubs a todas partes — le trae el vino, le acerca la silla, le cierra la puerta. No habla ni se presenta. Es Tineye (quema Estaño para mejorar los sentidos). Estado actual: en la nueva base del equipo en la tienda de Clubs. Ver nodo: clubs-regresa.',
    star: '★ Figura silenciosa. Su tipo alomático hace del equipo una unidad más completa.'
  },
  {
    id: 'yeden', label: 'Yeden', group: 'SKAA', type: 'Personaje — Líder de la Rebelión Skaa',
    desc: 'Líder de la rebelión skaa organizada. Bajo, cabello rizado castaño, ropa gris de trabajador skaa, abrigo marrón remendado y manchado de hollín. Profundamente moralistic y abiertamente hostil hacia los ladrones: "Son egoístas, indisciplinados y le han dado la espalda al resto de los skaa." Ya había pagado la mitad de los 30.000 boxings acordados (fondos de décadas de ahorro de la rebelión). No creía que los Mistborn existieran. En el Cap.4, a regañadientes se convierte en parte del equipo. Estado actual: cliente oficial, sentado en la mesa del equipo. Ver nodo: gran-reunion, rebelion-skaa.',
    star: '★★ La ironía de Yeden: desprecia profundamente a los ladrones pero los necesita desesperadamente. "Si de mí dependiera..." No ve otra opción. Su pueblo lleva mil años sin victorias reales.'
  },

  // ── Personajes Prólogo ─────────────────────────────────
  {
    id: 'tepper', label: 'Tepper', group: 'SKAA', type: 'Personaje — Líder Skaa (Prólogo)',
    desc: 'Cuarentón, delgado, rígido. Líder skaa del hovel en la plantación de Tresting. Estado actual: huyó a las cuevas del este al final del Prólogo. Ver nodo: quema-manor.',
    star: ''
  },
  {
    id: 'mennis', label: 'Mennis', group: 'SKAA', type: 'Personaje — Anciano Skaa (Prólogo)',
    desc: 'Anciano skaa de la plantación. Inusualmente viejo para un skaa de plantación. Estado actual: huyó a las cuevas del este tras ordenar la retirada. Ver nodo: quema-manor.',
    star: '★ Sabiduría resignada que coexiste con el coraje de actuar cuando no hay alternativa.'
  },
  {
    id: 'jess', label: 'Jess', group: 'SKAA', type: 'Personaje — Skaa (Prólogo)',
    desc: 'Mujer skaa de la plantación de Tresting. Estado actual: huyó a las cuevas del este con su hija ilesa. Ver nodo: rescate-hija-jess.',
    star: ''
  },
  {
    id: 'hija-jess', label: 'Hija de Jess', group: 'SKAA', type: 'Personaje — Skaa (Prólogo)',
    desc: 'Hija joven de Jess. Estado actual: ilesa, huyó con su madre. Al amanecer fue quien confirmó públicamente la destrucción del manor. Ver nodo: rescate-hija-jess, quema-manor.',
    star: ''
  },

  // ── Personajes Cap.1–3 ────────────────────────────────
  {
    id: 'reen', label: 'Reen', group: 'SKAA', type: 'Personaje — Hermano de Vin (Ausente)',
    desc: 'Hermano mayor de Vin. La crió con filosofía brutal: "Cualquiera te traicionará." La abandonó dejándola en deuda con Camon — cumpliendo su propia profecía. Hizo contacto inadvertido con Marsh cuando Camon intentó estafarle. Estado actual: desaparecido desde hace seis meses. Dejó solo un trozo de obsidiana tallada como único recuerdo.',
    star: '★ Cumplió su propia profecía abandonando a Vin. ¿Fue para protegerla — dejándola donde Kelsier pudiera encontrarla?'
  },
  {
    id: 'ulef', label: 'Ulef 💀', group: 'SKAA', type: 'Personaje — Traidor',
    desc: 'Miembro de la banda de Camon. Era la persona más cercana a Vin en ausencia de Reen. Estado actual: traicionó a Vin en el Cap.3, expulsado de la guarida por Milev junto al resto de la banda. Ver nodo: traicion-ulef.',
    star: '★ No la traicionó por maldad — por supervivencia. La filosofía de Reen es dolorosamente exacta.'
  },
  {
    id: 'camon', label: 'Camon', group: 'SKAA', type: 'Personaje — Exjefe de Banda (Degradado)',
    desc: 'Rechoncho, violento, temperamental. Exjefe de la banda criminal skaa en Luthadel. Estado actual: destituido por Kelsier en el Cap.3, entregado a Milev para ser convertido en mendigo. Ver nodo: estafa-lord-jedue, traicion-theron, golpiza-guarida, kelsier-irrumpe-guarida.',
    star: ''
  },
  {
    id: 'theron', label: 'Theron', group: 'SKAA', type: 'Personaje — Co-líder de Banda (Traicionado)',
    desc: 'Creó la estafa del "Lord Jedue" — cinco años de trabajo. Estado actual: traicionado por Camon; quedará arruinado y perseguido por el Ministerio cuando descubra el fraude. Ver nodo: estafa-lord-jedue, traicion-theron.',
    star: ''
  },
  {
    id: 'milev', label: 'Milev', group: 'SKAA', type: 'Personaje — Nuevo Crewleader',
    desc: 'Hombre de piel oscura, segundo de Camon. Estado actual: nombrado nuevo crewleader por Kelsier al final del Cap.3. Recibió 100 boxings por ceder el local para la reunión de esta noche. Vin predice que matará a Camon en cuanto Kelsier no esté mirando. Ver nodo: kelsier-irrumpe-guarida.',
    star: '★ Oportunista, leal al poder. Kelsier lo calibra rápido: "Rápido de reflejos y no tan fácilmente intimidado como los otros."'
  },
  {
    id: 'prelan-laird', label: 'Prelan Laird', group: 'NOBLE', type: 'Personaje — Obligador Prelan',
    desc: 'Obligador prelan del Cantón de Finanzas. Cabeza rapada, tatuajes de rango medio alrededor de los ojos. Estado actual: "llamado a otros asuntos" antes del Cap.2 — ausente. Ver nodo: estafa-lord-jedue.',
    star: '¿Por qué fue llamado a "otros asuntos" justo antes de la segunda reunión?'
  },
  {
    id: 'high-prelan-arriev', label: 'High Prelan\nArriev', group: 'MINISTERIO', type: 'Personaje — Alto Obligador',
    desc: 'Jefe del consejo del Cantón de Finanzas. Tatuajes que llegan hasta las orejas y la frente — rango más alto visto hasta ahora. Aspecto depredador, complexión musculosa. Estado actual: entregó los 3.000 boxings a Camon/Jedue y salió del Cantón junto al Inquisidor. Ver nodo: estafa-lord-jedue, inquisidor-aparece.',
    star: '★ Su sonrisa al despedir a Camon inquietó a Vin. Un obligador satisfecho siempre es mala señal.'
  },
  {
    id: 'el-inquisidor', label: 'El Inquisidor\ndel Acero', group: 'MINISTERIO', type: 'Personaje — Inquisidor del Acero',
    desc: 'Primer Inquisidor visto en persona. Alto, build fuerte. Rasgo definitorio: clavos de metal de grosor de cuenca ocular atravesados a presión por sus ojos — puntas sobresaliendo ~1 cm de la nuca, cabezas planas brillando como discos plateados. Tatuajes negros con línea carmesí: alto rango del Cantón de Inquisición. Estado actual: fue distraído por Kelsier con Zinc; está fuera de la guarida pero no fue eliminado. Ver nodo: inquisidor-aparece, kelsier-distrae-inquisidor.',
    star: '★★★ Los clavos DEBERÍAN matarlo. Nada en la Alomancia explica cómo sigue vivo. Kelsier lo llama demasiado peligroso para enfrentarlo — un Mistborn teme a un Inquisidor.'
  },
  {
    id: 'lord-tresting', label: 'Lord Tresting 💀', group: 'NOBLE', type: 'Personaje — Noble',
    desc: 'Noble propietario de una plantación rural. Cruel, ambicioso, soñaba con Luthadel. Estado actual: muerto. Ver nodo: quema-manor.',
    star: ''
  },
  {
    id: 'obligador-prelan', label: 'El Prelan\nObligador 💀', group: 'NOBLE', type: 'Personaje — Obligador Prelan',
    desc: 'Obligador prelan enviado desde Luthadel para atestiguar el trato de Tresting con Lord Venture. Tatuajes de alto rango. Estado actual: muerto. Ver nodo: quema-manor.',
    star: ''
  },
  {
    id: 'lord-venture', label: 'Lord Venture', group: 'NOBLE', type: 'Personaje — Noble (Mencionado)',
    desc: 'Noble poderoso de Luthadel. El prelan del Prólogo venía como su representante. Estado actual: mencionado pero no visto. Posiblemente miembro de las Grandes Casas.',
    star: '¿Qué papel jugará Lord Venture?'
  },
  {
    id: 'lord-renoux', label: 'Lord Renoux', group: 'NOBLE', type: 'Personaje — Noble del Oeste (Mencionado)',
    desc: 'Noble mencionado por Kelsier en el Prólogo como ejemplo de cambio posible: ha cesado palizas y considera pagar salarios. Estado actual: solo mencionado. Puede ser real o una historia fabricada por Kelsier.',
    star: '¿Existe Lord Renoux?'
  },
  {
    id: 'padre-vin', label: 'Padre de Vin\n(High Prelan)', group: 'MINISTERIO', type: 'Personaje — High Prelan (Ausente)',
    desc: 'High prelan del Ministerio del Acero. Padre biológico de Vin — relación con su madre prostituta. Estado actual: ausente, nunca conoció a Vin (o al menos ella no lo conoció a él). Su sangre noble de alto nivel es la fuente de los poderes alomáticos de Vin. Ver nodo: origen-padre-vin.',
    star: '★★★ Ironía central: el poder de Vin viene del sistema que la oprime. ¿Sabe que tiene una hija? ¿Podría el Ministerio conectarlos?'
  },
  {
    id: 'madre-vin', label: 'Madre de Vin', group: 'SKAA', type: 'Personaje — Skaa (Mencionada)',
    desc: 'Prostituta skaa, no por elección sino por las circunstancias del inframundo. Estado actual: ausente. Una vez intentó matar a Vin de pequeña — Reen la salvó. Vin guarda su arete como único recuerdo. Ver nodo: origen-padre-vin.',
    star: '★ ¿Por qué intentó matar a su propia hija? ¿Miedo a que el Ministerio descubriera al padre?'
  },

  // ══════════════════════════════════════════════════════
  // EVENTOS — secuencia narrativa completa
  // ══════════════════════════════════════════════════════

  {
    id: 'robo-despensa', label: 'Robo a la\nDespensa', group: 'EVENTO', type: 'Evento — Prólogo',
    desc: 'Durante el día, mientras todos los skaa trabajan en los campos, Kelsier se cuela en el manor de Lord Tresting y roba su despensa. Botín: pan fino, frutas y salchichas curadas. Esa noche entra en el hovel de treinta skaa y distribuye la comida. Para ellos, acostumbrados solo a sopa aguada y gachas, es un festín extraordinario. La despensa de Tresting resulta ser "deprimentemente mundana" según Kelsier. El acto silencia las objeciones de Tepper.',
    star: ''
  },
  {
    id: 'rescate-hija-jess', label: 'Rescate de la\nHija de Jess', group: 'EVENTO', type: 'Evento — Prólogo',
    desc: 'Sentado en el hovel conversando con Mennis, Kelsier quema Estaño y amplifica sus sentidos. Escucha dos voces gritando en la distancia — una mujer mayor y una joven. Los gritos de la joven se alejan hacia el manor: Lord Tresting ha mandado a buscar a la hija de Jess. Kelsier se levanta de un salto y sale a la bruma nocturna a pesar de las advertencias. Entra al manor, neutraliza la guardia y rescata a la joven antes de que Tresting la agreda. La devuelve ilesa, llorando, en plena noche. Este acto lo lleva a permanecer en el manor.',
    star: ''
  },
  {
    id: 'quema-manor', label: 'Incendio del\nManor 💀', group: 'EVENTO', type: 'Evento — Prólogo',
    desc: 'En la noche del Prólogo, Kelsier mata a todos los que hay en el manor de Tresting: más de dos docenas de soldados, los mayordomos, Lord Tresting mismo (dos cuchillos en el pecho — "siempre conviene ser cuidadoso") y sus obligadores, incluyendo el prelan enviado desde Luthadel. Al salir con la hija de Jess, arroja una antorcha al edificio. Al amanecer solo queda una cicatriz negra y humeante. La hija de Jess describe la escena a la multitud reunida. Mennis comprende la estrategia de Kelsier: no vino a liderar una rebelión — vino a crear una situación de la que los skaa ya no pudieran escapar sin huir. Ordena la marcha a las cuevas del este.',
    star: '★★ "Sabía que nunca se rebelarían solos, así que no les dio opción." La noticia llega a Luthadel días después y pone nerviosos a nobles y crimen organizado por igual.'
  },
  {
    id: 'estafa-lord-jedue', label: 'La Estafa\n"Lord Jedue"', group: 'EVENTO', type: 'Evento — Cap.1 / Cap.2',
    desc: 'Theron ha construido durante cinco años la credibilidad de la ficticia Casa Jedue. La estafa consiste en que Camon, como "Lord Jedue" (noble arruinado), negocie con el Ministerio un contrato de transporte de acólitos a la mitad del precio — creando la apariencia de una casa desesperada. Cap.1: primera reunión en una suite de hotel con Prelan Laird. Vin detecta error de ambientación (sirvientes demasiado ricos) y lo corrige. Cuando Laird duda al final, Vin usa su Suerte para suavizar la suspicacia. Laird acepta llevar la propuesta al Consejo. Cap.2: segunda reunión, esta vez en el Cantón de Finanzas. Laird ha sido llamado a "otros asuntos"; los recibe el High Prelan Arriev — jefe del consejo. Más intimidante y perspicaz que Laird. Vin vuelve a usar su Suerte cuando Arriev duda. Arriev acepta: 3.000 boxings de anticipo. Camon sale del Cantón con una caja de monedas. Un obligador detectó la manipulación alomática de Vin durante estas reuniones y avisó al Cantón de Inquisición.',
    star: '★ La ironía: la estafa funciona gracias a Vin, pero también la pone en peligro mortal.'
  },
  {
    id: 'traicion-theron', label: 'La Traición\na Theron', group: 'EVENTO', type: 'Evento — Cap.2',
    desc: 'En lugar de esperar el gran botín del asalto planeado por Theron a los barcos de acólitos con fondos del Ministerio camuflados, Camon toma el camino corto. Obtiene el anticipo de 3.000 boxings y planea desaparecer antes de que el Ministerio descubra el fraude, dejando a Theron enfrentarse solo a la catástrofe. Theron quedaría arruinado — sus cinco años de inversión perdidos — y perseguido sin tiempo de buscar venganza. Camon se lo explica a Vin en el Cantón mientras esperan la audiencia con Arriev. Vin lo procesa con cinismo: "Solo otra traición. ¿Por qué sigue molestándome?"',
    star: ''
  },
  {
    id: 'paliza-camon', label: 'Camon Golpea\na Vin', group: 'EVENTO', type: 'Evento — Cap.1',
    desc: 'Al llegar tarde a la preparación de la estafa, Camon abofetea a Vin con suficiente fuerza para lanzarla contra la pared. Sangra por el labio. La amenaza con venderla a los proxenetas, recordándole la deuda del hermano Reen. Cuando levanta la mano para un segundo golpe, Vin gasta un poco de su Suerte para calmar su nerviosismo. Camon se detiene sin saber por qué, baja la mano y se aleja. Vin piensa: "Solo otro golpe. Soy suficientemente fuerte."',
    star: ''
  },
  {
    id: 'reunion-muro', label: 'Reencuentro\nen el Muro', group: 'EVENTO', type: 'Evento — Cap.2',
    desc: 'Kelsier espera a Dockson sobre la muralla de Luthadel con vistas a la ciudad. Kelsier entró la noche anterior de forma clandestina — quemando metales. Dockson llegó por la vía normal. Confirman que Kelsier tuvo algo que ver con la muerte de Tresting. Dockson pone al día el equipo: Breeze y Ham confirmados, Trap muerto (decapitado hace dos meses), Clubs propuesto como Smoker, su familiar Tineye invitado también, Yeden vendrá como cliente. Marsh se niega a participar por ahora. Kelsier insiste: lo convencerá. Dockson ha organizado todo para la reunión esa misma tarde. Kelsier mira hacia el norte — hacia Kredik Shaw — al hablar del gran trabajo: "Un trabajo como ningún otro."',
    star: '★ El mapa del equipo queda claro. La mirada de Kelsier hacia Kredik Shaw hace implícito el objetivo.'
  },
  {
    id: 'kelsier-observa-vin', label: 'Kelsier\nObserva a Vin', group: 'EVENTO', type: 'Evento — Cap.2',
    desc: 'Kelsier y Dockson están en la sala de espera del Cantón de Finanzas — comiendo pasteles de betún rojo — mientras Camon y Vin se reúnen con Arriev. Dockson los llevó allí para que Kelsier pudiera ver a Vin trabajar en persona. Observan a Vin usar su Suerte sobre el obligador. Al salir Camon, Kelsier ve a Vin: cara con hematoma parcialmente curado, caminar ansioso, sobresaltándose con cada movimiento brusco. Piensa: "Tendré que encontrar algo particularmente adecuado que hacerle a ese hombre." Confirma a Dockson: "Al menos es Misting, y si Marsh dice que puede ser más, me inclino a creerle."',
    star: '★ Kelsier ve a Vin como alguien que necesita liberación — no solo como un recurso.'
  },
  {
    id: 'inquisidor-aparece', label: 'El Inquisidor\nAparece', group: 'EVENTO', type: 'Evento — Cap.2',
    desc: 'Poco después de que Camon y Vin salen del Cantón caminando hacia su guarida, el High Prelan Arriev aparece en la puerta del edificio. Detrás de él sale un Inquisidor del Acero — primera vez que Kelsier y Dockson lo ven. Dockson se queda rígido. El Inquisidor gira, mira directamente hacia donde están Kelsier y Dockson, luego gira en la dirección que tomó Camon. Kelsier concluye: un obligador detectó la manipulación alomática de Vin durante las reuniones previas y avisó al Cantón de Inquisición. El Inquisidor lleva al menos dos espías del Ministerio siguiendo a Camon. Si llegan a la guarida, morirán decenas de personas.',
    star: '★★ La detección alomática convierte el éxito de la estafa en una crisis mortal.'
  },
  {
    id: 'kelsier-distrae-inquisidor', label: 'Kelsier Distrae\nal Inquisidor', group: 'EVENTO', type: 'Evento — Cap.2',
    desc: 'Kelsier saca un vial pequeño de su capa — solución alcohólica con los 8 metales alomáticos en suspensión — y lo bebe de un trago. Su cuerpo se inunda de poder, claridad y fuerza. Quemando Zinc, jala con fuerza de las emociones del Inquisidor. La criatura se congela en mitad de la calle, luego se gira lentamente hacia el Cantón. "Que tengamos una persecución, tú y yo", piensa Kelsier. No intenta enfrentarlo directamente: "Demasiado peligroso." Dockson parte a eliminar los dos espías del Ministerio que siguen a Camon. Se citan en el cruce quince.',
    star: '★★ Un Mistborn usa todos sus metales y aun así rehúye el combate con el Inquisidor. Primera demostración del Zinc.'
  },
  {
    id: 'traicion-ulef', label: 'Traición\nde Ulef', group: 'EVENTO', type: 'Evento — Cap.3',
    desc: 'Vin percibe que algo va mal con los 3.000 boxings — llegaron demasiado fácil. Decide escapar de la guarida antes de que ocurra algo. Busca a Ulef, la persona que considera más cercana, para huir juntos. Ulef finge aceptar. En cuanto Vin va a la habitación trasera a recoger sus pocas posesiones (piedras, arete, obsidiana), Ulef corre al lado de Camon. Cuando Vin regresa, Ulef está junto a Camon — delatándola. Camon se levanta furioso, rojo como el sol, acusándola de querer traicionarlo al Ministerio. En su mente, Vin escucha la voz de Reen: "¡Idiota! La crueldad es la emoción más práctica."',
    star: '★★ No por maldad sino por supervivencia. La primera persona en quien confió después de Reen la traiciona exactamente igual que Reen predijo.'
  },
  {
    id: 'golpiza-guarida', label: 'Camon Intenta\nMatar a Vin', group: 'EVENTO', type: 'Evento — Cap.3',
    desc: 'Camon lanza un taburete a Vin que le impacta entre los hombros lanzándola al suelo. La abofetea cuando se levanta, retorciéndole el cuello dolorosamente. La agarra por la camisa y levanta el puño con intención de matarla — hay asesinato en sus ojos: cree que va a delatarlo al Ministerio. Vin intenta usar su Suerte para calmarlo pero la ha agotado completamente. Por primera vez en su vida, la Suerte falla en el momento más crítico. Sin ella, Vin es solo una joven skaa maltratada contra el suelo. Camon la tiene cogida cuando la puerta de la escalera se abre de golpe.',
    star: '★★ Primera vez que la Suerte de Vin se agota totalmente. El sistema que siempre la protegió la ha abandonado justo cuando más la necesita.'
  },
  {
    id: 'kelsier-irrumpe-guarida', label: 'Kelsier Irrumpe\nen la Guarida', group: 'EVENTO', type: 'Evento — Cap.3',
    desc: 'Kelsier entra por la puerta de la escalera con expresión oscura. Lanza a Camon hacia atrás con una fuerza invisible dos veces — Empuje alomático, probablemente Acero sobre los metales que Camon lleva encima. Usa Alomancia emocional sobre toda la sala a la vez, calmando a docenas de personas simultáneamente — una escala que Vin nunca había imaginado posible. Camon mira las cicatrices y retrocede: "¡Por el Señor Gobernante… el Superviviente de Hathsin!" Kelsier toma los 3.000 boxings, entrega 100 a Milev por el uso del local, nombra a Milev nuevo crewleader y ordena que Camon viva pero no lo disfrute. Hace despejar la sala para hablar en privado con Vin. Milev y todos los crewmembers obedecen sin resistencia.',
    star: '★★★ Primera demostración pública del poder de Kelsier. El inframundo de Luthadel lo conoce y lo teme. El nombre "Superviviente de Hathsin" es suficiente para paralizar a Camon.'
  },
  {
    id: 'vin-resiste-alomancia', label: 'Vin Resiste\nla Alomancia de Kelsier', group: 'EVENTO', type: 'Evento — Cap.3',
    desc: 'Cuando Kelsier usa Alomancia emocional para calmar a toda la sala, Vin siente la paz descender sobre ella como un peso — sus emociones aplastadas, el miedo extinguido como una vela. Pero la reconoce: alguien le está usando Suerte. La lógica choca con la emoción forzada. En lugar de dejarse llevar hacia el asiento que le sugieren, Vin permanece de pie, evaluando la situación. Kelsier eleva una ceja: "Eso es inesperado." Vin es la única persona en la sala que ha reconocido activamente la manipulación emocional y se ha resistido. Dockson no lo había visto antes.',
    star: '★★★ MOMENTO CRUCIAL. Resistir Alomancia emocional requiere ser Alomante y reconocer la sensación. Kelsier no lo esperaba — añade una dimensión nueva a su evaluación de Vin.'
  },
  {
    id: 'prueba-vial', label: 'La Prueba\ndel Vial', group: 'EVENTO', type: 'Evento — Cap.3',
    desc: 'Kelsier saca un vial pequeño de su chaqueta con solución alcohólica y dos metales en suspensión (Latón y Zinc). Lo pone sobre la mesa. Vin desconfía: exige que él beba la mitad primero, y que agite el vial para que salga el sedimento del fondo. Kelsier acepta las condiciones, bebe su mitad y devuelve el vial. Vin lo bebe. Siente un torrente enorme de poder — su Suerte habitual multiplicada por cientos, como pasar de una vela a un festín de luz. Kelsier: "Prueba. Suavízame." Vin usa el primer metal (Latón) sobre Kelsier — funciona. Kelsier: "¿Puedes ir en la otra dirección?" Vin explora el poder y encuentra dos fuentes distintas. Usa la segunda (Zinc) sobre Kelsier, inflamando sus emociones. Kelsier sonríe profundamente y mira a Dockson: "Eso es todo." Dockson: "No sé qué pensar. Tener uno de vosotros ya era perturbador. Dos…"',
    star: '★★★ MOMENTO PIVOTE. Dos metales = acceso a todos = Mistborn. La paranoia de Vin (exige que él beba primero) es apropiada y Kelsier la respeta.'
  },
  {
    id: 'origen-padre-vin', label: 'Revelación:\nPadre de Vin', group: 'EVENTO', type: 'Evento — Cap.3',
    desc: 'Tras confirmar que Vin es Mistborn, Dockson le pregunta por sus padres. Vin responde incómoda: fue criada por su hermano Reen. Su madre era una prostituta — no por elección sino por las circunstancias del inframundo. Una vez intentó matar a Vin de pequeña; Reen la salvó. Sobre el padre, Vin revela: es un high prelan del Ministerio del Acero. Kelsier silba suavemente: "Eso es una brecha de deber ligeramente irónica." La mayoría de obligadores de alto rango son nobles. La sangre de su padre — noble de primer nivel, en el corazón del sistema que esclaviza a los skaa — es lo que le otorgó a Vin sus poderes alomáticos.',
    star: '★★★ REVELACIÓN CENTRAL. El poder de Vin viene literalmente del enemigo. ¿Sabe su padre que existe? ¿Podría el Ministerio conectarlos?'
  },

  // ══════════════════════════════════════════════════════
  // CONCEPTOS — definición general sin casos específicos
  // ══════════════════════════════════════════════════════

  {
    id: 'alomancia', label: 'Alomancia', group: 'MAGIA', type: 'Concepto — Sistema de Magia',
    desc: 'Sistema de magia del Imperio Final. Don hereditario otorgado por el Señor Gobernante a sus seguidores nobles hace mil años como recompensa por su lealtad. Un Alomante ingiere metales en solución alcohólica y los "quema" internamente para obtener poderes. Hay 8 metales básicos, cada uno con un efecto distinto. Si puedes quemar un solo metal eres Misting; si puedes quemarlos todos eres Mistborn. Los skaa puros no deberían tener Alomancia — pero puede aparecer en mestizos con sangre noble cercana, aproximadamente 1 de cada 10.000. Regla crítica: nunca usar Alomancia emocional sobre un obligador — están entrenados para detectarla.',
    star: '★★★ La Alomancia es un regalo del Señor Gobernante — y él decide quién la puede usar y sobre quién.'
  },
  {
    id: 'alomancia-emocional', label: 'Alomancia\nEmocional', group: 'MAGIA', type: 'Concepto — Alomancia Emocional',
    desc: 'Rama de la Alomancia que manipula las emociones de otras personas. Dos metales: Latón (Brass) produce "Suavizar" — atenúa/empuja las emociones hacia abajo. Zinc produce "Azuzar" — inflama/jala las emociones hacia arriba. Son metales opuestos. Un Mistborn puede usar ambos; un Misting solo uno. Regla absoluta: PROHIBIDO usar sobre obligadores, que están entrenados para detectarla. Incluso la alta nobleza tiene esto prohibido. Hacerlo activa una respuesta del Cantón de Inquisición.',
    star: '★★★ Regla crítica del sistema. Empujar = Suavizar (Latón). Jalar = Azuzar (Zinc).'
  },
  {
    id: 'ocho-metales', label: 'Los 8 Metales\nAlomáticos', group: 'MAGIA', type: 'Concepto — Sistema Alomático',
    desc: 'Los 8 metales básicos de la Alomancia: Hierro (Iron), Acero (Steel), Estaño (Tin), Peltre (Pewter), Cobre (Copper), Bronce (Bronze), Zinc y Latón (Brass). Un Mistborn puede quemar todos; un Misting solo uno de ellos. Se ingieren disueltos en solución alcohólica. Poderes conocidos hasta el Cap.3: Estaño amplifica sentidos, Latón suaviza emociones, Zinc azuza emociones, Cobre suprime pulsaciones alomáticas, Bronce detecta Alomancia activa.',
    star: '★★★ ¿Qué hacen los otros 3 metales — Hierro, Acero y Peltre? El sistema es más profundo de lo que parece.'
  },
  {
    id: 'mistborn', label: 'Mistborn\n(Nacido de la Bruma)', group: 'MAGIA', type: 'Concepto — Tipo Alomante',
    desc: 'Alomante capaz de quemar los 8 metales básicos. Extraordinariamente raro, incluso entre la alta nobleza. La regla es binaria: o puedes quemar un solo metal (Misting), o puedes quemarlos todos (Mistborn). Jamás dos o tres. La rareza de los Mistborn es una de las razones por las que el Imperio ejecuta a los mestizos de noble y skaa — cada mestizo es una posible Mistborn.',
    star: '★★★ Kelsier y Vin — los únicos Mistborn skaa conocidos.'
  },
  {
    id: 'misting', label: 'Misting', group: 'MAGIA', type: 'Concepto — Tipo Alomante',
    desc: 'Alomante que solo puede quemar UN metal. Más común que los Mistborn pero aún relativamente raro. Aparece en nobles con herencia alomática y en mestizos de noble y skaa, en proporción aproximada de 1 por cada 10.000 mestizos. Cuanto más cercana y poderosa la sangre noble, mayor la probabilidad.',
    star: ''
  },
  {
    id: 'smoker', label: 'Smoker\n(Cobre)', group: 'MAGIA', type: 'Concepto — Tipo Misting',
    desc: 'Misting que quema Cobre. Suprime las "pulsaciones" alomáticas emitidas por cualquier Alomante en su radio de acción, ocultando al equipo de Seekers e Inquisidores. Sin Smoker activo, cualquier uso de Alomancia en Luthadel es potencialmente detectable. Es el escudo invisible de un equipo alomante.',
    star: '★★ Sin Smoker no hay equipo. Su presencia hace posible la operación; su ausencia la hace suicida.'
  },
  {
    id: 'tineye', label: 'Tineye\n(Estaño)', group: 'MAGIA', type: 'Concepto — Tipo Misting',
    desc: 'Misting que quema Estaño — amplifica todos los sentidos: vista, oído, tacto, gusto, olfato. Útil para vigilancia, detección de amenazas a distancia y escucha remota.',
    star: ''
  },
  {
    id: 'seeker', label: 'Seeker\n(Bronce)', group: 'MAGIA', type: 'Concepto — Tipo Misting',
    desc: 'Misting que quema Bronce — detecta cuando otros Alomantes están quemando metales en su proximidad. El método de detección alomática del Ministerio. Un Smoker activo puede neutralizar a un Seeker ordinario ocultando las pulsaciones. Los Inquisidores tienen capacidades similares pero que van más allá de lo que la Alomancia normal puede explicar.',
    star: '★ Explica por qué los Smokers son cruciales: ocultan al equipo de los Seekers del Ministerio.'
  },
  {
    id: 'quemar-estano', label: 'Quemar Estaño\n(Tin)', group: 'MAGIA', type: 'Concepto — Metal Alomático',
    desc: 'Quemar Estaño amplifica todos los sentidos simultáneamente: vista, oído, olfato, gusto y tacto. Produce una sensación de bebida caliente al activarse. Con sentidos amplificados, una vela se vuelve deslumbrante y los sonidos de una conversación lejana se vuelven perfectamente audibles.',
    star: ''
  },
  {
    id: 'suerte-vin', label: 'Suavizar\n(Latón / Brass)', group: 'MAGIA', type: 'Concepto — Metal Alomático',
    desc: 'Quemar Latón atenúa y suaviza las emociones ajenas — es el "Empuje" de la Alomancia emocional. Reduce nerviosismo, desconfianza, miedo o ira. La reserva disponible es finita y se agota con el uso; necesita tiempo para reponerse. Si se usa sobre un obligador, este lo detecta y activa el protocolo de Inquisición.',
    star: '★★★ Vin llamó "Suerte" a esto durante años sin saber que era Alomancia.'
  },
  {
    id: 'quemar-zinc', label: 'Azuzar\n(Zinc)', group: 'MAGIA', type: 'Concepto — Metal Alomático',
    desc: 'Quemar Zinc inflama y azuza las emociones ajenas — es el "Jalón" de la Alomancia emocional, opuesto al Latón. Amplifica ira, miedo, curiosidad o cualquier emoción presente. Se puede dirigir hacia una persona específica o hacia un grupo.',
    star: '★★ Opuesto al Latón. Empujar emociones vs. Jalarlas.'
  },

  // ══════════════════════════════════════════════════════
  // LUGARES — descripción + estado actual + referencias
  // ══════════════════════════════════════════════════════

  {
    id: 'luthadel', label: 'Luthadel', group: 'LUGAR', type: 'Lugar — Capital del Imperio',
    desc: 'Capital del Imperio Final. Bloques de piedra compactos de ~3 pisos, todo ennegrecido por siglos de ceniza — más oscuro arriba y en gradiente hacia abajo, como pintura corrida. Una docena de keeps monolíticos de las Grandes Casas sobresalen como montañas solitarias. El Río Channerel corre por el centro. Estado actual: la guarida de Camon/Milev opera aquí, Kelsier ha vuelto tras tres años de ausencia y está formando su equipo. Ver nodo: kredik-shaw, river-channerel, banda-kelsier, banda-camon.',
    star: ''
  },
  {
    id: 'kredik-shaw', label: 'Kredik Shaw\n(Mil Agujas)', group: 'LUGAR', type: 'Lugar — Palacio del Señor Gobernante',
    desc: '"La Colina de las Mil Agujas." Palacio del Señor Gobernante en el centro de Luthadel. Varias veces el tamaño de cualquier keep nobiliario. Múltiples espiras que lo hacen parecer un insecto gigante y multiespinoso desde la distancia. Estado actual: residencia activa del Señor Gobernante. Kelsier lo mira al hablar del gran trabajo. Ver nodo: gran-trabajo, reunion-muro.',
    star: '★★★ Kelsier mira hacia aquí cuando habla del "trabajo como ningún otro." El objetivo final podría estar aquí.'
  },
  {
    id: 'pozos-hathsin', label: 'Pozos\nde Hathsin', group: 'LUGAR', type: 'Lugar — Prisión / Mina Secreta de Atium',
    desc: 'Lugar de castigo y trabajo forzado administrado por el Señor Gobernante. En realidad es la mina secreta de atium del Señor Gobernante — el secreto más celosamente guardado del Imperio. POR ESO nadie sobrevive: los prisioneros no pueden contar lo que hay allí. Kelsier trabajó allí durante un año y descubrió la verdad. Fue allí donde Snapeó — el trauma despertó sus poderes alomáticos (no era Alomante antes de entrar). Sus cicatrices en los brazos son marca de ese año. Su esposa Mare murió allí.',
    star: '★★★ REVELACIÓN CENTRAL del Cap.4. Los Pozos son la mina de atium. Eso explica la regla de "nadie sobrevive". El Señor Gobernante controla el mercado del atium porque controla la única fuente. ¿Por qué envió a Kelsier allí en lugar de simplemente matarlo?'
  },
  {
    id: 'plantacion-tresting', label: 'Plantación\nde Tresting 💀', group: 'LUGAR', type: 'Lugar — Plantación (Destruida)',
    desc: 'Plantación rural de Lord Tresting al norte de Luthadel. Estado actual: destruida. El manor es una cicatriz negra y humeante. Los skaa supervivientes marchan hacia las cuevas del este. Ver nodo: quema-manor.',
    star: ''
  },
  {
    id: 'cuevas-este', label: 'Cuevas del Este', group: 'LUGAR', type: 'Lugar — Refugio Rebelde',
    desc: 'Sistema de cuevas al este de la plantación de Tresting. Según viajeros, hay skaa rebeldes organizados allí. Estado actual: destino de los skaa fugitivos del Prólogo. Ver nodo: quema-manor.',
    star: '¿Están conectadas estas cuevas con la rebelión que financia Yeden?'
  },
  {
    id: 'canales', label: 'Red de Canales', group: 'LUGAR', type: 'Lugar — Infraestructura de Transporte',
    desc: 'Red de vías acuáticas que conecta las principales ciudades del Imperio. Principal medio de transporte de personas y mercancías. Las patrullas constantes hacen el bandidaje muy difícil — lo que da valor al plan de Theron de controlar los propios barcos del Ministerio. Estado actual: en operación activa.',
    star: ''
  },
  {
    id: 'river-channerel', label: 'Río Channerel', group: 'LUGAR', type: 'Lugar — Río Central de Luthadel',
    desc: 'Corre por el centro de Luthadel. Función doble: recibe la ceniza barrida por las cuadrillas de skaa (sin él, la ciudad quedaría enterrada) y proporciona corriente para los molinos de grano y textiles. Estado actual: activo y esencial.',
    star: ''
  },
  {
    id: 'terris', label: 'Terris', group: 'LUGAR', type: 'Lugar — Región Pastoral (Epígrafes)',
    desc: 'Región distante con grandes montañas nevadas al norte y tierra verde y fértil. Sus habitantes son mayoritariamente pastores, leñadores y agricultores. Estado actual: existente, no visitada por ningún personaje de la trama principal. Fuente de las profecías y teologías de las que depende el mundo entero — algo que sorprende por lo agrario del lugar.',
    star: '★★ ¿Por qué Terris — un lugar tan humilde — produce las profecías del mundo? ¿Qué hacen especiales a sus habitantes?'
  },
  {
    id: 'ashmounts', label: 'Las Ashmounts', group: 'MUNDO', type: 'Lugar — Volcanes Activos',
    desc: 'Cadena de volcanes activos que produce la ceniza que cae perpetuamente sobre el Imperio. Especialmente activos durante el período de los caps. 1–3. Estado actual: actividad volcánica elevada.',
    star: ''
  },

  // ══════════════════════════════════════════════════════
  // FACCIONES — descripción + estado actual + referencias
  // ══════════════════════════════════════════════════════

  {
    id: 'skaa-faccion', label: 'Los Skaa', group: 'FACCION', type: 'Facción — Clase Servil',
    desc: 'Clase campesina y esclava del Imperio Final. Son literalmente propiedad del Señor Gobernante, arrendados a los nobles. En Luthadel trabajan en forjas y molinos textiles — la exportación principal de la ciudad. Los skaa puros no deberían tener Alomancia. Estado actual: bajo completa opresión, con una rebelión organizada latente representada por Yeden. Ver nodo: rebelion-skaa, yeden.',
    star: ''
  },
  {
    id: 'nobleza', label: 'La Nobleza', group: 'FACCION', type: 'Facción — Clase Dominante',
    desc: 'Clase noble del Imperio. Su estatus no solo es cuestión de dinero sino de linaje: el Señor Gobernante inmortal recuerda directamente a los hombres que le apoyaron hace mil años — sus descendientes siempre serán favorecidos. Poseen la Alomancia como don hereditario. Incluso la alta nobleza tiene prohibido usar Alomancia emocional sobre obligadores. Estado actual: agitada por la muerte de Tresting y sus repercusiones.',
    star: ''
  },
  {
    id: 'grandes-casas', label: 'Grandes\nCasas', group: 'FACCION', type: 'Facción — Élite Nobiliaria',
    desc: 'Las familias nobles más poderosas del Imperio. Criterio: cualquier familia capaz de construir y mantener un keep monolítico en Luthadel. Sus keeps son como montañas oscuras en el paisaje de la ciudad. Estado actual: presentes y poderosas en Luthadel. Lord Venture podría pertenecer a una de ellas. Ver nodo: luthadel.',
    star: ''
  },
  {
    id: 'ministerio-acero', label: 'Ministerio\ndel Acero', group: 'MINISTERIO', type: 'Facción — Iglesia / Burocracia',
    desc: 'Organización religiosa y burocrática al servicio del Señor Gobernante. Opera a través de Cantones especializados con intereses propios. Los obligadores sirven como testigos de contratos, investigadores y sacerdotes. Los Inquisidores del Acero son su brazo represivo. Estado actual: buscando activamente a Vin tras detectar Alomancia en sus instalaciones. Ver nodo: el-inquisidor, inquisidores, vin-detectada.',
    star: '★★ No es monolítico — los Cantones compiten entre sí por recursos y poder.'
  },
  {
    id: 'obligadores', label: 'Los Obligadores', group: 'MINISTERIO', type: 'Facción — Burocracia Sacerdotal',
    desc: 'Sacerdotes-burócratas del Señor Gobernante. Identificables por cabeza rapada y tatuajes alrededor de los ojos — la extensión de los tatuajes indica el rango. Testifican contratos, acumulan riqueza para sus Cantones y vigilan el orden alomático. Están entrenados para detectar Alomancia emocional sobre sus personas. Estado actual: el Cantón de Inquisición fue activado por la manipulación de Vin.',
    star: ''
  },
  {
    id: 'inquisidores', label: 'Inquisidores\ndel Acero', group: 'FACCION', type: 'Facción — Brazo Represivo',
    desc: 'Brazo represivo del Ministerio del Acero. Criaturas con clavos de metal atravesados a través de los ojos — el rasgo definitorio que los hace "inhumanos". Pueden detectar el uso de Alomancia. Los clavos deberían matarlos, pero no lo hacen — nada en la Alomancia conocida lo explica. Estado actual: un Inquisidor está buscando activamente a Vin. Ver nodo: el-inquisidor, vin-detectada.',
    star: '★★★ La mayor anomalía del sistema. Los clavos DEBERÍAN matarlos — nada en la Alomancia explica su supervivencia. "Muchos de los rumores sobre ellos no son verdad" — pero tampoco todos son mentira. Ni siquiera Kelsier entiende cómo funcionan.'
  },
  {
    id: 'canton-finanzas', label: 'Cantón\nde Finanzas', group: 'MINISTERIO', type: 'Facción — División del Ministerio',
    desc: 'División del Ministerio del Acero especializada en contratos comerciales, transporte y economía. Opera como casa noble: acumula riqueza y leverage político entre Cantones y con las casas nobles. Estado actual: víctima de la estafa de Camon/Theron. Sus obligadores detectaron la Alomancia de Vin y activaron al Cantón de Inquisición. Ver nodo: estafa-lord-jedue, inquisidor-aparece.',
    star: ''
  },
  {
    id: 'koloss', label: 'Los Koloss', group: 'MINISTERIO', type: 'Facción — Fuerza Militar',
    desc: 'Fuerza militar al servicio del Señor Gobernante. En el Cap.4 Ham pregunta explícitamente por ellos como obstáculo al plan. Kelsier responde que si el Señor Gobernante los marchara sobre su propia capital, la destrucción sería tan grande que los nobles provinciales aprovecharían para rebelarse y declararse reyes — causando más inestabilidad de la que resolvería. Estado actual: desconocidos en apariencia, no vistos.',
    star: '★★ El "arma nuclear" del Señor Gobernante — tan destructiva que usarla en su propia capital podría costarle el Imperio. ¿Qué son exactamente?'
  },
  {
    id: 'senor-gobernante', label: 'El Señor\nGobernante', group: 'DIOS', type: 'Figura — Dios-Rey',
    desc: 'Dios-rey inmortal del Imperio Final. Título religioso: "Astilla del Infinito" — una pieza de Dios mismo, según Ham. Lleva mil años en el poder. Otorgó la Alomancia a sus seguidores como recompensa. Controla el mercado del atium: lo vende en pequeñas cantidades a precios prohibitivos; su fuente es la mina secreta de los Pozos de Hathsin. Sin el atium no puede mantener sus ejércitos. Tomó a la esposa de Kelsier (Mare) y casi le quitó su cordura. Estado actual: en Kredik Shaw. Objetivo de Kelsier. Ver nodo: kredik-shaw, pozos-hathsin, undecimo-metal.',
    star: '★★★ "La Astilla del Infinito. Es una pieza de Dios mismo. No puedes matarlo." Pero la leyenda del Undécimo Metal dice que sí se puede. Y Kelsier lo cree.'
  },
  {
    id: 'banda-camon', label: 'Banda de\nCamon / Milev', group: 'FACCION', type: 'Facción — Banda Criminal Skaa',
    desc: 'Banda de ladrones y estafadores skaa en Luthadel. Base: tienda de fachada con guarida subterránea excavada en piedra. Estado actual: Camon destituido y entregado a Milev. Milev es el nuevo crewleader. Kelsier pagó 100 boxings por usar el local esta noche para la reunión del equipo. Ver nodo: kelsier-irrumpe-guarida, milev.',
    star: ''
  },
  {
    id: 'banda-kelsier', label: 'Banda de\nKelsier', group: 'FACCION', type: 'Facción — Equipo Formado',
    desc: 'El equipo especializado que Kelsier ha formado para derrocar el Imperio. Composición confirmada tras el Cap.4: Kelsier (Mistborn, líder), Dockson (planificador/logística), Breeze (Soother, reclutamiento masivo), Ham (Thug, seguridad y guerreros), Vin (Mistborn, nueva recluta), Yeden (cliente — financia con los fondos de la rebelión). Clubs asistió pero se fue. Marsh aún no ha aceptado. El equipo necesita: un espía entre la nobleza, casas de seguridad, y un lugar donde entrenar un ejército entero. Ver nodo: gran-trabajo, gran-reunion.',
    star: '★★ "Los hombres en esta sala son los Alomantes más capaces, más listos y más hábiles de la ciudad." Kelsier rechazó a Ruddy solo por falta de carácter — el carácter importa tanto como el poder.'
  },

  // ══════════════════════════════════════════════════════
  // FENÓMENOS DEL MUNDO — conceptos
  // ══════════════════════════════════════════════════════

  {
    id: 'brumas', label: 'Las Brumas', group: 'MUNDO', type: 'Concepto — Fenómeno Nocturno',
    desc: 'Las brumas cubren el mundo entero cada noche, sin excepción. Son densas, distorsionan los sonidos y dan a los edificios un aspecto surreal. Los skaa las temen con terror casi religioso — creen que quien entra en ellas pierde el alma, o que los mistwraiths imitan a las personas muertas. Los nobles evitan salir de noche. Solo unos pocos, como Kelsier, las recorren sin temor.',
    star: '★ Kelsier: "Tendré que curarlos de ese miedo algún día." ¿Las brumas tienen un origen sobrenatural? ¿Están relacionadas con el Señor Gobernante?'
  },
  {
    id: 'ceniza', label: 'La Ceniza', group: 'MUNDO', type: 'Concepto — Fenómeno Permanente',
    desc: 'La ceniza cae sobre el mundo constantemente, producida por las Ashmounts activas. Todo en el Imperio está teñido de negro por siglos de ashfall. El esfuerzo de limpiarla es enorme — sin las cuadrillas de skaa barriendo hacia los ríos, las ciudades quedarían enterradas. Las plantas luchan por sobrevivir bajo su peso.',
    star: ''
  },
  {
    id: 'mistwraith', label: 'Los Mistwraiths', group: 'MUNDO', type: 'Concepto — Criatura de las Brumas',
    desc: 'Criaturas que supuestamente habitan las brumas nocturnas. Los skaa creen que imitan a personas muertas o desaparecidas, adoptando su apariencia para engañar a sus seres queridos. Naturaleza real completamente desconocida.',
    star: '¿Son reales? ¿Solo superstición skaa?'
  },
  {
    id: 'sol-rojo', label: 'El Sol Rojo', group: 'MUNDO', type: 'Concepto — Fenómeno del Cielo',
    desc: 'El sol del Imperio Final aparece como un disco rojo brillante detrás de nubes perpetuas de ceniza y humo. Leyendas casi olvidadas hablan de tiempos en que el sol no era rojo, cuando el cielo no estaba cargado de humo y las plantas crecían con facilidad.',
    star: '★ ¿Qué cambió el mundo así hace mil años — en el momento en que el Señor Gobernante ascendió?'
  },

  // ══════════════════════════════════════════════════════
  // OBJETOS PERSONALES
  // ══════════════════════════════════════════════════════

  {
    id: 'arete-vin', label: 'Arete\nde la Madre de Vin', group: 'OBJETO', type: 'Objeto — Personal de Vin',
    desc: 'Arete simple, casi un pasador, sin valor material suficiente para robar. Reen dijo que era de la madre de Vin. Vin raramente lo llevaba por temor a parecer demasiado femenina — la feminidad en el inframundo es una vulnerabilidad. En el Cap.3 se lo pone al prepararse para escapar.',
    star: '★ El único vínculo físico con la madre que intentó matarla. ¿Por qué Vin lo guarda?'
  },
  {
    id: 'obsidiana-reen', label: 'Trozo de\nObsidiana (Reen)', group: 'OBJETO', type: 'Objeto — Personal de Vin',
    desc: 'Trozo de obsidiana del tamaño de una moneda grande, tallado en patrón irregular. Reen lo llevaba como amuleto de buena suerte. Fue lo único que dejó atrás cuando desapareció hace seis meses.',
    star: '★ ¿Lo dejó intencionalmente para Vin, o simplemente lo olvidó al huir? Para Vin es el único rastro del hermano que la moldeó y la abandonó.'
  },
  {
    id: 'piedras-ciudades', label: 'Colección\nde Piedras', group: 'OBJETO', type: 'Objeto — Personal de Vin',
    desc: 'Una piedra de cada ciudad que Vin ha visitado en su vida nómada con Reen. Sus efectos personales más queridos. En el Cap.3 las mete en el bolsillo al prepararse para huir — son demasiado ligeras para dejar. Representan la historia de una infancia de constante movimiento y adaptación.',
    star: ''
  },

  // ══════════════════════════════════════════════════════
  // TRAMAS
  // ══════════════════════════════════════════════════════

  {
    id: 'rebelion-skaa', label: 'La Rebelión\nSkaa (Trama Central)', group: 'TRAMA', type: 'Trama — Abierta',
    desc: 'La rebelión skaa organizada lleva mil años intentando derrocar al Señor Gobernante sin éxito. Su mayor fracaso: el Massacre de Tougier (hace 3 siglos), donde 7.000 rebeldes fueron masacrados. Problema crónico: no pueden convencer a los skaa comunes de unirse — llevan un milenio destrozados y sin esperanza. Yeden es su líder actual. Ha contratado a Kelsier con 30.000 boxings para que le proporcione un ejército y una oportunidad de tomar la ciudad. Estado actual: plan en marcha, Yeden es parte oficial del equipo de Kelsier. Ver nodo: yeden, gran-trabajo.',
    star: '★★★ "La rebelión falla porque es demasiado voluminosa y dispersa." Kelsier cree que un equipo pequeño y especializado tiene más oportunidades que un ejército de millares.'
  },
  {
    id: 'gran-trabajo', label: 'El Gran Trabajo\n(Plan Revelado)', group: 'TRAMA', type: 'Trama — Abierta',
    desc: 'El plan de Kelsier, revelado en el Cap.4. Fases: (1) Neutralizar la Guarnición de Luthadel — sin policía, la ciudad queda indefensa. (2) Lanzar la ciudad al caos — las Grandes Casas no podrán movilizarse. (3) Yeden marcha su ejército a Luthadel y toma el palacio, capturando al Señor Gobernante. (4) Mientras Yeden asegura la ciudad, el equipo de Kelsier saquea las reservas de atium del tesoro. (5) Yeden se queda con el 50% del atium y el control de la ciudad. (6) El equipo desaparece con el otro 50%. Objetivo secundario personal de Kelsier: matar al Señor Gobernante con el Undécimo Metal. Pago: 30.000 boxings de Yeden (15.000 ya pagados). Sin el atium, el Señor Gobernante pierde su base financiera y no puede pagar ejércitos. Ver nodo: gran-reunion, guaricion-luthadel, atium, undecimo-metal.',
    star: '★★★ El plan completo. Escala sin precedentes — ningún equipo de ladrones ha intentado algo así. La debilidad clave: ¿cómo se neutraliza la Guarnición? ¿Cómo se lanza la ciudad al caos? Eso aún está sin resolver.'
  },
  {
    id: 'identidad-heroe', label: 'El Héroe\nde las Edades', group: 'TRAMA', type: 'Trama — Gran Misterio',
    desc: 'Voz de un diario que aparece en el epígrafe de cada capítulo. Íntima, insegura, cargada con el peso de una profecía: "A veces temo no ser el héroe que todos creen que soy." Los filósofos le aseguran que es el elegido. En el epígrafe del Cap.5 revela su misión específica: destruir La Oscuridad (La Profundidad), que arrasa el mundo incluso mientras escribe. Afirma ser el único capaz de detenerla. Si no lo logra, solo quedarán huesos y polvo.',
    star: '★★★ MISTERIO MAYOR. ¿Es del pasado? ¿Del futuro? ¿Es Kelsier? ¿El Señor Gobernante antes de serlo? Ahora sabemos que ya había algo que destruir — La Oscuridad existía antes de que el Lord Ruler tomara el poder.'
  },
  {
    id: 'voz-epigrafe-cap1', label: 'Voz Arrogante\ndel Epígrafe', group: 'TRAMA', type: 'Trama — Misterio del Epígrafe',
    desc: 'Segunda voz de epígrafe, radicalmente distinta al Héroe de las Edades. Fría, pragmática, poderosa. Se dice "hombre de principios", reconoce que otros lo llamarían tirano religioso, concluye: "Al final, yo soy el que tiene los ejércitos." Visitó Terris en persona. Tiene "tierras al sur." El epígrafe del Cap.2 y del inicio del Cap.3 repite la misma descripción de Terris — el mismo viajero, la misma estancia.',
    star: '★★★ ¿El Señor Gobernante antes de ascender al poder? ¿Las dos voces son la misma persona en distintos momentos?'
  },
  {
    id: 'profecia-terris', label: 'Las Profecías\nTerris', group: 'TRAMA', type: 'Trama — Misterio',
    desc: 'Las profecías y teologías producidas por el pueblo de Terris, de las que "depende el mundo entero." Mencionan que el sujeto profetizado tendrá el poder de salvar el mundo — o de destruirlo. Origen incierto en un pueblo pastoral aparentemente humilde.',
    star: '★★ ¿Qué hace especiales a los Terrisanos? ¿Por qué sus profecías son las del mundo?'
  },
  {
    id: 'origen-vin', label: 'Origen de\nVin', group: 'TRAMA', type: 'Trama — Parcialmente Resuelta',
    desc: 'La pregunta de cómo Vin tiene poderes alomáticos siendo skaa. Parcialmente resuelta en el Cap.3: su padre es un high prelan del Ministerio del Acero — sangre noble de primer nivel que explica tanto que sea Alomante como que sea Mistborn (no solo Misting). Quedan preguntas: ¿sabe su padre que existe? ¿Buscaría el Ministerio a Vin si lo supiera? ¿Por qué su madre intentó matarla?',
    star: '★★ El "cómo" de su poder explicado. El "qué significa para su futuro" sigue completamente abierto.'
  },
  {
    id: 'vin-detectada', label: 'Vin Detectada\npor el Ministerio', group: 'TRAMA', type: 'Trama — Parcialmente Resuelta',
    desc: 'El uso repetido de Alomancia emocional sobre obligadores del Cantón de Finanzas fue detectado — están entrenados para ello. El Ministerio envió un Inquisidor. Kelsier distrajo al Inquisidor con Zinc; Dockson eliminó a los dos espías. La crisis inmediata está controlada. Pero el Inquisidor no fue eliminado y podría reanudar la búsqueda.',
    star: '★★ Crisis inmediata resuelta. Peligro a largo plazo latente. El Inquisidor no fue eliminado — solo redirigido.'
  },
  {
    id: 'reclutar-marsh', label: 'Reclutar a Marsh\n(Trama Abierta)', group: 'TRAMA', type: 'Trama — Abierta',
    desc: 'Kelsier necesita que su hermano Marsh se infiltre entre los obligadores para el gran trabajo. Marsh desaprueba los métodos de Kelsier y ya no quiere nada con la rebelión ni con el inframundo. Kelsier insiste en que lo convencerá.',
    star: '★★ Hermanos en lados opuestos de la misma causa. La conversación pendiente es un choque inevitable.'
  },

  // ══════════════════════════════════════════════════════
  // CAPÍTULO 4 — NUEVOS NODOS
  // ══════════════════════════════════════════════════════

  // ── Nuevos personajes ─────────────────────────────────
  {
    id: 'mare', label: 'Mare 💀', group: 'KELS', type: 'Personaje — Esposa de Kelsier (Muerta)',
    desc: 'Esposa de Kelsier. Tineye — quemaba Estaño para mejorar los sentidos. Formó trío con Kelsier y Dockson antes de los Pozos, cuando ninguno de los tres era Mistborn. Fue enviada junto a Kelsier a los Pozos de Hathsin tras una traición. No sobrevivió los Pozos. Kelsier la menciona como motor de su venganza personal: "El Lord Ruler la tomó de mí." En la noche anterior a cada trabajo, siempre estuvo a su lado en la azotea. Ahora solo hay niebla en su lugar.',
    star: '★★ Tineye. El núcleo de la motivación personal de Kelsier. ¿Quién los traicionó? ¿Quién entregó a Kelsier y a Mare al Lord Ruler? Kelsier dice que ya sabe la respuesta — aun así, la cicatriz de la traición no cierra.'
  },
  {
    id: 'disten', label: 'Disten', group: 'SKAA', type: 'Personaje — Miembro Banda Milev',
    desc: 'Uno de los lugartenientes de Camon, ahora bajo Milev. Le falta una mano pero tiene oídos y ojos entre los mejores del crew. En el Cap.4 lidera la conversación del crew sobre Kelsier antes de la gran reunión, compartiendo lo que sabe sobre el Superviviente.',
    star: ''
  },

  // ── Nuevos eventos ────────────────────────────────────
  {
    id: 'gran-reunion', label: 'La Gran\nReunión (Cap.4)', group: 'EVENTO', type: 'Evento — Cap.4',
    desc: 'La reunión del equipo de Kelsier en la guarida de Milev, inmediatamente después de los eventos del Cap.3. Llegan por orden: Breeze y Ham juntos, luego Clubs solo, luego Yeden. Kelsier y Dockson llegan tarde — venían de ver a Marsh (que no vendrá). Vin observa desde una mesa cercana creyendo ser la "twixt" (intermediaria). Kelsier presenta a Yeden como el empleador. Revelación del plan completo. Ham y Breeze aceptan. Clubs declara que es una idiotez y abandona la sala dando un portazo — Kelsier lo deja ir sin represalias. Yeden se queda a regañadientes. Kelsier revela que Vin es Mistborn, no simplemente twixt. Reveal final: el Undécimo Metal y el objetivo de matar al Lord Ruler.',
    star: '★★★ El momento fundacional del equipo. El plan completo queda sobre la mesa. Clubs se va. Vin pasa de ser "twixt" a Mistborn del equipo ante todos.'
  },
  {
    id: 'breeze-sootha-vin', label: 'Breeze Suaviza\na Vin', group: 'EVENTO', type: 'Evento — Cap.4',
    desc: 'Nada más llegar, Breeze usa Alomancia emocional sobre Vin para que le traiga una copa de vino sin pedírselo directamente. Vin obedece sin darse cuenta — algo que no le ocurrió con Kelsier. Ham lo reprende: "Solo porque puedas Empujar a alguien no significa que debas hacerlo." Breeze lo desestima filosóficamente. Vin se detiene, mira la copa en su mano y comprende lo que ha pasado. Mira a Breeze con los ojos entornados: "Mistborn." Breeze la corrige: es solo un Misting Soother ordinario. Vin deja el vino en la barra y no se lo lleva. Breeze no va a buscarlo.',
    star: '★★ Vin resistió a Kelsier pero no a Breeze. La diferencia: Kelsier la advertía con su presencia. Breeze opera en silencio. Sus defensas son contextuales, no absolutas.'
  },
  {
    id: 'clubs-abandona', label: 'Clubs Abandona\nla Reunión', group: 'EVENTO', type: 'Evento — Cap.4',
    desc: 'Al escuchar el plan completo de Kelsier — overthrow del Imperio, matar al Lord Ruler — Clubs declara: "No puedes. Es una idiotez. Los Inquisidores nos colgarán a todos de ganchos por el cuello." Se levanta, tira su silla al suelo, y sale cojeando con un portazo. Yeden exige que lo maten para que no los delate. Kelsier se niega: "No trabajo así. Lo invité a una reunión con un plan peligroso — no voy a hacerle asesinar porque decidió que era demasiado peligroso." Dockson señala que nunca habrían invitado a alguien a una de estas reuniones sin confiar en que no los traicione.',
    star: '★★ El código de honor de Kelsier en acción: la confianza es la base, no la coerción. ¿Volverá Clubs? Kelsier cuenta con ello.'
  },

  // ── Nuevos conceptos alomáticos ───────────────────────
  {
    id: 'snapping', label: 'El Snapping\n(Despertar)', group: 'MAGIA', type: 'Concepto — Alomancia',
    desc: 'El proceso por el que un Alomante latente despierta sus poderes. Requiere un trauma físico o emocional extremo. Kelsier no era Alomante antes de entrar a los Pozos de Hathsin — "Snapeó" allí, bajo el trauma de las condiciones extremas y la pérdida de Mare. El Snapping es el motivo por el que muchos nobles exponen a sus hijos a situaciones de riesgo controlado — intentando despertar poderes latentes que quizás nunca se manifiesten.',
    star: '★★★ Revelación mayor del Cap.4. Kelsier NO nació Mistborn — se convirtió en uno. ¿Podría Vin haber Snapeado ya? ¿Cuándo? ¿Con qué trauma?'
  },
  {
    id: 'thug', label: 'Thug\n(Peltre/Pewter)', group: 'MAGIA', type: 'Concepto — Tipo Misting',
    desc: 'Misting que quema Peltre (Pewter). Aumenta dramáticamente la fuerza, la velocidad y la resistencia física del Alomante. Útil en combate directo y para soportar daño. Ham es Thug — lidera la seguridad y los guerreros del equipo. Es la variante física de los Mistings, opuesta a los tipos sensoriales o emocionales.',
    star: ''
  },
  {
    id: 'undecimo-metal', label: 'El Undécimo\nMetal', group: 'MAGIA', type: 'Concepto — Metal Desconocido',
    desc: 'Metal alomático desconocido para la mayoría. Barra delgada y plateada del tamaño y grosor de un dedo. Obtenida por Kelsier cerca de la Península Lejana (Far Peninsula), en una región que aún recuerda el nombre de su antiguo reino antes de la Ascensión. Según una leyenda que el Ministerio del Acero ha suprimido activamente, este metal puede matar al Señor Gobernante. Es el único punto de vulnerabilidad conocido del Lord Ruler. Kelsier aún no sabe exactamente cómo funciona — solo que pretende usarlo.',
    star: '★★★ La teoría alomática conocida habla de 8 metales básicos y 2 metales altos (10 en total). Este es el undécimo — desconocido, suprimido, y supuestamente capaz de matar a un dios. ¿Por qué el Ministerio suprimiría una leyenda si fuera falsa?'
  },
  {
    id: 'atium', label: 'Atium', group: 'MAGIA', type: 'Concepto — Metal Raro',
    desc: 'Metal alomático extraordinariamente raro. Solo la nobleza más poderosa puede costeárselo. El Señor Gobernante controla su mercado vendiendo pequeñas cantidades a precios prohibitivos, manteniendo una reserva enorme para asegurarse el control. Su única fuente es la mina secreta de los Pozos de Hathsin. El tesoro del palacio contiene las reservas del Lord Ruler. Sin ellas, perdería la base financiera de su Imperio. El objetivo del equipo es robar esas reservas: el 50% para Yeden, el 50% para el equipo.',
    star: '★★★ El verdadero motor financiero del Imperio. Sin el atium del tesoro, el Lord Ruler no puede pagar sus ejércitos. El robo del atium ES la clave para desestabilizar el Imperio, tanto o más que cualquier batalla.'
  },

  // ── Nuevas facciones/lugares ──────────────────────────
  {
    id: 'guaricion-luthadel', label: 'Guarnición\nde Luthadel', group: 'FACCION', type: 'Facción — Fuerza Policial',
    desc: 'La fuerza policial y militar que patrulla Luthadel. Mientras esté operativa, ningún ejército rebelde puede moverse por la ciudad. Neutralizarla es el primer y más crítico paso del plan de Kelsier. Estado actual: en operación plena. Cómo neutralizarla es uno de los problemas sin resolver del plan. Ver nodo: gran-trabajo.',
    star: '★★ El obstáculo más inmediato del plan. "No podemos hacer nada mientras ellos policieen las calles." ¿Cómo se deshace de una guarnición militar sin levantar sospechas?'
  },
  {
    id: 'peninsula-lejana', label: 'Península\nLejana', group: 'LUGAR', type: 'Lugar — Región Remota (Mencionada)',
    desc: 'Región distante mencionada en el Cap.4. Cerca de allí encontró Kelsier el Undécimo Metal. Sus habitantes aún recuerdan el nombre de su antiguo reino antes de la Ascensión del Lord Ruler — una memoria que el Imperio ha intentado borrar en el resto del mundo. Ver nodo: undecimo-metal.',
    star: '★ Hay lugares donde la memoria histórica previa al Lord Ruler sobrevive. ¿Qué más recuerdan esos pueblos?'
  },

  // ── Nueva trama ───────────────────────────────────────
  {
    id: 'matar-lord-ruler', label: 'Matar al\nSeñor Gobernante', group: 'TRAMA', type: 'Trama — Objetivo Personal de Kelsier',
    desc: 'El objetivo personal de Kelsier más allá del robo del atium. El Lord Ruler "tomó a Mare" de él y casi destruyó su cordura. Kelsier posee el Undécimo Metal — según una leyenda suprimida, el único punto de vulnerabilidad del Lord Ruler. Ham lo llama imposible: "La Astilla del Infinito. Es una pieza de Dios mismo. No puedes matarle." Kelsier no responde con palabras — solo con determinación. Si no puede matarlo, al menos planea sacarlo de la ciudad, capturarlo o dejarlo sin recursos. Ver nodo: undecimo-metal, mare, senor-gobernante.',
    star: '★★★ "Vin pensó: tiene que estar loco." Pero Kelsier fue a los Pozos y sobrevivió algo que nadie sobrevive. ¿Qué sabe que los demás no saben? ¿Qué le hicieron los Pozos que le da esta certeza?'
  },

  // ══════════════════════════════════════════════════════
  // CAPÍTULO 5 — NUEVOS NODOS
  // ══════════════════════════════════════════════════════

  // ── Personajes nuevos ─────────────────────────────────
  {
    id: 'gemmel', label: 'Gemmel', group: 'KELS', type: 'Personaje — Mentor Mistborn de Kelsier',
    desc: 'Mistborn anciano, flaco, barba gris descuidada, pelo enmarañado. Parcialmente fuera de sus cabales — se detiene en medio de las frases, murmura para sí mismo, a veces parece más bestia que hombre. Entrenó a Kelsier en Alomancia tras su escape de los Pozos. Se especializa en Empujar y Jalar metales (Acero y Hierro) y desprecia los metales emocionales. Llevó a Kelsier a enfrentarse al Mistborn Antillius Shezler como prueba de combate real. Fue en la guarida de Shezler donde encontró notas sobre el Undécimo Metal y las entregó a Kelsier. Ya no aparece activamente. Recordado por Kelsier al describir las primeras reglas que aprendió: "Cuando Empujas algo, es como arrojar tu propio peso contra él."',
    star: '★★ El hombre que convirtió al superviviente traumatizado en arma. Sus métodos eran brutales — pero funcionaron.'
  },
  {
    id: 'oreseur', label: 'OreSeur', group: 'KELS', type: 'Personaje — Kandra bajo Contrato',
    desc: 'Kandra bajo Contrato con Kelsier. Kelsier gastó casi todo su atium disponible para adquirir el Contrato de OreSeur — suma enorme que indica la importancia del papel que desempeñará. La naturaleza específica del Contrato es desconocida para Vin. Los kandra operan siempre bajo Contratos; son los únicos términos que reconocen como vinculantes. Estado actual: Contrato adquirido, rol concreto pendiente de revelarse.',
    star: '★★★ Kelsier pagó casi todo su atium por este Contrato. ¿Qué misión justifica ese precio?'
  },

  // ── Conceptos nuevos ──────────────────────────────────
  {
    id: 'kandra', label: 'Los Kandra', group: 'MUNDO', type: 'Concepto — Especie / Criatura',
    desc: 'Especie o criatura de naturaleza desconocida que opera exclusivamente bajo Contratos formales. Solo actúan si hay un Contrato vigente que lo estipule — es la única ley que reconocen. Kelsier tiene un kandra bajo Contrato. Sus capacidades concretas aún no han sido reveladas.',
    star: '★★ Una especie que se rige por contratos como ley absoluta. ¿Qué pueden hacer que justifique tanto atium?'
  },
  {
    id: 'capa-mistborn', label: 'Capa\nMistborn', group: 'MAGIA', type: 'Concepto — Símbolo / Equipo',
    desc: 'Prenda icónica de los Mistborn. Confeccionada con cientos de tiras largas de tela gris oscuro cosidas en hombros y pecho pero sueltas entre sí, como flecos superpuestos. Su estructura imita el movimiento de la niebla: se ondula y gira al moverse, ocultando la silueta. Tiene dos funciones prácticas: camuflaje en la oscuridad y señal de advertencia a guardias y otros Mistborn.',
    star: '★ No es solo ropa — es identidad. La capa es la señal de que quien la lleva puede matarte antes de que termines de verla.'
  },
  {
    id: 'hazekillers', label: 'Hazekillers\n(Cazanieblas)', group: 'FACCION', type: 'Concepto — Especialistas Anti-Alomante',
    desc: 'Soldados de élite entrenados específicamente para combatir Mistings y Mistborn. No llevan ningún metal en el cuerpo — ni armadura ni armas metálicas. Usan bastones de duelo de madera y escudos de madera. Sus escudos bloquean monedas disparadas alománticamente. Trabajan en grupos coordinados, atacando en pares y rotando posiciones para agotar al objetivo. Táctica: abrumar con números, privar al Mistborn de anclas metálicas, aguantar hasta que lleguen refuerzos alomáticos. Casa Venture mantiene al menos una docena. Ver nodo: robo-keep-venture.',
    star: '★★ El punto ciego de la Alomancia: si no hay metal, no hay ancla. Ocho hazekillers sin metal son más peligrosos para un Mistborn que cien soldados armados.'
  },
  {
    id: 'la-oscuridad', label: 'La Oscuridad\n(La Profundidad)', group: 'TRAMA', type: 'Trama — Misterio del Epígrafe',
    desc: 'Amenaza mencionada en el epígrafe del Cap.5 por la voz del Héroe de las Edades. Llamada "La Profundidad", arrasa el mundo mientras el Héroe escribe. Él afirma ser el único capaz de destruirla, y que si falla solo quedarán huesos y polvo. Su naturaleza es completamente desconocida — podría ser física, sobrenatural, o vinculada al origen del Imperio Final.',
    star: '★★★ ¿Qué era La Oscuridad? ¿Ya fue destruida — o es el mundo gris y cubierto de ceniza que vemos ahora el resultado de que el Héroe fracasara?'
  },

  // ── Lugares nuevos ────────────────────────────────────
  {
    id: 'keep-venture', label: 'Keep\nVenture', group: 'LUGAR', type: 'Lugar — Residencia de Casa Venture',
    desc: 'Fortaleza-palacio de Casa Venture, la Gran Casa más poderosa de Luthadel. Arquitectura más artística que defensiva: contrafuertes que permiten enormes ventanales de vitral de piso a techo que iluminan la niebla con colores desde dentro. Posee muro defensivo exterior, balcón alto al sur, azotea de bronce o cobre, un conservatorio interior con plantas de colores inusuales (blancas, rojizas, amarillas — lujo de noble), y un estudio con caja fuerte oculta bajo un mural. Mantiene guardias, hazekillers y varios Mistings. Estado actual: fue infiltrada, varias ventanas destruidas, guardias muertos, su atium robado. Ver nodo: robo-keep-venture.',
    star: '★★ La joya más vigilada de Luthadel, vulnerada en una sola noche. Casa Venture sabe que fue un Mistborn.'
  },
  {
    id: 'tienda-clubs', label: 'Tienda\nde Clubs', group: 'LUGAR', type: 'Lugar — Base del Equipo',
    desc: 'Local comercial de Clubs en Luthadel, utilizado como fachada. Ahora funciona como base de operaciones del equipo. Ventaja táctica clave: Clubs es Smoker — su nube de Cobre suprime cualquier rastro alomático dentro y alrededor del local, haciendo al equipo invisible para los Buscadores del Ministerio. Estado actual: siendo preparada para recibir a los próximos miembros del equipo.',
    star: '★★ La cobertura de cobre de Clubs convierte la tienda en el único lugar de Luthadel donde el equipo puede usar Alomancia sin ser detectado.'
  },

  // ── Eventos nuevos ────────────────────────────────────
  {
    id: 'clubs-regresa', label: 'Clubs Regresa\nal Equipo (Cap.5)', group: 'EVENTO', type: 'Evento — Cap.5',
    desc: 'Después de abandonar la reunión, Clubs regresa a la guarida de Milev con su sobrino adolescente. Esperó a que Breeze se marchara — necesitaba pensar sin un Soother en la sala que pudiera contaminar su decisión. Frente a Kelsier, Dockson y Vin declara que se une no por dinero sino porque lleva toda su vida escondiendo Mistings del Lord Ruler, y el Lord Ruler los atrapa de todas formas. Prefiere "escupirle en la cara al caer." Kelsier lo recibe sin sorpresa visible — ya contaba con su vuelta. Le informa que en un par de días llegarán más miembros y Clubs parte a preparar la tienda.',
    star: '★★★ No se une para ganar. Se une porque perder con dignidad le importa más que sobrevivir en silencio. Kelsier lo sabía antes de que él mismo lo supiera.'
  },
  {
    id: 'kelsier-azotea-preparacion', label: 'Preparación\nen la Azotea (Cap.5)', group: 'EVENTO', type: 'Evento — Cap.5',
    desc: 'Kelsier, Dockson y Vin suben a la azotea de la guarida antes del robo. Kelsier se pone la capa Mistborn por primera vez ante ellos. Se descalza, se quita chaleco y todo metal excepto monedas y viales. Se bebe el mayor vial antes de saltar. En el borde de la azotea mira hacia el lado donde Mare siempre estaba en noches como esta — antes de los Pozos. Solo hay niebla. Dockson propone los objetivos posibles; Kelsier elige Keep Venture, la casa más fuerte y la que nadie consideraría atacar, precisamente por eso.',
    star: '★★ El ritual pre-trabajo que compartía con Mare. Ahora lo observa Vin en silencio desde atrás, sin comprender el peso de lo que ve.'
  },
  {
    id: 'robo-keep-venture', label: 'Robo en\nKeep Venture (Cap.5)', group: 'EVENTO', type: 'Evento — Cap.5',
    desc: 'Infiltración nocturna de Kelsier en Keep Venture. (1) Vuela desde la azotea usando Jalar de Hierro sobre el techo de bronce. (2) Elimina un guardia con daga de cristal. (3) Empuja a dos guardias del balcón simultáneamente. (4) Atraviesa el conservatorio —plantas nobles de colores inusuales. (5) En el estudio, localiza la caja fuerte oculta tras un mural y arranca el mecanismo de cierre con Alomancia. (6) Ocho hazekillers irrumpen — combate prolongado sin metal disponible como ancla; usa un lingote de plata de escritorio como proyectil teledirigido con Jalar y Empujar alternados. Derrota a los hazekillers pero recibe golpes graves en brazo y costado. (7) Llegan Mistings nobles Empujadores y un grupo de Thugs. Escapa tirando la caja fuerte por una ventana, cae con ella controlando la velocidad, la caja se estrella y la abre: gemas, cartas de crédito de 10.000 boxings cada una, y una pequeña bolsa de atium. Regresa a la tienda de Clubs.',
    star: '★★★ Entró a la fortaleza más vigilada de Luthadel solo, herido, y salió con el atium. El mensaje implícito a Casa Venture: ningún muro es suficiente.'
  },

];
