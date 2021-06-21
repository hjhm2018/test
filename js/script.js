let datosContainer = document.getElementById('datosContainer');
let especialidadesContainer = document.getElementById('especialidadesContainer');
let filtroNombre = document.getElementById('filtroNombre');
let filtroEspecialidad = document.getElementById('filtroEspecialidad');
let galeriaContainer = document.getElementById('galeriaContainer');
let listaCarousel = document.getElementById('listaCarousel');
let carouselContainer = document.getElementById('carouselContainer');
let tags = document.getElementById('tags');
let listaEspecialidades = document.getElementById('listaEspecialidades');
let correo = document.getElementById('correo');
let nombre = document.getElementById('nombre');
let mensaje = document.getElementById('mensaje');
let boton = document.getElementById('boton');

let datos = [
    {
        id: Math.floor(Math.random() * 2000),
        especialidad: "Medicina General",
        nombre: "Dra. Estefanía Zamora",
        horario: "Lunes a Viernes de 8am-1pm"
    },
    {
        id: Math.floor(Math.random() * 2000),
        especialidad: "Medicina General",
        nombre: "Dr. Angel Arriechi",
        horario: "Sábado de 8am-2pm"
    },
    {
        id: Math.floor(Math.random() * 2000),
        especialidad: "Medicina Interna",
        nombre: "Dra. Tatiana Benitez",
        horario: "Previa Cita"
    },
    {
        id: Math.floor(Math.random() * 2000),
        especialidad: "Pediatría",
        nombre: "Dra. Giormar Piermattei",
        horario: "Previa Cita"
    },
    {
        id: Math.floor(Math.random() * 2000),
        especialidad: "Psiquiatría",
        nombre: "Dra. Yoanka Rodríguez",
        horario: "Jueves de 9am-1pm"
    },
    {
        id: Math.floor(Math.random() * 2000),
        especialidad: "Neurología",
        nombre: "Dr. Victor Carvajal",
        horario: "Lunes y Martes de 9am-1pm"
    },
    {
        id: Math.floor(Math.random() * 2000),
        especialidad: "Ginecología y Obstetricia",
        nombre: "Dra. Violeta Suárez",
        horario: "Lunes y Jueves de 8am-12pm"
    },
    {
        id: Math.floor(Math.random() * 2000),
        especialidad: "Psicología",
        nombre: "Lic. Merviany Pulido",
        horario: "Martes Previa Cita"
    },
    {
        id: Math.floor(Math.random() * 2000),
        especialidad: "Dermatología",
        nombre: "Dra. Maria Cecilia",
        horario: "Miércoles Previa Cita"
    },
    {
        id: Math.floor(Math.random() * 2000),
        especialidad: "Gastroenterología",
        nombre: "Dr. Antonio Zapata",
        horario: "Previa Cita"
    },
    {
        id: Math.floor(Math.random() * 2000),
        especialidad: "Traumatología",
        nombre: "Dr. Lord Arias",
        horario: "Lunes Previa Cita"
    },
    {
        id: Math.floor(Math.random() * 2000),
        especialidad: "Cardiología",
        nombre: "Dr. Joaquín Crespo",
        horario: "Viernes de 8am-1pm"
    },
    {
        id: Math.floor(Math.random() * 2000),
        especialidad: "Nutrición",
        nombre: "Dra. Bárbara Soto",
        horario: "Miércoles Previa Cita"
    },
    {
        id: Math.floor(Math.random() * 2000),
        especialidad: "Nefrología",
        nombre: "Dr. Alexander Delgado",
        horario: "Miércoles Previa Cita"
    },
    {
        id: Math.floor(Math.random() * 2000),
        especialidad: "Estética",
        nombre: "Lic. Iris Herrera",
        horario: "Lunes a Sábado Previa Cita"
    },
    {
        id: Math.floor(Math.random() * 2000),
        especialidad: "Oftalmología",
        nombre: "Dr. José Zapata",
        horario: "Sábado Previa Cita"
    },
    {
        id: Math.floor(Math.random() * 2000),
        especialidad: "Mastología",
        nombre: "Dr. Edgar Guzmán",
        horario: "Jueves Previa Cita"
    },
    {
        id: Math.floor(Math.random() * 2000),
        especialidad: "Salud Ocupacional",
        nombre: "Dr. Alexis Acosta",
        horario: "Previa Cita"
    },
    {
        id: Math.floor(Math.random() * 2000),
        especialidad: "Cirugía",
        nombre: "Dra. Lorelkys Sanchez",
        horario: "Viernes Previa Cita"
    },
    {
        id: Math.floor(Math.random() * 2000),
        especialidad: "Odontología",
        nombre: "Od. Elibert González",
        horario: "Lunes a Sábado de 8am-1pm",
        servicios: "Odontología general e infantil, Rayos X y Ortopedia"
    },
    {
        id: Math.floor(Math.random() * 2000),
        especialidad: "Odontología",
        nombre: "Od. María Gabriela Ortega",
        horario: "Lunes de 8am-12pm",
        servicios: "Odontología generalm, Cirugía, y Endodoncia"
    },
    {
        id: Math.floor(Math.random() * 2000),
        especialidad: "Odontología",
        nombre: "Od. Nancy Espinosa",
        horario: "Martes de 8am-12pm",
        servicios: "Odontología general, y Ortodoncia"
    },
    {
        id: Math.floor(Math.random() * 2000),
        especialidad: "Odontología",
        nombre: "Od. Nadia Miró",
        horario: "Miércoles de 8am-12pm",
        servicios: "Odontología general, Peridoncia, Cirugía y Endodoncia"
    },
    {
        id: Math.floor(Math.random() * 2000),
        especialidad: "Odontología",
        nombre: "Od. Teresa Aguirre",
        horario: "Miércoles Previa Cita",
        servicios: "Odontología general, Cirugía, Ortodoncia, y Ortopedia"
    },
    {
        id: Math.floor(Math.random() * 2000),
        especialidad: "Odontología",
        nombre: "Od. Elvira Moreno",
        horario: "Jueves y Viernes de 8am-12pm",
        servicios: "Odontología general, Ortodoncia, y Ortopedia"
    },
    {
        id: Math.floor(Math.random() * 2000),
        especialidad: "Radiología",
        nombre: "Dr. Alberto Montilla",
        horario: "Lunes a Sábado de 8am-1pm"
    },
    {
        id: Math.floor(Math.random() * 2000),
        especialidad: "Ecografía",
        nombre: "Dra. Ivón Díaz",
        horario: "Lunes a Sábado de 8am-1pm",
        servicios: ""
    },
    {
        id: Math.floor(Math.random() * 2000),
        especialidad: "Ecografía",
        nombre: "Dr. Angel Arriechi",
        horario: "Lunes a Sábado de 8am-1pm",
        servicios: ""
    },
    {
        id: Math.floor(Math.random() * 2000),
        especialidad: "Laboratorio",
        nombre: "Lic. Airais Parra - Aux. Lab. Lenys Useche",
        horario: "Lunes a Sábado de 8am-1pm",
        servicios: ""
    }

]

