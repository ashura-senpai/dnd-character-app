import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCharacterDto } from './dto/create-character.dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto/update-character.dto';
import { Character } from './schemas/character.schema/character.schema';

@Injectable()
export class CharacterService {
    constructor(@InjectModel(Character.name) private characterModel: Model<Character>) { }

    async create(createCharacterDto: CreateCharacterDto): Promise<Character> {
        const createdCharacter = new this.characterModel(createCharacterDto);
        return createdCharacter.save();
    }

    async findAll(): Promise<Character[]> {
        return this.characterModel.find().exec();
    }

    async findOne(id: string): Promise<Character> {
        const character = await this.characterModel.findById(id).exec();
        if (!character) {
            throw new NotFoundException('Character not found');
        }
        return character;
    }

    async update(id: string, updateCharacterDto: UpdateCharacterDto): Promise<Character> {
        const existingCharacter = await this.characterModel.findByIdAndUpdate(id, updateCharacterDto, { new: true }).exec();
        if (!existingCharacter) {
            throw new NotFoundException('Character not found');
        }
        return existingCharacter;
    }

    async remove(id: string): Promise<Character> {
        const deletedCharacter = await this.characterModel.findByIdAndDelete(id).exec();
        if (!deletedCharacter) {
            throw new NotFoundException('Character not found');
        }
        return deletedCharacter;
    }

    async createRandomCharacter(): Promise<Character> {
        const classes = ['Warrior', 'Mage', 'Cleric'];
        const randomClass = classes[Math.floor(Math.random() * classes.length)];

        const attributes = {
            strength: Math.floor(Math.random() * 16) + 3,
            dexterity: Math.floor(Math.random() * 16) + 3,
            constitution: Math.floor(Math.random() * 16) + 3,
            intelligence: Math.floor(Math.random() * 16) + 3,
            wisdom: Math.floor(Math.random() * 16) + 3,
            charisma: Math.floor(Math.random() * 16) + 3,
        };

        const characterData = {
            name: `Random ${randomClass}`,
            class: randomClass,
            attributes,
            feats: [],
            alignment: 'Neutral',
            skills: [],
            spells: [],
            items: [],
        };

        const createdCharacter = new this.characterModel(characterData);
        return createdCharacter.save();
    }
}
