import { flatten, forEach, map } from 'lodash'

import events from './events'
import fleets from './fleets'
import legends from './galactic-legends'
import tw_def from './tw-defence'
import all_units from './all-toons'
import tw_off from './tw-offence'
import { FarmCategory } from '../things/farm-category'

export const categories = [
    
    tw_off,
    tw_def,
    events,
    fleets,
    legends,
    all_units,
]

export const flat_categories = [
    new FarmCategory(
        'Flat',
        flatten(map(categories, 'farms'))
    )
]

