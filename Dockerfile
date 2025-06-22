FROM python:3.13-slim

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        build-essential \
        libffi-dev \
        libssl-dev \
        python3-dev \
        python3-pip && \
    rm -rf /var/lib/apt/lists/*
