import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Character extends Document {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    class: string;

    @Prop({ type: Object, required: true })
    attributes: {
        strength: number;
        dexterity: number;
        constitution: number;
        intelligence: number;
        wisdom: number;
        charisma: number;
    };

    @Prop({ type: [String] })
    feats: string[];

    @Prop({ required: true })
    alignment: string;

    @Prop({ type: [String] })
    skills: string[];

    @Prop({ type: [String] })
    spells: string[];

    @Prop({ type: [String] })
    items: string[];
}

export const CharacterSchema = SchemaFactory.createForClass(Character);