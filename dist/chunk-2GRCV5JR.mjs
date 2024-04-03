import {
  BadRequest
} from "./chunk-JRO4E4TH.mjs";
import {
  prisma
} from "./chunk-JV6GRE7Y.mjs";

// src/routes/check-in.ts
import { z } from "zod";
async function checkIn(app) {
  app.withTypeProvider().get(
    "/attendees/:attendeeId/check-in",
    {
      schema: {
        summary: "CheckIn de um participante",
        tags: ["check-ins"],
        params: z.object({
          attendeeId: z.coerce.number().int()
        }),
        response: {
          201: z.null()
        }
      }
    },
    async (request, reply) => {
      const { attendeeId } = request.params;
      const attendeeCheckIn = await prisma.checkIn.findUnique({
        where: {
          attendeeId
        }
      });
      if (attendeeCheckIn !== null) {
        throw new BadRequest("Este participante j\xE1 est\xE1 cadastrado nesse evento");
      }
      await prisma.checkIn.create({
        data: {
          attendeeId
        }
      });
      return reply.status(201).send();
    }
  );
}

export {
  checkIn
};
