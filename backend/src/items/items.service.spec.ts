import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Item } from './item.entity';
import { ItemsService } from './items.service';
import { Repository } from 'typeorm';

const itemArray = [
  {
    name: 'Thor',
    rating: 5,
  },
  {
    name: 'Thor 2',
    rating: 4,
  },
];

const oneItem = {
  name: 'Thor',
  rating: 5,
};

describe('ItemService', () => {
  let service: ItemsService;
  let repository: Repository<Item>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ItemsService,
        {
          provide: getRepositoryToken(Item),
          useValue: {
            find: jest.fn().mockResolvedValue(itemArray),
            findOne: jest.fn().mockResolvedValue(oneItem),
            save: jest.fn().mockResolvedValue(oneItem),
            remove: jest.fn(),
            delete: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<ItemsService>(ItemsService);
    repository = module.get<Repository<Item>>(getRepositoryToken(Item));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create()', () => {
    it('should successfully insert a item', () => {
      const oneItem = {
        name: 'Thor',
        rating: 5,
      };

      expect(
        service.create({
          name: 'Thor',
          rating: 5,
        }),
      ).resolves.toEqual(oneItem);
    });
  });

  describe('findAll()', () => {
    it('should return an array of items', async () => {
      const items = await service.findAll();
      expect(items).toEqual(itemArray);
    });
  });

  describe('findOne()', () => {
    it('should get a single item', () => {
      const repoSpy = jest.spyOn(repository, 'findOne');
      expect(service.findOne('1')).resolves.toEqual(oneItem);
      expect(repoSpy).toBeCalledWith('1');
    });
  });

  describe('remove()', () => {
    it('should call remove with the passed value', async () => {
      const removeSpy = jest.spyOn(repository, 'delete');
      const retVal = await service.remove('2');
      expect(removeSpy).toBeCalledWith('2');
      expect(retVal).toBeUndefined();
    });
  });
});
