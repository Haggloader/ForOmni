<script>
    import { units } from '../stores/player-data'
    import { spacer } from '../things/farm-unit';

    import FarmUnit from './FarmUnit.svelte'

    export let farm

    const hasUnit = $units[farm.name] !== undefined
</script>

<style type="text/scss">
    table {
        border: 1px solid #181b1f;
        border-collapse: collapse;
        width: 100% !important;
    }
    colgroup {
        border: 1px solid #181b1f;
    }
    thead td {
        position: relative;
        font-size: 1.2rem;
        text-align: center;

        > span {
            position: absolute;
            right: 0.3rem;
            color: #ffaaaa;
            text-shadow: 0 0 4px rgba(0, 0, 0, 0.5);

            &.has {
                color: #aaffaa;
            }
        }
    }
    th {
        border: 1px solid #181b1f;
        padding: 0.25em;
    }
    .dark {
        background: rgba(255, 65, 54, 0.5);
    }
    .light {
        background: rgba(0, 116, 217, 0.5);
		}
</style>

<table>
    <colgroup span="2"></colgroup>
    <colgroup span="1" class="stars"></colgroup>
    <colgroup span="1" class="gear"></colgroup>
    <colgroup span="1" class="relic"></colgroup>
    <colgroup span="1" class="speed"></colgroup>
	<colgroup span="1" class="health"></colgroup>
	<colgroup span="1" class="protection"></colgroup>
	<colgroup span="1" class="physical"></colgroup>
    <thead>
        <tr>
            <td colspan="11" class="{farm.side}">{farm.name}<span class:has={hasUnit}>{hasUnit ? '✔' : '✖'}</span></td>
        </tr>
        <tr>
            <th colspan="2">Name</th>
            <th>Stars</th>
            <th>Gear</th>
            <th>Relic</th>
            <th>Speed</th>
			<th>Health</th>
			<th>Protection</th>
			<th>Physical</th>
        </tr>
    </thead>
    <tbody>
        {#each farm.units as unit}
            <FarmUnit farmUnit={unit} />
        {/each}
        {#if farm.ships.length > 0}
            <FarmUnit farmUnit={spacer} />
            {#each farm.ships as ship}
                <FarmUnit farmUnit={ship} />
            {/each}
        {/if}
    </tbody>
</table>
