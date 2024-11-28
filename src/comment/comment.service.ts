import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class CommentService {
  constructor(private readonly databaseService: DatabaseService) {}
  create(createCommentDto: Prisma.CommentsCreateInput) {
    return this.databaseService.comments.create({
      data: createCommentDto,
    });
  }

  findAll() {
    return this.databaseService.comments.findMany({});
  }

  findOne(id: number) {
    return this.databaseService.comments.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateCommentDto: Prisma.CommentsUpdateInput) {
    return this.databaseService.comments.update({
      where: {
        id,
      },
      data: updateCommentDto,
    });
  }

  remove(id: number) {
    return this.databaseService.comments.delete({
      where: {
        id,
      },
    });
  }
}
