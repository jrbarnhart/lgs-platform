import { Test, TestingModule } from '@nestjs/testing';
import { StoreEventsController } from './store-events.controller';
import { StoreEventsService } from './store-events.service';

describe('StoreEventsController', () => {
  let controller: StoreEventsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StoreEventsController],
      providers: [StoreEventsService],
    }).compile();

    controller = module.get<StoreEventsController>(StoreEventsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
