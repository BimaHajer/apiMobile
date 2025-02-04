import { Injectable } from '@nestjs/common';
import { CreatePorteurDto } from './dto/create-porteur.dto';
import { UpdatePorteurDto } from './dto/update-porteur.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Porteur } from './entities/porteur.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PorteurService {
  constructor(
    @InjectRepository(Porteur)
    private PorteurRepository: Repository<Porteur>,
  )
  {}
  create(createPorteurDto: CreatePorteurDto) {
    let porteur =this.PorteurRepository.create(createPorteurDto);
    return this.PorteurRepository.save(porteur);
  }

  findAll() {
    return this.PorteurRepository.findAndCount();
  }

  findOne(id: number) {
    return this.PorteurRepository.findOne({where:{id:id}});
  }

  async update(id: number, updatePorteurDto: UpdatePorteurDto) {
    let porteur =  await this.PorteurRepository.preload({
      id: +id,
      ...updatePorteurDto
    })
    return this.PorteurRepository.save(porteur);
  }

  remove(id: number) {
    return this.PorteurRepository.delete(id);
  }
}
