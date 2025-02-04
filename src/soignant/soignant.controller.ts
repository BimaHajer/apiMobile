import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SoignantService } from './soignant.service';
import { CreateSoignantDto } from './dto/create-soignant.dto';
import { UpdateSoignantDto } from './dto/update-soignant.dto';

@Controller('soignant')
export class SoignantController {
  constructor(private readonly soignantService: SoignantService) {}

  @Post('create-soignant')
  create(@Body() createSoignantDto: CreateSoignantDto) {
    return this.soignantService.create(createSoignantDto);
  }

  @Get('list-soignant')
  findAll() {
    return this.soignantService.findAll();
  }

  @Get('soignant/:id')
  findOne(@Param('id') id: string) {
    return this.soignantService.findOne(+id);
  }

  @Patch('update-soignant/:id')
  update(@Param('id') id: string, @Body() updateSoignantDto: UpdateSoignantDto) {
    return this.soignantService.update(+id, updateSoignantDto);
  }

  @Delete('delete-soignant/:id')
  remove(@Param('id') id: string) {
    return this.soignantService.remove(+id);
  }
}
