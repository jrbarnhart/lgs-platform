import { Test, TestingModule } from '@nestjs/testing';
import { StoreEventsService } from './store-events.service';

describe('StoreEventsService', () => {
  let service: StoreEventsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StoreEventsService],
    }).compile();

    service = module.get<StoreEventsService>(StoreEventsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
