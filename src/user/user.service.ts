import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  create(createUserDto: CreateUserDto) {
   let user=this.usersRepository.create(createUserDto)// create object user
   return this.usersRepository.save(user)// save on database
  }

  findAll() {
    return  this.usersRepository.findAndCount()
  }

  findOne(id: number) {
    return this.usersRepository.findOne({where:{id:id}})
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
   let user= await this.usersRepository.preload({
    id:+id,
    ...updateUserDto
   })
   return this.usersRepository.save(user)
  }

  remove(id: number) {
    return this.usersRepository.delete(id)
  }
}
