import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class VehicleService {
  constructor(private readonly databaseService: DatabaseService) {}
  create(createVehicleDto: Prisma.VehiclesCreateInput) {
    return this.databaseService.vehicles.create({
      data: createVehicleDto,
    });
  }

  findAll() {
    return this.databaseService.vehicles.findMany({});
  }

  findOne(id: number) {
    return this.databaseService.vehicles.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateVehicleDto: Prisma.VehiclesUpdateInput) {
    return this.databaseService.vehicles.update({
      where: {
        id,
      },
      data: updateVehicleDto,
    });
  }

  remove(id: number) {
    return this.databaseService.vehicles.delete({
      where: {
        id,
      },
    });
  }
}
