import { EmployeeService } from './employee.service';
import { Prisma } from '@prisma/client';
export declare class EmployeeController {
    private readonly employeeService;
    constructor(employeeService: EmployeeService);
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
    findOne(id: string): Promise<{
        id: number;
        name: string;
        role: import(".prisma/client").$Enums.Role;
        active: boolean;
    }>;
    update(id: string, updateEmployeeDto: Prisma.EmployeeUpdateInput): Promise<{
        id: number;
        name: string;
        role: import(".prisma/client").$Enums.Role;
        active: boolean;
    }>;
    remove(id: string): Promise<{
        id: number;
        name: string;
        role: import(".prisma/client").$Enums.Role;
        active: boolean;
    }>;
}