let especialidades = [
    {
        id: Math.floor(Math.random() * 1000),
        especialidad: "Medicina General",
        servicios: "Tratamiento médico, Cirugía menor, Vitaminoterapia Endovenosa, Terapia Respiratoria",
        imagen: "../imagenes/medicina-general.jpg"
    },
    {
        id: Math.floor(Math.random() * 1000),
        especialidad: "Medicina Interna",
        servicios: "Atención del adulto mayor, Control de Diabetes Mellitus, Control de Hipertensión Arterial",
        imagen: "../imagenes/medicina-interna.jpg"
    },
    {
        id: Math.floor(Math.random() * 1000),
        especialidad: "Pediatría",
        servicios: "Control del niño sano y del adolescente, Control prenatal, Promoción de la lactancia materna",
        imagen: "../imagenes/pediatria.jpg"
    },
    {
        id: Math.floor(Math.random() * 1000),
        especialidad: "Psiquiatría",
        servicios: "Psiquiatría infanto-juvenil y de adultos, Psicoterapia individual y familiar",
        imagen: "../imagenes/psiquiatria.jpg"
    },
    {
        id: Math.floor(Math.random() * 1000),
        especialidad: "Neurología",
        servicios: "Diagnóstico y tratamiento de las enfermedades del cerebro y la médula espinal, Cefaleas, migrañas, epilepsia, enfermedades cerebrovasculares, enfermedad de Parkinson",
        imagen: "../imagenes/neurologia.jpg"
    },
    {
        id: Math.floor(Math.random() * 1000),
        especialidad: "Ginecología y Obstetricia",
        servicios: "Control ginecológico, Cirugía ginecológica, Control prenatal, Cesáreas, Planificación familiar",
        imagen: "../imagenes/ginecologia.jpg"
    },
    {
        id: Math.floor(Math.random() * 1000),
        especialidad: "Psicología",
        servicios: "Certificado de salud mental, Intervención específica en relaciones de pareja., Eventos traumáticos, Modificación de conductas, Depresión",
        imagen: "../imagenes/psicologia.jpg"
    },
    {
        id: Math.floor(Math.random() * 1000),
        especialidad: "Dermatología",
        servicios: "Revisión de Nevus (lunares), acné, dermatitis, piel atípica y psoriasis, eccema, verrugas, infecciones de la piel y mucosas",
        imagen: "../imagenes/dermatologia.jpg"
    },
    {
        id: Math.floor(Math.random() * 1000),
        especialidad: "Gastroenterología",
        servicios: "Enfermedades del trato digestivo: gastritis, colon irritable, hígado, vesícula y vías biliares, páncreas, prevención de cáncer de esófago, estómago y colon",
        imagen: "../imagenes/gastroenterologia.jpg"
    },
    {
        id: Math.floor(Math.random() * 1000),
        especialidad: "Traumatología",
        servicios: "Fracturas, Luxaciones,lesiones de hombro, codo, manos, caderas, tobillos y pies",
        imagen: "../imagenes/traumatologia.jpg"
    },
    {
        id: Math.floor(Math.random() * 1000),
        especialidad: "Cardiología",
        servicios: "Control de patologías cardiovasculares, hipertensión en el embarazo, pacientes con marcapasos, arritmias cardíacas, realización de electrocardiograma informado, colocación de mapa y Holter ",
        imagen: "../imagenes/cardiologia.jpg"

    },
    {
        id: Math.floor(Math.random() * 1000),
        especialidad: "Nutrición",
        servicios: "Educación nutricional infantil, Trastornos alimenticios, Tratamiento de obesidad, Planes alimenticios",
        imagen: "../imagenes/nutricion.jpg"

    },
    {
        id: Math.floor(Math.random() * 1000),
        especialidad: "Nefrología",
        servicios: "Patologías del riñón, infección del tracto urinario, prevención y manejo de la enfermedad renal crónica",
        imagen: "../imagenes/nefrologia.jpg"

    },
    {
        id: Math.floor(Math.random() * 1000),
        especialidad: "Estética",
        servicios: "Masoterapia: masajes anti-estres, descontracturantes, reductores, vacunterapia",
        imagen: "../imagenes/estetica.jpg"

    },
    {
        id: Math.floor(Math.random() * 1000),
        especialidad: "Oftalmología",
        servicios: "Agudeza visual, fondo de ojo,tonometría ",
        imagen: "../imagenes/oftalmologia.jpg"

    },
    {
        id: Math.floor(Math.random() * 1000),
        especialidad: "Mastología",
        servicios: "Estudio integral de la mama,prevención y tratamiento del cáncer de mama",
        imagen: "../imagenes/mastologia.jpg"
    },
    {
        id: Math.floor(Math.random() * 1000),
        especialidad: "Salud Ocupacional",
        servicios: "Valoración física, mental y social del trabajador, elaboración de sistema de riesgos en empresas",
        imagen: "../imagenes/salud-ocupacional.jpg"
    },
    {
        id: Math.floor(Math.random() * 1000),
        especialidad: "Cirugía",
        servicios: "Diagnóstico y cuidado pre-operatorio, operatorio y post-operatorio, cirugía de vesícula biliar, cirugía de hernias",
        imagen: "../imagenes/cirugia.jpg"
    },
    {
        id: Math.floor(Math.random() * 1000),
        especialidad: "Odontología",
        servicios: "Odontología general e infantil, Rayos X, Ortopedia, Cirugía, y Endodoncia, Ortodoncia, Peridoncia",
        imagen: "../imagenes/odontologia.jpg"
    },
    {
        id: Math.floor(Math.random() * 1000),
        especialidad: "Radiología",
        servicios: "Rayos X de Craneo, Tórax, Abdominal, Extremidades, Panorámicas ",
        imagen: "../imagenes/radiologia.jpg"
    },
    {
        id: Math.floor(Math.random() * 1000),
        especialidad: "Ecografía",
        servicios: "Ecografía abdominal , Pélvico, Obstétrico, Genético I y II, Partes blandas, Prostático, Tiroideo, Ecosonograma doppler arterial y venoso de miembros inferiores.",
        imagen: "../imagenes/ecografia.jpg"
    },
    {
        id: Math.floor(Math.random() * 1000),
        especialidad: "Laboratorio",
        servicios: "Laboratorios de rutina, Perfil 20, Pruebas especiales, Cultivos y antibiogramas ",
        imagen: "../imagenes/laboratorio.jpg"
    }
]

