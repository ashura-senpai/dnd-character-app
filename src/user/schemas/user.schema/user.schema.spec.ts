import { UserSchema } from './user.schema';
import { Schema } from 'mongoose';

describe('UserSchema', () => {
  it('should be defined', () => {
    expect(UserSchema).toBeInstanceOf(Schema);
  });

  it('should have correct schema fields', () => {
    const schemaPaths = UserSchema.paths;
    expect(schemaPaths).toHaveProperty('username');
    expect(schemaPaths).toHaveProperty('password');
  });

  it('should have required fields', () => {
    const requiredFields = ['username', 'password'];
    requiredFields.forEach(field => {
      expect(UserSchema.paths[field].isRequired).toBe(true);
    });
  });

  it('should have unique username', () => {
    expect(UserSchema.paths['username'].options.unique).toBe(true);
  });
});
