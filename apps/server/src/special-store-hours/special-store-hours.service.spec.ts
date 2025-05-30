import { Test, TestingModule } from '@nestjs/testing';
import { SpecialStoreHoursService } from './special-store-hours.service';

describe('SpecialStoreHoursService', () => {
  let service: SpecialStoreHoursService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpecialStoreHoursService],
    }).compile();

    service = module.get<SpecialStoreHoursService>(SpecialStoreHoursService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
