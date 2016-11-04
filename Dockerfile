FROM ruby:2.3.1
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs libqt4-dev libqtwebkit-dev unzip wget \
    && git config --global url."https://github.com".insteadOf git://github.com
RUN mkdir -p $HOME/bin \
    && wget http://chromedriver.storage.googleapis.com/2.25/chromedriver_linux64.zip \
    && unzip chromedriver_linux64.zip \
    && wget https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-2.1.1-linux-x86_64.tar.bz2 \
    && tar -xf phantomjs-2.1.1-linux-x86_64.tar.bz2 \
    && mv phantomjs-2.1.1-linux-x86_64/bin/phantomjs $HOME/bin \
    && mv chromedriver $HOME/bin
ENV PATH="bin/chromedriver:${PATH}"
ENV PATH="bin/phantomjs:${PATH}"
CMD /bin/bash
RUN mkdir /myapp
WORKDIR /myapp
ADD Gemfile /myapp/Gemfile
ADD Gemfile.lock /myapp/Gemfile.lock
RUN bundle install
ADD . /myapp
