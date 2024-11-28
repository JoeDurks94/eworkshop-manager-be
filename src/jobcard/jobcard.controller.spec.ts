import { Test, TestingModule } from '@nestjs/testing';
import { JobcardController } from './jobcard.controller';
import { JobcardService } from './jobcard.service';

describe('JobcardController', () => {
  let controller: JobcardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JobcardController],
      providers: [JobcardService],
    }).compile();

    controller = module.get<JobcardController>(JobcardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
