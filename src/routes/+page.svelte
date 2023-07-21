<script lang="ts">
	import Email from '$lib/components/icons/Email.svelte';
	import Messenger from '$lib/components/icons/Messenger.svelte';
	import Sms from '$lib/components/icons/Sms.svelte';
	import Whatsapp from '$lib/components/icons/Whatsapp.svelte';
	import { toReply } from '$lib/stores/to-reply.store';
	import { Swipe, SwipeItem } from 'svelte-swipe';

	const swipeConfig = {
		autoplay: false,
		delay: 2000,
		showIndicators: true,
		transitionDuration: 1000,
		defaultIndex: 0
	};

	function handleChange(event: CustomEvent, id: string) {
		if (event.detail.active_item === 1) {
			toReply.update((previous) => previous.filter((i) => i.id !== id));
		}
	}
</script>

<main class="w-100% pb-15 pt-10">
	{#each $toReply as { name, type, id } (id)}
		<Swipe {...swipeConfig} on:change={(e) => handleChange(e, id)}>
			<SwipeItem>
				{#if type === 'messenger'}
					<p
						class="m-0 p-4 flex text-6 font-bold justify-center items-center gap-8 h-auto bg-#0084FF"
					>
						<Messenger class="h-8 w-8" />

						{name}
					</p>
				{:else if type === 'whatsapp'}
					<p
						class="m-0 p-4 flex text-6 font-bold justify-center items-center gap-8 h-auto bg-#25d366"
					>
						<Whatsapp class="h-8 w-8" />

						{name}
					</p>
				{:else if type === 'sms'}
					<p class="m-0 p-4 flex text-6 font-bold justify-center items-center gap-8 h-auto bg-red">
						<Sms class="h-8 w-8" />

						{name}
					</p>
				{:else if type === 'email'}
					<p
						class="m-0 p-4 flex text-6 font-bold justify-center items-center gap-8 h-auto bg-yellow"
					>
						<Email class="h-8 w-8" />

						{name}
					</p>
				{/if}
			</SwipeItem>

			<SwipeItem>
				<p class="m-0 flex justify-center items-center p-4">
					<i class="i-carbon-trash-can h-8 w-8 block" />
				</p>
			</SwipeItem>
		</Swipe>

		<!-- <div class="flex justify-between items-center py-4 px-8 w-100% bg-#0084FF bg-#25d366">
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
		</div> -->
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
