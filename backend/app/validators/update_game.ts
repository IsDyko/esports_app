import vine from '@vinejs/vine'

export const updateGameValidator = vine.create({
	name: vine.string().minLength(3).maxLength(100).optional(),
	slug: vine.string().minLength(3).maxLength(100).optional(),
	imageUrl: vine.string().maxLength(500).optional()
})