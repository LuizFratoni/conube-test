
# conube-test

Desenvolvido na IDE Eclipse como Maven Project (Basta Importar o Projeto no Eclipse como Projeto Maven e indicar diretório Raiz)
- Classe principal de Inicializacão: conube.test.Launcher 

Bibliotecas e Frameworks utilizados:
 - Maven para controle de dependências (Embutido na IDE Eclipse)
 - ObjectDB  (Banco de Dados Embutido)
 - JPA para ORM
 - Spring Boot como auxiliar da Plataforma Restfull e Servidor Embutido HTTP
 

* Ao Executar Aplicação, abrir Browser( preferencia Chrome ou Safari) no endereço http://localhost:8080

Serviços Rest disponíveis

GET /invoices  - Lista Invoices adicionadas

POST /invoice   - adiciona nova invoice ( Campos : description e amount necessários)

GET /invoice/{id}   - Retorna dados da Invoice

GET /invoice/{id}/taxes - Retorna valores de Impostos calculados da INVOICE já cadastrada

POST /invoice/taxesCalc  - Ferramenta para cálculo de imposto através de valores. (Campo: amount necessário)

GET /company   - Pega informações da Empresa juntamente com a política das taxas de Impostos

PUT /company   - Altera informações da Empresa e da política das taxas de Impostos



* UI desenvolvido em HTML5 e Javascript
