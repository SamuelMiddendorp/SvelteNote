<script lang="ts">
	export let data: any;
</script>

<div>
{console.log(data)}
			{#each data.albums as track, i}
				<tr>
					<td>{i + 1}</td>
					<td>{track.trackName}</td>
					<td>{Math.floor(track.trackMs / 1000)} s</td>
				</tr>
			{/each}

</div>
