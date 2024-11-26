-- Crear la base de datos biblioteca
CREATE DATABASE IF NOT EXISTS biblioteca;

-- Usar la base de datos biblioteca
USE biblioteca;

-- Crear la tabla autores
CREATE TABLE IF NOT EXISTS autores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    apellido VARCHAR(255) NOT NULL,
    nacionalidad VARCHAR(255) NOT NULL,
    biografia TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Crear la tabla principales
CREATE TABLE IF NOT EXISTS principales (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    genero VARCHAR(255) NOT NULL,
    duracion INT NOT NULL,
    director INT NOT NULL,  -- Aquí referenciamos a la tabla autores
    status ENUM('active', 'inactive') NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (director) REFERENCES autores(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Insertar datos en la tabla autores
INSERT INTO autores (nombre, apellido, nacionalidad, biografia) VALUES
('Todd', 'Phillips', 'Estadounidense', 'Todd Phillips es un director y guionista estadounidense, conocido por dirigir películas como \'Joker\' y la trilogía de \'The Hangover\'.'),
('Joaquim', 'Dos Santos', 'Brasileño', 'Joaquim Dos Santos es un director de animación brasileño, conocido por su trabajo en \'Spider-Man: Cruzando el Multiverso\' y series animadas como \'Avatar: The Last Airbender\'.'),
('Joseph', 'Kosinski', 'Estadounidense', 'Joseph Kosinski es un director de cine estadounidense, conocido por dirigir \'Top Gun: Maverick\' y \'Tron: Legacy\'.'),
('Baz', 'Luhrmann', 'Australiano', 'Baz Luhrmann es un director, escritor y productor australiano, conocido por películas como \'Elvis\' y \'Moulin Rouge!\'.'),
('Shawn', 'Levy', 'Canadiense', 'Shawn Levy es un director y productor canadiense, conocido por películas como \'Deadpool 3\' y \'Free Guy\'.'),
('Ridley', 'Scott', 'Británico', 'Ridley Scott es un director y productor británico, conocido por películas como \'Gladiator\' y \'Blade Runner\'.'),
('Matt', 'Reeves', 'Estadounidense', 'Matt Reeves es un director, productor y guionista estadounidense, conocido por dirigir \'The Batman\' y \'Cloverfield\'.'),
('Kenji', 'Kamiyama', 'Japonés', 'Kenji Kamiyama es un director de animación japonés, conocido por dirigir \'El Señor de los Anillos: La Guerra de los Rohirrim\' y \'Ghost in the Shell: Stand Alone Complex\'.'),
('John M.', 'Chu', 'Estadounidense', 'John M. Chu es un director y productor estadounidense, conocido por películas como \'Wicked: Parte 1\' y \'Crazy Rich Asians\'.'),
('Chris', 'Sanders', 'Estadounidense', 'Chris Sanders es un director y guionista estadounidense, conocido por su trabajo en películas de animación como \'Lilo & Stitch\' y \'Cómo entrenar a tu dragón\'.'),
('Tomas', 'Sanchez', 'Desconocida', 'Tomas Sanchez es un director conocido por su trabajo en la película \'Chocolate para tres\'.');

-- Insertar datos en la tabla principales
INSERT INTO principales (nombre, genero, duracion, director, status) VALUES
('Joker', 'Drama', 122, 1, 'inactive'),
('Spider-Man: Cruzando el Multiverso', 'Animacion', 127, 2, 'inactive'),
('Top Gun: Maverick', 'Drama', 131, 3, 'inactive'),
('Elvis', 'Biografia', 159, 4, 'inactive'),
('Deadpool 3', 'Comedia', 125, 5, 'active'),
('Gladiator 2', 'Accion', 123, 6, 'inactive'),
('The Batman', 'Drama', 176, 7, 'inactive'),
('El Señor de los Anillos: La Guerra de los Rohirrim', 'Animacion', 120, 8, 'inactive'),
('Wicked', 'Musical', 160, 9, 'active'),
('Robot Salvaje', 'Animacion', 102, 10, 'active'),
('Chocolate para tres', 'Drama', 85, 11, 'active'),
('The Hangover', 'Comedia', 100, 1, 'inactive'),
('Crazy Rich Asians', 'Comedia, Romance', 120, 9, 'active'),
('Tron: Legacy', 'Aventura', 125, 3, 'active');