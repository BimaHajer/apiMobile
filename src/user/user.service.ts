import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}


  async create(createUserDto: CreateUserDto) {
    const  usercreate=await (this.usersRepository.create(createUserDto))
    usercreate.password = await (await this.hashPassword(usercreate.password)).toString()
    console.log('user après hachage du mot de passe :', usercreate.password);

    return this.usersRepository.save(usercreate)// save on database
  }
    private async hashPassword(password: string): Promise<string> {
    const saltOrRounds = 15; 
    return bcrypt.hash(password, saltOrRounds);
  }
  

  findAll() {
    return  this.usersRepository.findAndCount()
  }

  findOne(id: number) {
    return this.usersRepository.findOne({where:{id:id}})
  }
  findByEmail(email) {
    return this.usersRepository.findOne({where:{email:email}})
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
