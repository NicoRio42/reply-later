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
	let showNameError = false;
	let nameErrorHasBeenShown = false;

	function handleSubmit() {
		if (name === '') {
			showNameError = true;
			nameErrorHasBeenShown = true;
			return;
		}

		toReply.update((previous) => previous.concat([{ name, type, id: crypto.randomUUID() }]));

		goto('/');
	}
</script>

<form class="mt-10" on:submit|preventDefault={handleSubmit}>
	<label class="mb-0">
		<input
			bind:value={name}
			type="text"
			class="important:mb-0"
			on:input={() => (showNameError = name === '')}
			aria-invalid={nameErrorHasBeenShown ? showNameError : null}
		/>
	</label>

	<p
		style:visibility={nameErrorHasBeenShown && showNameError ? 'visible' : 'hidden'}
		class="text-[var(--form-element-invalid-border-color)] text-4"
	>
		Name is mandatory.
	</p>

	<div class="grid grid-cols-4 justify-center gap-6">
		<label
			class:text-[var(--primary)]={type === 'email'}
			class="flex flex-col text-3 items-center cursor-pointer"
		>
			<input type="radio" bind:group={type} value={messageTypes.email} class="hidden" />

			<Email class="w-6 h-6 " />

			Email
		</label>

		<label
			class:text-[var(--primary)]={type === 'messenger'}
			class="flex flex-col text-3 items-center cursor-pointer"
		>
			<input type="radio" bind:group={type} value={messageTypes.messenger} class="hidden" />

			<Messenger class="w-6 h-6 " />

			Messenger
		</label>

		<label
			class:text-[var(--primary)]={type === 'whatsapp'}
			class="flex flex-col text-3 items-center cursor-pointer"
		>
			<input type="radio" bind:group={type} value={messageTypes.whatsapp} class="hidden" />

			<Whatsapp class="w-6 h-6 " />

			Whatsapp
		</label>

		<label
			class:text-[var(--primary)]={type === 'sms'}
			class="flex flex-col text-3 items-center cursor-pointer"
		>
			<input type="radio" bind:group={type} value={messageTypes.sms} class="hidden" />

			<Sms class="w-6 h-6 " />

			Sms
		</label>
	</div>

	<button type="submit" class="mt-8">Add</button>

	<a href="/" role="button" type="submit" class="outline w-100%">Cancel</a>
</form>
