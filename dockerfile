FROM node:lts-bullseye-slim
WORKDIR /app/remix/resume-site

COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build
ENV NODE_ENV=production
CMD ["npm", "run", "start"]
EXPOSE 5173