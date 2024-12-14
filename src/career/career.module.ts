import { Module } from '@nestjs/common';
import { CareerService } from './career.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CareerController } from './career.controller';

@Module({
  providers: [CareerService],
  controllers: [CareerController],
  imports: [PrismaModule],
})
export class CareerModule {}
