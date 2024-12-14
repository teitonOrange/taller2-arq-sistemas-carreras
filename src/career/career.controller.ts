import { Controller, Get } from '@nestjs/common';
import { CareerService } from './career.service';
import { GrpcMethod } from '@nestjs/microservices';

@Controller('career')
export class CareerController {
    constructor(private readonly careerService: CareerService) {}
    @GrpcMethod('CareerService', 'FindMany')
    async findMany(){
        return this.careerService.findAll();
    } 

}
