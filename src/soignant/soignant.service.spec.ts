import { Test, TestingModule } from '@nestjs/testing';
import { SoignantService } from './soignant.service';

describe('SoignantService', () => {
  let service: SoignantService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SoignantService],
    }).compile();

    service = module.get<SoignantService>(SoignantService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
