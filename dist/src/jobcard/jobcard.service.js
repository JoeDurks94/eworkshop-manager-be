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
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobcardService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
let JobcardService = class JobcardService {
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    create(createJobcardDto) {
        return this.databaseService.jobcard.create({
            data: createJobcardDto,
        });
    }
    findAll() {
        return this.databaseService.jobcard.findMany({
            include: {
                vehicle: true,
                joblines: true,
            },
        });
    }
    async findOne(jobcard_number) {
        const jobcard = await this.databaseService.jobcard.findUnique({
            where: {
                jobcard_number,
            },
            include: {
                vehicle: {
                    include: {
                        using_customer: true,
                        owning_customer: true,
                    },
                },
                joblines: {
                    include: {
                        comments: {
                            include: {
                                employee: {
                                    select: {
                                        name: true,
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });
        if (jobcard) {
            const transformedJobcard = {
                ...jobcard,
                joblines: jobcard.joblines.map((jobline) => ({
                    ...jobline,
                    information: jobline.comments.filter((comment) => comment.type === 'INFORMATION'),
                    complaint: jobline.comments.filter((comment) => comment.type === 'COMPLAINT'),
                    cause: jobline.comments.filter((comment) => comment.type === 'CAUSE'),
                    cure: jobline.comments.filter((comment) => comment.type === 'CURE'),
                    comments: undefined,
                })),
            };
            return transformedJobcard;
        }
        return null;
    }
    update(jobcard_number, updateJobcardDto) {
        return this.databaseService.jobcard.update({
            where: {
                jobcard_number,
            },
            data: updateJobcardDto,
        });
    }
    remove(jobcard_number) {
        return this.databaseService.jobcard.delete({
            where: {
                jobcard_number,
            },
        });
    }
};
exports.JobcardService = JobcardService;
exports.JobcardService = JobcardService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], JobcardService);
//# sourceMappingURL=jobcard.service.js.map