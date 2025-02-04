import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PorteurService } from './porteur.service';
import { CreatePorteurDto } from './dto/create-porteur.dto';
import { UpdatePorteurDto } from './dto/update-porteur.dto';

@Controller('porteur')
export class PorteurController {
  constructor(private readonly porteurService: PorteurService) {}

  @Post('create-porteur')
  create(@Body() createPorteurDto: CreatePorteurDto) {
    return this.porteurService.create(createPorteurDto);
  }

  @Get('list-porteur')
  findAll() {
    return this.porteurService.findAll();
  }

  @Get('porteur/:id')
  findOne(@Param('id') id: string) {
    return this.porteurService.findOne(+id);
  }

  @Patch('update-porteur/:id')
  update(@Param('id') id: string, @Body() updatePorteurDto: UpdatePorteurDto) {
    return this.porteurService.update(+id, updatePorteurDto);
  }

  @Delete('delete-porteur/:id')
  remove(@Param('id') id: string) {
    return this.porteurService.remove(+id);
  }
}
