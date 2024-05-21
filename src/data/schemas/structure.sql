create database dyh;
use dyh;

-- USERS

create table users (
  id INT NOT NULL AUTO_INCREMENT,
  name varchar(100) NOT NULL,
  lastname varchar(100) NOT NULL,
  password varchar(40) NOT NULL,
  email varchar(300) NOT NULL,
  img_url varchar(300) not null,
  role_id int not null,
  primary key (id),
  foreign key (role_id) references roles(id)
);

alter table users modify column password text not null;
alter table users add column username varchar(15) not null;

create table roles (
	id INT NOT NULL AUTO_INCREMENT,
    name varchar(50) not null,
    primary key (id)
);

select * from uses;


-- PRODUCTS

create table products (
	id int not null auto_increment,
    name varchar(50) not null,
    materials varchar(150) not null,
	care varchar(150) not null,
	description varchar(500) not null,
	price float not null,
	discount int not null,
    final_price float not null,
    product_id int not null,
    visibility tinyint not null,
    new_release tinyint not null,
    on_sale tinyint not null,
    primary key (id)
);

alter table products add sales_amount float not null;
alter table products add units_sold int not null;
alter table products add category_id int not null;
alter table products add image_url varchar(200) not null;

alter table products modify column sales_amount float not null default 0;
alter table products modify column units_sold float not null default 0;

select * from product_color;


create table colors (
	id int not null auto_increment,
    name varchar(50) not null,
    primary key (id)
);

create table product_color (
	id int not null auto_increment,
    product_id int not null,
    color_id int not null,
    primary key (id),
    foreign key (product_id) references products(id),
    foreign key (color_id) references colors(id)
);

create table categories (
	id int not null auto_increment,
    name varchar(50) not null,
    size_guide_url varchar(150) not null,
    primary key (id)
);

alter table categories modify column size_guide_url varchar(150);

create table sizes (
	id int not null auto_increment,
    name varchar(10) not null,
    primary key (id)
);

create table product_size (
	id int not null auto_increment,
    product_id int not null,
    size_id int not null,
    primary key (id),
    foreign key (product_id) references products(id),
    foreign key (size_id) references sizes(id)
);
