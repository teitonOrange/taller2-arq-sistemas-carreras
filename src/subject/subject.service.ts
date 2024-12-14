import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SubjectService {
    constructor (private prisma: PrismaService) {}
    
    async findAll(){
        return await this.prisma.subject.findMany();
    }
}
