<p align="center">
  <img src="https://github.com/gabriel-nt/GoBarber-Mobile/blob/master/assets/images/logo.svg" alt="GoBarber" />
</p>

<h1 align="center">
    🚀 GoBarber
</h1>
<p align="center">Mobile da Aplicação GoBarber</p>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=react&message=16.13.1&color=61DAFB&logo=react" />
  <img src="https://img.shields.io/static/v1?label=typescript&message=4.0.2&color=blue&logo=typescript" />
  <img src="https://img.shields.io/static/v1?label=react%20native&message=0.63.2&color=21bde8&logo=react" />
  <!--<img src="https://img.shields.io/badge/repo%20size-2.00%20MB-informational" />-->
  <img src="https://img.shields.io/badge/last%20commit-october-orange" />
  <img src="https://img.shields.io/badge/license-MIT-success"/>
</p>

<p align="center">
  <a href="#-features">Features</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-pré-requisitos">Pré-Requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-rodando-frontend">Frontend</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Lincença</a>
</p>

<h3 align="center"> 
🚧  Finalizado  🚧
</h3>

### 🖥 Demonstração
<img src="https://github.com/gabriel-nt/GoBarber-Mobile/blob/master/assets/images/preview.gif" width="350"/>

### 📎 Features

- [x] Login e Logout
- [x] Cadastro de Usuário
- [x] Listagem do Usuário
- [x] Reset de Senha
- [x] Atualização de Perfil do Usuário
- [x] Listagem de Prestadores de Serviço
- [x] Realizar agendamento

### ⚙ Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e/ou [Yarn](https://https://yarnpkg.com/) 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/), 
ter instalado e configurado o Android Studio ou XCode

### 🛠 Configurar Backend
Para que a aplicação funcione, precisa antes ser configurado o backend da aplicação. Caso não tenha configurado, acesse esse [repositório](https://github.com/gabriel-nt/GoBarber-Backend) e execute o passo a passo da descrição do projeto

### 🎲 Rodando Mobile

```bash
# Clone este repositório
$ git clone https://github.com/gabriel-nt/GoBarber-Mobile

# Mudar a porta do Android Studio (Windows/Linux)
# adb reverse tcp:3333 tcp:3333

# Instale as dependências
$ yarn

# Executar aplicação Android
$ yarn android

# Executar aplicação IOS
$ yarn ios

# Execute os testes
$ yarn test
```

### 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- ReactJS
- React Native
- Typescript

### 📕 Bibliotecas

Esse projeto foi utilizou das seguintes lib:

- Axios
- Jest
- styled-components
- react-native-image-picker
- yup
- date-fns
- unform
- async-storage

### 📙 Arquitetura do Projeto

Para uma melhorar estrutura de projetos utilizamos das seguintes fundamentos:

- TDD
- Hooks

###  📘 Padrão de Código

Para padronizar a escrita do código, utilizamos as seguinte ferramentas:

- Eslint
- Prettier
- EditorConfig

### 📝 Licença

Esse projeto está sob a licença MIT.

<hr/>

Feito por Gabriel Teixeira

