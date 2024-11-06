FROM node:22 AS build

WORKDIR /app

COPY client/package*.json ./

RUN npm install

COPY client/ .

RUN npm run build

FROM node:22

WORKDIR /app

RUN npm install -g serve

COPY --from=build /app/dist /app/dist

EXPOSE 5174

CMD ["serve", "-s", "dist", "-l", "5174"]