// Especialistas page
// Lista del select
const cargarListaEspecialidades = () => {

    if (listaEspecialidades) {
        especialidades.sort(function (a, b) {
            return a.especialidad.localeCompare(b.especialidad);
        }).forEach(especialidad => {
            listaEspecialidades.innerHTML +=
                `
				<option value="${especialidad.especialidad}">${especialidad.especialidad}</option>
			`
        })
    }
}

cargarListaEspecialidades();

// Cargar especialistas por nombre
const cargarEspecialistas = (nombre = '') => {

    if (datosContainer) {
        datosContainer.innerHTML = '';

        if (nombre === '') {
            datos.sort(function (a, b) {
                return a.especialidad.localeCompare(b.especialidad);
            }).forEach(dato => {
                datosContainer.innerHTML += `
		<div class="card m-2" style="width: 18rem;">
			<div class="card-body">
				<h5 class="card-title">${dato.nombre}</h5>
				<h6 class="card-subtitle mb-2 text-muted">${dato.especialidad}</h6>
				<p class="card-text"><span class="font-weight-bold">Horario:</span> ${dato.horario}</p>
			</div>
		</div>
		`
            });
        } else {
            if (datos.filter(dato => dato.nombre.split(" ").join("").replace(".", "").toLowerCase().includes(nombre)).length < 1) {
                return datosContainer.innerHTML = `<p class="text-center m-3 font-weight-bold">No hay resultados</p>`;
            } else {
                datos.filter(dato => dato.nombre.split(" ").join("").toLowerCase().replace(".", "").includes(nombre)).sort(function (a, b) {
                    return a.especialidad.localeCompare(b.especialidad);
                }).forEach(dato => {
                    datosContainer.innerHTML += `
		<div class="card m-2" style="width: 18rem;">
			<div class="card-body">
				<h5 class="card-title">${dato.nombre}</h5>
				<h6 class="card-subtitle mb-2 text-muted">${dato.especialidad}</h6>
				<p class="card-text"><span class="font-weight-bold">Horario:</span> ${dato.horario}</p>
			</div>
		</div>
		`
                });
            }
        }
    }
}

