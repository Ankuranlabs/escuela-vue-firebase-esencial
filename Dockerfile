FROM httpd

RUN rm /bin/sh && ln -s /bin/bash /bin/sh

RUN apt-get update \
    && apt-get install -y curl git \
    && apt-get -y autoclean

RUN curl -sL https://deb.nodesource.com/setup_16.x | bash

RUN apt-get install -y \
    nodejs libc-client-dev libkrb5-dev

RUN npm install -g @vue/cli --verbose

#npm update -g @vue/cli

RUN apt-get clean && rm -rf /var/lib/apt/lists/*

ARG uid=1000
