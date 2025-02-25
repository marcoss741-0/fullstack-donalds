# Fullstack Donald's

## Descrição

Fullstack Donald's é uma aplicação web completa para gerenciamento de pedidos de uma lanchonete. Permite que os clientes façam pedidos online e que a equipe da lanchonete gerencie esses pedidos de forma eficiente.

## Funcionalidades

- **Cardápio Online:** Exibição do cardápio com fotos e descrições dos produtos.
- **Pedidos Online:** Possibilidade de os clientes fazerem pedidos diretamente pelo site.
- **Gerenciamento de Pedidos:** Interface para a equipe da lanchonete visualizar e gerenciar os pedidos (aceitar, preparar, entregar).
- **Autenticação:** Sistema de autenticação para proteger o acesso às funcionalidades de gerenciamento.
- **Banco de Dados:** Utilização de um banco de dados para armazenar informações sobre os produtos, pedidos e usuários.

## Tecnologias Utilizadas

- **Frontend:**
  - Next.js
  - React
  - Tailwind CSS
  - Shadcn/ui
- **Backend:**
  - Node.js
  - Prisma
- **Banco de Dados:**
  - PostgreSQL (configurado via Prisma)

## Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn
- PostgreSQL

## Instalação

1.  Clone o repositório:

    ```bash
    git clone <URL do repositório>
    cd fullstack-donalds
    ```

2.  Instale as dependências:

    ```bash
    npm install
    # ou
    yarn install
    ```

3.  Configure as variáveis de ambiente:

    - Crie um arquivo [.env](http://_vscodecontentref_/0) na raiz do projeto.
    - Adicione as seguintes variáveis:

      ```
      DATABASE_URL="<sua_url_do_postgres>"
      NEXT_PUBLIC_BASE_URL="http://localhost:3000"
      ```

      - Substitua `<sua_url_do_postgres>` pela URL de conexão do seu banco de dados PostgreSQL.
      - Ajuste `NEXT_PUBLIC_BASE_URL` conforme necessário (útil para deploy).

4.  Execute as migrações do Prisma:

    ```bash
    npx prisma migrate dev
    ```

5.  Opcional: Seed do banco de dados

    ```bash
    npx prisma db seed
    ```

6.  Inicie a aplicação:

    ```bash
    npm run dev
    # ou
    yarn dev
    ```

    Acesse a aplicação em `http://localhost:3000`.

## Scripts

- `dev`: Inicia o servidor de desenvolvimento.
- `build`: Compila a aplicação para produção.
- `start`: Inicia a aplicação em modo de produção.
- `lint`: Executa o linter para verificar o código.
- `format`: Formata o código automaticamente.
- [prisma](http://_vscodecontentref_/1): Acessa os comandos do Prisma CLI.

## Próximos Passos

- Implementar sistema de pagamento online.
- Adicionar funcionalidades de avaliação dos produtos.
- Melhorar a interface de gerenciamento de pedidos.
- Implementar testes automatizados.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e enviar pull requests.

## Licença

MIT
