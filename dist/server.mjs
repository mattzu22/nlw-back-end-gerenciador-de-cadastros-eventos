import {
  registerForEvent
} from "./chunk-UYQ7DQVY.mjs";
import {
  errorHandler
} from "./chunk-U5F73OCY.mjs";
import {
  checkIn
} from "./chunk-2GRCV5JR.mjs";
import {
  createEvent
} from "./chunk-Q5KO33ZZ.mjs";
import "./chunk-KDMJHR3Z.mjs";
import {
  getAttendeeBadge
} from "./chunk-LD5PK6UQ.mjs";
import {
  getEventAttendees
} from "./chunk-S4RM3PHS.mjs";
import {
  getEvents
} from "./chunk-35CE7XZM.mjs";
import "./chunk-JRO4E4TH.mjs";
import "./chunk-JV6GRE7Y.mjs";

// src/server.ts
import fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import fastifyCors from "@fastify/cors";
import { serializerCompiler, validatorCompiler, jsonSchemaTransform } from "fastify-type-provider-zod";
var app = fastify();
app.register(fastifyCors, {
  origin: "*"
});
app.register(fastifySwagger, {
  swagger: {
    consumes: ["application/json"],
    produces: ["application/json"],
    info: {
      title: "pass.in",
      description: "Este projeto consiste em um backend desenvolvido em Node.js para gerenciar o cadastro de participantes em eventos.",
      version: "1.0.0"
    }
  },
  transform: jsonSchemaTransform
});
app.register(fastifySwaggerUi, {
  routePrefix: "/docs"
});
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(createEvent);
app.register(registerForEvent);
app.register(getEvents);
app.register(getAttendeeBadge);
app.register(checkIn);
app.register(getEventAttendees);
app.setErrorHandler(errorHandler);
app.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
  console.log("Server Rodando!");
});
