import { de, tr } from '@faker-js/faker/.';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SubjectService {
    constructor (private prisma: PrismaService) {}
    
    async findAll(){
        const subjects =  await this.prisma.subject.findMany(
            {
                select: {
                    code: true,
                    name: true,
                    department: true,
                    credits: true,
                    semester: true,
                    id: true,
                }

            },
        );
        return {
            subjects,
        }
    }
    async findMapObjects(){
        const subjectsRelations = await this.prisma.requisiteRelationship.findMany(
            {
                
                select:{
                    id: true,
                    subject: {
                        select: {
                            code: true,
                            name: true,
                            department: true,
                            credits: true,
                            semester: true,
                            id: true,
                        }
                    },
                    prerequisite: {
                        select: {
                            code: true,
                            name: true,
                            department: true,
                            credits: true,
                            semester: true,
                            id: true,
                        }
                    },
                                 
                }
            }
        )
            
        return {
            requisiteRelationships: subjectsRelations.map((subject) => {
                return {
                    subjectCode: subject.subject.code,
                    preSubjectCode: subject.prerequisite.code,
                    department: subject.subject.department,
                    id: subject.id,

                }
            })
        }
        
    }

    async findPreRequisite(){
        const preRequisite = await this.prisma.subject.findMany(
            {
                select: {
                    code: true,
                    postrequisites: {
                        select: {
                            prerequisite: {
                                select: {
                                    code: true,
                                }
                            },
                            subject: {
                                select: {
                                    code: true,
                                }
                            }
                        }
                    }
                }   
            }
        );
        
        return {
           subjectPreRequisites: preRequisite.map((subject) => {
               return {
                    subjectCode: subject.code,
                    preRequisiteCodes: subject.postrequisites.map(
                        (postrequisite) => {
                          return postrequisite.prerequisite.code
                          
                        }
                    )
                }
            })           
        
        }
    }

    async findPostRequisite(){
        const preRequisite = await this.prisma.subject.findMany(
            {
                select: {
                    code: true,
                    prerequisites: {
                        select: {
                            prerequisite: {
                                select: {
                                    code: true,
                                }
                            },
                            subject: {
                                select: {
                                    code: true,
                                }
                            }
                        }
                    }
                }   
            }
        );
        
        return {
           subjectPostRequisites: preRequisite.map((subject) => {
               return {
                    subjectCode: subject.code,
                    postRequisiteCodes: subject.prerequisites.map(
                        (postrequisite) => {
                          return postrequisite.subject.code
                          
                        }
                    )
                }
            })           
        
        }


    


    }
}
