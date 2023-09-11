"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const person_entity_1 = require("./entities/person.entity");
let PersonService = class PersonService {
    constructor(personModel) {
        this.personModel = personModel;
    }
    async create(createPerson) {
        const create = new this.personModel(createPerson);
        return await create.save();
    }
    async findAll() {
        const findPerson = await this.personModel.find();
        return findPerson;
    }
    async findOne(name) {
        const findPerson = await this.personModel.findOne({ name: name });
        if (!findPerson) {
            throw new common_1.HttpException('User does not exist', common_1.HttpStatus.NOT_FOUND);
        }
        return findPerson;
    }
    async update(name, updatePersonDto) {
        const findPerson = await this.findOne(name);
        if (!findPerson) {
            throw new common_1.HttpException('User does not exist', common_1.HttpStatus.NOT_FOUND);
        }
        return await this.personModel.findOneAndUpdate({ name: name }, Object.assign({}, updatePersonDto), { new: true });
    }
    async getPersonByName(name) {
        const person = await this.personModel.findOne({ name: name });
        if (!person) {
            throw new common_1.HttpException('name does not exist', common_1.HttpStatus.NOT_FOUND);
        }
        return person;
    }
    async remove(name) {
        const findPerson = await this.findOne(name);
        if (!findPerson) {
            throw new common_1.HttpException('User does not exist', common_1.HttpStatus.NOT_FOUND);
        }
        return await this.personModel.findOneAndRemove({ name: name });
    }
};
exports.PersonService = PersonService;
exports.PersonService = PersonService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(person_entity_1.Person.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PersonService);
//# sourceMappingURL=person.service.js.map