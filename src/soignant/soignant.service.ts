import { Injectable } from '@nestjs/common';
import { CreateSoignantDto } from './dto/create-soignant.dto';
import { UpdateSoignantDto } from './dto/update-soignant.dto';
import { Soignant } from './entities/soignant.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class SoignantService {
  constructor(
      @InjectRepository(Soignant)
      private SoignantRepository: Repository<Soignant>,
    ) {}
  async create(createSoignantDto: CreateSoignantDto) {
      const  soignantcreate=  (this.SoignantRepository.create(createSoignantDto))
      soignantcreate.password = await (await this.hashPassword(soignantcreate.password)).toString();
      console.log('user après hachage du mot de passe :', soignantcreate.password);
  
      return this.SoignantRepository.save(soignantcreate)// save on database
    }
      private async hashPassword(password: string): Promise<string> {
      const saltOrRounds = 15; 
      return bcrypt.hash(password, saltOrRounds);
    }
    
  findByEmail(email){
    return this.SoignantRepository.findOne({where:{email:email}})
  }


  findAll() {
    return this.SoignantRepository.findAndCount();
  }

  findOne(id: number) {
    return this.SoignantRepository.findOne({where:{id:id}});
  }

  async update(id: number, updateSoignantDto: UpdateSoignantDto) {
    let soignant =await this.SoignantRepository.preload({
      id:+id,
    ...updateSoignantDto
    })
    return this.SoignantRepository.save(soignant);
  }

  remove(id: number) {
    return this.SoignantRepository.delete(id);
  }
}
