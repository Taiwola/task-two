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
exports.PersonController = void 0;
const common_1 = require("@nestjs/common");
const person_service_1 = require("./person.service");
const create_person_dto_1 = require("./dto/create-person.dto");
const update_person_dto_1 = require("./dto/update-person.dto");
let PersonController = class PersonController {
    constructor(personService) {
        this.personService = personService;
    }
    async create(createPersonDto) {
        return this.personService.create(createPersonDto);
    }
    async findAll() {
        return this.personService.findAll();
    }
    async queryName(name) {
        return await this.personService.getPersonByName(name);
    }
    async findOne(name) {
        return await this.personService.findOne(name);
    }
    async update(name, updatePersonDto) {
        return await this.personService.update(name, updatePersonDto);
    }
    async remove(name) {
        return await this.personService.remove(name);
    }
};
exports.PersonController = PersonController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_person_dto_1.CreatePersonDto]),
    __metadata("design:returntype", Promise)
], PersonController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PersonController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/query'),
    __param(0, (0, common_1.Query)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PersonController.prototype, "queryName", null);
__decorate([
    (0, common_1.Get)(':name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PersonController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':name'),
    __param(0, (0, common_1.Param)('name')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_person_dto_1.UpdatePersonDto]),
    __metadata("design:returntype", Promise)
], PersonController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PersonController.prototype, "remove", null);
exports.PersonController = PersonController = __decorate([
    (0, common_1.Controller)('api/person'),
    __metadata("design:paramtypes", [person_service_1.PersonService])
], PersonController);
//# sourceMappingURL=person.controller.js.map