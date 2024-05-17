use dyh;

-- colors
insert into colors values (default, 'rojo');
insert into colors values (default, 'azul');
insert into colors values (default, 'verde');
insert into colors values (default, 'amarillo');
insert into colors values (default, 'naranja');
insert into colors values (default, 'rosa');
insert into colors values (default, 'negro');
insert into colors values (default, 'blanco');
insert into colors values (default, 'gris');
insert into colors values (default, 'turquesa');
insert into colors values (default, 'marrón');
insert into colors values (default, 'celeste');
insert into colors values (default, 'violeta');
insert into colors values (default, 'salmon');
insert into colors values (default, 'beige');
insert into colors values (default, 'plateado');
insert into colors values (default, 'dorado');
insert into colors values (default, 'lila');



-- categories
insert into categories values (default, 'remeras', '/images/size_guides/remeras.png');
insert into categories values (default, 'pantalones', '/images/size_guides/pantalones.png');
insert into categories values (default, 'vestidos', '/images/size_guides/vestidos.png');
insert into categories values (default, 'camperas', '/images/size_guides/camperas.png');
insert into categories values (default, 'zapatillas', '/images/size_guides/zapatillas.png');
insert into categories values (default, 'carteras', null);
insert into categories values (default, 'gorras', null);
insert into categories values (default, 'bufandas', null);
insert into categories values (default, 'guantes', null);
insert into categories values (default, 'medias', '/images/size_guides/medias.png');
insert into categories values (default, 'buzos', '/images/size_guides/buzos.png');
insert into categories values (default, 'polleras', '/images/size_guides/polleras.png');
insert into categories values (default, 'lentes de sol', null);
insert into categories values (default, 'trajes de baño', '/images/size_guides/trajes_de_baño.png');



-- roles
insert into roles values (default, 'admin');
insert into roles values (default, 'costumer');



-- users
insert into users values(default, 'mariana', 'ramirez', '$2a$12$SXFjQVHKdfZLARmU2XFpl.L/tk5QVj6hkJ2Zh5tWfZhOi8.ZKTFga', 'marianaramirez@gmail.com', '/images/users/img-mariana.png', 2, 'username');
insert into users values(default, 'laura', 'gonzález', '$2a$12$SXFjQVHKdfZLARmU2XFpl.L/tk5QVj6hkJ2Zh5tWfZhOi8.ZKTFga', 'lauragonzalez@gmail.com', '/images/users/img-laura.png', 2, 'lauragonzalez');
insert into users values(default, 'ana', 'martínez', '$2a$12$SXFjQVHKdfZLARmU2XFpl.L/tk5QVj6hkJ2Zh5tWfZhOi8.ZKTFga', 'anamartinez@gmail.com', '/images/users/img-ana.png', 2, 'anamartinez');
insert into users values(default, 'sofía', 'hernández', '$2a$12$SXFjQVHKdfZLARmU2XFpl.L/tk5QVj6hkJ2Zh5tWfZhOi8.ZKTFga', 'sofiahernandez@gmail.com', '/images/users/img-sofia.png', 2, 'sofiahernandez');
insert into users values(default, 'lucía', 'lópez', '$2a$12$SXFjQVHKdfZLARmU2XFpl.L/tk5QVj6hkJ2Zh5tWfZhOi8.ZKTFga', 'lucialopez@gmail.com', '/images/users/img-lucia.png', 1, 'lucialopez');
insert into users values(default, 'isabella', 'díaz', '$2a$12$SXFjQVHKdfZLARmU2XFpl.L/tk5QVj6hkJ2Zh5tWfZhOi8.ZKTFga', 'isabelladiaz@gmail.com', '/images/users/img-isabella.png', 1, 'isabelladiaz');
insert into users values(default, 'valentina', 'pérez', '$2a$12$SXFjQVHKdfZLARmU2XFpl.L/tk5QVj6hkJ2Zh5tWfZhOi8.ZKTFga', 'valentinaperez@gmail.com', '/images/users/img-valentina.png', 2, 'valentinaperez');
insert into users values(default, 'mía', 'gómez', '$2a$12$SXFjQVHKdfZLARmU2XFpl.L/tk5QVj6hkJ2Zh5tWfZhOi8.ZKTFga', 'miagomez@gmail.com', '/images/users/img-mia.png', 2, 'miagomez');
insert into users values(default, 'emma', 'álvarez', '$2a$12$SXFjQVHKdfZLARmU2XFpl.L/tk5QVj6hkJ2Zh5tWfZhOi8.ZKTFga', 'emmaalvarez@gmail.com', '/images/users/img-emma.png', 2, 'emmaalvarez');



-- sizes 
insert into sizes values (default, 'xxxs');
insert into sizes values (default, 'xxs');
insert into sizes values (default, 'xs');
insert into sizes values (default, 's');
insert into sizes values (default, 'm');
insert into sizes values (default, 'l');
insert into sizes values (default, 'xl');
insert into sizes values (default, 'xxl');
insert into sizes values (default, 'xxxl');



-- products
insert into products values (default, 'blusa con volados', 'Algodon.', 'Lavar en lavarropas.', 'Blusa con volados en los hombros.', 10000, 50, 5000, 12344, 1, 1, 0, 12, 60000, 1);
insert into products values (default, 'jean mom', 'Algodon.', 'Lavar en lavarropas.', 'Jean estilo Mom.', 10000, 50, 5000, 12345, 1, 0, 1, 12, 60000, 2);



-- product_size
insert into product_size values (default, 3, 4);
insert into product_size values (default, 3, 5);
insert into product_size values (default, 3, 6);
insert into product_size values (default, 3, 7);

insert into product_size values (default, 4, 3);
insert into product_size values (default, 4, 4);
insert into product_size values (default, 4, 5);
insert into product_size values (default, 4, 6);
insert into product_size values (default, 4, 7);



-- product_color
insert into product_color values (default, 3, 1);
insert into product_color values (default, 3, 18);
insert into product_color values (default, 3, 12);
insert into product_color values (default, 3, 15);

insert into product_color values (default, 4, 2);



-- images
insert into images values (default, '/images/products/img-blusa-con-volados.jpg');
insert into images values (default, '/images/products/img-jean-mom.jpg');



-- product_image
insert into product_image values (default, 3, 2);

insert into product_image values (default, 4, 1);