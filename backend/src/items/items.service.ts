import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateItemDto } from './dto/create-item.dto';
import { Item } from './item.entity';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item)
    private readonly itemsRepository: Repository<Item>,
  ) {}

  create(createItemDto: CreateItemDto): Promise<Item> {
    const item = new Item();
    item.name = createItemDto.name;
    item.rating = createItemDto.rating;

    return this.itemsRepository.save(item);
  }

  findAll(): Promise<Item[]> {
    return this.itemsRepository.find();
  }

  findOne(id: string): Promise<Item> {
    return this.itemsRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.itemsRepository.delete(id);
  }
}
