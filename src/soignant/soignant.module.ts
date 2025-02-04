import { Module } from '@nestjs/common';
import { SoignantService } from './soignant.service';
import { SoignantController } from './soignant.controller';
import { Soignant } from './entities/soignant.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [SoignantController],
  providers: [SoignantService],
  imports:[TypeOrmModule.forFeature([Soignant])],
})
export class SoignantModule {}
