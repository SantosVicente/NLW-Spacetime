-- Back-end --

  -- TYPESCRIPT E TSX --

  npm init -y = starta o projeto JS criando o package.json
  npm i typescript -D = inicia o typescript
  npm i @types/node -D = instala a biblioteca types do node
  npx tsc -- init
  npm tsc --init = cria o tsconfig.json
  npm i tsx --D = instala o leitor de typescript para o node conseguir ler ele 
  mudar o target do tsconfig.json de "target": "es2016" para "es2020"

  npx tsx src/server.ts = roda o codigo typescript

  Em src/server.ts esta contido o código typescript

  em package.json, mude o comando em scripts -> tests para dev, mude-o para o do tsx q voce usa par rodar o typescript

  rode-o com npm run dev

  -- Fastify Framework --

  npm i fastify

  -- ESlint -- 
  npm install eslint -D 

  npm eslint --init = configura o estilo da formatação

  npm i @rocketseat/eslint-config -D = instala o da rocketseat

  -D = dependencia, uma dependencia de desenvolvimentoq  vai ser ignorada pelo front 

  criar o "lint" em "scripts": {
      "dev": "tsx src/server.ts",
      "lint": "eslint src --ext .ts --fix"
    },

  ao executar npm run lint eleirá formatar todos os arquivos typescript

  -- Prisma + SQLite --

  SQLite = um banco sql que não precisa ser baixado, é rodado em documento do projeto
  o Prisma suporta tambem postgree, mysql, mongo, stc

  o Prisma cria uma linguagem propria pra podermos fazer as requisições ao banco de forma otimizada

  npm i prisma -D 
  npx prisma -h = lista os comandos disponiveis

  npx prisma init --datasource-provider SQLite = cria a pasta prisma e tambem o arquivo .env que diz onde o banco de dados vai ficar salvo

  o .env são as variaveis de ambiente que mudam de maquina para maquina

  npm i @prisma/client

-- Front-end --

  -- React + Next.js --

  npx create-next-app@latest [Nome do projeto] --use-npm = cria o projeto Next.js