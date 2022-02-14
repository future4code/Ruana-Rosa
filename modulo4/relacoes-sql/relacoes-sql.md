### Exercício 01
a) É uma chave de identificação que faz referência a um item de outra tabela, por isso é uma "chave estrangeira".
b)
```
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"001",
    "Filme divertido, Gloria Pires em excelente atuação.",
    8,
		"001"
);
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"002",
    "Um clássico do cinema nacional.",
    8,
	"003"
);
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"003",
    "Inteligente e instigante.",
    8,
	"002"
);
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"004",
    "Outro clássico do cinema nacional.",
    8,
	"004"
);
```
c)"Duplicate entry '005' for key 'PRIMARY'". Acredito que ele esteja me dizendo que esse não é o local certo pra atribuir uma nova chave primária.
d)
```
ALTER TABLE Movie DROP COLUMN rating;
```

### Exercício 02
a) Esta tabela relaciona as ids dos filmes às ids dos atores
b)
```
insert into MovieCast values
('001', '001'), ('001', '002');
insert into MovieCast values
('003', '005');
insert into MovieCast values
('004', '006');
insert into MovieCast values
('004', '007');
insert into MovieCast values
('002', '004');
```
c) "insert into MovieCast values
 ('002', '008')	Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`carver-ruana-piber-da-rosa`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))"
 Como eu tentei relacionar um filme a uma id de ator inexistente, deu erro.