# Objetivo do Projeto

Desenvolver uma API utilizando nodejs que servisse como um mural de mulheres na área de tecnologia, então a API aceita as requisições para Adicionar, Deletar, Modificar os registros. 
O desenvolvimento do frontend não foi feito durante o projeto, sendo disponilizado no GitHub da PrograMaria e salvo em meus projetos como [frontend_programaria](https://github.com/dricasadei/frontend_programaria/tree/master).

## Ferramentas utilizadas

- Para o banco de dados foi utilizado o [MongoDB Cloud](https://cloud.mongodb.com/).
- Para o deploy do backend foi utilizado o [Render](https://render.com/)
- Para o deploy do frontend foi utilizado o [Vercel](https://vercel.com/)
- Para testes do backend foi utilizado o [Insomnia](https://insomnia.rest/download)

## Passo a Passo instalações iniciais

- Instalar NPN
- Conferir versão node: node -v
- iniciar a construção do pacote
    - npm init -y
        - é para ser criado um arquivo package.json 
- incluir pacotes/bibliotecas/libd do npm
- instalar o pacote express para auxiliar a ver o que está sendo construido já que não tem desenvolvido o frontend
    - npm install express
        - é para ser criado um arquivo package-lock.json --> mapeia tudo o que está em node_modules
        - cria a pasta node_modules
        - no arquivo package.json é adicionado o express em dependencies

- criando o servidor: serve para servir/disponibilizar as informações solicitados do lado do cliente
    - cria um arquivo na raiz da pasta: server.js

- rodando o código server.js
    - node server.js
- conferir se o servidor está rodando, no terminal:
    - localhost:3333
