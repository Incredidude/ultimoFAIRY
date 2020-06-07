CREATE DATABASE database_fairy;

USE database_fairy;

CREATE TABLE cliente(
    customerId INT (9) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR (30) NOT NULL,
    apellidos VARCHAR (50) NOT NULL,
    usuario VARCHAR (30) NOT NULL,
    correoElectronico VARCHAR (100) NOT NULL,
    contraseña VARCHAR (25) NOT NULL,
    alergias VARCHAR(100)
);

CREATE TABLE direccion(
    cId INT (9) NOT NULL,
    addressId INT (9) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    numeroTelefonico VARCHAR (25) NOT NULL,
    numeroCasa INT (5) NOT NULL,
    codigoPostal INT (12) NOT NULL,
    calle VARCHAR(80) NOT NULL,
    ciudad VARCHAR(80) NOT NULL,
    estado VARCHAR(80) NOT NULL,
    pais VARCHAR(80) NOT NULL,
    CONSTRAINT fk_cliente FOREIGN KEY (cId) REFERENCES cliente(customerId)
);

ALTER TABLE cliente ADD UNIQUE INDEX (usuario, correoElectronico);

DELIMITER //
CREATE PROCEDURE registro(nombre_r VARCHAR (30), apellidos_r VARCHAR (50), usuario_r VARCHAR (30), correoElectronico_r VARCHAR (100), contraseña_r VARCHAR (25),
    cId INT (9), numeroTelefonico_r VARCHAR (25), numeroCasa_r INT (5), codigoPostal_r INT (12), calle_r VARCHAR(80), ciudad_r VARCHAR(80), estado_r VARCHAR(80), pais_r VARCHAR(80))
      BEGIN
      DECLARE fk_id INT;
         INSERT IGNORE INTO cliente (nombre, apellidos, usuario, correoElectronico, contraseña) VALUES(nombre_r, apellidos_r, usuario_r, correoElectronico_r, contraseña_r);
         SELECT customerId INTO fk_id FROM cliente where usuario = usuario_r && correoElectronico = correoElectronico_r;
         INSERT IGNORE INTO direccion (cId, numeroTelefonico, numeroCasa, codigoPostal, calle, ciudad, estado, pais) VALUES(fk_id, numeroTelefonico_r, numeroCasa_r, codigoPostal_r, calle_r, ciudad_r, estado_r, pais_r);
      END
//