// Filtrar médicos por especialidad

const filtrarPorEspecialidad = (filtro = '') => {

    if (datosContainer) {
        datosContainer.innerHTML = '';

        if (filtro === '') {
            cargarEspecialistas();
        } else {
            datos.filter(dato => dato.especialidad === filtro).sort(function (a, b) {
                return a.especialidad.localeCompare(b.especialidad);
            }).forEach(dato => {
                datosContainer.innerHTML += `
		<div class="card m-2" style="width: 18rem;">
			<div class="card-body">
				<h5 class="card-title">${dato.nombre}</h5>
				<h6 class="card-subtitle mb-2 text-muted">${dato.especialidad}</h6>
				<p class="card-text"><span class="font-weight-bold">Horario:</span> ${dato.horario}</p>
			</div>
		</div>
		`
            });
        }
    }
}

// Filtra con la lista de especialidads

if (listaEspecialidades) {
    listaEspecialidades.onchange = (e) => {
        filtrarPorEspecialidad(e.target.value);
    }
}

// Filtro de especialistas por nombre en cuadro de texto

if (filtroNombre) {
    filtroNombre.onkeyup = (e) => {
        cargarEspecialistas(e.target.value.trim().split(" ").join("").toLowerCase());
    }
}

cargarEspecialistas();


// Especialidades page
// Cargar las especialidades

const cargarEspecialidades = (palabra = '') => {

    if (especialidadesContainer) {

        especialidadesContainer.innerHTML = '';

        if (palabra === '') {
            especialidades.sort(function (a, b) {
                let especialidadA = a.especialidad.toUpperCase();
                let especialidadB = b.especialidad.toUpperCase();
                if (especialidadA < especialidadB) {
                    return -1;
                }
                if (especialidadA > especialidadB) {
                    return 1;
                }
                return 0;
            }).forEach(especialidad => {

                especialidadesContainer.innerHTML +=
                    `
			<div class="card m-2" style="width: 18rem;">
				<img src="${especialidad.imagen}" height="200" width="100" class="card-img-top" alt="${especialidad.especialidad}">
				<div class="card-body">
				<h5 class="card-title">${especialidad.especialidad}</h5>
				<!-- Button trigger modal -->
				<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal-${especialidad.id}">
					Mas info
				</button>

    <!-- Modal -->
    <div class="modal fade" id="modal-${especialidad.id}" tabindex="-1" aria-labelledby="modalLabel-${especialidad.id}"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title ml-auto" id="modalLabel-${especialidad.id}">${especialidad.especialidad}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    ${especialidad.servicios}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    </div>
	    </div>
	</div>
			`
            })
        } else {
            if (especialidades.filter(especialidad => especialidad.especialidad.split(" ").join("").toLowerCase().includes(palabra)).length < 1) {
                return especialidadesContainer.innerHTML = `<p class="text-center m-3 font-weight-bold">No hay resultados</p>`;
            } else {
                especialidades.filter(especialidad => especialidad.especialidad.split(" ").join("").toLowerCase().includes(palabra)).sort(function (a, b) {
                    let especialidadA = a.especialidad.toUpperCase();
                    let especialidadB = b.especialidad.toUpperCase();
                    if (especialidadA < especialidadB) {
                        return -1;
                    }
                    if (especialidadA > especialidadB) {
                        return 1;
                    }
                    return 0;
                }).forEach(especialidad => {
                    especialidadesContainer.innerHTML +=
                        `
			<div class="card m-2" style="width: 18rem;">
				<img src="${especialidad.imagen}" height="200" width="100" class="card-img-top" alt="${especialidad.especialidad}">
				<div class="card-body">
				<h5 class="card-title">${especialidad.especialidad}</h5>
				<!-- Button trigger modal -->
				<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal-${especialidad.id}">
					Mas info
				</button>

    <!-- Modal -->
    <div class="modal fade" id="modal-${especialidad.id}" tabindex="-1" aria-labelledby="modalLabel-${especialidad.id}"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalLabel-${especialidad.id}">${especialidad.especialidad}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    ${especialidad.servicios}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    </div>
	    </div>
	</div>
			`
                })
            }
        }
    }
}

