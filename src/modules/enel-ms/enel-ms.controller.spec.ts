import { Test, TestingModule } from '@nestjs/testing';
import { EnelMsController } from './enel-ms.controller';

describe('EnelMsController', () => {
  let controller: EnelMsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnelMsController],
    }).compile();

    controller = module.get<EnelMsController>(EnelMsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
