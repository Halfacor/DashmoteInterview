FROM node:22-alpine3.19
RUN addgroup app && adduser -S -G app app
USER app
WORKDIR /app
COPY --chown=app:node package*.json .
RUN npm install
COPY --chown=app:node . .
EXPOSE 5173
CMD ["npm", "run", "dev"]