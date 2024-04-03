import { FastifyInstance } from "fastify";
import { BadRequest } from "./routes/_errors/bad-request";
import { ZodError } from "zod";

type FastifyErrorHandlder = FastifyInstance['errorHandler']

export const errorHandler: FastifyErrorHandlder = (error, request, reply) => {
    if(error instanceof ZodError){
        return reply.status(400).send({
            message: `Error during validation`,
            errors: error.flatten().fieldErrors
        })
    }

    if(error instanceof BadRequest){
        return reply.status(400).send({ message: error.message })
    }

    return reply.status(500).send({message: "internal server error!"})
}