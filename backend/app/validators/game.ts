import vine from '@vinejs/vine'

export const gameValidator = vine.create({
	name: vine.string().minLength(3).maxLength(100),
	slug: vine.string().minLength(3).maxLength(100),
	imageUrl: vine.string().maxLength(500).optional()
})