<script>
	import { characters, ships } from '../stores/game-data'
	import { units } from '../stores/player-data'

	export let farmUnit

	const playerUnit = $units[farmUnit.name]
	const gameUnit = $characters[farmUnit.name] ?? $ships[farmUnit.name]
	const side = gameUnit ? {'Light Side': 'light', 'Dark Side': 'dark', 'Neutral': 'neutral'}[gameUnit.alignment] : null

	console.log("Player Unit:", playerUnit);
	console.log("Game Unit:", gameUnit);

	const hasStars = playerUnit && (playerUnit.rarity >= farmUnit.stars)
	const almostHasGear = farmUnit.gear_level && (playerUnit && (farmUnit.gear_level - playerUnit.gear_level === 1))
	const hasGear = !farmUnit.gear_level || (playerUnit && (playerUnit.gear_level >= farmUnit.gear_level))
	const hasRelic = !farmUnit.gear_level || !farmUnit.relic_level || (playerUnit && (playerUnit.gear_level >= 13 && ((playerUnit.relic_tier - 2) >= farmUnit.relic_level)))

	let hasSpeed = false;
	if (farmUnit && playerUnit && playerUnit.stats && playerUnit.stats[5] !== undefined) {
	hasSpeed = playerUnit.stats[5] >= farmUnit.speed;
	} else {
	console.error("Error: Unable to determine speed value.");
	}

	let hasHealth = false;
	if (farmUnit && playerUnit && playerUnit.stats && playerUnit.stats[1] !== undefined) {
	hasHealth = playerUnit.stats[1] >= farmUnit.health;
	} else {
	console.error("Error: Unable to determine health value.");
	}

	let hasProtection = false;
	if (farmUnit && playerUnit && playerUnit.stats && playerUnit.stats[28] !== undefined) {
	hasProtection = playerUnit.stats[28] >= farmUnit.protection;
	} else {
	console.error("Error: Unable to determine protection value.");
	}

	let hasPhysical = false;
	if (farmUnit && playerUnit && playerUnit.stats && playerUnit.stats[6] !== undefined) {
	hasPhysical = playerUnit.stats[6] >= farmUnit.physical;
	} else {
	console.error("Error: Unable to determine physical value.");
	}

	console.log("Has Stars:", hasStars);
	console.log("Almost Has Gear:", almostHasGear);
	console.log("Has Gear:", hasGear);
	console.log("Has Relic:", hasRelic);
	console.log("Player Unit Speed:", playerUnit && playerUnit.stats && playerUnit.stats[5]);
	console.log("Player Unit Health:", playerUnit && playerUnit.stats && playerUnit.stats[1]);
	console.log("Player Unit Protection:", playerUnit && playerUnit.stats && playerUnit.stats[28]);
	console.log("Player Unit Physical:", playerUnit && playerUnit.stats && playerUnit.stats[6]);
	

	const hasCount = (hasStars || 0) + (hasGear || 0) + (hasRelic || 0) + (hasSpeed || 0) + (hasHealth || 0) + (hasProtection || 0) + (hasPhysical || 0);

	console.log("Has Count:", hasCount);
</script>



<style type="text/scss">
    tr:nth-child(even) {
        background: #282b2f;
    }
    tr:nth-child(odd) {
        background: #383b3f;
    }
    td {
        border-top: 1px solid #181b1f;
        border-bottom: 1px solid #181b1f;
        line-height: 1;
        padding: 0 0.25em;
        white-space: nowrap;
    }
    td.image {
        padding: 0 1px 0 0;
        width: 33px;

        img {
            box-sizing: border-box;
            margin-bottom: -1px;
        }
    }
    td.light img {
        border: 1px solid #00aaff;
    }
    td.dark img {
        border: 1px solid #ff4444;
    }
    a {
        color: #EEE;
    }
    .missing-character {
        background: rgba(255, 0, 0, 0.7) !important;
    }
    td.name {
        text-align: left;
    }
    td {
        text-align: right;
    }
    td.numbers {
        position: relative;
        padding: 0;
        text-align: center;
        width: 1.5rem;

        span {
            display: inline-block;
			padding: 2.5px;

            &:first-child {
                text-align: centre;
                
            }
            &:last-child {
                text-align: centre;
                
            }
        }

        > div {
            height: 100%;
            position: absolute;
            top: 0;
            width: 100%;
//little squares under gear
            > div {
                border: 1px solid #181b1f;
                bottom: -1px;
                height: 7px;
                position: absolute;
                width: 10px;

                &:nth-child(1) {
                    left: -1px;
                }

                &:nth-child(2) {
                    left: 10px;
                }

                &:nth-child(3) {
                    left: 21px;
                }

                &:nth-child(4) {
                    left: 32px;
                }

                &:nth-child(5) {
                    left: 43px;
                }

                &:nth-child(6) {
                    left: 54px;
                }

                &.missing {
                    background: rgba(255, 0, 0, 0.5);
                }
                &.success {
                    background: rgba(31, 255, 112, 0.5);
                }
            }
        }
    }
    td.numbers2 {
        width: calc(4.0rem + 1px);

        span {
		padding: 2px;
            &:first-child {
                width: 1rem;
				text-align: centre;
            }
            &:last-child {
                width: 1rem;
				text-align: centre;
            }
        }
    }
    .left {
        padding-right: 0;
    }
    .slash {
        padding: 0 10.1em;
    }
    .right {
        padding-left: 0;
    }
    .missing, .success-0 {
        background: rgba(255, 0, 0, 0.2);
    }
    .success-1 {
        background: rgba(255, 133, 27, 0.3);
    }
    .success-2 {
        background: rgba(255, 220, 0, 0.3);
    }
    .success, .success-3 {
        background: rgba(31, 255, 112, 0.25);
    }
    .spacer {
        background: #282b2f;
        line-height: 0.5rem;
    }
