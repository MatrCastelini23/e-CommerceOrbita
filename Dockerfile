# --- Estágio de Desenvolvimento & Build ---
FROM node:24-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Alvo para Desenvolvimento (Roda o Vite em modo watch)
FROM base AS dev
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]

# Alvo para construir os arquivos de Produção
FROM base AS build-prod
RUN npm run build

# --- Estágio de Produção ---
FROM nginx:alpine AS prod
# Copia o build gerado no estágio anterior para a pasta pública do Nginx
COPY --from=build-prod /app/dist /usr/share/nginx/html
# Opcional: Se usar React Router, copie uma configuração customizada do Nginx
# COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
