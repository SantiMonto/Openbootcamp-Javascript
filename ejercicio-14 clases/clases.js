class estudiante {
    constructor(nombre, asignaturas){
        this.nombre = nombre;
        this.asignaturas = asignaturas;
    }

    obtenDatos(){
        console.log(`Hola me llamo ${this.nombre} y estoy viendo las materias ${this.asignaturas}`);
    };
};

const instanciaEstudiante = new estudiante("Santiago",["Javascript"," HTML"," CSS"]);
instanciaEstudiante.obtenDatos();