import { writable, derived } from 'svelte/store';

export interface event {
	title: string
	date: Date,
	location: string,
	description: string
}

export const apiData = writable([]);

export const events = derived(apiData, ($apiData) => {
	if (apiData)
	{
		return $apiData.map(event => event).sort(event => event);
	}
	return [];
})

