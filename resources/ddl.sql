CREATE TYPE taxes AS ENUM ('4', '10', '21');

create table users (
    user_id int GENERATED ALWAYS AS IDENTITY,
    name character varying (50) not null,
    surname character varying (50) not null,
    primary key (user_id)
);
create table products(
    product_id int GENERATED ALWAYS AS IDENTITY,
    name character varying (50),
    description text,
    price float,
    net_price float,
    tax taxes,
    user_id int,
    primary key (product_id),
    constraint fk_user
        foreign key (user_id)
            references users (user_id)
);