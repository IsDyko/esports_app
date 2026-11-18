import Game from '#models/game'
import { gameValidator } from '#validators/game'
import { updateGameValidator } from '#validators/update_game'
import type { HttpContext } from '@adonisjs/core/http'

export default class GamesController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    return await Game.query().orderBy('name')
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
		const payload = await request.validateUsing(gameValidator) // Transmitting the entire object instead of explicit columns
		const game = await Game.create(payload) // Creating the game with the validated object
		return response.created(game)
	}

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
		return await Game.query().preload('tournaments').where('id', params.id).firstOrFail()
	}

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response }: HttpContext) {
		const game = await  Game.findOrFail(params.id)
		const payload = await request.validateUsing(updateGameValidator)
		game.merge(payload)
		await game.save()
		return response.ok(game)
	}

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
		const game = await Game.findOrFail(params.id)
		await game.delete()
		return response.noContent()
	}
}
