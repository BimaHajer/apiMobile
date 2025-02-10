import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { PorteurModule } from './porteur/porteur.module';
import { SoignantModule } from './soignant/soignant.module';



@Module({
  imports: [
    TypeOrmModule.forRootAsync({
    useFactory: () => ({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'foundDB',
      autoLoadEntities: true,
      synchronize: true,
        
    }),
  }),ConfigModule.forRoot(),UserModule, PorteurModule, SoignantModule,],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
