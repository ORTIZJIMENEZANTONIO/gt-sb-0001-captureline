import { Test, TestingModule } from '@nestjs/testing';
import { PkComerLcController } from './pk-comer-lc.controller';

describe('PkComerLcController', () => {
  let controller: PkComerLcController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PkComerLcController],
    }).compile();

    controller = module.get<PkComerLcController>(PkComerLcController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
