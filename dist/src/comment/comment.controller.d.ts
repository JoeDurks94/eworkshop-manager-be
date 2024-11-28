import { CommentService } from './comment.service';
import { Prisma } from '@prisma/client';
export declare class CommentController {
    private readonly commentService;
    constructor(commentService: CommentService);
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
    findOne(id: string): Prisma.Prisma__CommentsClient<{
        id: number;
        employee_id: number;
        type: import(".prisma/client").$Enums.CommentType;
        comment: string;
        jobline_id: number;
        created_at: Date;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateCommentDto: Prisma.CommentsUpdateInput): Prisma.Prisma__CommentsClient<{
        id: number;
        employee_id: number;
        type: import(".prisma/client").$Enums.CommentType;
        comment: string;
        jobline_id: number;
        created_at: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): Prisma.Prisma__CommentsClient<{
        id: number;
        employee_id: number;
        type: import(".prisma/client").$Enums.CommentType;
        comment: string;
        jobline_id: number;
        created_at: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
