import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { JobcardService } from './jobcard.service';
import { Prisma } from '@prisma/client';

@Controller('jobcard')
export class JobcardController {
  constructor(private readonly jobcardService: JobcardService) {}

  @Post()
  create(@Body() createJobcardDto: Prisma.JobcardCreateInput) {
    return this.jobcardService.create(createJobcardDto);
  }

  @Get()
  findAll() {
    return this.jobcardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jobcardService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateJobcardDto: Prisma.JobcardUpdateInput,
  ) {
    return this.jobcardService.update(+id, updateJobcardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jobcardService.remove(+id);
  }
}
