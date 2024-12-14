import { Controller, Get } from '@nestjs/common';
import { SubjectService } from './subject.service';

@Controller('subject')
export class SubjectController {
    constructor(private readonly subjectService: SubjectService) {}

    @Get()
    async getAllSubjects(){
        return this.subjectService.findAll();
    }
}
