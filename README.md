# Desafio Lupit Fullstack

Este é um projeto monolito fullstack que utiliza Next.js para o frontend e Node.js com Prisma para o backend. O projeto inclui uma aplicação CRUD de gerenciamento de jogadores.

## Requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/) (v18 ou superior)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Estrutura do Projeto

- `frontend/` - Código-fonte do frontend utilizando Next.js.
- `backend/` - Código-fonte do backend utilizando Node.js e Prisma.
- `docker-compose.yml` - Arquivo de configuração para Docker e Docker Compose.

## Configuração

### Clonar o Repositório

Clone o repositório do GitHub:

```bash
git clone https://github.com/seu-usuario/desafio-lupit-fullstack.git
cd desafio-lupit-fullstack
```

### Iniciar o Projeto

Execute os seguintes comandos para inicializar o projeto:

```bash
npm start
```

O frontend e backend serão iniciados automaticamente.

### Acessar o Frontend

Abra o navegador e acesse a URL `http://localhost:3000` para acessar o frontend.

### Acessar o Backend

Utilize um cliente HTTP como Postman ou cURL para acessar o backend na URL `http://localhost:3001`.

## Utilização

Para utilizar o projeto, siga os seguintes passos:

### Criar um Jogador

Na rota "/", você pode visualizar uma tabela com uma lista de jogadores.

Para adicionar um novo jogador, clique no botão "Adicionar jogador".

Você será redirecionado para a rota "/jogador/novo".

Preencha os campos do formulário e clique no botão "Salvar".

O jogador será adicionado ao banco de dados.

Em caso de sucesso, você será redirecionado para a rota "/".

### Editar um Jogador

Para editar um jogador, clique no ícone de lápis na coluna "Ações" da tabela.

Preencha os campos do formulário e clique no botão "Salvar".

O jogador será atualizado no banco de dados.

Você pode visualizar a lista de jogadores novamente na rota "/".

### Excluir um Jogador

Para excluir um jogador, clique no ícone de lixeira na coluna "Ações" da tabela.
Confirme a ação na janela de diálogo.

O jogador será excluído do banco de dados.

Você pode visualizar a lista de jogadores novamente na rota "/".

## Agradecimentos

Agradeço a [Lupit](https://lupit.io/) e a todos os membros da equipe pelo convite para participar do desafio.
