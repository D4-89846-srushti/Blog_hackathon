create table user(
user_id int PRIMARY KEY AUTO_INCREMENT ,
full_name varchar(50),
email varchar(30),
password varchar(20),
phone_no varchar(10),
created_time Date);





create table blogs( 
blogID int PRIMARY KEY AUTO_INCREMENT,
title varchar(20),
contents varchar(30),
created_time Date,
user_id int,
category_id int,
FOREIGN KEY (user_id) REFERENCES user(user_id),
FOREIGN KEY (category_id) REFERENCES categories(category_id));



create table categories(
category_id int primary key auto_increment,
title varchar(30),
description varchar(30));


