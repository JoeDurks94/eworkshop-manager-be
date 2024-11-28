import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
export declare class VehicleService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    create(createVehicleDto: Prisma.VehiclesCreateInput): Prisma.Prisma__VehiclesClient<{
        id: number;
        vrm: string;
        vin: string;
        make: string;
        model: string;
        using_customer_id: number;
        owning_customer_id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): Prisma.PrismaPromise<{
        id: number;
        vrm: string;
        vin: string;
        make: string;
        model: string;
        using_customer_id: number;
        owning_customer_id: number;
    }[]>;
    findOne(id: number): Prisma.Prisma__VehiclesClient<{
        id: number;
        vrm: string;
        vin: string;
        make: string;
        model: string;
        using_customer_id: number;
        owning_customer_id: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateVehicleDto: Prisma.VehiclesUpdateInput): Prisma.Prisma__VehiclesClient<{
        id: number;
        vrm: string;
        vin: string;
        make: string;
        model: string;
        using_customer_id: number;
        owning_customer_id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): Prisma.Prisma__VehiclesClient<{
        id: number;
        vrm: string;
        vin: string;
        make: string;
        model: string;
        using_customer_id: number;
        owning_customer_id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
