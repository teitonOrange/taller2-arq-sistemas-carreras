import { Module } from '@nestjs/common';
import { SubjectService } from './subject.service';
import { PrismaModule } from '../prisma/prisma.module';
import { SubjectController } from './subject.controller';
@Module({
  providers: [SubjectService],
  controllers: [SubjectController],
  imports : [PrismaModule]
})
export class SubjectModule {}
