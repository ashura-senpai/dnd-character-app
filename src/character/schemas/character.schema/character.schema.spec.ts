import { CharacterSchema } from './character.schema';
import { Schema } from 'mongoose';

describe('CharacterSchema', () => {
  it('should be defined', () => {
    expect(CharacterSchema).toBeInstanceOf(Schema);
  });

  it('should have correct schema fields', () => {
    const schemaPaths = CharacterSchema.paths;
    expect(schemaPaths).toHaveProperty('name');
    expect(schemaPaths).toHaveProperty('class');
    expect(schemaPaths).toHaveProperty('attributes');
    expect(schemaPaths).toHaveProperty('feats');
    expect(schemaPaths).toHaveProperty('alignment');
    expect(schemaPaths).toHaveProperty('skills');
    expect(schemaPaths).toHaveProperty('spells');
    expect(schemaPaths).toHaveProperty('items');
  });

  it('should have required fields', () => {
    const requiredFields = ['name', 'class', 'attributes', 'alignment'];
    requiredFields.forEach(field => {
      expect(CharacterSchema.paths[field].isRequired).toBe(true);
    });
  });
});
