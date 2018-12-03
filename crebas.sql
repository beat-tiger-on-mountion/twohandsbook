/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     2018/12/3 14:57:34                           */
/*==============================================================*/


drop table if exists tbl_activity;

drop table if exists tbl_backtous;

drop table if exists tbl_check;

drop table if exists tbl_classes;

drop table if exists tbl_comments;

drop table if exists tbl_homework;

drop table if exists tbl_news;

drop table if exists tbl_notice;

drop table if exists tbl_onduty;

drop table if exists tbl_schools;

drop table if exists tbl_schooltime;

drop table if exists tbl_students;

drop table if exists tbl_time;

drop table if exists tbl_user;

/*==============================================================*/
/* Table: tbl_activity                                          */
/*==============================================================*/
create table tbl_activity
(
   id                   int not null auto_increment,
   aTime                varchar(50),
   aBody                text,
   classId              int,
   primary key (id)
);

/*==============================================================*/
/* Table: tbl_backtous                                          */
/*==============================================================*/
create table tbl_backtous
(
   id                   int not null,
   userId               int,
   bBody                text,
   bTime                varchar(50),
   primary key (id)
);

/*==============================================================*/
/* Table: tbl_check                                             */
/*==============================================================*/
create table tbl_check
(
   id                   int not null auto_increment,
   cTime                varchar(50),
   absence              text,
   delay                text,
   classId              int,
   primary key (id)
);

/*==============================================================*/
/* Table: tbl_classes                                           */
/*==============================================================*/
create table tbl_classes
(
   classId              int not null auto_increment,
   grade                int,
   classInt             int,
   schoolId             int,
   primary key (classId)
);

/*==============================================================*/
/* Table: tbl_comments                                          */
/*==============================================================*/
create table tbl_comments
(
   id                   int not null auto_increment,
   cBody                text,
   thumbs               int,
   comments             text,
   userId               int,
   classId              int,
   anonymity            bool,
   primary key (id)
);

/*==============================================================*/
/* Table: tbl_homework                                          */
/*==============================================================*/
create table tbl_homework
(
   id                   int not null auto_increment,
   hTime                varchar(50),
   hBody                text,
   classId              int,
   primary key (id)
);

/*==============================================================*/
/* Table: tbl_news                                              */
/*==============================================================*/
create table tbl_news
(
   id                   int not null auto_increment,
   nTitle               varchar(50),
   nTime                varchar(50),
   nImage               varchar(50),
   nBody                text,
   primary key (id)
);

/*==============================================================*/
/* Table: tbl_notice                                            */
/*==============================================================*/
create table tbl_notice
(
   id                   int not null auto_increment,
   nTime                varchar(50),
   nBody                text,
   userId               int,
   classId              int,
   primary key (id)
);

/*==============================================================*/
/* Table: tbl_onduty                                            */
/*==============================================================*/
create table tbl_onduty
(
   id                   int not null auto_increment,
   monday               text,
   tuesday              text,
   wednesday            text,
   thursday             text,
   friday               text,
   classId              int,
   primary key (id)
);

/*==============================================================*/
/* Table: tbl_schools                                           */
/*==============================================================*/
create table tbl_schools
(
   schoolId             int not null auto_increment,
   schoolName           varchar(50),
   province             varchar(50),
   city                 varchar(50),
   county               varchar(50),
   primary key (schoolId)
);

/*==============================================================*/
/* Table: tbl_schooltime                                        */
/*==============================================================*/
create table tbl_schooltime
(
   id                   int not null auto_increment,
   classId              int,
   userId               int,
   go                   varchar(50),
   back                 varchar(50),
   remark               text,
   sTime                varchar(50),
   primary key (id)
);

/*==============================================================*/
/* Table: tbl_students                                          */
/*==============================================================*/
create table tbl_students
(
   id                   int not null auto_increment,
   name                 varchar(10),
   classId              int,
   primary key (id)
);

/*==============================================================*/
/* Table: tbl_time                                              */
/*==============================================================*/
create table tbl_time
(
   id                   int not null auto_increment,
   upgo                 varchar(50),
   downgo               varchar(50),
   upback               varchar(50),
   downback             varchar(50),
   classId              int,
   primary key (id)
);

/*==============================================================*/
/* Table: tbl_user                                              */
/*==============================================================*/
create table tbl_user
(
   id                   int not null auto_increment,
   name                 varchar(10),
   phoneNum             char(11),
   images               varchar(50),
   classId              int,
   status               int,
   studentId            int,
   schoolId             int,
   wxName               varchar(50),
   primary key (id)
);

