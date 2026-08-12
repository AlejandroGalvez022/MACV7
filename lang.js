/**
 * MAC‑IDAFE — Motor de internacionalización (ES / PT)
 * Uso en HTML: <elemento data-i18n="clave">texto fallback</elemento>
 * Para innerHTML:  data-i18n-html="clave"
 * Para atributos: data-i18n-attr="attr:clave"
 */

const I18N = {

  /* ════════════════════════════════════════════
     ESPAÑOL
  ════════════════════════════════════════════ */
  es: {

    /* ── NAV (compartido) ── */
    'nav.inicio':        'INICIO',
    'nav.conoce':        'CONOCE EL PROYECTO',
    'nav.actualidad':    'ACTUALIDAD',
    'nav.transparencia': 'TRANSPARENCIA',
    'nav.contacto':      'CONTACTO',
    'nav.acceso':        'ACCESO PRIVADO',
    'nav.lang':          'PT',

    /* ── FOOTER (compartido) ── */
    'footer': '© 2026 MAC‑IDAFE · Proyecto cofinanciado por el Programa INTERREG MAC 2021–2027',

    /* ══════════════════════════════════
       INDEX
    ══════════════════════════════════ */
    'index.hero.subtitle': 'Cooperación territorial para la creación de una Red de Escuelas por la Acción Climática en los territorios de Canarias, Azores, Madeira y Cabo Verde.',
    'index.hero.btn': 'Conocer el proyecto',

    'index.etapas.title':         'Etapas del Proyecto',
    'index.etapa1.title':         'Comprender',
    'index.etapa1.desc':          'Cada territorio, en cooperación territorial, analiza sus necesidades para integrar el cambio climático en los itinerarios educativos.',
    'index.etapa2.title':         'Adaptar',
    'index.etapa2.desc':          'Se transfieren las necesidades detectadas a los materiales y herramientas, para una correcta adaptación a los diferentes contextos insulares.',
    'index.etapa3.title':         'Implementar',
    'index.etapa3.desc':          'Se llevan a la práctica las herramientas y materiales educativos. Cada región — Azores, Madeira, Cabo Verde y Canarias — tendrá su propio material.',

    'index.obj.title':   'Objetivos',
    'index.obj1':        'Integrar el cambio climático en el currículo educativo.',
    'index.obj2':        'Diseñar un itinerario formativo adaptado a la Macaronesia.',
    'index.obj3':        'Capacitar al profesorado en metodologías activas.',
    'index.obj4':        'Consolidar una red de escuelas permanente de cooperación interterritorial.',

    'index.actualidad.title':   'Actualidad',
    'index.actualidad.caption': 'MAC‑IDAFE celebra en Cabo Verde su primera reunión de coordinación con el INMG',
    'index.actualidad.btn':     'ver más noticias',

    'index.trans.title':    'Transparencia',
    'index.trans.val1':     '24 meses',
    'index.trans.label1':   'Duración del proyecto',
    'index.trans.val2':     '600.174,32 €',
    'index.trans.label2':   'Presupuesto total',
    'index.trans.val3':     'INTERREG\nMAC\n2021–2027',
    'index.trans.label3':   'Programa',
    'index.trans.val4':     'COMPRENDER',
    'index.trans.label4':   'Etapa actual',

    'index.socios.title': 'Socios del Proyecto',
    'index.socios.sub':   'Una colaboración sólida entre territorios para alcanzar objetivos comunes en educación climática',

    /* ── SOCIOS LOGOS ── */
    'socios.principal': 'SOCIO PRINCIPAL:',
    'socios.feder':     'SOCIOS FEDER:',
    'socios.africano':  'SOCIO DE TERCER PAÍS AFRICANO:',

    'index.contacto.h2':  'Contacto',
    'index.contacto.p':   '¿Tienes alguna consulta sobre el proyecto? Escríbenos a',

    'index.hero.btn.primary':   'EL PROYECTO',
    'index.hero.btn.secondary': 'ACTUALIDAD',

    'contacto.form.title': 'Envíanos un mensaje',

    'trans.d1.label': 'Meses de duración',
    'trans.d2.label': 'Presupuesto total',
    'trans.d4.label': 'Territorios participantes',

    /* ══════════════════════════════════
       CONOCE EL PROYECTO
    ══════════════════════════════════ */
    'conoce.hero.label':  'Proyecto de cooperación territorial',
    'conoce.hero.h1':     'MAC‑IDAFE',
    'conoce.hero.h2':     'Conectar para transformar la educación climática en la Macaronesia',

    'conoce.intro.label':   'Sobre el proyecto',
    'conoce.intro.lede':    '<strong>MAC‑IDAFE</strong> es un proyecto de cooperación territorial cofinanciado por el <strong>Programa Interreg MAC 2021–2027</strong> que impulsa la creación de una <strong>Red de Escuelas por la Acción Climática</strong> en los territorios de Canarias, Azores, Madeira y Cabo Verde.',
    'conoce.intro.bp1':     'El proyecto responde a un desafío común: la especial <strong>vulnerabilidad climática de los territorios insulares atlánticos</strong>. Sequías, incremento de temperaturas, presión sobre recursos hídricos, riesgos costeros y pérdida de biodiversidad exigen respuestas estructurales que integren la educación como eje transformador.',
    'conoce.intro.bp2':     'En este contexto, la educación se convierte en una herramienta estratégica de transformación territorial. MAC‑IDAFE sitúa la <strong>alfabetización climática</strong>, la capacitación docente y la acción educativa como pilares para fortalecer la resiliencia de la Macaronesia y consolidar una cooperación duradera entre sistemas educativos.',
    'conoce.intro.bp3':     'Además, el proyecto capitaliza el trabajo desarrollado previamente en Canarias a través del <strong>Plan Formativo Verde</strong> y la <strong>Estrategia de Educación Ambiental de Canarias</strong>, impulsados por la Consejería de Transición Ecológica y Energía mediante encargo a GESPLAN.',
    'conoce.intro.closing': 'La educación se posiciona como palanca de transformación territorial y cohesión macaronésica.',
    'conoce.prog.label':    'Programa',
    'conoce.prog.val':      'Interreg MAC<br>2021–2027',
    'conoce.prog.sub':      'II Convocatoria de Capitalización · FEDER',
    'conoce.terr.label':    'Territorios participantes',
    'conoce.dur.text':      'meses<br>de duración',

    'conoce.obj1.title': 'Integrar la sostenibilidad en las políticas públicas educativas',
    'conoce.obj1.desc':  'Promoviendo la incorporación estructural del cambio climático en los sistemas educativos y en la planificación institucional.',
    'conoce.obj2.title': 'Diseñar un marco pedagógico común adaptado a los contextos regionales',
    'conoce.obj2.desc':  'Construyendo herramientas transferibles que respeten las singularidades de cada territorio insular.',
    'conoce.obj3.title': 'Mejorar la resiliencia climática de los territorios insulares',
    'conoce.obj3.desc':  'Impulsando respuestas educativas que conecten adaptación, mitigación y transformación social.',
    'conoce.obj4.title': 'Fortalecer la cooperación estructural entre sistemas educativos',
    'conoce.obj4.desc':  'Generando una red estable de colaboración entre centros, administraciones y agentes territoriales.',
    'conoce.obj5.title': 'Capacitar al profesorado en metodologías activas orientadas a la acción climática',
    'conoce.obj5.desc':  'Favoreciendo procesos formativos aplicados, participativos y vinculados al entorno real del alumnado.',
    'conoce.obj6.title': 'Consolidar una Red permanente con vocación de continuidad',
    'conoce.obj6.desc':  'Diseñando una estructura estable que permanezca más allá de la finalización formal del proyecto.',

    'conoce.obj.title': '¿Qué objetivos persigue MAC‑IDAFE?',
    'conoce.obj1': 'Integrar la sostenibilidad en políticas públicas educativas.',
    'conoce.obj2': 'Diseñar un marco pedagógico común adaptado a los contextos regionales.',
    'conoce.obj3': 'Mejorar la resiliencia climática de territorios insulares.',
    'conoce.obj4': 'Impulsar cooperación estructural entre sistemas educativos.',
    'conoce.obj5': 'Capacitar al profesorado en metodologías activas orientadas a la acción climática.',
    'conoce.obj6': 'Consolidar una Red permanente con vocación de continuidad más allá del proyecto.',

    'conoce.etapas.title':  'Etapas del Proyecto',
    'conoce.tl1.tag':       'Etapa 1',
    'conoce.tl1.title':     'Comprender',
    'conoce.tl1.dates':     '17 octubre 2025 → 16 abril 2026',
    'conoce.tl1.desc':      'Cada territorio, en cooperación territorial, analiza sus necesidades para integrar el cambio climático en los itinerarios educativos.',
    'conoce.tl1.lead':      'Analizar las diferentes realidades y necesidades de los territorios en materia de educación y cambio climático.',
    'conoce.tl1.bullet':    '→ Se identifican diagnósticos, oportunidades, barreras y capacidades existentes.',
    'conoce.tl2.tag':       'Etapa 2',
    'conoce.tl2.title':     'Adaptar',
    'conoce.tl2.dates':     '17 abril 2026 → 16 octubre 2026',
    'conoce.tl2.desc':      'Las necesidades detectadas se transfieren a materiales, herramientas y marcos metodológicos adaptados a cada contexto insular.',
    'conoce.tl2.lead':      'Diseñar un marco pedagógico común adaptado a los contextos regionales y desarrollar herramientas y materiales para cada uno de los territorios.',
    'conoce.tl2.bullet':    '→ Se construye un modelo común con capacidad de aplicación regional.',
    'conoce.tl3.tag':       'Etapa 3',
    'conoce.tl3.title':     'Implementar',
    'conoce.tl3.dates':     '17 octubre 2026 → 16 octubre 2027',
    'conoce.tl3.desc':      'Las herramientas educativas se llevan a la práctica en los centros participantes.',
    'conoce.tl3.lead':      'Llevar a cabo el proyecto educativo resultante en las dos primeras etapas a las aulas.',
    'conoce.tl3.bullet':    '→ Cada región (Canarias, Azores, Madeira y Cabo Verde) desarrolla sus propios materiales y estrategias de aplicación, dentro de una estructura compartida.',

    'conoce.estrategia.title': 'Estrategia Educativa',
    'conoce.est1': 'Integra el cambio climático en el currículo escolar de forma transversal.',
    'conoce.est2': 'Capacita al profesorado en metodologías activas y participativas.',
    'conoce.est3': 'Promueve el liderazgo climático del alumnado como agentes de cambio.',
    'conoce.est4': 'Consolida una Red permanente de cooperación interterritorial entre centros.',
    'conoce.est1.title': 'Integración curricular',
    'conoce.est1.desc':  'El cambio climático se incorpora de forma transversal en el currículo escolar y en la planificación educativa.',
    'conoce.est2.title': 'Capacitación docente',
    'conoce.est2.desc':  'El profesorado dispone de metodologías activas, herramientas prácticas y formación orientada a la acción.',
    'conoce.est3.title': 'Liderazgo del alumnado',
    'conoce.est3.desc':  'El alumnado participa como agente de cambio, conectando aprendizaje, territorio y acción climática.',
    'conoce.est4.title': 'Cooperación permanente',
    'conoce.est4.desc':  'Los centros se integran en una Red de Escuelas por la Acción Climática con vocación de continuidad e intercambio estable.',

    'conoce.red.title':       'Red de Escuelas por la Acción Climática',
    'conoce.red.intro':       'La Red constituye el principal legado estructural del proyecto y articula cooperación educativa permanente entre centros de Canarias, Azores, Madeira y Cabo Verde,',
    'conoce.red.intro.suffix':' favoreciendo el aprendizaje compartido, la transferencia de buenas prácticas y la consolidación de estrategias escolares de acción climática.',
    'conoce.red.header.p2':   'No se plantea como una actuación puntual, sino como una estructura de continuidad diseñada para crecer y mantenerse en el tiempo.',
    'conoce.red.card1.h4':    'Principios',
    'conoce.red.card1.li1':   'Cooperación interterritorial',
    'conoce.red.card1.li2':   'Compromiso con la sostenibilidad',
    'conoce.red.card1.li3':   'Participación activa del alumnado',
    'conoce.red.card1.li4':   'Intercambio de buenas prácticas',
    'conoce.red.card1.li5':   'Mejora continua',
    'conoce.red.card1.li6':   'Transferibilidad y escalabilidad',
    'conoce.red.card2.h4':    'Estrategias Escolares de Acción Climática',
    'conoce.red.card2.li1':   'Diagnóstico climático del centro',
    'conoce.red.card2.li2':   'Identificación de riesgos',
    'conoce.red.card2.li3':   'Diseño de acciones de adaptación y mitigación',
    'conoce.red.card2.li4':   'Implementación',
    'conoce.red.card2.li5':   'Evaluación y transferencia',
    'conoce.red.card3.h4':    'Territorios participantes',
    'conoce.red.sos.h3':      'Diseñada para perdurar',
    'conoce.red.sos.p':       'La Red está diseñada para continuar tras la finalización del proyecto, ampliando su alcance e integrando nuevos centros educativos de la Macaronesia.',
    'conoce.red.sos.p1':      'La Red está concebida para continuar tras la finalización del proyecto, ampliando su alcance e incorporando nuevos centros educativos de la Macaronesia.',
    'conoce.red.sos.p2':      'El objetivo no es únicamente ejecutar un proyecto, sino consolidar una estructura regional de cooperación educativa capaz de sostener políticas climáticas con impacto real y continuidad institucional.',
    'conoce.red.sos.p3':      'Si los diagnósticos se transforman en herramientas útiles, las herramientas en experiencias educativas reales y esas experiencias en una red estable de centros comprometidos, MAC‑IDAFE puede convertirse en una de las iniciativas más transformadoras del Programa Interreg MAC.',

    'conoce.just.title': '¿Por qué la Macaronesia?',
    'conoce.just1': 'Condición insular y alta exposición a impactos climáticos extremos.',
    'conoce.just2': 'Dependencia de recursos naturales limitados, vulnerables y estratégicos.',
    'conoce.just3': 'Necesidad de adaptación educativa contextualizada al territorio.',
    'conoce.just4': 'Retos compartidos: sequías, aumento de temperaturas, presión hídrica, riesgos costeros y pérdida de biodiversidad.',
    'conoce.just5': 'Oportunidad de construir soluciones comunes desde la cooperación entre regiones atlánticas.',

    /* ══════════════════════════════════
       ACTUALIDAD
    ══════════════════════════════════ */
    'actual.hero.label': 'Noticias del proyecto',
    'actual.hero.h1':    'Actualidad',
    'actual.hero.p':     'Seguimiento de las actividades, reuniones y avances de MAC‑IDAFE en todos los territorios',

    'actual.filtro.label':       'Filtrar:',
    'actual.filtro.all':         'Todas',
    'actual.filtro.coord':       'Coordinación',
    'actual.filtro.form':        'Formación',
    'actual.filtro.red':         'Red de Escuelas',
    'actual.filtro.proy':        'Proyecto',

    'actual.n1.tag':     'Coordinación',
    'actual.n1.date':    'Praia, Cabo Verde · 9 de marzo de 2026',
    'actual.n1.title':   'MAC‑IDAFE celebra en Cabo Verde su primera reunión de coordinación con el Instituto Nacional de Meteorologia e Geofísica',
    'actual.n1.excerpt': 'El proyecto de cooperación territorial MAC‑IDAFE celebró en la ciudad de Praia su primera reunión presencial de coordinación con el INMG de Cabo Verde, un paso clave para reforzar la cooperación entre territorios de la Macaronesia.',
    'actual.n1.res.title': 'Puntos clave',
    'actual.n1.res.li1': 'Primera reunión presencial entre Canarias y Cabo Verde',
    'actual.n1.res.li2': 'Puesta en común de la planificación de actividades',
    'actual.n1.res.li3': 'Presentación de materiales educativos desarrollados en Canarias',
    'actual.n1.cta':     'Leer noticia completa',

    'actual.n2.tag':     'Formación',
    'actual.n2.date':    'Próximamente',
    'actual.n2.title':   'Formación del profesorado en metodologías activas para la acción climática',
    'actual.n2.excerpt': 'Los equipos docentes de los cuatro territorios participarán en sesiones formativas orientadas a integrar el cambio climático en el currículo de manera práctica y participativa.',

    'actual.n3.tag':     'Red de Escuelas',
    'actual.n3.date':    'Próximamente',
    'actual.n3.title':   'Primeros centros educativos se incorporan a la Red de Escuelas por la Acción Climática',
    'actual.n3.excerpt': 'Los centros seleccionados en Canarias, Azores, Madeira y Cabo Verde inician su participación activa en la red, desarrollando sus propias estrategias escolares de acción climática.',

    'actual.n4.tag':     'Proyecto',
    'actual.n4.date':    'Próximamente',
    'actual.n4.title':   'Arranque oficial de MAC‑IDAFE: inicio de la Etapa 1 en los cuatro territorios',
    'actual.n4.excerpt': 'El proyecto pone en marcha la fase de diagnóstico en la que cada territorio analiza su contexto educativo y sus necesidades en relación con el cambio climático.',

    'modal.cv.tag':    'Coordinación',
    'modal.cv.date':   'Praia (Cabo Verde), 9 de marzo de 2026',
    'modal.cv.title':  'MAC‑IDAFE celebra en Cabo Verde su primera reunión de coordinación con el Instituto Nacional de Meteorologia e Geofísica',
    'modal.cv.body':   `<p>El proyecto de cooperación territorial <strong>MAC‑IDAFE</strong> celebró en la ciudad de Praia su primera reunión presencial de coordinación con el <strong>Instituto Nacional de Meteorologia e Geofísica (INMG)</strong> de Cabo Verde. Este encuentro supone un paso clave para avanzar en la implementación del proyecto en el país y reforzar la cooperación entre territorios de la Macaronesia.</p>
      <p>La jornada contó con la participación del equipo técnico del INMG y de <strong>Gestión y Planeamiento Territorial y Medioambiental S.A. (Gesplan)</strong>, entidad pública del Gobierno de Canarias responsable de la ejecución del proyecto desde el archipiélago canario.</p>
      <h3>Resumen de la jornada</h3>
      <ul><li>Primera reunión presencial de coordinación entre Canarias y Cabo Verde en el marco de MAC‑IDAFE.</li><li>Puesta en común de la planificación de actividades del proyecto en el territorio caboverdiano.</li><li>Presentación de los materiales educativos desarrollados en Canarias en el marco del proyecto IDAFE.</li></ul>
      <h3>Un punto de partida para la coordinación técnica</h3>
      <p>La reunión permitió establecer las bases de trabajo para la implementación del proyecto en Cabo Verde, definiendo los mecanismos de coordinación técnica entre las entidades participantes y revisando la programación general del proyecto.</p>
      <h3>Actividades previstas en Cabo Verde</h3>
      <ul><li>Análisis del sistema educativo caboverdiano y del contexto social en relación con el cambio climático.</li><li>Realización de talleres participativos con docentes y personas expertas del territorio.</li><li>Formación presencial y online dirigida al profesorado.</li><li>Desarrollo de materiales educativos sobre cambio climático adaptados al contexto caboverdiano.</li></ul>
      <h3>Próximos pasos</h3>
      <p>Tras esta primera reunión de coordinación, la agenda de trabajo continuará con reuniones institucionales y visitas técnicas a centros educativos y proyectos vinculados a la acción climática en Cabo Verde.</p>`,

    /* ══════════════════════════════════
       TRANSPARENCIA
    ══════════════════════════════════ */
    'trans.hero.label': 'Información del proyecto',
    'trans.hero.h1':    'Transparencia',
    'trans.hero.p':     'La cooperación entre islas multiplica el impacto local. La educación se convierte en herramienta de resiliencia.',

    'trans.datos.title':    'Datos del Proyecto',
    'trans.d1.val':         '24 meses',
    'trans.d1.label':       'Duración del proyecto',
    'trans.d1.sub':         '17 oct. 2025 — 16 oct. 2027',
    'trans.d2.val':         '600.174 €',
    'trans.d2.label':       'Presupuesto total',
    'trans.d2.sub':         '600.174,32 € aprobados',
    'trans.d3.val':         'Etapa 1',
    'trans.d3.label':       'Etapa actual',
    'trans.d3.sub':         'En curso: Comprender',
    'trans.d4.val':         '4',
    'trans.d4.label':       'Territorios participantes',
    'trans.d4.sub':         'Canarias · Azores · Madeira · Cabo Verde',

    'trans.estado.title':   'Estado del Proyecto',
    'trans.badge.label':    'Comprender',
    'trans.badge.sub':      'Etapa actual en curso',
    'trans.info.h3':        'Analizando las realidades del territorio',
    'trans.info.p':         'Cada territorio, en cooperación, analiza sus necesidades para integrar el cambio climático en los itinerarios educativos. Esta primera etapa sienta las bases de los materiales y herramientas que se desarrollarán a continuación.',
    'trans.chip1.label':    'Inicio',
    'trans.chip1.val':      '17 oct. 2025',
    'trans.chip2.label':    'Fin previsto',
    'trans.chip2.val':      '16 abr. 2026',

    'trans.prog1.label':    'Comprender',
    'trans.prog1.dates':    'oct. 2025 — abr. 2026',
    'trans.prog2.label':    'Adaptar',
    'trans.prog2.dates':    'abr. 2026 — oct. 2026',
    'trans.prog3.label':    'Implementar',
    'trans.prog3.dates':    'oct. 2026 — oct. 2027',

    'trans.ind.title':      'Indicadores de Seguimiento',
    'trans.ind.intro':      'El equipo de Gesplan actualizará estos indicadores conforme avance el proyecto. Los valores actuales reflejan el estado al inicio de la Etapa 1.',
    'trans.ind1.title':     'Centros educativos',
    'trans.ind2.title':     'Alumnos y alumnas',
    'trans.ind3.title':     'Docentes formados',
    'trans.ind4.title':     'Materiales educativos',
    'trans.ind5.title':     'Reuniones mantenidas',
    'trans.ind6.title':     'Visitas presenciales',
    'trans.ind.objetivo':   'objetivo',
    'trans.ind.acumulado':  'acumulado',

    'trans.prog.title':     'Programa e Información Oficial',
    'trans.desc.title':     'Descargables',
    'trans.desc.intro':     'Documentos oficiales descargables: estrategias, planes, normativa y memorias.',
    'trans.pc1.h3':         'Programa',
    'trans.pc1.p':          'Interreg MAC 2021–2027',
    'trans.pc1.sub':        'Programa de Cooperación Territorial Interreg VI-D Madeira-Azores-Canarias (MAC) 2021–2027 — II Convocatoria de Capitalización',
    'trans.pc2.h3':         'Duración',
    'trans.pc2.p':          '17 octubre 2025 — 16 octubre 2027',
    'trans.pc2.sub':        '24 meses de ejecución repartidos en tres etapas: Comprender, Adaptar e Implementar.',
    'trans.pc3.h3':         'Presupuesto total aprobado',
    'trans.pc3.p':          '600.174,32 €',
    'trans.pc3.sub':        'Cofinanciado por el Fondo Europeo de Desarrollo Regional (FEDER) a través del Programa Interreg MAC.',
    'trans.pc4.h3':         'Territorios',
    'trans.pc4.p':          'Canarias · Azores · Madeira · Cabo Verde',
    'trans.pc4.sub':        'Cuatro territorios insulares del Atlántico Macaronésico unidos por un desafío climático común.',

    /* ══ CONTACTO ══ */
    'contacto.hero.label':    'Estamos aquí para ayudarte',
    'contacto.hero.h1':       'Contacto',
    'contacto.hero.p':        '¿Tienes alguna pregunta sobre el proyecto? Escríbenos y te responderemos lo antes posible.',
    'contacto.form.name':     'Nombre completo',
    'contacto.form.email':    'Correo electrónico',
    'contacto.form.org':      'Organización (opcional)',
    'contacto.form.subject':  'Asunto',
    'contacto.form.subject.p1': 'Información general',
    'contacto.form.subject.p2': 'Quiero unirme a la Red de Escuelas',
    'contacto.form.subject.p3': 'Prensa y comunicación',
    'contacto.form.subject.p4': 'Colaboración institucional',
    'contacto.form.subject.p5': 'Otro',
    'contacto.form.message':             'Mensaje',
    'contacto.form.message.placeholder': 'Escribe tu mensaje aquí...',
    'contacto.form.btn':      'Enviar mensaje',
    'contacto.form.sending':  'Enviando...',
    'contacto.form.ok.title': '¡Mensaje enviado!',
    'contacto.form.ok.p':     'Gracias por contactarnos. Te responderemos en los próximos días.',
    'contacto.info.email.label':   'Correo electrónico del proyecto',
    'contacto.info.address.label': 'Dirección',
    'contacto.info.address.val':   'Gesplan · Gobierno de Canarias · Las Palmas de Gran Canaria',
    'contacto.info.program.label': 'Programa',
    'contacto.info.program.val':   'Interreg MAC 2021–2027',

    /* ══ ACCESO PRIVADO ══ */
    'acceso.badge':         'Próximamente',
    'acceso.h1':            'Acceso Privado',
    'acceso.p':             'Este espacio está reservado para los socios institucionales y centros educativos participantes en el proyecto MAC‑IDAFE. Estará disponible próximamente.',
    'acceso.socios.title':  'Área de Socios',
    'acceso.socios.desc':   'Documentación interna, actas, informes y seguimiento presupuestario.',
    'acceso.centros.title': 'Área de Centros',
    'acceso.centros.desc':  'Plataforma colaborativa, materiales didácticos y Red de Escuelas.',
    'acceso.btn':           'Contactar para más información',

    'conoce.chip.canarias': '🇮🇨 Canarias',
    'conoce.chip.azores':   '🇵🇹 Azores',
    'conoce.chip.madeira':  '🇵🇹 Madeira',
    'conoce.chip.caboverde':'🇨🇻 Cabo Verde',

    'contacto.form.email.placeholder': 'ana@ejemplo.com',
    'contacto.form.org.placeholder':   'IES Ejemplo',
  },

  /* ════════════════════════════════════════════
     PORTUGUÊS
  ════════════════════════════════════════════ */
  pt: {

    /* ── NAV ── */
    'nav.inicio':        'INÍCIO',
    'nav.conoce':        'CONHECER O PROJETO',
    'nav.actualidad':    'ATUALIDADE',
    'nav.transparencia': 'TRANSPARÊNCIA',
    'nav.contacto':      'CONTACTO',
    'nav.acceso':        'ACESSO PRIVADO',
    'nav.lang':          'ES',

    /* ── FOOTER ── */
    'footer': '© 2026 MAC‑IDAFE · Projeto cofinanciado pelo Programa INTERREG MAC 2021–2027',

    /* ══ INDEX ══ */
    'index.hero.subtitle': 'Cooperação territorial para a criação de uma Rede de Escolas pela Ação Climática nos territórios das Canárias, Açores, Madeira e Cabo Verde.',
    'index.hero.btn': 'Conhecer o projeto',

    'index.etapas.title':   'Etapas do Projeto',
    'index.etapa1.title':   'Compreender',
    'index.etapa1.desc':    'Cada território, em cooperação territorial, analisa as suas necessidades para integrar as alterações climáticas nos currículos escolares.',
    'index.etapa2.title':   'Adaptar',
    'index.etapa2.desc':    'As necessidades detetadas são transferidas para materiais, ferramentas e quadros metodológicos adaptados a cada contexto insular.',
    'index.etapa3.title':   'Implementar',
    'index.etapa3.desc':    'Colocam-se em prática as ferramentas e materiais educativos. Cada região — Açores, Madeira, Cabo Verde e Canárias — terá o seu próprio material.',

    'index.obj.title':   'Objetivos',
    'index.obj1':        'Integrar as alterações climáticas no currículo educativo.',
    'index.obj2':        'Conceber um percurso formativo adaptado à Macaronésia.',
    'index.obj3':        'Capacitar o corpo docente em metodologias ativas.',
    'index.obj4':        'Consolidar uma rede de escolas permanente de cooperação interterritorial.',

    'index.actualidad.title':   'Atualidade',
    'index.actualidad.caption': 'MAC‑IDAFE celebra em Cabo Verde a sua primeira reunião de coordenação com o INMG',
    'index.actualidad.btn':     'ver mais notícias',

    'index.trans.title':    'Transparência',
    'index.trans.val1':     '24 meses',
    'index.trans.label1':   'Duração do projeto',
    'index.trans.val2':     '600.174,32 €',
    'index.trans.label2':   'Orçamento total',
    'index.trans.val3':     'INTERREG\nMAC\n2021–2027',
    'index.trans.label3':   'Programa',
    'index.trans.val4':     'COMPREENDER',
    'index.trans.label4':   'Etapa atual',

    'index.socios.title': 'Parceiros do Projeto',
    'index.socios.sub':   'Uma colaboração sólida entre territórios para alcançar objetivos comuns em educação climática',

    /* ── SOCIOS LOGOS ── */
    'socios.principal': 'PARCEIRO PRINCIPAL:',
    'socios.feder':     'PARCEIROS FEDER:',
    'socios.africano':  'PARCEIRO DE TERCEIRO PAÍS AFRICANO:',

    'index.contacto.h2':  'Contacto',
    'index.contacto.p':   'Tem alguma questão sobre o projeto? Escreva-nos para',

    'index.hero.btn.primary':   'O PROJETO',
    'index.hero.btn.secondary': 'ATUALIDADE',

    'contacto.form.title': 'Envie-nos uma mensagem',

    'trans.d1.label': 'Meses de duração',
    'trans.d2.label': 'Orçamento total',
    'trans.d4.label': 'Territórios participantes',

    /* ══ CONOCE ══ */
    'conoce.hero.label':  'Projeto de cooperação territorial',
    'conoce.hero.h1':     'MAC‑IDAFE',
    'conoce.hero.h2':     'Conectar para transformar a educação climática na Macaronésia',

    'conoce.intro.label':   'Sobre o projeto',
    'conoce.intro.lede':    '<strong>MAC‑IDAFE</strong> é um projeto de cooperação territorial cofinanciado pelo <strong>Programa Interreg MAC 2021–2027</strong> que impulsiona a criação de uma <strong>Rede de Escolas pela Ação Climática</strong> nos territórios das Canárias, Açores, Madeira e Cabo Verde.',
    'conoce.intro.bp1':     'O projeto responde a um desafio comum: a especial <strong>vulnerabilidade climática dos territórios insulares atlânticos</strong>. Secas, aumento de temperaturas, pressão sobre os recursos hídricos, riscos costeiros e perda de biodiversidade exigem respostas estruturais que integrem a educação como eixo transformador.',
    'conoce.intro.bp2':     'Neste contexto, a educação torna-se uma ferramenta estratégica de transformação territorial. O MAC‑IDAFE coloca a <strong>literacia climática</strong>, a capacitação docente e a ação educativa como pilares para fortalecer a resiliência da Macaronésia e consolidar uma cooperação duradoura entre sistemas educativos.',
    'conoce.intro.bp3':     'Além disso, o projeto capitaliza o trabalho desenvolvido previamente nas Canárias através do <strong>Plano Formativo Verde</strong> e da <strong>Estratégia de Educação Ambiental das Canárias</strong>, impulsionados pela Consejería de Transición Ecológica y Energía mediante encomenda à GESPLAN.',
    'conoce.intro.closing': 'A educação posiciona-se como alavanca de transformação territorial e coesão macaronésica.',
    'conoce.prog.label':    'Programa',
    'conoce.prog.val':      'Interreg MAC<br>2021–2027',
    'conoce.prog.sub':      'II Convocatória de Capitalização · FEDER',
    'conoce.terr.label':    'Territórios participantes',
    'conoce.dur.text':      'meses<br>de duração',

    'conoce.obj1.title': 'Integrar a sustentabilidade nas políticas públicas educativas',
    'conoce.obj1.desc':  'Promovendo a incorporação estrutural das alterações climáticas nos sistemas educativos e no planeamento institucional.',
    'conoce.obj2.title': 'Conceber um quadro pedagógico comum adaptado aos contextos regionais',
    'conoce.obj2.desc':  'Construindo ferramentas transferíveis que respeitem as singularidades de cada território insular.',
    'conoce.obj3.title': 'Melhorar a resiliência climática dos territórios insulares',
    'conoce.obj3.desc':  'Impulsionando respostas educativas que conectem adaptação, mitigação e transformação social.',
    'conoce.obj4.title': 'Fortalecer a cooperação estrutural entre sistemas educativos',
    'conoce.obj4.desc':  'Gerando uma rede estável de colaboração entre escolas, administrações e agentes territoriais.',
    'conoce.obj5.title': 'Capacitar o corpo docente em metodologias ativas orientadas para a ação climática',
    'conoce.obj5.desc':  'Favorecendo processos formativos aplicados, participativos e vinculados ao ambiente real dos alunos.',
    'conoce.obj6.title': 'Consolidar uma Rede permanente com vocação de continuidade',
    'conoce.obj6.desc':  'Concebendo uma estrutura estável que permaneça para além da conclusão formal do projeto.',

    'conoce.obj.title': 'Quais os objetivos do MAC‑IDAFE?',
    'conoce.obj1': 'Integrar a sustentabilidade nas políticas públicas educativas.',
    'conoce.obj2': 'Conceber um quadro pedagógico comum adaptado aos contextos regionais.',
    'conoce.obj3': 'Melhorar a resiliência climática dos territórios insulares.',
    'conoce.obj4': 'Impulsionar a cooperação estrutural entre sistemas educativos.',
    'conoce.obj5': 'Capacitar o corpo docente em metodologias ativas orientadas para a ação climática.',
    'conoce.obj6': 'Consolidar uma Rede permanente com vocação de continuidade para além do projeto.',

    'conoce.etapas.title':  'Etapas do Projeto',
    'conoce.tl1.tag':       'Etapa 1',
    'conoce.tl1.title':     'Compreender',
    'conoce.tl1.dates':     '17 outubro 2025 → 16 abril 2026',
    'conoce.tl1.desc':      'Cada território, em cooperação, analisa as suas necessidades para integrar as alterações climáticas nos currículos escolares.',
    'conoce.tl1.lead':      'Analisar as diferentes realidades e necessidades dos territórios em matéria de educação e alterações climáticas.',
    'conoce.tl1.bullet':    '→ Identificam-se diagnósticos, oportunidades, barreiras e capacidades existentes.',
    'conoce.tl2.tag':       'Etapa 2',
    'conoce.tl2.title':     'Adaptar',
    'conoce.tl2.dates':     '17 abril 2026 → 16 outubro 2026',
    'conoce.tl2.desc':      'As necessidades identificadas são transferidas para materiais e ferramentas, permitindo uma correta adaptação a cada contexto insular.',
    'conoce.tl2.lead':      'Conceber um referencial pedagógico comum adaptado aos contextos regionais e desenvolver ferramentas e materiais para cada um dos territórios.',
    'conoce.tl2.bullet':    '→ Constrói-se um modelo comum com capacidade de aplicação regional.',
    'conoce.tl3.tag':       'Etapa 3',
    'conoce.tl3.title':     'Implementar',
    'conoce.tl3.dates':     '17 outubro 2026 → 16 outubro 2027',
    'conoce.tl3.desc':      'Colocam-se em prática as ferramentas e materiais educativos. Cada região — Açores, Madeira, Cabo Verde e Canárias — terá o seu próprio material.',
    'conoce.tl3.lead':      'Levar o projeto educativo resultante das duas primeiras etapas para as salas de aula.',
    'conoce.tl3.bullet':    '→ Cada região (Canárias, Açores, Madeira e Cabo Verde) desenvolve os seus próprios materiais e estratégias de aplicação, dentro de uma estrutura partilhada.',

    'conoce.estrategia.title': 'Estratégia Educativa',
    'conoce.est1': 'Integra as alterações climáticas no currículo escolar de forma transversal.',
    'conoce.est2': 'Capacita o corpo docente em metodologias ativas e participativas.',
    'conoce.est3': 'Promove a liderança climática dos alunos como agentes de mudança.',
    'conoce.est4': 'Consolida uma Rede permanente de cooperação interterritorial entre escolas.',
    'conoce.est1.title': 'Integração curricular',
    'conoce.est1.desc':  'As alterações climáticas são incorporadas de forma transversal no currículo escolar e no planeamento educativo.',
    'conoce.est2.title': 'Capacitação docente',
    'conoce.est2.desc':  'O corpo docente dispõe de metodologias ativas, ferramentas práticas e formação orientada para a ação.',
    'conoce.est3.title': 'Participação ativa dos alunos',
    'conoce.est3.desc':  'Os alunos atuam como agentes de mudança, aplicando as aprendizagens ao seu território, contribuindo para a ação climática.',
    'conoce.est4.title': 'Cooperação permanente',
    'conoce.est4.desc':  'As escolas integram-se numa Rede de Escolas pela Ação Climática com vocação de continuidade e intercâmbio estável.',

    'conoce.red.title':       'Rede de Escolas pela Ação Climática',
    'conoce.red.intro':       'A Rede constitui o principal legado estrutural do projeto e articula cooperação educativa permanente entre escolas das Canárias, Açores, Madeira e Cabo Verde,',
    'conoce.red.intro.suffix':' favorecendo a aprendizagem partilhada, a transferência de boas práticas e a consolidação de estratégias escolares de ação climática.',
    'conoce.red.header.p2':   'Não se trata de uma atuação pontual, mas de uma estrutura de continuidade concebida para crescer e manter-se no tempo.',
    'conoce.red.card1.h4':    'Princípios',
    'conoce.red.card1.li1':   'Cooperação interterritorial',
    'conoce.red.card1.li2':   'Compromisso com a sustentabilidade',
    'conoce.red.card1.li3':   'Participação ativa dos alunos',
    'conoce.red.card1.li4':   'Troca de boas práticas',
    'conoce.red.card1.li5':   'Melhoria contínua',
    'conoce.red.card1.li6':   'Transferibilidade e escalabilidade',
    'conoce.red.card2.h4':    'Estratégias Escolares de Ação Climática',
    'conoce.red.card2.li1':   'Diagnóstico climático da escola',
    'conoce.red.card2.li2':   'Identificação de riscos',
    'conoce.red.card2.li3':   'Conceção de ações de adaptação e mitigação',
    'conoce.red.card2.li4':   'Implementação',
    'conoce.red.card2.li5':   'Avaliação e transferência',
    'conoce.red.card3.h4':    'Territórios participantes',
    'conoce.red.sos.h3':      'Concebida para perdurar',
    'conoce.red.sos.p':       'A Rede está concebida para continuar após o término do projeto, alargando o seu âmbito e integrando novas escolas da Macaronésia.',
    'conoce.red.sos.p1':      'A Rede está concebida para continuar após a conclusão do projeto, alargando o seu âmbito e incorporando novas escolas da Macaronésia.',
    'conoce.red.sos.p2':      'O objetivo não é apenas executar um projeto, mas consolidar uma estrutura regional de cooperação educativa capaz de sustentar políticas climáticas com impacto real e continuidade institucional.',
    'conoce.red.sos.p3':      'Se os diagnósticos se transformam em ferramentas úteis, as ferramentas em experiências educativas reais e essas experiências numa rede estável de escolas comprometidas, o MAC‑IDAFE pode tornar-se uma das iniciativas mais transformadoras do Programa Interreg MAC.',

    'conoce.just.title': 'Porquê a Macaronésia?',
    'conoce.just1': 'Condição insular e elevada exposição a impactos climáticos extremos.',
    'conoce.just2': 'Dependência de recursos naturais limitados, vulneráveis e estratégicos.',
    'conoce.just3': 'Necessidade de adaptação educativa contextualizada ao território.',
    'conoce.just4': 'Desafios comuns: secas, aumento de temperaturas, pressão hídrica, riscos costeiros e perda de biodiversidade.',
    'conoce.just5': 'Oportunidade de construir soluções comuns a partir da cooperação entre regiões atlânticas.',

    /* ══ ACTUALIDAD ══ */
    'actual.hero.label': 'Notícias do projeto',
    'actual.hero.h1':    'Atualidade',
    'actual.hero.p':     'Acompanhamento das atividades, reuniões e avanços do MAC‑IDAFE em todos os territórios',

    'actual.filtro.label':  'Filtrar:',
    'actual.filtro.all':    'Todas',
    'actual.filtro.coord':  'Coordenação',
    'actual.filtro.form':   'Formação',
    'actual.filtro.red':    'Rede de Escolas',
    'actual.filtro.proy':   'Projeto',

    'actual.n1.tag':     'Coordenação',
    'actual.n1.date':    'Praia, Cabo Verde · 9 de março de 2026',
    'actual.n1.title':   'MAC‑IDAFE celebra em Cabo Verde a sua primeira reunião de coordenação com o Instituto Nacional de Meteorologia e Geofísica',
    'actual.n1.excerpt': 'O projeto de cooperação territorial MAC‑IDAFE celebrou na cidade da Praia a sua primeira reunião presencial de coordenação com o INMG de Cabo Verde, um passo fundamental para reforçar a cooperação entre territórios da Macaronésia.',
    'actual.n1.res.title': 'Pontos-chave',
    'actual.n1.res.li1': 'Primeira reunião presencial entre as Canárias e Cabo Verde',
    'actual.n1.res.li2': 'Partilha do planeamento de atividades',
    'actual.n1.res.li3': 'Apresentação de materiais educativos desenvolvidos nas Canárias',
    'actual.n1.cta':     'Ler notícia completa',

    'actual.n2.tag':     'Formação',
    'actual.n2.date':    'Brevemente',
    'actual.n2.title':   'Formação de professores em metodologias ativas para a ação climática',
    'actual.n2.excerpt': 'As equipas docentes dos quatro territórios participarão em sessões formativas orientadas para integrar as alterações climáticas no currículo de forma prática e participativa.',

    'actual.n3.tag':     'Rede de Escolas',
    'actual.n3.date':    'Em breve',
    'actual.n3.title':   'Primeiras escolas integram a Rede de Escolas pela Ação Climática',
    'actual.n3.excerpt': 'As escolas selecionadas nas Canárias, Açores, Madeira e Cabo Verde iniciam a sua participação ativa na rede, desenvolvendo as suas próprias estratégias escolares de ação climática.',

    'actual.n4.tag':     'Projeto',
    'actual.n4.date':    'Em breve',
    'actual.n4.title':   'Arranque oficial do MAC‑IDAFE: início da Etapa 1 nos quatro territórios',
    'actual.n4.excerpt': 'O projeto lança a fase de diagnóstico em que cada território analisa o seu contexto educativo e as suas necessidades face às alterações climáticas.',

    'modal.cv.tag':    'Coordenação',
    'modal.cv.date':   'Praia (Cabo Verde), 9 de março de 2026',
    'modal.cv.title':  'MAC‑IDAFE celebra em Cabo Verde a sua primeira reunião de coordenação com o Instituto Nacional de Meteorologia e Geofísica',
    'modal.cv.body':   `<p>O projeto de cooperação territorial <strong>MAC‑IDAFE</strong> celebrou na cidade da Praia a sua primeira reunião presencial de coordenação com o <strong>Instituto Nacional de Meteorologia e Geofísica (INMG)</strong> de Cabo Verde. Este encontro constitui um passo fundamental para avançar na implementação do projeto no país e reforçar a cooperação entre os territórios da Macaronésia.</p>
      <p>A jornada contou com a participação da equipa técnica do INMG e da <strong>Gestión y Planeamiento Territorial y Medioambiental S.A. (Gesplan)</strong>, entidade pública do Governo das Canárias responsável pela execução do projeto desde o arquipélago canário.</p>
      <h3>Resumo da jornada</h3>
      <ul><li>Primeira reunião presencial de coordenação entre as Canárias e Cabo Verde no âmbito do MAC‑IDAFE.</li><li>Partilha do planeamento de atividades do projeto no território cabo-verdiano.</li><li>Apresentação dos materiais educativos desenvolvidos nas Canárias no âmbito do projeto IDAFE.</li></ul>
      <h3>Um ponto de partida para a coordenação técnica</h3>
      <p>A reunião permitiu estabelecer as bases de trabalho para a implementação do projeto em Cabo Verde, definindo os mecanismos de coordenação técnica entre as entidades participantes e revendo a programação geral do projeto.</p>
      <h3>Atividades previstas em Cabo Verde</h3>
      <ul><li>Análise do sistema educativo cabo-verdiano e do contexto social em relação às alterações climáticas.</li><li>Realização de workshops participativos com docentes e especialistas do território.</li><li>Formação presencial e online dirigida ao corpo docente.</li><li>Desenvolvimento de materiais educativos sobre alterações climáticas adaptados ao contexto cabo-verdiano.</li></ul>
      <h3>Próximos passos</h3>
      <p>Após esta primeira reunião de coordenação, a agenda de trabalho continuará com reuniões institucionais e visitas técnicas a escolas e projetos ligados à ação climática em Cabo Verde.</p>`,

    /* ══ TRANSPARENCIA ══ */
    'trans.hero.label': 'Informação do projeto',
    'trans.hero.h1':    'Transparência',
    'trans.hero.p':     'A cooperação entre ilhas multiplica o impacto local. A educação torna-se uma ferramenta de resiliência.',

    'trans.datos.title':    'Dados do Projeto',
    'trans.d1.val':         '24 meses',
    'trans.d1.label':       'Duração do projeto',
    'trans.d1.sub':         '17 out. 2025 — 16 out. 2027',
    'trans.d2.val':         '600.174 €',
    'trans.d2.label':       'Orçamento total',
    'trans.d2.sub':         '600.174,32 € aprovados',
    'trans.d3.val':         'Etapa 1',
    'trans.d3.label':       'Etapa atual',
    'trans.d3.sub':         'Em curso: Compreender',
    'trans.d4.val':         '4',
    'trans.d4.label':       'Territórios participantes',
    'trans.d4.sub':         'Canárias · Açores · Madeira · Cabo Verde',

    'trans.estado.title':   'Estado do Projeto',
    'trans.badge.label':    'Compreender',
    'trans.badge.sub':      'Etapa atual em curso',
    'trans.info.h3':        'Analisando as realidades do território',
    'trans.info.p':         'Cada território, em cooperação, analisa as suas necessidades para integrar as alterações climáticas nos itinerários educativos. Esta primeira etapa estabelece as bases dos materiais e ferramentas que serão desenvolvidos a seguir.',
    'trans.chip1.label':    'Início',
    'trans.chip1.val':      '17 out. 2025',
    'trans.chip2.label':    'Fim previsto',
    'trans.chip2.val':      '16 abr. 2026',

    'trans.prog1.label':    'Compreender',
    'trans.prog1.dates':    'out. 2025 — abr. 2026',
    'trans.prog2.label':    'Adaptar',
    'trans.prog2.dates':    'abr. 2026 — out. 2026',
    'trans.prog3.label':    'Implementar',
    'trans.prog3.dates':    'out. 2026 — out. 2027',

    'trans.ind.title':      'Indicadores de Acompanhamento',
    'trans.ind.intro':      'A equipa da Gesplan atualizará estes indicadores ao longo do Projeto. Os valores atuais refletem o estado no início da Etapa 1.',
    'trans.ind1.title':     'Escolas',
    'trans.ind2.title':     'Alunos e alunas',
    'trans.ind3.title':     'Docentes formados',
    'trans.ind4.title':     'Materiais educativos',
    'trans.ind5.title':     'Reuniões realizadas',
    'trans.ind6.title':     'Visitas presenciais',
    'trans.ind.objetivo':   'objetivo',
    'trans.ind.acumulado':  'acumulado',

    'trans.prog.title':     'Programa e Informação Oficial',
    'trans.desc.title':     'Documentos',
    'trans.desc.intro':     'Documentos oficiais para descarregar: estratégias, planos, legislação e relatórios.',
    'trans.pc1.h3':         'Programa',
    'trans.pc1.p':          'Interreg MAC 2021–2027',
    'trans.pc1.sub':        'Programa de Cooperação Territorial Interreg VI-D Madeira-Açores-Canárias (MAC) 2021–2027 — II Convocatória de Capitalização',
    'trans.pc2.h3':         'Duração',
    'trans.pc2.p':          '17 outubro 2025 — 16 outubro 2027',
    'trans.pc2.sub':        '24 meses de execução divididos em três etapas: Compreender, Adaptar e Implementar.',
    'trans.pc3.h3':         'Orçamento total aprovado',
    'trans.pc3.p':          '600.174,32 €',
    'trans.pc3.sub':        'Cofinanciado pelo Fundo Europeu de Desenvolvimento Regional (FEDER) através do Programa Interreg MAC.',
    'trans.pc4.h3':         'Territórios',
    'trans.pc4.p':          'Canárias · Açores · Madeira · Cabo Verde',
    'trans.pc4.sub':        'Quatro territórios insulares do Atlântico Macaronésico unidos por um desafio climático comum.',

    /* ══ CONTACTO ══ */
    'contacto.hero.label':    'Estamos aqui para ajudar',
    'contacto.hero.h1':       'Contacto',
    'contacto.hero.p':        'Tem alguma questão sobre o projeto? Escreva-nos e responderemos o mais brevemente possível.',
    'contacto.form.name':     'Nome completo',
    'contacto.form.email':    'Endereço de e-mail',
    'contacto.form.org':      'Organização (opcional)',
    'contacto.form.subject':  'Assunto',
    'contacto.form.subject.p1': 'Informação geral',
    'contacto.form.subject.p2': 'Quero aderir à Rede de Escolas',
    'contacto.form.subject.p3': 'Imprensa e comunicação',
    'contacto.form.subject.p4': 'Colaboração institucional',
    'contacto.form.subject.p5': 'Outro',
    'contacto.form.message':             'Mensagem',
    'contacto.form.message.placeholder': 'Escreva a sua mensagem aqui...',
    'contacto.form.btn':      'Enviar mensagem',
    'contacto.form.sending':  'A enviar...',
    'contacto.form.ok.title': 'Mensagem enviada!',
    'contacto.form.ok.p':     'Obrigado por nos contactar. Responderemos nos próximos dias.',
    'contacto.info.email.label':   'Endereço de e-mail do projeto',
    'contacto.info.address.label': 'Morada',
    'contacto.info.address.val':   'Gesplan · Governo das Canárias · Las Palmas de Gran Canaria',
    'contacto.info.program.label': 'Programa',
    'contacto.info.program.val':   'Interreg MAC 2021–2027',

    /* ══ ACCESO PRIVADO ══ */
    'acceso.badge':         'Brevemente',
    'acceso.h1':            'Acesso Privado',
    'acceso.p':             'Este espaço está reservado aos parceiros institucionais e centros educativos participantes no Projeto MAC-IDAFE. Estará disponível em breve.',
    'acceso.socios.title':  'Área de Sócios',
    'acceso.socios.desc':   'Documentação interna, atas, relatórios e monitorização orçamental.',
    'acceso.centros.title': 'Área de Escolas',
    'acceso.centros.desc':  'Plataforma colaborativa, materiais didáticos e Rede de Escolas.',
    'acceso.btn':           'Entre em contacto connosco para obter mais informações.',

    'conoce.chip.canarias': '🇮🇨 Canárias',
    'conoce.chip.azores':   '🇵🇹 Açores',
    'conoce.chip.madeira':  '🇵🇹 Madeira',
    'conoce.chip.caboverde':'🇨🇻 Cabo Verde',

    'contacto.form.email.placeholder': 'ana@exemplo.com',
    'contacto.form.org.placeholder':   'EBI Exemplo',
  }
};

