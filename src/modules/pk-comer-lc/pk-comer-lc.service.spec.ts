import { Test, TestingModule } from '@nestjs/testing';
import { PkComerLcService } from './pk-comer-lc.service';

describe('PkComerLcService', () => {
  let service: PkComerLcService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PkComerLcService],
    }).compile();

    service = module.get<PkComerLcService>(PkComerLcService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
