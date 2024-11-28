import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeService } from './employee.service';
import { DatabaseService } from '../database/database.service';
import { Prisma, Role } from '@prisma/client';

describe('EmployeeService', () => {
  let service: EmployeeService;

  // Mock employee data for testing
  const mockEmployee = {
    id: 1,
    name: 'John Doe',
    role: Role.TECHNICIAN,
    active: true,
    allocated_jobs: [],
  };

  // Create mock database service with all required methods
  const mockDatabaseService = {
    employee: {
      create: jest.fn().mockResolvedValue(mockEmployee),
      findMany: jest.fn().mockResolvedValue([mockEmployee]),
      findUnique: jest.fn().mockResolvedValue(mockEmployee),
      update: jest.fn().mockResolvedValue(mockEmployee),
      delete: jest.fn().mockResolvedValue(mockEmployee),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EmployeeService,
        {
          provide: DatabaseService,
          useValue: mockDatabaseService,
        },
      ],
    }).compile();

    service = module.get<EmployeeService>(EmployeeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create an employee', async () => {
      const createEmployeeDto: Prisma.EmployeeCreateInput = {
        name: 'John Doe',
        role: Role.TECHNICIAN,
        active: true,
        allocated_jobs: {
          create: [],
        },
      };

      const result = await service.create(createEmployeeDto);

      expect(result).toEqual(mockEmployee);
      expect(mockDatabaseService.employee.create).toHaveBeenCalledWith({
        data: createEmployeeDto,
      });
    });
  });

  describe('findAll', () => {
    it('should return array of employees', async () => {
      const result = await service.findAll();

      expect(result).toEqual([mockEmployee]);
      expect(mockDatabaseService.employee.findMany).toHaveBeenCalledWith({
        orderBy: {
          name: 'asc',
        },
      });
    });
  });

  describe('findOne', () => {
    it('should return a single employee', async () => {
      const result = await service.findOne(1);

      expect(result).toEqual(mockEmployee);
      expect(mockDatabaseService.employee.findUnique).toHaveBeenCalledWith({
        where: { id: 1 },
      });
    });
  });

  describe('update', () => {
    it('should update an employee', async () => {
      const updateEmployeeDto: Prisma.EmployeeUpdateInput = {
        name: 'Jane Doe',
        role: Role.MANAGER,
        active: false,
        allocated_jobs: {
          create: [],
        },
      };

      const result = await service.update(1, updateEmployeeDto);

      expect(result).toEqual(mockEmployee);
      expect(mockDatabaseService.employee.update).toHaveBeenCalledWith({
        where: { id: 1 },
        data: updateEmployeeDto,
      });
    });
  });

  describe('remove', () => {
    it('should remove an employee', async () => {
      const result = await service.remove(1);

      expect(result).toEqual(mockEmployee);
      expect(mockDatabaseService.employee.delete).toHaveBeenCalledWith({
        where: { id: 1 },
      });
    });
  });
});
