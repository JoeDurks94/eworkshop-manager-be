import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { DatabaseService } from '../database/database.service';
import { Role } from '@prisma/client';

describe('EmployeeController', () => {
  let controller: EmployeeController;

  const mockEmployee = {
    id: 1,
    name: 'John Doe',
    role: Role.TECHNICIAN,
    active: true,
    allocated_jobs: [],
  };

  const mockDatabaseService = {
    employee: {
      create: jest.fn().mockResolvedValue(mockEmployee),
      findMany: jest.fn().mockResolvedValue([mockEmployee]),
      findUnique: jest.fn().mockResolvedValue(mockEmployee),
      update: jest.fn().mockResolvedValue(mockEmployee),
      delete: jest.fn().mockResolvedValue(mockEmployee),
    },
  };

  const mockEmployeeService = {
    create: jest.fn().mockResolvedValue(mockEmployee),
    findAll: jest.fn().mockResolvedValue([mockEmployee]),
    findOne: jest.fn().mockResolvedValue(mockEmployee),
    update: jest.fn().mockResolvedValue(mockEmployee),
    remove: jest.fn().mockResolvedValue(mockEmployee),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeeController],
      providers: [
        {
          provide: EmployeeService,
          useValue: mockEmployeeService,
        },
        {
          provide: DatabaseService,
          useValue: mockDatabaseService,
        },
      ],
    }).compile();

    controller = module.get<EmployeeController>(EmployeeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create an employee', async () => {
      const createEmployeeDto = {
        name: 'John Doe',
        role: Role.TECHNICIAN,
        active: true,
        allocated_jobs: {
          create: [],
        },
      };

      expect(await controller.create(createEmployeeDto)).toEqual(mockEmployee);
      expect(mockEmployeeService.create).toHaveBeenCalledWith(
        createEmployeeDto,
      );
    });
  });

  describe('findAll', () => {
    it('should return an array of employees', async () => {
      expect(await controller.findAll()).toEqual([mockEmployee]);
      expect(mockEmployeeService.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a single employee', async () => {
      expect(await controller.findOne('1')).toEqual(mockEmployee);
      expect(mockEmployeeService.findOne).toHaveBeenCalledWith(1);
    });
  });

  describe('update', () => {
    it('should update an employee', async () => {
      const updateEmployeeDto = {
        name: 'Jane Doe',
        role: Role.MANAGER,
        active: false,
      };

      expect(await controller.update('1', updateEmployeeDto)).toEqual(
        mockEmployee,
      );
      expect(mockEmployeeService.update).toHaveBeenCalledWith(
        1,
        updateEmployeeDto,
      );
    });
  });

  describe('remove', () => {
    it('should remove an employee', async () => {
      expect(await controller.remove('1')).toEqual(mockEmployee);
      expect(mockEmployeeService.remove).toHaveBeenCalledWith(1);
    });
  });
});
