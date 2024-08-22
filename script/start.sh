#!/bin/bash

# 构建并启动所有服务
docker-compose up --build -d

# 显示所有运行中的容器
docker ps
