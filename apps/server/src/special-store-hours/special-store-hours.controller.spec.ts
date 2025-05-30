import { Test, TestingModule } from '@nestjs/testing';
import { SpecialStoreHoursController } from './special-store-hours.controller';
import { SpecialStoreHoursService } from './special-store-hours.service';

describe('SpecialStoreHoursController', () => {
  let controller: SpecialStoreHoursController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpecialStoreHoursController],
      providers: [SpecialStoreHoursService],
    }).compile();

    controller = module.get<SpecialStoreHoursController>(SpecialStoreHoursController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
