import { apiFetch } from "../utils/apiFetch"
import type { Miner } from "../types/Miner"

const ENDPOINT = "/miners"

export async function getAllMiners(): Promise<Miner[]> {
	const response = await apiFetch(ENDPOINT)
    return (response as { data: Miner[] }).data;
}

