<script lang="ts">
	import { onMount } from 'svelte';
	import { apiData, events, type event } from '../models/event';
	import Header from '../Header.svelte';

	export let data: import('./$types').PageData;

	function resolveNext(events: import('../models/event').event[]) {
		return events[0];
	}
</script>

<div class="jumbotron text-center">
	<h1>DIPS Event</h1>
</div>

<div class="container">
	<div class="row">
		<div class="col-sm-4">
			<Header nextEvent={resolveNext(data.item)} />
		</div>
		<div class="col-sm-7">
			<ul class="list-group">
				{#each data.item as { title, date, description, location }}
					<li class="list-group-item">
						<div class="d-flex w-100 justify-content-between">
							<h5 class="mb-1">{title}</h5>
							<small>{date}</small>
						</div>
						<p class="mb-1">
							{description}
						</p>
						<small>{location}</small>
					</li>
				{/each}
			</ul>
		</div>
	</div>
	<div class="row">
		<ul>
			<li>#dips-padel</li>
			<li>#dips-brettspill</li>
			<li>#dips-bading</li>
		</ul>
	</div>
</div>

<style>

</style>
