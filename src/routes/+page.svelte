<script lang="ts">
	import Header from '../Header.svelte';

	export let data: import('./$types').PageData;

	function resolveNext(events: import('../models/event').event[]) {
		return events[0];
	}
</script>

<div class="text-center p-5 header">
	<h3 class="mb-8 text-3xl font-bold header-text">DIPS Event</h3>
</div>

<div class="grid">
	<ul class="flex flex-wrap p-5">
		{#each data.item as { display, events }}
			<li>
				<p>{display}</p>
				<ul class="divide-y divide-gray-200">
					{#each events as { title, date, description, location }}
						<li class="highlighted rounded-md shadow-md p-5">
							<div class="grid grid-cols-2">
								<p class="font-medium">{title}</p>
								<small class="justify-self-end italic">{date}</small>
							</div>
							<p class="max-w-md">
								{description}
							</p>
							<small class="italic">
								{location}
							</small>
						</li>
					{/each}
				</ul>
			</li>
		{/each}
	</ul>
</div>

<style lang="postcss">
	:global(html) {
		background: #f4f5f5;
	}

	.highlighted {
		background-color: white;
	}

	li {
		margin-bottom: 10px;
		margin-right: 10px;
	}

	p {
		color: #262626;
	}

	.header {
		background: #050948;
	}

	.header-text {
		color: #ffffff;
	}
</style>
