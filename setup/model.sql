DROP DATABASE IF EXISTS botanik_flowers;
CREATE DATABASE botanik_flowers;

CREATE EXTENSION pgcrypto;

DROP TABLE IF EXISTS admins;
CREATE TABLE admins(
    admin_id serial primary key,
    username varchar(32) not null,
    password varchar(60) not null
);

DROP TABLE IF EXISTS categories;
CREATE TABLE categories(
    category_id serial primary key,
    category_name varchar(60) not null,
    status varchar(16) default 'active',
    created_at timestamp default current_timestamp
);

DROP TABLE IF EXISTS products;
CREATE TABLE products(
    product_id serial primary key,
    product_name varchar(64) not null,
    price decimal(7, 2) not null,
    count int not null,
    description text not null,
    status varchar(16) default 'active',
    created_at timestamp default current_timestamp,
    category_id int references categories(category_id)
);

DROP TABLE IF EXISTS images;
CREATE TABLE images(
    img_id serial primary key,
    image text not null,
    product_id int references products(product_id)
);

DROP TABLE IF EXISTS news;
CREATE TABLE news(
    news_id serial primary key,
    title varchar(128) not null,
    description text not null,
    created_at timestamp default current_timestamp,
    status varchar(16) default 'active',
    news_image text not null
);

DROP TABLE IF EXISTS banners;
CREATE TABLE banners(
    banner_id serial not null,
    banner_image text not null,
    created_at timestamp default current_timestamp,
    status varchar(16) default 'active'
);
