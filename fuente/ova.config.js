/* =========================================================
   CURSO · Manejo Seguro de Montacargas
   ---------------------------------------------------------
   Cliente:  Waygroup
   Audiencia: [PENDIENTE]
   Duración: 4 horas
   Preset visual: ver fuente/paleta.css (copiado de skin/presets/)
   ========================================================= */
module.exports = {
  brand: {
    name: '', sub: '',
    logo:       'assets/img/logos/waygroup-for-education-h.svg',
    logoMobile: 'assets/img/logos/waygroup-w-only.svg',
  },
  course: {
    code: '', name: 'Manejo Seguro de Montacargas', subtitle: '', duration: '4 horas',
    iso: 'ISO 9001:2015', licencia: 'Creative Commons BY-NC-SA 4.0',
    preset: 'vital', pdf: '',
    portadaFullBleed: true,        // el estándar Waygroup desde TSA
  },
  /* MENÚ · estándar Waygroup: Portada, Presentación, temas numerados (1, 2…) con
     subtemas como secciones ancladas dentro del tema (1.1, 1.2… los numera el build),
     Evaluación (cuando el cliente la entrega), Glosario y Referencias.
     Las especiales llevan el icono fijo del motor: no se declara `icon`. */
  menu: [
    { id: 'inicio',       titulo: 'Inicio',                        tipo: 'especial' },
    { id: 'presentacion', titulo: 'Presentación',                  tipo: 'especial' },
    { id: 'tema1',        titulo: 'Antes de subirte al montacargas', tipo: 'tema',
      secciones: [
        { titulo: 'La normatividad del montacargas en Colombia, explicada de forma simple', ancla: 'normatividad' },
        { titulo: 'Qué es un montacargas y qué lo hace diferente a otros vehículos',        ancla: 'que-es-montacargas' },
        { titulo: 'Quién es quién: los responsables en el manejo de montacargas',           ancla: 'roles' },
        { titulo: 'La inspección preoperacional: qué se revisa antes de encender',          ancla: 'inspeccion' },
        { titulo: 'Elementos de protección personal para el operador',                      ancla: 'epp' },
      ] },
    { id: 'tema2',        titulo: 'Vuelco: cómo identificarlo y prevenirlo', tipo: 'tema',
      secciones: [
        { titulo: 'Qué peligros existen en la operación de un montacargas', ancla: 'peligros' },
        { titulo: 'La combinación que más provoca un vuelco',              ancla: 'combinacion-vuelco' },
        { titulo: 'Peligros del entorno que agravan la operación',         ancla: 'entorno' },
        { titulo: 'Tipos de carga y sus riesgos específicos',               ancla: 'tipos-carga' },
      ] },
    { id: 'tema3',        titulo: 'Operación segura en la bodega', tipo: 'tema',
      secciones: [
        { titulo: 'Señalización sonora y visual durante la circulación',          ancla: 'senalizacion' },
        { titulo: 'Cómo manejar la carga correctamente',                           ancla: 'manejo-carga' },
        { titulo: 'Circulación segura: velocidad, cruces y prioridad de paso',     ancla: 'circulacion' },
        { titulo: 'Qué autoriza la operación de un montacargas',                   ancla: 'autorizacion' },
        { titulo: 'Qué se hace antes, durante y después del turno',                ancla: 'turno' },
      ] },
    { id: 'tema4',        titulo: 'Actuar a tiempo: qué hacer si algo sale mal', tipo: 'tema',
      secciones: [
        { titulo: 'Si algo sale mal: qué hacer ante un vuelco o una caída de carga', ancla: 'vuelco-caida' },
        { titulo: 'Cuándo no se autoriza o se detiene la operación',                 ancla: 'detener-operacion' },
        { titulo: 'Tabla de referencia rápida: qué hacer ante una emergencia',       ancla: 'emergencias' },
      ] },
    { id: 'evaluacion',   titulo: 'Evaluación',                    tipo: 'especial' },
    { id: 'glosario',     titulo: 'Glosario',                      tipo: 'especial' },
    { id: 'referencias',  titulo: 'Referencias',                   tipo: 'especial' },
  ],
  glosario: [
    { letra: 'A', termino: 'Alarma de reversa',
      definicion: 'Señal sonora que se activa al retroceder el montacargas, para advertir a las personas cercanas, en un momento de baja visibilidad para el operador.' },
    { letra: 'C', termino: 'Capacidad nominal',
      definicion: 'Peso máximo que un montacargas puede levantar de forma segura, indicado en su placa de capacidad, y que disminuye a medida que la carga se eleva más alto.' },
    { letra: 'C', termino: 'Centro de carga',
      definicion: 'Distancia estándar, normalmente 500 milímetros desde el respaldo de las horquillas, para la cual el fabricante calcula la capacidad nominal indicada en la placa; una carga más larga o descentrada reduce la capacidad real del equipo.' },
    { letra: 'C', termino: 'Centro de gravedad',
      definicion: 'Punto donde se concentra el peso combinado del montacargas y su carga, cuya posición determina si el equipo permanece estable o vuelca.' },
    { letra: 'C', termino: 'Certificación de competencia laboral',
      definicion: 'Reconocimiento formal, otorgado por una entidad certificadora avalada por el SENA, de las habilidades específicas de un operador de montacargas.' },
    { letra: 'C', termino: 'Cinturón de seguridad del montacargas',
      definicion: 'Elemento que mantiene al operador dentro de la cabina en caso de vuelco, reduciendo el riesgo de ser aplastado por el propio equipo.' },
    { letra: 'C', termino: 'Claxon',
      definicion: 'Bocina del montacargas, usada para avisar la presencia del equipo al cruzar esquinas o intersecciones, para pedir a un peatón que despeje una zona, o para negarse a una solicitud insegura como llevar a alguien de pasajero.' },
    { letra: 'G', termino: 'GTC 45',
      definicion: 'Guía Técnica Colombiana del ICONTEC para la identificación de peligros y la valoración de riesgos, usada también en la operación de montacargas.' },
    { letra: 'H', termino: 'Horquillas',
      definicion: 'Estructura metálica en la parte delantera del montacargas, diseñada para levantar y transportar la carga.' },
    { letra: 'I', termino: 'Inspección preoperacional',
      definicion: 'Revisión obligatoria del montacargas antes de cada turno, que confirma que el equipo está en condiciones seguras de uso.' },
    { letra: 'I', termino: 'Izaje',
      definicion: 'Operación de levantar, sostener o desplazar una carga mediante un equipo mecánico, como un montacargas.' },
    { letra: 'M', termino: 'Mástil',
      definicion: 'Estructura vertical del montacargas que permite elevar y bajar las horquillas junto con la carga.' },
    { letra: 'N', termino: 'NTC 4502',
      definicion: 'Norma Técnica Colombiana del ICONTEC que establece los requisitos de diseño, fabricación y mantenimiento de montacargas.' },
    { letra: 'N', termino: 'NTC 4503',
      definicion: 'Norma Técnica Colombiana del ICONTEC que establece los requisitos de operación segura de montacargas, incluida la capacitación del operador.' },
    { letra: 'O', termino: 'Operador certificado',
      definicion: 'Persona con la formación técnica y la certificación de competencia laboral específica para conducir un montacargas.' },
    { letra: 'O', termino: 'OSHA 29 CFR 1910.178',
      definicion: 'Norma técnica de origen internacional sobre montacargas, usada en Colombia como referencia complementaria ante la ausencia de una resolución única y detallada sobre el tema.' },
    { letra: 'P', termino: 'Placa de capacidad',
      definicion: 'Etiqueta fija en el montacargas que indica el peso máximo permitido, según la altura de elevación de la carga.' },
    { letra: 'R', termino: 'Responsable de mantenimiento',
      definicion: 'Rol a cargo de que el montacargas reciba las revisiones periódicas que exige el fabricante y la norma técnica correspondiente.' },
    { letra: 'S', termino: 'Supervisor de la operación',
      definicion: 'Rol que coordina el trabajo en el área de operación, confirma que el equipo haya superado la inspección preoperacional del turno, y puede suspender la actividad si detecta una condición insegura.' },
    { letra: 'T', termino: 'Triángulo de estabilidad',
      definicion: 'Figura imaginaria formada por las dos ruedas delanteras y el eje trasero de un montacargas, dentro de la cual debe mantenerse el centro de gravedad para que el equipo permanezca estable.' },
    { letra: 'V', termino: 'Vuelco',
      definicion: 'Pérdida de estabilidad del montacargas hacia el costado o hacia adelante, generalmente provocada por la combinación de carga elevada, giro cerrado y frenado brusco.' },
  ],

  referencias: [
    { texto: 'American National Standards Institute / Industrial Truck Standards Development Foundation (ANSI/ITSDF). B56.1-2020, Safety Standard for Low Lift and High Lift Trucks.' },
    { texto: 'American National Standards Institute / International Safety Equipment Association (ANSI/ISEA). 107-2020, American National Standard for High-Visibility Safety Apparel.' },
    { texto: 'American Society for Testing and Materials (ASTM). F2413-18, Standard Specification for Performance Requirements for Protective (Safety) Toe Cap Footwear.' },
    { texto: 'Congreso de la República de Colombia. Código Sustantivo del Trabajo, artículos 56-57 y 348-352.' },
    { texto: 'Congreso de la República de Colombia. (1979). Ley 9 de 1979, por la cual se dictan medidas sanitarias.' },
    { texto: 'Congreso de la República de Colombia. (2012). Ley 1562 de 2012, por la cual se modifica el sistema de riesgos laborales.' },
    { texto: 'Instituto Colombiano de Normas Técnicas y Certificación (ICONTEC). GTC 45, Guía para la identificación de los peligros y la valoración de los riesgos en seguridad y salud ocupacional.' },
    { texto: 'Instituto Colombiano de Normas Técnicas y Certificación (ICONTEC). NTC 4502, Montacargas, requisitos de diseño, fabricación y mantenimiento.' },
    { texto: 'Instituto Colombiano de Normas Técnicas y Certificación (ICONTEC). NTC 4503, Montacargas, requisitos de operación segura.' },
    { texto: 'Ministerio del Trabajo de Colombia. (1979). Resolución 2400 de 1979, por la cual se establecen algunas disposiciones sobre vivienda, higiene y seguridad en los establecimientos de trabajo (Título X, artículos 398-447).' },
    { texto: 'Ministerio del Trabajo de Colombia. (2015). Decreto 1072 de 2015, Decreto Único Reglamentario del Sector Trabajo.' },
    { texto: 'Ministerio del Trabajo de Colombia. (2019). Resolución 0312 de 2019, por la cual se definen los Estándares Mínimos del Sistema de Gestión de Seguridad y Salud en el Trabajo.' },
    { texto: 'National Institute for Occupational Safety and Health (NIOSH). (2001). Preventing Injuries and Deaths of Workers Who Operate or Work Near Forklifts. DHHS (NIOSH) Publication N.º 2001-109.' },
    { texto: 'Occupational Safety and Health Administration (OSHA). 29 CFR 1910.178, Powered Industrial Trucks.' },
    { texto: 'Servicio Nacional de Aprendizaje (SENA). Norma de Competencia Laboral 270101114, Operar montacargas de acuerdo con manual técnico.' },
  ],

  creditos: [],
};
