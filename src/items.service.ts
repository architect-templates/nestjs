import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from './item.entity.js';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item)
    private readonly itemsRepository: Repository<Item>,
  ) {}

  create(name: string, rating: number): Promise<Item> {
    const item = new Item();
    item.name = name;
    item.rating = rating;

    return this.itemsRepository.save(item);
  }

  findAll(): Promise<Item[]> {
    return this.itemsRepository.find();
  }

  delete(id: number) {
    return this.itemsRepository.delete(id);
  }
}
