<script lang="ts">
	export let nextEvent: import("./models/event").event;
</script>

{#if nextEvent}
<h1>{nextEvent.title}</h1>
<p>{nextEvent.location}</p>
<p>{nextEvent.description}</p>
{/if}
