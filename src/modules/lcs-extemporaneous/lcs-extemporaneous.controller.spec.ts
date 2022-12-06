import { Test, TestingModule } from '@nestjs/testing';
import { LcsExtemporaneousController } from './lcs-extemporaneous.controller';

describe('LcsExtemporaneousController', () => {
  let controller: LcsExtemporaneousController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LcsExtemporaneousController],
    }).compile();

    controller = module.get<LcsExtemporaneousController>(LcsExtemporaneousController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
