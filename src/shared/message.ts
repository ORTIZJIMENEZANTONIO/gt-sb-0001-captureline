export class Message {
  static MAX_LENGTH = (field, len) =>
    `La longitud de ${field} debe ser menor o igual a ${len} caracteres`;

  static MIN_LENGTH = (field, len) =>
    `La longitud de ${field} debe ser mayor a ${len} caracteres`;

  static LENGTH = (field, len) =>
    `La longitud de ${field} debe ser entre ${len.split(' ')[0]} y ${len.split(' ')[1]
    } caracteres`;

  static MIN = (field, val) =>
    `El valor mínimo permitido para ${field} es ${val}`;

  static MAX = (field, val) =>
    `El valor máximo permitido para ${field} es ${val}`;

  static POSITIVE = (field) => `${field} debe ser un número positivo`;

  static STRING = (field) => `${field} debe ser una cadena`;

  static NUMBER = (field) => `${field} debe ser un número`;

  static REQUIRED = (field) => `${field} es un campo requerido`;

  static ISDATE = (field) =>
    `El valor para ${field} debe ser una instancia de fecha.`;

  static ISINT = (field) =>
    `El valor ${field} debe ser una del tipo entero.`;

  static ISOPTIONAL = (field) =>
    `El valor ${field} puede ser opcional.`;
    
  static MAXLENGTH = (field, val) =>
  `La longitud máximo permitido para ${field} es ${val}`;
}
