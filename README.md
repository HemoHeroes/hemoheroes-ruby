# HEMOHEROES

[![CircleCI](https://circleci.com/gh/aceleradora-TW/HemoHeroes.svg?style=svg)](https://circleci.com/gh/aceleradora-TW/HemoHeroes) <a href="https://codeclimate.com/github/aceleradora-TW/HemoHeroes"><img src="https://codeclimate.com/github/aceleradora-TW/HemoHeroes/badges/gpa.svg" /></a> [![Coverage Status](https://coveralls.io/repos/github/aceleradora-TW/HemoHeroes/badge.svg?branch=master)](https://coveralls.io/github/aceleradora-TW/HemoHeroes?branch=master)

HemoHeroes é uma aplicação para conectar Bancos de Sangue aos doadores em potencial.

## Ambientes
Staging: http://hemoheroestw-staging.herokuapp.com

Produção: http://hemoheroestw.herokuapp.com/

## Histórias
https://github.com/aceleradora-TW/HemoHeroes/issues

## Rodar a aplicação

Para rodar a aplicação localmente você precisa executar os seguintes passos:

1. `$ git clone https://github.com/aceleradora-TW/HemoHeroes.git`
2. `$ cd HemoHeroes`
3. `$ sudo chmod +rwx bin/docker.sh` Se o arquivo docker.sh não for executável.
4. `$ sudo ./bin/docker.sh` para instalar o docker e docker-compose se ainda não os tiver.
5. Deslogar e logar
6. `$ sudo service docker start`
7. `$ docker-compose build web`
8. `$ docker-compose up web`

Agora acesse: localhost:3000

#### Dicas
1. Para executar comando com Docker, execute assim: `$ docker-compose run web COMANDO QUE QUER EXECUTAR`.
Exemplo: `$ docker-compose run web rake db:migrate`

2. Para executar o terminal dentro do Docker, execute: `$ docker-compose run web bash`.
