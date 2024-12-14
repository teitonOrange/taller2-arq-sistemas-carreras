import { Controller, Get } from '@nestjs/common';
import { SubjectService } from './subject.service';
import { GrpcMethod } from '@nestjs/microservices';

@Controller('subject')
export class SubjectController {
    constructor(private readonly subjectService: SubjectService) {}
    @GrpcMethod('SubjectService', 'FindMany')
    async getAllSubjects(){
        return this.subjectService.findAll();
    }

    @GrpcMethod('SubjectService', 'FindMapObjects')
    async getMapObjects(){
        return this.subjectService.findMapObjects();
    }

    @GrpcMethod('SubjectService', 'FindPreRequisite')
    async getPreRequisite(){
        return this.subjectService.findPreRequisite();
    }

    @GrpcMethod('SubjectService', 'FindPostRequisite')
    async getPostRequisite(){
        return this.subjectService.findPostRequisite();
    }
    
}
