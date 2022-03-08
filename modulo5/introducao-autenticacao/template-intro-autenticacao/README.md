### Exercício 1

a) Acredito que o uso de strings torne mais viável a criação de IDs únicas, já que permite o uso de caracteres diversos, não apenas números.
b) Arquivo criarId.ts

### Exercício 2
a) A primeira linha está se referindo à tabela "user" como userTableName. Em seguida, a variável connection usa o kex para se conectar ao banco de dados. Após, a função createUser, que é assíncrona, adiciona os dados de um novo usuário à tabela declarada na primeira linha.
b)
```
CREATE TABLE User (
		id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
```
c) Arquivo criarUsuario.ts

### Exercício 3
a) O "as string" está ali para que o JWT_KEY seja interpretado como uma string.
b) Arquivo gerarToken.ts