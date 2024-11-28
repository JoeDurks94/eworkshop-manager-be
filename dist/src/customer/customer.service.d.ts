import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
export declare class CustomerService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    create(createCustomerDto: Prisma.CustomerCreateInput): Prisma.Prisma__CustomerClient<{
        id: number;
        name: string;
        contact_name: string;
        contact_number: string;
        contact_email: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): Promise<{
        id: number;
        name: string;
        contact_name: string;
        contact_number: string;
        contact_email: string;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        name: string;
        contact_name: string;
        contact_number: string;
        contact_email: string;
    }>;
    update(id: number, updateCustomerDto: Prisma.CustomerUpdateInput): Promise<{
        id: number;
        name: string;
        contact_name: string;
        contact_number: string;
        contact_email: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        name: string;
        contact_name: string;
        contact_number: string;
        contact_email: string;
    }>;
}
