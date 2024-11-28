import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
export declare class EmployeeService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    create(createEmployeeDto: Prisma.EmployeeCreateInput): Prisma.Prisma__EmployeeClient<{
        id: number;
        name: string;
        role: import(".prisma/client").$Enums.Role;
        active: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): Promise<{
        id: number;
        name: string;
        role: import(".prisma/client").$Enums.Role;
        active: boolean;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        name: string;
        role: import(".prisma/client").$Enums.Role;
        active: boolean;
    }>;
    update(id: number, updateEmployeeDto: Prisma.EmployeeUpdateInput): Promise<{
        id: number;
        name: string;
        role: import(".prisma/client").$Enums.Role;
        active: boolean;
    }>;
    remove(id: number): Promise<{
        id: number;
        name: string;
        role: import(".prisma/client").$Enums.Role;
        active: boolean;
    }>;
}
