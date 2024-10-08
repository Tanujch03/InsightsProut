# InsightsProut
Share insightful perspectives, useful knowledge 

# Frontend

```
npm run dev
```

# Backend
## Routes
```
POST /api/v1/user/signup

POST /api/v1/user/signin

POST api/v1/blog

PUT /api/v1/blog

GET /api/v1/blog/bulk
```

## Database URL
```
DATABASE_URL=""
```

## Connection Pool URL
```
DATABASE_URL=""
```

## Migrate Prisma
```
npx prisma migrate dev
```

## Name the Migration
```
npx prisma migrate dev --name init_schema
```

## Generate Prisma Client 
```
npx prisma generate --no-engine
```

## Add accelerate Extension
```
npm install @prisma/extension-accelerate
```


## Run Backend
```
npm run dev
```

## Go to Postman
```
Test it: POST - http://127.0.0.1:8787/api/v1/user/signup

{
    "username":"tanujchaganti03@gmail.com",
    "password":"123456789"
}
```

## Login to wrangler
```
npx wrangler login
```

## Deploy to Cloudflare workers
```
npm run deploy
```
