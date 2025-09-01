# Multi-stage Dockerfile for Next.js (production)

FROM mirror.gcr.io/library/node:20-slim AS deps
WORKDIR /app
COPY package*.json ./
# Install all deps (incl. dev) for building
RUN npm ci

FROM mirror.gcr.io/library/node:20-slim AS builder
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Install only production dependencies
FROM mirror.gcr.io/library/node:20-slim AS prod-deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev

FROM mirror.gcr.io/library/node:20-slim AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Copy production node_modules
COPY --from=prod-deps /app/node_modules ./node_modules

# Copy build output and necessary assets
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY package*.json ./

EXPOSE 3000
CMD ["npm", "run", "start"]
