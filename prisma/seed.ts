import { PrismaClient } from "@prisma/client";
import fs from "fs/promises";
import careers from "./data/CareersData.json";
import subjects from "./data/SubjectsData.json";
import requisiteRelationship from "./data/SubjectsRelationsData.json";


async function seed() {
    const prisma = new PrismaClient();
    await prisma.requisiteRelationship.deleteMany();   
    await prisma.subject.deleteMany();   
    await prisma.career.deleteMany();   

    for (let i = 0; i < careers.length; i++) {
        await prisma.career.upsert({
            where: {
                name: careers[i].Name,
            },
            create: {
                name: careers[i].Name,
            },
            update: {
                name: careers[i].Name,
            },
        });
    }

    await prisma.subject.createMany({
        data: subjects.map((subject) => ({
            code: subject.code,
            name: subject.name,
            department: subject.department,
            credits: subject.credits,
            semester: subject.semester,

        }))
    });


    for (let i = 0; i < requisiteRelationship.length; i++) {
        await prisma.requisiteRelationship.create({
            data: {
                subject: {
                    connect: {
                        code: requisiteRelationship[i].SubjectCode,
                    },
                },
                prerequisite: {
                    connect: {
                        code: requisiteRelationship[i].PreSubjectCode
                    }
                }
            }
        });
    }
    
    

    prisma.$disconnect();
}

seed()
