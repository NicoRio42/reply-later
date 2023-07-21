<script lang="ts">
	import { goto } from '$app/navigation';
	import Email from '$lib/components/icons/Email.svelte';
	import Messenger from '$lib/components/icons/Messenger.svelte';
	import Sms from '$lib/components/icons/Sms.svelte';
	import Whatsapp from '$lib/components/icons/Whatsapp.svelte';
	import { toReply } from '$lib/stores/to-reply.store';
	import { messageTypes, type MessageTypesEnum } from '../../lib/models/enums/types.enum';

	let name = '';
	let type: MessageTypesEnum = messageTypes.email;

	function handleSubmit() {
		toReply.update((previous) => previous.concat([{ name, type }]));

		goto('/');
	}
</script>

<form class="mt-10" on:submit|preventDefault={handleSubmit}>
	<label>
		<input bind:value={name} type="text" />
	</label>

	<div class="flex justify-center gap-6">
		<label class:text-[var(--primary)]={type === 'email'} class="flex flex-col text-3 items-center">
			<input type="radio" bind:group={type} value={messageTypes.email} class="hidden" />

			<Email class="w-6 h-6 cursor-pointer" />

			Email
		</label>

		<label
			class:text-[var(--primary)]={type === 'messenger'}
			class="flex flex-col text-3 items-center"
		>
			<input type="radio" bind:group={type} value={messageTypes.messenger} class="hidden" />

			<Messenger class="w-6 h-6 cursor-pointer" />

			Messenger
		</label>

		<label
			class:text-[var(--primary)]={type === 'whatsapp'}
			class="flex flex-col text-3 items-center"
		>
			<input type="radio" bind:group={type} value={messageTypes.whatsapp} class="hidden" />

			<Whatsapp class="w-6 h-6 cursor-pointer" />

			Whatsapp
		</label>

		<label class:text-[var(--primary)]={type === 'sms'} class="flex flex-col text-3 items-center">
			<input type="radio" bind:group={type} value={messageTypes.sms} class="hidden" />

			<Sms class="w-6 h-6 cursor-pointer" />

			Sms
		</label>
	</div>

	<button type="submit" class="mt-8">Add</button>

	<a href="/" role="button" type="submit" class="outline w-100%">Cancel</a>
</form>
