import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CareerController } from './career/career.controller';
import { CareerModule } from './career/career.module';
import { SubjectService } from './subject/subject.service';
import { SubjectModule } from './subject/subject.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [CareerModule, SubjectModule, PrismaModule],
})
export class AppModule {}
