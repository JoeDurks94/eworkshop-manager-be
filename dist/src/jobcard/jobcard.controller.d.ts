import { JobcardService } from './jobcard.service';
import { Prisma } from '@prisma/client';
export declare class JobcardController {
    private readonly jobcardService;
    constructor(jobcardService: JobcardService);
    create(createJobcardDto: Prisma.JobcardCreateInput): Prisma.Prisma__JobcardClient<{
        id: number;
        jobcard_number: number;
        vehicle_id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): Prisma.PrismaPromise<({
        vehicle: {
            id: number;
            vrm: string;
            vin: string;
            make: string;
            model: string;
            using_customer_id: number;
            owning_customer_id: number;
        };
        joblines: {
            id: number;
            description: string;
            time_allocated: number;
            jobcard_id: number;
        }[];
    } & {
        id: number;
        jobcard_number: number;
        vehicle_id: number;
    })[]>;
    findOne(id: string): Promise<{
        joblines: {
            information: ({
                employee: {
                    name: string;
                };
            } & {
                id: number;
                employee_id: number;
                type: import(".prisma/client").$Enums.CommentType;
                comment: string;
                jobline_id: number;
                created_at: Date;
            })[];
            complaint: ({
                employee: {
                    name: string;
                };
            } & {
                id: number;
                employee_id: number;
                type: import(".prisma/client").$Enums.CommentType;
                comment: string;
                jobline_id: number;
                created_at: Date;
            })[];
            cause: ({
                employee: {
                    name: string;
                };
            } & {
                id: number;
                employee_id: number;
                type: import(".prisma/client").$Enums.CommentType;
                comment: string;
                jobline_id: number;
                created_at: Date;
            })[];
            cure: ({
                employee: {
                    name: string;
                };
            } & {
                id: number;
                employee_id: number;
                type: import(".prisma/client").$Enums.CommentType;
                comment: string;
                jobline_id: number;
                created_at: Date;
            })[];
            comments: any;
            id: number;
            description: string;
            time_allocated: number;
            jobcard_id: number;
        }[];
        vehicle: {
            using_customer: {
                id: number;
                name: string;
                contact_name: string;
                contact_number: string;
                contact_email: string;
            };
            owning_customer: {
                id: number;
                name: string;
                contact_name: string;
                contact_number: string;
                contact_email: string;
            };
        } & {
            id: number;
            vrm: string;
            vin: string;
            make: string;
            model: string;
            using_customer_id: number;
            owning_customer_id: number;
        };
        id: number;
        jobcard_number: number;
        vehicle_id: number;
    }>;
    update(id: string, updateJobcardDto: Prisma.JobcardUpdateInput): Prisma.Prisma__JobcardClient<{
        id: number;
        jobcard_number: number;
        vehicle_id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): Prisma.Prisma__JobcardClient<{
        id: number;
        jobcard_number: number;
        vehicle_id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
