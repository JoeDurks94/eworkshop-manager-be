import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class JobcardService {
  constructor(private readonly databaseService: DatabaseService) {}
  create(createJobcardDto: Prisma.JobcardCreateInput) {
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

  async findOne(jobcard_number: number) {
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
          information: jobline.comments.filter(
            (comment) => comment.type === 'INFORMATION',
          ),
          complaint: jobline.comments.filter(
            (comment) => comment.type === 'COMPLAINT',
          ),
          cause: jobline.comments.filter((comment) => comment.type === 'CAUSE'),
          cure: jobline.comments.filter((comment) => comment.type === 'CURE'),
          comments: undefined,
        })),
      };

      return transformedJobcard;
    }

    return null;
  }
  s;

  update(jobcard_number: number, updateJobcardDto: Prisma.JobcardUpdateInput) {
    return this.databaseService.jobcard.update({
      where: {
        jobcard_number,
      },
      data: updateJobcardDto,
    });
  }

  remove(jobcard_number: number) {
    return this.databaseService.jobcard.delete({
      where: {
        jobcard_number,
      },
    });
  }
}
