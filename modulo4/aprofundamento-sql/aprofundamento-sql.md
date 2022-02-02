### Exercício 01
a) Remove a coluna salary;
b) Substitui a coluna gender por sex;
c) Aumenta o limite de caracteres na coluna gender;
d)
```
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

### Exercício 02
a) 
```
SET 
	name = "Lazaro Ramos",
	birth_date = "1978-02-10"
WHERE id = "003";
```
b)
```
UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";
UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PAES";
```

### Exercício 03
a)
```
DELETE FROM Actor WHERE name = "Fernanda Montenegro"
```
b)
```
DELETE FROM Actor
WHERE
	gender = "male" AND
	salary > 1000000
```

### Exercío 04
a)
```
SELECT MAX(salary) FROM Actor;
```
b)
```
SELECT MIN(salary) FROM Actor WHERE gender = "female";
```
c)
```
SELECT COUNT(*) FROM Actor WHERE gender = "female"
```
d)
```
SELECT SUM(salary) FROM Actor
```

### Exercício 05
a) Dá a quantidade de atores e de atrizes
b)
```
SELECT id, name FROM Actor
ORDER BY name DESC;
```
c)
```
SELECT * FROM Actor
ORDER BY salary;
```
d)
```
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
```
e)
```
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;
```

### Exercício 06
a)
```
ALTER TABLE Movie ADD playing_limit_date DATE;
```
b)
```
ALTER TABLE Movie CHANGE rating rating FLOAT;
```
