FROM heroku/heroku:22-build.v78

WORKDIR /app
ENV WORKSPACE_DIR=/app/support/build
ENV PATH=/app/support/build/_util:$PATH
ENV S3_BUCKET=lang-php
ENV S3_PREFIX=dist-heroku-22-develop/
ENV S3_REGION=s3.us-east-1
ENV STACK=heroku-22
ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install -y python3-pip

COPY requirements.txt /app/requirements.txt

RUN pip3 install -r /app/requirements.txt

COPY . /app
