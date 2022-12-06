import { Test, TestingModule } from '@nestjs/testing';
import { LcsExtemporaneousService } from './lcs-extemporaneous.service';

describe('LcsExtemporaneousService', () => {
  let service: LcsExtemporaneousService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LcsExtemporaneousService],
    }).compile();

    service = module.get<LcsExtemporaneousService>(LcsExtemporaneousService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
