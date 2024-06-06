import { PartialType } from '@nestjs/mapped-types';
import { CreateCharacterDto } from '../create-character.dto/create-character.dto';

export class UpdateCharacterDto extends PartialType(CreateCharacterDto) { }
