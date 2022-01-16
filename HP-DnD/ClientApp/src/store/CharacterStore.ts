import { Action, Reducer } from 'redux';

// -----------------
// STATE - This defines the type of data maintained in the Redux store.
export type SkillName = 
    'Brewing'
    | 'Potions Knowledge' 
    | 'Poisons Knowledge' 
    | 'Herbology' 
    | 'Air' 
    | 'Fire' 
    | 'Earth' 
    | 'Water'
    | 'Telekinesis' 
    | 'Telepathy' 
    | 'Divination' 
    | 'Spectral Mediation'
    | 'Offensive Charms' 
    | 'Hexes' 
    | 'Jinxes' 
    | 'Curses'
    | 'Defensive Charms' 
    | 'Healing' 
    | 'Counter Spells' 
    | 'Shielding'
    | 'Tracking'
    | 'Harvesting' 
    | 'Transfiguration' 
    | 'Riding' 
    | 'Charm' 
    | 'Intimidate' 
    | 'Deception' 
    | 'Performance'
    | 'Speed' 
    | 'Strength' 
    | 'Agility' 
    | 'Resistance'
    | 'Sneaking' 
    | 'Sleight Of Hand' 
    | 'Perception' 
    | 'Apparition'
    | 'Muggle Technology' 
    | 'Crafting' 
    | 'Scavenging' 
    | 'Enchanting';

export type SkillValue = 
    1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20
    | 21
    | 22
    | 23
    | 24
    | 25
    | 26
    | 27
    | 28
    | 29
    | 30;

export type Skill = {
  name: SkillName;
  value: SkillValue;
}

export type TalentName = 
    'Alchemy' 
    | 'Elementalism'
    | 'Psychic'
    | 'Offensive Spells'
    | 'Defensive Spells'
    | 'Beast Handling' 
    | 'Charisma'
    | 'Physicality'
    | 'Stealth'
    | 'Magitech';

export type Talent = {
  name: TalentName;
  skills: Skill[];
}

export interface CharacterState {
    talents: Talent[];
}

// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.
// Use @typeName and isActionType for type detection that works even after serialization/deserialization.

export interface IncrementCountAction { type: 'INCREMENT_COUNT' }
export interface DecrementCountAction { type: 'DECREMENT_COUNT' }

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
export type KnownAction = IncrementCountAction | DecrementCountAction;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    increment: () => ({ type: 'INCREMENT_COUNT' } as IncrementCountAction),
    decrement: () => ({ type: 'DECREMENT_COUNT' } as DecrementCountAction)
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

export const reducer: Reducer<CharacterState> = (state: CharacterState | undefined, incomingAction: Action): CharacterState => {
    if (state === undefined) {
        return {
            talents: defaultTalents
        }
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'INCREMENT_COUNT':
        case 'DECREMENT_COUNT':
        default:
            return state;
    }
};

const defaultTalents: Talent[] = 
[
    { 
        name: 'Alchemy',
        skills: [
            {
                name: 'Brewing',
                value: 10
            },
            {
                name: 'Potions Knowledge',
                value: 12
            },
            {
                name: 'Poisons Knowledge',
                value: 14
            },
            {
                name: 'Herbology',
                value: 16
            }
        ]
    },
    {
        name: 'Elementalism',
        skills: [
            {
                name: 'Air',
                value: 15
            },
            {
                name: 'Fire',
                value: 15
            },
            {
                name: 'Water',
                value: 15
            },
            {
                name: 'Earth',
                value: 15
            }
        ]
    },
    {
        name: 'Psychic',
        skills: [
            {
                name: 'Divination',
                value: 15
            },
            {
                name: 'Spectral Mediation',
                value: 15
            },
            {
                name: 'Telepathy',
                value: 15
            },
            {
                name: 'Telekinesis',
                value: 15
            }
        ]
    },
    {
        name: 'Offensive Spells',
        skills: [
            {
                name: 'Offensive Charms',
                value: 15
            },
            {
                name: 'Hexes',
                value: 15
            },
            {
                name: 'Curses',
                value: 15
            },
            {
                name: 'Jinxes',
                value: 15
            }
        ]
    },
    {
        name: 'Defensive Spells',
        skills: [
            {
                name: 'Defensive Charms',
                value: 15
            },
            {
                name: 'Counter Spells',
                value: 15
            },
            {
                name: 'Healing',
                value: 15
            },
            {
                name: 'Shielding',
                value: 15
            }
        ]
    },
    {
        name: 'Beast Handling',
        skills: [
            {
                name: 'Transfiguration',
                value: 15
            },
            {
                name: 'Harvesting',
                value: 15
            },
            {
                name: 'Tracking',
                value: 15
            },
            {
                name: 'Riding',
                value: 15
            }
        ]
    },
    {
        name: 'Charisma',
        skills: [
            {
                name: 'Charm',
                value: 15
            },
            {
                name: 'Intimidate',
                value: 15
            },
            {
                name: 'Deception',
                value: 15
            },
            {
                name: 'Performance',
                value: 15
            }
        ]
    },
    {
        name: 'Physicality',
        skills: [
            {
                name: 'Speed',
                value: 15
            },
            {
                name: 'Agility',
                value: 15
            },
            {
                name: 'Strength',
                value: 15
            },
            {
                name: 'Resistance',
                value: 15
            }
        ]
    },
    {
        name: 'Stealth',
        skills: [
            {
                name: 'Sneaking',
                value: 15
            },
            {
                name: 'Sleight Of Hand',
                value: 15
            },
            {
                name: 'Perception',
                value: 15
            },
            {
                name: 'Apparition',
                value: 15
            }
        ]
    },
    {
        name: 'Magitech',
        skills: [
            {
                name: 'Muggle Technology',
                value: 15
            },
            {
                name: 'Crafting',
                value: 15
            },
            {
                name: 'Scavenging',
                value: 15
            },
            {
                name: 'Enchanting',
                value: 15
            }
        ]
    } 
]
