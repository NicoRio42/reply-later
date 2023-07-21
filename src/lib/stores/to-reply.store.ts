import type { ToReply } from '$lib/models/to-reply';
import { writable, type Writable } from 'svelte/store';

const key = 'replyLater';

const initValue = 'localStorage' in globalThis ? localStorage.getItem(key) : null;

const toReplyStore = writable<ToReply[]>(initValue !== null ? JSON.parse(initValue) : []);

export const toReply: Writable<ToReply[]> = {
	set(value: ToReply[]) {
		localStorage.setItem(key, JSON.stringify(value));
		toReplyStore.set(value);
	},
	subscribe(subscriber, invalidate) {
		return toReplyStore.subscribe(subscriber, invalidate);
	},
	update(updater) {
		toReplyStore.update((value) => {
			localStorage.setItem(key, JSON.stringify(value));
			return updater(value);
		});
	}
};
