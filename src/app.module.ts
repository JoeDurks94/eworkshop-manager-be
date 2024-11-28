import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { EmployeeModule } from './employee/employee.module';
import { VehicleModule } from './vehicle/vehicle.module';
import { CustomerModule } from './customer/customer.module';
import { JobcardService } from './jobcard/jobcard.service';
import { JobcardModule } from './jobcard/jobcard.module';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [DatabaseModule, EmployeeModule, VehicleModule, CustomerModule, JobcardModule, CommentModule],
  controllers: [AppController],
  providers: [AppService, JobcardService],
})
export class AppModule {}
