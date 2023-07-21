<script lang="ts">
	import Email from '$lib/components/icons/Email.svelte';
	import Messenger from '$lib/components/icons/Messenger.svelte';
	import Sms from '$lib/components/icons/Sms.svelte';
	import Whatsapp from '$lib/components/icons/Whatsapp.svelte';
	import { toReply } from '$lib/stores/to-reply.store';
</script>

<main class="max-w-100 mx-auto pb-15 pt-10">
	{#each $toReply as { name, type, id }}
		<div class="flex justify-between items-center mb-10">
			<p class="m-0">
				{#if type === 'messenger'}
					<Messenger class="h-6 w-6" />
				{:else if type === 'whatsapp'}
					<Whatsapp class="h-6 w-6" />
				{:else if type === 'sms'}
					<Sms class="h-6 w-6" />
				{:else if type === 'email'}
					<Email class="h-6 w-6" />
				{/if}

				<span class="ml-4">
					{name}
				</span>
			</p>

			<button
				type="button"
				class="btn-unset ml-20"
				on:click={() => toReply.update((previous) => previous.filter((i) => i.id !== id))}
			>
				<i class="i-carbon-trash-can h-5 w-5 block" />
			</button>
		</div>
	{:else}
		<p class="mt-10">Nothing to reply later yet</p>
	{/each}
</main>

<section
	class="fixed bottom-0 m-0 flex content-center p-0 container-fluid border-t-2 border-t-solid border-t-[var(--table-border-color)] bg-[var(--background-color)]"
>
	<a href="/add" class="w-100% flex justify-center py-4">
		<i class="i-carbon-add-alt h-6 w-6 block" />
	</a>
</section>