// Tags de especialidades

const cargarTags = () => {

    if (tags) {
        especialidades.sort(function (a, b) {
            let especialidadA = a.especialidad.toUpperCase();
            let especialidadB = b.especialidad.toUpperCase();
            if (especialidadA < especialidadB) {
                return -1;
            }
            if (especialidadA > especialidadB) {
                return 1;
            }
            return 0;
        }).forEach((especialidad, index) => {
            if (index % 2 === 0) {
                tags.innerHTML += `
				<button style="border-radius: 70px 0px 0px 70px;" class="btn btn-secondary btn-sm m-1" onclick="cargarEspecialidades('${especialidad.especialidad.toLowerCase().slice(0, 3)}')">#${especialidad.especialidad.toLowerCase()}</button>
			`
            } else {
                tags.innerHTML += `
				<button style="border-radius: 70px 0px 0px 70px;" class="btn btn-info btn-sm m-1" onclick="cargarEspecialidades('${especialidad.especialidad.toLowerCase().slice(0, 3)}')">#${especialidad.especialidad.toLowerCase()}</button>
			`
            }
        })
    }
}

cargarTags();

// Filtro de especialidad por nombre en cuadro de texto

if (filtroEspecialidad) {
    filtroEspecialidad.onkeyup = (e) => {
        cargarEspecialidades(e.target.value.trim().split(" ").join("").toLowerCase());
    }
}
cargarEspecialidades();


// Home Page
// Carousel Gallery

const cargarCarousel = () => {

    if (listaCarousel && carouselContainer) {
        especialidades.forEach((especialidad, index) => {
            if (index === 0) {
                listaCarousel.innerHTML += `
				<li data-target="#carouselExampleCaptions" data-slide-to="${index}" class="active"></li>
			`

                carouselContainer.innerHTML += `
			<div class="carousel-item active">
                <img src="${especialidad.imagen}" class="d-block w-100" height="500" alt="foto-${especialidad.especialidad}">
                <div class="carousel-caption d-none d-md-block text-dark p-2 rounded" style="background-color: rgba(255, 255, 255, 0.5);">
                    <h5>${especialidad.especialidad}</h5>
                    <p>${especialidad.servicios}</p>
                </div>
            </div>
			`


            } else {
                listaCarousel.innerHTML += `
				<li data-target="#carouselExampleCaptions" data-slide-to="${index}"></li>
			`

                carouselContainer.innerHTML += `
			<div class="carousel-item">
                <img src="${especialidad.imagen}" class="d-block w-100" height="500" alt="foto-${especialidad.especialidad}">
                <div class="carousel-caption d-none d-md-block text-dark p-2 rounded" style="background-color: rgba(255, 255, 255, 0.5);">
                    <h5>${especialidad.especialidad}</h5>
                    <p>${especialidad.servicios}</p>
                </div>
            </div>
			`
            }
        })
    }
}

cargarCarousel();

// Formulario

const activateButton = () => {

    if (nombre.value.trim() !== '' && correo.value.trim() !== '' && mensaje.value.trim() !== '') {
        boton.removeAttribute("disabled");
    } else {
        boton.setAttribute("disabled", "true");
    }
}

nombre.onkeyup = activateButton;
correo.onkeyup = activateButton;
mensaje.onkeyup = activateButton;