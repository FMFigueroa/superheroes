import mongoose from 'mongoose'

const HeroeSchema = new mongoose.Schema({

    id: {
        type: Number
    },
    name: {
        type: String
    },
    powerstats: [
        {
            intelligence: {
                type: Number
            },
            strength: {
                type: Number
            },
            speed: {
                type: Number
            },
            durability: {
                type: Number
            },
            power: {
                type: Number
            },
            combat: {
                type: Number

            }
        }
    ],
    biography: [
        {
            fullname: {
                type: String
            },
            alterEgos: {
                type: String
            },
            aliases: [
                {
                    type: String
                }
            ],
            placeOfBirth: {
                type: String
            },
            firstAppearance: {
                type: String
            },
            publisher: {
                type: String
            },
            alignment: {
                type: String
            }
        }
    ],
    appearance: [
        {
            gender: {
                type: String
            },
            race: {
                type: String
            },
            height: [
                {
                    type: String
                }
            ],
            weight: [
                {
                    type: String
                }
            ],
            eyeColor: {
                type: String
            },
            hairColor: {
                type: String
            }
        }
    ],
    work: [
        {
            occupation: {
                type: String
            },
            base: {
                type: String
            }
        }
    ],
    connections: [
        {
            groupAffiliation: {
                type: String
            },
            relatives: {
                type: String
            }
        }
    ],
    image: [
        {
            url: {
                type: String
            }
        }
    ],
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.models.Heroe || mongoose.model('Heroe', HeroeSchema)
