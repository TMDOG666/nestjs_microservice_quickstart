# Dockerfile for service_2

# 使用官方的 Node.js 版本作为基础镜像
FROM node

# 创建工作目录
WORKDIR /usr/src/app

# 复制 package.json 和 package-lock.json 文件
COPY package*.json ./

# 安装依赖
RUN npm install --production

# 复制项目的所有文件到工作目录
COPY . .

# 编译 TypeScript
RUN npm run build

# 暴露服务端口（替换为实际的服务端口）
EXPOSE 3000

# 运行服务
CMD ["npm", "run", "start:prod"]
