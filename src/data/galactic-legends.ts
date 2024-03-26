import { Farm } from '../things/farm'
import { FarmCategory } from '../things/farm-category'
import { FarmUnit, spacer } from '../things/farm-unit'

export default new FarmCategory(
    'Galactic Legends',
    [
        new Farm(
            'Jabba the Hutt',
            'legend',
            'dark',
            [
                new FarmUnit('Aurra Sing', 7, 13, 6, 100),
                new FarmUnit('Boba Fett', 7, 13, 7),
                new FarmUnit('Boushh (Leia Organa)', 7, 13, 5),
                new FarmUnit('C-3PO', 7, 13, 7),
                new FarmUnit('Fennec Shand', 7, 13, 7),
                new FarmUnit('Greedo', 7, 13, 6),
                new FarmUnit('Gamorrean Guard', 7, 13, 3),
                new FarmUnit('Han Solo', 7, 13, 8),
                new FarmUnit('Jedi Knight Luke Skywalker', 7, 13, 7),
                new FarmUnit('Krrsantan', 7, 13, 5),
                new FarmUnit('Mob Enforcer', 7, 13, 3),
                new FarmUnit('Skiff Guard (Lando Calrissian)', 7, 13, 5),
                new FarmUnit('URoRRuR\'R\'R', 7, 13, 4),
            ],
            [
                new FarmUnit('Outrider', 7),
            ],
        ),
    ]
)
