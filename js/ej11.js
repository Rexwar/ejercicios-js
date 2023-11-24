console.log("ejercicio 11 -");

// Objeto Persona
function Persona(nombre, edad, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
}

// Método en el prototipo de Persona
Persona.prototype.obtDetalles = function() {
    console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Género: ${this.genero}`);
};

// Objeto Estudiante que hereda de Persona
function Estudiante(nombre, edad, genero, curso, grupo) {
    // Llamar al constructor de Persona
    Persona.call(this, nombre, edad, genero);

    // Propiedades específicas de Estudiante
    this.curso = curso;
    this.grupo = grupo;
}

// Herencia: Estudiante hereda de Persona
Estudiante.prototype = Object.create(Persona.prototype);
Estudiante.prototype.constructor = Estudiante;

// Método específico de Estudiante
Estudiante.prototype.registrar = function() {
    console.log(`${this.nombre} ha sido registrado en el curso ${this.curso}, grupo ${this.grupo}`);
};

// Objeto Profesor que hereda de Persona
function Profesor(nombre, edad, genero, asignatura, nivel) {
    // Llamar al constructor de Persona
    Persona.call(this, nombre, edad, genero);

    // Propiedades específicas de Profesor
    this.asignatura = asignatura;
    this.nivel = nivel;
}

// Herencia: Profesor hereda de Persona
Profesor.prototype = Object.create(Persona.prototype);
Profesor.prototype.constructor = Profesor;

// Método específico de Profesor
Profesor.prototype.asignar = function() {
    console.log(`${this.nombre} ha sido asignado para enseñar ${this.asignatura} en el nivel ${this.nivel}`);
};

// Crear objetos y casos de prueba
var persona1 = new Persona("Ana", 30, "Femenino");
persona1.obtDetalles();

var estudiante1 = new Estudiante("Juan", 20, "Masculino", "JavaScript", "A");
estudiante1.obtDetalles();
estudiante1.registrar();

var profesor1 = new Profesor("Carlos", 40, "Masculino", "Matemáticas", "Secundaria");
profesor1.obtDetalles();
profesor1.asignar();
