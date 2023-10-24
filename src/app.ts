import fastify from 'fastify'
import { transactionsRoutes } from './routes/transactions'
import fastifyCookie from '@fastify/cookie'
import fastifyStatic from '@fastify/static'
import path from 'path'

export const app = fastify()

app.register(fastifyCookie)

app.register(transactionsRoutes, {
  prefix: 'transactions',
})

app.register(fastifyStatic, {
  root: path.join(__dirname, '../.well-known'),
  prefix: '/.well-known/',
})
