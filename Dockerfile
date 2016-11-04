FROM ruby:2.3.1
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs libqt4-dev libqtwebkit-dev unzip wget \
    && git config --global url."https://github.com".insteadOf git://github.com

RUN mkdir -p $HOME/bin \
    && wget http://chromedriver.storage.googleapis.com/2.25/chromedriver_linux64.zip \
    && unzip chromedriver_linux64.zip
RUN wget https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-2.1.1-linux-x86_64.tar.bz2 \
    && tar -xf phantomjs-2.1.1-linux-x86_64.tar.bz2
RUN mv phantomjs-2.1.1-linux-x86_64/bin/phantomjs /usr/local/bin/
RUN mv chromedriver /usr/local/bin/
ENV PATH="/usr/local/bin/phantomjs:${PATH}"
ENV PATH="/usr/local/bin/chromedriver:${PATH}"
CMD /bin/bash

RUN mkdir /myapp
WORKDIR /myapp
ADD Gemfile /myapp/Gemfile
ADD Gemfile.lock /myapp/Gemfile.lock
RUN bundle install
ADD . /myapp
