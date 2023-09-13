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

  // Create a new person
  @Post()
  async create(@Body() createPersonDto: CreatePersonDto) {
    return this.personService.create(createPersonDto);
  }

  // Retrieve all persons
  @Get()
  async findAll() {
    return this.personService.findAll();
  }

  // Retrieve a person by name using a query parameter
  @Get('/query')
  async queryName(@Query('name') name: string) {
    return await this.personService.getPersonByName(name);
  }

  // Retrieve a person by their name
  @Get(':name')
  async findOne(@Param('name') name: string) {
    return await this.personService.findOne(name);
  }

  // Update a person by their name
  @Patch(':name')
  async update(
    @Param('name') name: string,
    @Body() updatePersonDto: UpdatePersonDto,
  ) {
    return await this.personService.update(name, updatePersonDto);
  }

  // Delete a person by their name
  @Delete(':name')
  async remove(@Param('name') name: string) {
    return await this.personService.remove(name);
  }
}
