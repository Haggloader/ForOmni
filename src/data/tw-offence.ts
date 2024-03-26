import { Farm } from '../things/farm'
import { FarmCategory } from '../things/farm-category'
import { FarmUnit } from '../things/farm-unit'

export default new FarmCategory(
    'TW-Offence',
    [
        new Farm(
            'Commander Luke Skywalker',
            'tw_off',
            'light',
            [
                new FarmUnit('Commander Luke Skywalker', 7, 13, 7, 263, 50822, 45604, 7738, 6160, 52, 72, 54,),
                new FarmUnit('Threepio & Chewie', 7, 13, 7, 200),
                new FarmUnit('Chewbacca', 7, 13, 7, 200),
                new FarmUnit('Han Solo', 7, 13, 7, 205),
                new FarmUnit('C-3PO', 7, 13, 7, 202),
            ], 
            [
                
            ],
        ),
    ]    
)