/* ════════════════════════════════════════════
   HELPERS
════════════════════════════════════════════ */
function _setText(sel, key, dict) {
  const el = document.querySelector(sel);
  if (el && dict[key] !== undefined) el.textContent = dict[key];
}
function _setHTML(sel, key, dict) {
  const el = document.querySelector(sel);
  if (el && dict[key] !== undefined) el.innerHTML = dict[key];
}
function _setTextAll(sel, keys, dict) {
  const els = document.querySelectorAll(sel);
  keys.forEach((key, i) => {
    if (els[i] && dict[key] !== undefined) els[i].textContent = dict[key];
  });
}
function _setHTMLAll(sel, keys, dict) {
  const els = document.querySelectorAll(sel);
  keys.forEach((key, i) => {
    if (els[i] && dict[key] !== undefined) els[i].innerHTML = dict[key];
  });
}

/* ════════════════════════════════════════════
   TRADUCCIONES PAGE-SPECIFIC (elementos sin data-i18n)
════════════════════════════════════════════ */
function applyPageTranslations(lang) {
  const dict = I18N[lang] || I18N['es'];

  /* ── CONOCE.HTML ── */
  if (document.querySelector('.intro-bento')) {

    _setText('.intro-cell-label',              'conoce.intro.label',   dict);
    _setHTML('.intro-lede',                    'conoce.intro.lede',    dict);
    _setHTMLAll('.intro-body-p',               ['conoce.intro.bp1', 'conoce.intro.bp2', 'conoce.intro.bp3'], dict);
    _setText('.intro-closing',                 'conoce.intro.closing', dict);
    _setText('.intro-cell-program .cell-label','conoce.prog.label',    dict);
    _setHTML('.intro-cell-program .cell-val',  'conoce.prog.val',      dict);
    _setText('.intro-cell-program .cell-sub',  'conoce.prog.sub',      dict);
    _setText('.intro-cell-territories .cell-label', 'conoce.terr.label', dict);
    _setHTML('.intro-duration .dur-text',      'conoce.dur.text',      dict);

    _setTextAll('#objetivos .obj-title',
      ['conoce.obj1.title','conoce.obj2.title','conoce.obj3.title',
       'conoce.obj4.title','conoce.obj5.title','conoce.obj6.title'], dict);
    _setTextAll('#objetivos .obj-desc',
      ['conoce.obj1.desc','conoce.obj2.desc','conoce.obj3.desc',
       'conoce.obj4.desc','conoce.obj5.desc','conoce.obj6.desc'], dict);

    _setTextAll('.tl-lead',   ['conoce.tl1.lead',   'conoce.tl2.lead',   'conoce.tl3.lead'],   dict);
    _setTextAll('.tl-bullet', ['conoce.tl1.bullet', 'conoce.tl2.bullet', 'conoce.tl3.bullet'], dict);

    _setTextAll('.estrategia-item .est-title',
      ['conoce.est1.title','conoce.est2.title','conoce.est3.title','conoce.est4.title'], dict);
    _setTextAll('.estrategia-item > div > p',
      ['conoce.est1.desc','conoce.est2.desc','conoce.est3.desc','conoce.est4.desc'], dict);

    const redP1 = document.querySelector('.red-header p:first-child');
    if (redP1 && dict['conoce.red.intro'] && dict['conoce.red.intro.suffix']) {
      redP1.innerHTML = `<span data-i18n="conoce.red.intro">${dict['conoce.red.intro']}</span>${dict['conoce.red.intro.suffix']}`;
    }
    _setText('.red-header p:last-child', 'conoce.red.header.p2', dict);

    _setTextAll('.red-sostenibilidad p',
      ['conoce.red.sos.p1','conoce.red.sos.p2','conoce.red.sos.p3'], dict);

    const justCards = document.querySelectorAll('.just-card p');
    if (justCards[4] && dict['conoce.just5']) justCards[4].textContent = dict['conoce.just5'];
  }
}

/* ════════════════════════════════════════════
   MOTOR DE TRADUCCIÓN
════════════════════════════════════════════ */

function getLang() {
  return localStorage.getItem('macidafe-lang') || 'es';
}

function setLang(lang) {
  localStorage.setItem('macidafe-lang', lang);
  applyLang(lang);
}

function t(key) {
  const lang = getLang();
  return I18N[lang][key] || I18N['es'][key] || key;
}

function applyLang(lang) {
  const dict = I18N[lang] || I18N['es'];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    const val = el.getAttribute('data-i18n-attr');
    const [attr, key] = val.split(':');
    if (dict[key] !== undefined) el.setAttribute(attr, dict[key]);
  });

  applyPageTranslations(lang);

  document.querySelectorAll('.lang-opt').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  document.documentElement.lang = lang;
}

/* ── Inicialización ── */
document.addEventListener('DOMContentLoaded', () => {
  if (!localStorage.getItem('macidafe-lang')) {
    const browserLang = navigator.language || navigator.userLanguage || 'es';
    const detected = browserLang.toLowerCase().startsWith('pt') ? 'pt' : 'es';
    localStorage.setItem('macidafe-lang', detected);
  }
  applyLang(getLang());
});