</style>

<tr class="{!playerUnit ? 'missing-character' : ''}">
	{#if gameUnit}
	{#if farmUnit.stars === 0}
	<td colspan="11" class="spacer">&nbsp;</td>
	{:else}
	<td class="image {side}">
		<a href="{gameUnit.url}">
			<img src="{gameUnit.image}" width="32" height="32" alt="{farmUnit.name}">
                </a>
	</td>
	{#if playerUnit}
	<td class="name {farmUnit.gear_level ? `success-${hasCount}` : (hasStars ? 'success' : 'success-2')}">
		<a href="{gameUnit.url}">{farmUnit.name}</a>
	</td>
	<td class="numbers {hasStars ? 'success' : 'missing'}">
		<span>{playerUnit.rarity}</span>
		<span>/</span>
		<span>{farmUnit.stars}</span>
	</td>
	{#if farmUnit.gear_level}
	<td class="numbers numbers2 {hasGear ? 'success' : (almostHasGear ? 'success-2' : 'missing')}">
		<span>{playerUnit.gear_level}</span>
		<span>/</span>
		<span>{farmUnit.gear_level}</span>
		{#if !hasGear}
		<div>
			{#each Array(6) as _, i}
			<div class="{playerUnit.gear[i].is_obtained ? 'success' : 'missing'}"></div>
			{/each}
		</div>
		{/if}
	</td>
	{#if farmUnit.relic_level}
	<td class="numbers {hasRelic ? 'success' : 'missing'}">
		<span>{playerUnit.gear_level >= 13 ? playerUnit.relic_tier - 2 : 0}</span>
		<span>/</span>
		<span>{farmUnit.relic_level}</span>
	</td>
	<td class="numbers {hasSpeed ? 'success' : 'missing'}">
		{#if farmUnit.speed !== undefined}
		<span>{playerUnit ? playerUnit.stats && playerUnit.stats[5] : 0}</span>
		<span>/</span>
		<span>{farmUnit.speed}</span>
		{/if}
	</td>
	<td class="numbers {hasHealth ? 'success' : 'missing'}">
		{#if farmUnit.health !== undefined}
		<span>{playerUnit ? playerUnit.stats && playerUnit.stats[1] : 0}</span>
		<span>/</span>
		<span>{farmUnit.health}</span>
		{/if}
	</td>
	<td class="numbers {hasProtection ? 'success' : 'missing'}">
		{#if farmUnit.protection !== undefined}
		<span>{playerUnit ? playerUnit.stats && playerUnit.stats[28] : 0}</span>
		<span>/</span>
		<span>{farmUnit.protection}</span>
		{/if}
	</td>
	<td class="numbers {hasPhysical ? 'success' : 'missing'}">
		{#if farmUnit.physical !== undefined}
		<span>{playerUnit ? playerUnit.stats && playerUnit.stats[6] : 0}</span>
		<span>/</span>
		<span>{farmUnit.physical}</span>
		{/if}
	</td>
	{:else}
	     <td class="success"></td>
	         {/if}
	    {:else}
	<td colspan="2" class:success="{hasStars}"></td>
    	    {/if}
	    {:else}
	<td colspan="8" class="name">
		<a href="{gameUnit.url}">{farmUnit.name}</a>
	</td>
	        {/if}
	        {/if}
	    {:else}
	<td colspan="11">ERROR: invalid character "{farmUnit.name}"</td>
	{/if}
</tr>
