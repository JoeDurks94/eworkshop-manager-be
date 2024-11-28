import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
export declare class CommentService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    create(createCommentDto: Prisma.CommentsCreateInput): Prisma.Prisma__CommentsClient<{
        id: number;
        employee_id: number;
        type: import(".prisma/client").$Enums.CommentType;
        comment: string;
        jobline_id: number;
        created_at: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): Prisma.PrismaPromise<{
        id: number;
        employee_id: number;
        type: import(".prisma/client").$Enums.CommentType;
        comment: string;
        jobline_id: number;
        created_at: Date;
    }[]>;
    findOne(id: number): Prisma.Prisma__CommentsClient<{
        id: number;
        employee_id: number;
        type: import(".prisma/client").$Enums.CommentType;
        comment: string;
        jobline_id: number;
        created_at: Date;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateCommentDto: Prisma.CommentsUpdateInput): Prisma.Prisma__CommentsClient<{
        id: number;
        employee_id: number;
        type: import(".prisma/client").$Enums.CommentType;
        comment: string;
        jobline_id: number;
        created_at: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): Prisma.Prisma__CommentsClient<{
        id: number;
        employee_id: number;
        type: import(".prisma/client").$Enums.CommentType;
        comment: string;
        jobline_id: number;
        created_at: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
