import { Test, TestingModule } from '@nestjs/testing';
import { EnelMsService } from './enel-ms.service';

describe('EnelMsService', () => {
  let service: EnelMsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnelMsService],
    }).compile();

    service = module.get<EnelMsService>(EnelMsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
