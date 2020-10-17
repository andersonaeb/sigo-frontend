
# SIGO Frontend

Aplicação Web, para uma prova de conceito, do curso de Arquitetura de Software Distribuído da PUC de Minas.

A aplicação foi desenvolvida baseadaa no CoreUI, com React e Bootstrap.

Os módulos do sistema funcionam através de microserviços, e os mesmos se encontram no seguinte repositório:
https://github.com/andersonaeb/sigo-backend

A aplicação utiliza a bilioteca do AWS Amplify, para prover os recursos de autenticação / autorização.

### Para desenvolvimento

``` bash
# dev server with hot reload at http://localhost:3000
$ npm start
```

Acessar a URL [http://localhost:3000](http://localhost:3000). A aplicação irá recarregar automaticamente, quando uma mudança for realizada em algum arquivo.

### Build

Rodar o `build` gerar os arquivos estáticos, que devem ser publicados.

```bash
# build for production with minification
$ npm run build