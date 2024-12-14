import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CareerService {
    constructor(private prisma: PrismaService) {}

    async findAll(){
        return await this.prisma.career.findMany();
    }
}
