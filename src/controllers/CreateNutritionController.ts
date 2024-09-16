import { CreateNutritionService } from '../services/CreateNutritionService'
import { DataProps } from '../services/type'
import { FastifyRequest, FastifyReply } from 'fastify'

interface NutritionRequest extends FastifyRequest {
  Body: DataProps
}

export class CreateNutritionController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { name, weight, height, age, gender, objective, level } =
      request.body as DataProps

    const createNutrition = new CreateNutritionService()

    const nutrition = await createNutrition.execute({
      name,
      weight,
      height,
      age,
      objective,
      gender,
      level,
    })

    reply.send(nutrition)
  }
}
