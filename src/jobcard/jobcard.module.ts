import { Module } from '@nestjs/common';
import { JobcardService } from './jobcard.service';
import { JobcardController } from './jobcard.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [JobcardController],
  providers: [JobcardService],
})
export class JobcardModule {}
