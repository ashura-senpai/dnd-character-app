import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CharacterService } from './character.service';
import { CreateCharacterDto } from './dto/create-character.dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto/update-character.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('characters')
export class CharacterController {
    constructor(private readonly characterService: CharacterService) { }

    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() createCharacterDto: CreateCharacterDto) {
        return this.characterService.create(createCharacterDto);
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    findAll() {
        return this.characterService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.characterService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCharacterDto: UpdateCharacterDto) {
        return this.characterService.update(id, updateCharacterDto);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.characterService.remove(id);
    }

    @UseGuards(JwtAuthGuard)
    @Post('random')
    createRandom() {
        return this.characterService.createRandomCharacter();
    }
}
