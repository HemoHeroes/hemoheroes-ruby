HEMOHEROES

HemoHeroes is an application where hospitals and blood banks get access to registered blood donators, so they can request for donations according to their needs. It is also a platform where users can get to know where to donate blood and verify the requirements for it.


The following markups are supported for Unix OS. The dependencies listed are required if you wish to run the application:

  --> Rails 5.0.0.1
  --> Ruby 2.3.1


Here are the steps for having HemoHeroes running on your local machine:

  --> $ git clone https://github.com/aceleradora-TW/HemoHeroes.git
  --> $ cd HemoHeroes
  --> $ sudo chmod -rwx bin/docker.sh
  --> $ ./bin/docker.sh
  --> deslogar e logar
  --> $ sudo service docker start
  --> $ docker-compose build web
  --> $ docker-compose up web
