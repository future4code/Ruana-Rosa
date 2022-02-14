### Exercício 1
a) CREATE TABLE cria uma tabela;
   VARCHAR cria uma varriável do tipo string, e o número entre parênteses limita o número de caracteres. 
b) SHOW DATABASES retorna o nome do meu banco de dados e information_schema
   SHOW TABLES ewtorna todas as tabelas do meu banco
c) DESCRIBE Actor explica a estrutura da tabela Actor   



### Exercício 2
a) 
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"002",
"Glória Pires",
1200000,
"1963-08-23",
"female"
);
```
### Exercício 3
a)
```
SELECT id, name, salary, birth_date from Actor WHERE gender = "female";
```
b)
```
SELECT salary from Actor WHERE name = "Tony Ramos";
```
c)
```
select id, name, salary, birth_date from Actor WHERE gender = "invalid";
```
d)
```
select id, name, salary from Actor WHERE salary < 500000;
```
e)
```
SELECT id, name from Actor WHERE id = "002";
```

### Exercício 4
a) Select * selecioma todos os campos da tabela. WHERE delimita a busca. LIKE "A significa que os nomes devem iniciar com A, e  %" significa que pode ter qualquer coisa depois do A. Os parênteses marcam a prioridade na busca, o AND significa que além desses critérios, devem ser seguidos os seguintes. salary > 300000 busca por salários maiores quem 300000.
b) 
```
SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000;
```  