import { IsString, IsArray, IsObject } from 'class-validator';

export class CreateCharacterDto {
    @IsString()
    name: string;

    @IsString()
    class: string;

    @IsObject()
    attributes: {
        strength: number;
        dexterity: number;
        constitution: number;
        intelligence: number;
        wisdom: number;
        charisma: number;
    };

    @IsArray()
    feats: string[];

    @IsString()
    alignment: string;

    @IsArray()
    skills: string[];

    @IsArray()
    spells: string[];

    @IsArray()
    items: string[];
}
