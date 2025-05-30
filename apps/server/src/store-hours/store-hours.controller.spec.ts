import { Test, TestingModule } from '@nestjs/testing';
import { StoreHoursController } from './store-hours.controller';
import { StoreHoursService } from './store-hours.service';

describe('StoreHoursController', () => {
  let controller: StoreHoursController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StoreHoursController],
      providers: [StoreHoursService],
    }).compile();

    controller = module.get<StoreHoursController>(StoreHoursController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
