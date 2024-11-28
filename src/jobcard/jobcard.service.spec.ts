import { Test, TestingModule } from '@nestjs/testing';
import { JobcardService } from './jobcard.service';

describe('JobcardService', () => {
  let service: JobcardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobcardService],
    }).compile();

    service = module.get<JobcardService>(JobcardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
