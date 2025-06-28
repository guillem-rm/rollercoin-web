export function formatPower(power: number): string {
	const units = ["Gh/s", "Th/s", "Ph/s", "Eh/s"]
	let i = 0
	while (power >= 1000 && i < units.length - 1) {
		power /= 1000
		i++
	}
	return `${power.toFixed(3)} ${units[i]}`
}