import { Injectable } from '@nestjs/common';
import { CreateSoignantDto } from './dto/create-soignant.dto';
import { UpdateSoignantDto } from './dto/update-soignant.dto';
import { Soignant } from './entities/soignant.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SoignantService {
  soignantRepository: any;
  constructor(
      @InjectRepository(Soignant)
      private SoignantRepository: Repository<Soignant>,
    ) {}
  create(createSoignantDto: CreateSoignantDto) {
    let soignant = this.soignantRepository.create(createSoignantDto);
    return this.soignantRepository.save(soignant);
  }

  findAll() {
    return this.soignantRepository.findAll();
  }

  findOne(id: number) {
    return this.soignantRepository.findOne(id);
  }

  update(id: number, updateSoignantDto: UpdateSoignantDto) {
    let soignant = this.soignantRepository.preload({
      id:+id,
    ...updateSoignantDto
    })
    return this.soignantRepository.save(soignant);
  }

  remove(id: number) {
    return this.soignantRepository.delete(id);
  }
}
