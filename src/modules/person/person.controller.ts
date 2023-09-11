import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';

@Controller('api/person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Post()
  async create(@Body() createPersonDto: CreatePersonDto) {
    return this.personService.create(createPersonDto);
  }

  @Get()
  async findAll() {
    return this.personService.findAll();
  }

  @Get('/query')
  async queryName(@Query('name') name: string) {
    return await this.personService.getPersonByName(name);
  }

  @Get(':name')
  async findOne(@Param('name') name: string) {
    return await this.personService.findOne(name);
  }

  @Patch(':name')
  async update(
    @Param('name') name: string,
    @Body() updatePersonDto: UpdatePersonDto,
  ) {
    return await this.personService.update(name, updatePersonDto);
  }

  @Delete(':name')
  async remove(@Param('name') name: string) {
    return await this.personService.remove(name);
  }
}
