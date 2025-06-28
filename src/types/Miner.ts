export interface Miner {
	id: number
	rarity: string
	name: string
	description: string
	gifUrl?: string
	cells: number
	power: number
	bonus: number
	price: number
	sellable: boolean
	mergeable: boolean
	createdAt: string
}
