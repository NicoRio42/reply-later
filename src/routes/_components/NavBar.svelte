<script lang="ts">
	import Logo from '$lib/components/icons/Logo.svelte';
	import ThemeSwitch from './ThemeSwitch.svelte';
</script>

<nav
	class="container-fluid border-b-2 border-b-solid border-b-[var(--table-border-color)] h-12 items-center"
>
	<a
		class="flex items-center gap-2 sm:gap-4 p-0 text-5 text-[var(--primary)] whitespace-nowrap"
		href="/"
	>
		<Logo class="h-8 w-auto translate-y-[0.125rem]" />
	</a>

	<ThemeSwitch />
</nav>
