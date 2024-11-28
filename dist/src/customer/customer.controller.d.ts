import { CustomerService } from './customer.service';
import { Prisma } from '@prisma/client';
export declare class CustomerController {
    private readonly customerService;
    constructor(customerService: CustomerService);
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
    findOne(id: string): Promise<{
        id: number;
        name: string;
        contact_name: string;
        contact_number: string;
        contact_email: string;
    }>;
    update(id: string, updateCustomerDto: Prisma.CustomerUpdateInput): Promise<{
        id: number;
        name: string;
        contact_name: string;
        contact_number: string;
        contact_email: string;
    }>;
    remove(id: string): Promise<{
        id: number;
        name: string;
        contact_name: string;
        contact_number: string;
        contact_email: string;
    }>;
}
