import { Controller, Get } from '@nestjs/common';
import { CareerService } from './career.service';

@Controller('career')
export class CareerController {
    constructor(private readonly careerService: CareerService) {}

    @Get()
    async getAllCareers(){
        return this.careerService.findAll();
    }
    

}
