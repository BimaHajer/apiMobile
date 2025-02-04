import { Module } from '@nestjs/common';
import { PorteurService } from './porteur.service';
import { PorteurController } from './porteur.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Porteur } from './entities/porteur.entity';

@Module({
  controllers: [PorteurController],
  providers: [PorteurService],
  imports:[TypeOrmModule.forFeature([Porteur])],
})
export class PorteurModule {}
