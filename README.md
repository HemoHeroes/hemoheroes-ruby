# HEMOHEROES

[![CircleCI](https://circleci.com/gh/aceleradora-TW/HemoHeroes.svg?style=svg)](https://circleci.com/gh/aceleradora-TW/HemoHeroes) <a href="https://codeclimate.com/github/aceleradora-TW/HemoHeroes"><img src="https://codeclimate.com/github/aceleradora-TW/HemoHeroes/badges/gpa.svg" /></a>

HemoHeroes é uma aplicação para conectar Bancos de Sangue aos doadores em potencial.

## Getting Started

Para rodar a aplicação você precisa executar os seguintes passos:

1. `$ git clone https://github.com/aceleradora-TW/HemoHeroes.git`
2. `$ cd HemoHeroes`
3. `$ sudo chmod -rwx bin/docker.sh`
4. `$ ./bin/docker.sh`
5. Deslogar e logar
6. `$ sudo service docker start`
7. `$ docker-compose build web`
8. `$ docker-compose up web`

Agora acesse: localhost:3000

#### Dicas
1. Para executar comando com Docker, execute assim: `$ docker-compose run web COMANDO QUE QUER EXECUTAR`.
Exemplo: `$ docker-compose run web rake db:migrate`

2. Para executar o terminal dentro do Docker, execute: `$ docker-compose run web bash`.
