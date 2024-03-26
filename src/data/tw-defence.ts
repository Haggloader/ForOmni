import { Farm } from '../things/farm'
import { FarmCategory } from '../things/farm-category'
import { FarmUnit } from '../things/farm-unit'

export default new FarmCategory(
    'TW-Defence',
    [
        new Farm(
            'Sith Empire',
            'tw_def',
            'dark',
            [
                new FarmUnit('Darth Malgus', 7, 13, 6, 523),
                new FarmUnit('Darth Revan', 7, 13, 7, 200),
                new FarmUnit('Bastila Shan (Fallen)', 7, 13, 7, 200),
                new FarmUnit('Darth Malak', 7, 13, 7, 200),
                new FarmUnit('Sith Marauder', 7, 13, 7, 200),
            ],
            [
            ],
        ),
        new Farm(
            'Inquisitors',
            'tw_def',
            'dark',
            [
                new FarmUnit('Third Sister', 7, 13, 6, 523),
                new FarmUnit('Grand Inquisitor', 7, 13, 7, 200),
                new FarmUnit('Seventh Sister', 7, 13, 7, 200),
                new FarmUnit('Eighth Brother', 7, 13, 7, 200),
                new FarmUnit('Fifth Brother', 7, 13, 7, 200),
                new FarmUnit('Ninth Sister', 7, 13, 7, 200),
            ],
            [
            ],
        ),
        new Farm(
            'Jabba - Hutt Cartel',
            'tw_def',
            'dark',
            [
                new FarmUnit('Jabba the Hutt', 7, 13, 6, 523),
                new FarmUnit('Krrsantan', 7, 13, 7, 200),
                new FarmUnit('Boushh (Leia Organa)', 7, 13, 7, 200),
                new FarmUnit('Skiff Guard (Lando Calrissian)', 7, 13, 7, 200),
                new FarmUnit('Embo', 7, 13, 7, 200),
                new FarmUnit('Boba Fett', 7, 13, 7, 200),
            ],
            [
            ],
        ),
        new Farm(
            'Kelleran Beq',
            'tw_def',
            'light',
            [
                new FarmUnit('Kelleran Beq', 7, 13, 6, 523),
                new FarmUnit('Mace Windu', 7, 13, 7, 200),
                new FarmUnit('Jedi Knight Anakin', 7, 13, 7, 1),
                new FarmUnit('Ki-Adi-Mundi', 7, 13, 7, 200),
                new FarmUnit('Qui-Gon Jinn', 7, 13, 7, 200),
                new FarmUnit('Aayla Secura', 7, 13, 7, 201),
            ],
            [
            ],
        ),
        new Farm(
            'GL Leia',
            'tw_def',
            'light',
            [
                new FarmUnit('Leia Organa', 7, 13, 6, 523),
                new FarmUnit('Captain Drogan', 7, 13, 7, 200),
                new FarmUnit('R2-D2', 7, 13, 7, 200),
                new FarmUnit('Mon Mothma', 7, 13, 7, 200),
                new FarmUnit('Baze Malbus', 7, 13, 7, 200),
                new FarmUnit('Obi-Wan Kenobi (Old Ben)', 7, 13, 7, 200),
                new FarmUnit('Captain Han Solo', 7, 13, 7, 200),

            ],
            [
            ],
        ),
    ]    
)