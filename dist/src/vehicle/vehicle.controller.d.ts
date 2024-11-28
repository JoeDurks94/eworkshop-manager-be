import { VehicleService } from './vehicle.service';
import { Prisma } from '@prisma/client';
export declare class VehicleController {
    private readonly vehicleService;
    constructor(vehicleService: VehicleService);
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
    findOne(id: string): Prisma.Prisma__VehiclesClient<{
        id: number;
        vrm: string;
        vin: string;
        make: string;
        model: string;
        using_customer_id: number;
        owning_customer_id: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateVehicleDto: Prisma.VehiclesUpdateInput): Prisma.Prisma__VehiclesClient<{
        id: number;
        vrm: string;
        vin: string;
        make: string;
        model: string;
        using_customer_id: number;
        owning_customer_id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): Prisma.Prisma__VehiclesClient<{
        id: number;
        vrm: string;
        vin: string;
        make: string;
        model: string;
        using_customer_id: number;
        owning_customer_id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
