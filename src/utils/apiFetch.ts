export async function apiFetch<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const baseUrl = import.meta.env.PUBLIC_API_URL ?? "http://localhost:3000"

	const res = await fetch(`${baseUrl}${endpoint}`, {
		headers: {
			"Content-Type": "application/json",
		},
		...options,
	})

	if (!res.ok) {
		console.error(`API error: ${res.status} ${res.statusText}`)
	}

	return await res.json()
}