import type { ToReply } from '$lib/models/to-reply';
import { writable, type Writable } from 'svelte/store';

const key = 'replyLater';

const initRawValue = 'localStorage' in globalThis ? localStorage.getItem(key) : null;

const toReplyStore = writable<ToReply[]>(initRawValue !== null ? JSON.parse(initRawValue) : []);

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
			const newValue = updater(value);
			localStorage.setItem(key, JSON.stringify(newValue));
			return newValue;
		});
	}
};
