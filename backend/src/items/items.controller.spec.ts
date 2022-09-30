import { Test, TestingModule } from '@nestjs/testing';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';

const createItemDto: CreateItemDto = {
  name: 'Thor',
  rating: 5,
};

describe('ItemsController', () => {
  let itemsController: ItemsController;
  let itemsService: ItemsService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ItemsController],
      providers: [
        ItemsService,
        {
          provide: ItemsService,
          useValue: {
            create: jest
              .fn()
              .mockImplementation((item: CreateItemDto) =>
                Promise.resolve({ id: '1', ...item }),
              ),
            findAll: jest.fn().mockResolvedValue([
              {
                name: 'Thor',
                rating: 5,
              },
              {
                name: 'Thor 2',
                rating: 4,
              },
            ]),
            findOne: jest.fn().mockImplementation((id: string) =>
              Promise.resolve({
                name: 'Thor',
                rating: 5,
                id,
              }),
            ),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    itemsController = app.get<ItemsController>(ItemsController);
    itemsService = app.get<ItemsService>(ItemsService);
  });

  it('should be defined', () => {
    expect(itemsController).toBeDefined();
  });

  describe('create()', () => {
    it('should create a item', () => {
      itemsController.create(createItemDto);
      expect(itemsController.create(createItemDto)).resolves.toEqual({
        id: '1',
        ...createItemDto,
      });
      expect(itemsService.create).toHaveBeenCalledWith(createItemDto);
    });
  });

  describe('findAll()', () => {
    it('should find all items ', () => {
      itemsController.findAll();
      expect(itemsService.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne()', () => {
    it('should find a item', () => {
      expect(itemsController.findOne('1')).resolves.toEqual({
        name: 'Thor',
        rating: 5,
        id: '1',
      });
      expect(itemsService.findOne).toHaveBeenCalled();
    });
  });

  describe('remove()', () => {
    it('should remove the item', () => {
      itemsController.remove('2');
      expect(itemsService.remove).toHaveBeenCalled();
    });
  });
});
