import { Test, TestingModule } from '@nestjs/testing';
import { StoreHoursService } from './store-hours.service';

describe('StoreHoursService', () => {
  let service: StoreHoursService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StoreHoursService],
    }).compile();

    service = module.get<StoreHoursService>(StoreHoursService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
