FROM node:18-alpine AS builder

ARG SHOPIFY_API_KEY
ARG SHOPIFY_API_SECRET
ARG SCOPES
ENV HOST='https://testshopify-marcoslebron.koyeb.app'
ENV SHOPIFY_API_KEY=$SHOPIFY_API_KEY
ENV SHOPIFY_API_SECRET=${SHOPIFY_API_SECRET}
ENV SCOPES=${SCOPES}
ENV BACKEND_PORT=8081

EXPOSE 8081
WORKDIR /app
COPY web .
RUN npm install
RUN cd frontend && npm install && npm run build
CMD ["npm", "run", "serve"]
