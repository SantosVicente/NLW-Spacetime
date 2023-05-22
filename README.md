# NLW-Spacetime

- O projeto tem como base criar uma cápsula do tempo para cadastrar memórias e poder revisitá-las quando bem entender

## Tecnologias Utilizadas

- Front-end (Mobile):
  - React Native
  - Expo: v~48.0.15
  - Expo Google Fonts:
    - @expo-google-fonts/bai-jamjuree: v^0.2.3
    - @expo-google-fonts/roboto: v^0.2.3
  - Expo packages:
    - expo-auth-session: v~4.0.3
    - expo-constants: v~14.2.1
    - expo-crypto: v~12.2.1
    - expo-font: v~11.1.1
    - expo-image-picker: v~14.1.1
    - expo-linking: v~4.0.1
    - expo-router: v^1.5.3
    - expo-secure-store: v~12.1.1
    - expo-status-bar: v~1.4.4
  - Axios: v1.4.0
  - Day.js: v1.11.7
  - NativeWind: v^2.0.11
  - TypeScript: v4.9.4

- Front-end (Web):
  - HTML, CSS e JavaScript
  - React: v18.2.0
  - Next.js: v13.4.2
  - TypeScript: v5.0.4
  - Axios: v1.4.0
  - Day.js: v1.11.7
  - Js-cookie: v3.0.5
  - Jwt-decode: v3.1.2
  - Lucide-react: v0.216.0
  - Tailwind CSS: v3.3.2
  - ESLint: v8.40.0
  - Outras libs: 
    - @types/node: v20.1.4
    - @types/react: v18.2.6
    - @types/react-dom: v18.2.4
    - @types/js-cookie: v3.0.3

- Back-end:
  - Node.js
  - Fastify: v4.17.0
    - @fastify/cors: v8.2.1
    - @fastify/jwt: v6.7.1
    - @fastify/multipart: v7.6.0
    - @fastify/static: v6.10.1
  - Prisma
  - Axios: v1.4.0
  - Zod: v3.21.4
  - TypeScript: v5.0.4
  
- Banco de Dados:
  - SQLite

## Funcionalidades Principais

- Cadastro de memórias
- Exibição de memórias
- Login com OAUTH no GitHub
- Versão mobile
- Acesso as páginas de cadastro de memórias somente quando estiver logado
- Preview de imagens no cadastro de memórias

## Instalação

1. Clone o repositório: `git clone https://github.com/SantosVicente/NLW-Spacetime.git`
2. Acesse o diretório do projeto: `cd NLW Spacetime`
    

### Front-end (Web)

1. Acesse o diretório do front-end web: `cd web`
2. Instale as dependências: `npm install`
3. Atualize as variáveis de ambiente: 
  - crie um arquivo .env.local na raiz e adicione NEXT_PUBLIC_GITHUB_CLIENT_ID com o id do oauth (o mesmo de GITHUB_CLIENT_ID) para que o middleware e o SignIn funcionem
  - Também altere o arquivo next.config.js, altere o segundo domain para o seu próprio endereço ip (voce pode conferir ele com ipconfig se estiver no windows)
4. Execute a aplicação: `npm run dev`

### Front-end (Mobile)

1. Acesse o diretório do front-end mobile: `cd mobile`
2. Instale as dependências: `npm install`
3. Configure as variáveis de ambiente:
  - Acesse mobile/app/index.tsx e altere clientId: para a chave do seu OAUTH do GitHub feita para o mobile
4. Execute a aplicação: `npm run start`

### Back-end

1. Acesse o diretório do back-end: `cd server`
2. Instale as dependências: `npm install`
3. Configure as variáveis de ambiente:
  - Crie um arquivo .env na raiz e adicione DATABASE_URL="file:./dev.db"
  - Crie no mesmo arquivo as variáveis GITHUB_CLIENT_ID e GITHUB_CLIENT_SECRET (é necessário criar uma de cada para o mobile e para o web com dois OAUTH's diferentes) e adicione seus valores com o OAUTH do GitHub que você irá criar
4. Execute o servidor: `npm run dev e npx prisma studio`

## Contribuição

Contribuições são bem-vindas! Se você deseja contribuir para este projeto, siga as etapas abaixo:

1. Faça um fork do projeto
2. Crie uma branch para sua feature: `git checkout -b minha-feature`
3. Faça o commit das suas alterações: `git commit -m 'Adicionando nova funcionalidade'`
4. Envie a branch para o repositório remoto: `git push origin minha-feature`
5. Abra um pull request no GitHub

## Opções pendentes

1. Edição da memória: fazer a página da opção PUT
2. Gerar um link para compartilhar memórias públicas
3. Selecionar data da memória: dar a opção do usuário colocar a data da memória, e não pegar a data do dia da postagem (pode usar o expo date picker)
4. Layout responsivo
5. Colocar o mobile, web e o server no ar

## Licença

Este projeto foi feito pela [Rocketseat](https://www.rocketseat.com.br/) e foi seguido como estudo por mim durante o evento NLW Spacetime