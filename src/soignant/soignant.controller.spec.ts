import { Test, TestingModule } from '@nestjs/testing';
import { SoignantController } from './soignant.controller';
import { SoignantService } from './soignant.service';

describe('SoignantController', () => {
  let controller: SoignantController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SoignantController],
      providers: [SoignantService],
    }).compile();

    controller = module.get<SoignantController>(SoignantController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
