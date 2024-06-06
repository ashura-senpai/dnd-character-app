import { CharacterSchema } from './character.schema';

describe('CharacterSchema', () => {
  it('should be defined', () => {
    expect(new CharacterSchema()).toBeDefined();
  });
});
