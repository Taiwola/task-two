"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParseObjectIdPipe = void 0;
const common_1 = require("@nestjs/common");
const mongodb_1 = require("mongodb");
let ParseObjectIdPipe = class ParseObjectIdPipe {
    transform(value, metadata) {
        if (!mongodb_1.ObjectId.isValid(value)) {
            throw new common_1.BadRequestException('Invalid Object ID');
        }
        return value;
    }
};
exports.ParseObjectIdPipe = ParseObjectIdPipe;
exports.ParseObjectIdPipe = ParseObjectIdPipe = __decorate([
    (0, common_1.Injectable)()
], ParseObjectIdPipe);
//# sourceMappingURL=validate-Id.js.map