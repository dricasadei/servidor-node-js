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