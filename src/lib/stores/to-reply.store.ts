import type { ToReply } from '$lib/models/to-reply';
import { writable } from 'svelte/store';

export const toReply = writable<ToReply[]>([
	{ name: 'Papa', type: 'sms' },
	{ name: 'Toto', type: 'whatsapp' },
	{ name: 'My boss', type: 'messenger' },
	{ name: 'Jean-Michel', type: 'email' }
]);
