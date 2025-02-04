import { PartialType } from '@nestjs/mapped-types';
import { CreateSoignantDto } from './create-soignant.dto';

export class UpdateSoignantDto extends PartialType(CreateSoignantDto) {}
