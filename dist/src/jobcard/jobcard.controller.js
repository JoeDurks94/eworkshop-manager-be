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
exports.JobcardController = void 0;
const common_1 = require("@nestjs/common");
const jobcard_service_1 = require("./jobcard.service");
const client_1 = require("@prisma/client");
let JobcardController = class JobcardController {
    constructor(jobcardService) {
        this.jobcardService = jobcardService;
    }
    create(createJobcardDto) {
        return this.jobcardService.create(createJobcardDto);
    }
    findAll() {
        return this.jobcardService.findAll();
    }
    findOne(id) {
        return this.jobcardService.findOne(+id);
    }
    update(id, updateJobcardDto) {
        return this.jobcardService.update(+id, updateJobcardDto);
    }
    remove(id) {
        return this.jobcardService.remove(+id);
    }
};
exports.JobcardController = JobcardController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], JobcardController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], JobcardController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], JobcardController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], JobcardController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], JobcardController.prototype, "remove", null);
exports.JobcardController = JobcardController = __decorate([
    (0, common_1.Controller)('jobcard'),
    __metadata("design:paramtypes", [jobcard_service_1.JobcardService])
], JobcardController);
//# sourceMappingURL=jobcard.controller.js.map