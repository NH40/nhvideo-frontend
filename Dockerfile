FROM node:18-alpine

WORKDIR /app

# Add environment variables for build time
ARG SERVER_URL
ARG API_URL
ARG GOOGLE_RECAPTCHA_SITE_KEY

ENV SERVER_URL=$SERVER_URL
ENV API_URL=$API_URL
ENV GOOGLE_RECAPTCHA_SITE_KEY=$GOOGLE_RECAPTCHA_SITE_KEY

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
