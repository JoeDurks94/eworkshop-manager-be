// prisma/seed.ts
import { PrismaClient, Role, CommentType } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create 10 Employees
  const employees = await Promise.all([
    prisma.employee.create({
      data: { name: 'John Smith', role: 'MANAGER', active: true },
    }),
    prisma.employee.create({
      data: { name: 'Sarah Johnson', role: 'RECEPTION', active: true },
    }),
    prisma.employee.create({
      data: { name: 'Mike Brown', role: 'TECHNICIAN', active: true },
    }),
    prisma.employee.create({
      data: { name: 'David Wilson', role: 'TECHNICIAN', active: true },
    }),
    prisma.employee.create({
      data: { name: 'Emma Davis', role: 'TECHNICIAN', active: true },
    }),
    prisma.employee.create({
      data: { name: 'James Miller', role: 'MANAGER', active: true },
    }),
    prisma.employee.create({
      data: { name: 'Lisa Anderson', role: 'RECEPTION', active: true },
    }),
    prisma.employee.create({
      data: { name: 'Tom Harris', role: 'TECHNICIAN', active: true },
    }),
    prisma.employee.create({
      data: { name: 'Steve Taylor', role: 'SUPERUSER', active: true },
    }),
    prisma.employee.create({
      data: { name: 'Rachel White', role: 'TECHNICIAN', active: false },
    }),
  ]);

  // Create 15 Customers
  const customers = await Promise.all([
    prisma.customer.create({
      data: {
        name: 'ABC Logistics Ltd',
        contact_name: 'Alice Brown',
        contact_number: '0123456789',
        contact_email: 'alice@abclogistics.com',
      },
    }),
    prisma.customer.create({
      data: {
        name: 'XYZ Transport',
        contact_name: 'Bob Wilson',
        contact_number: '0123456790',
        contact_email: 'bob@xyztransport.com',
      },
    }),
    prisma.customer.create({
      data: {
        name: 'FastTrack Deliveries',
        contact_name: 'Carol Davis',
        contact_number: '0123456791',
        contact_email: 'carol@fasttrack.com',
      },
    }),
    prisma.customer.create({
      data: {
        name: 'City Movers Ltd',
        contact_name: 'David Brown',
        contact_number: '0123456792',
        contact_email: 'david@citymovers.com',
      },
    }),
    prisma.customer.create({
      data: {
        name: 'Express Logistics',
        contact_name: 'Eve Wilson',
        contact_number: '0123456793',
        contact_email: 'eve@expresslog.com',
      },
    }),
    prisma.customer.create({
      data: {
        name: 'Global Transport Co',
        contact_name: 'Frank Johnson',
        contact_number: '0123456794',
        contact_email: 'frank@globaltransport.com',
      },
    }),
    prisma.customer.create({
      data: {
        name: 'Highway Haulage',
        contact_name: 'Grace Lee',
        contact_number: '0123456795',
        contact_email: 'grace@highwayhaulage.com',
      },
    }),
    prisma.customer.create({
      data: {
        name: 'InterCity Freight',
        contact_name: 'Henry Clark',
        contact_number: '0123456796',
        contact_email: 'henry@intercity.com',
      },
    }),
    prisma.customer.create({
      data: {
        name: 'JetSpeed Carriers',
        contact_name: 'Ian Baker',
        contact_number: '0123456797',
        contact_email: 'ian@jetspeed.com',
      },
    }),
    prisma.customer.create({
      data: {
        name: 'Kings Transport',
        contact_name: 'Julia Adams',
        contact_number: '0123456798',
        contact_email: 'julia@kings.com',
      },
    }),
    prisma.customer.create({
      data: {
        name: 'Local Logistics',
        contact_name: 'Kevin White',
        contact_number: '0123456799',
        contact_email: 'kevin@locallog.com',
      },
    }),
    prisma.customer.create({
      data: {
        name: 'Metro Movers',
        contact_name: 'Laura Green',
        contact_number: '0123456800',
        contact_email: 'laura@metro.com',
      },
    }),
    prisma.customer.create({
      data: {
        name: 'Northern Haulage',
        contact_name: 'Mark Taylor',
        contact_number: '0123456801',
        contact_email: 'mark@northern.com',
      },
    }),
    prisma.customer.create({
      data: {
        name: 'Ocean Freight Ltd',
        contact_name: 'Nina Martin',
        contact_number: '0123456802',
        contact_email: 'nina@ocean.com',
      },
    }),
    prisma.customer.create({
      data: {
        name: 'Premier Transport',
        contact_name: 'Oscar Wilson',
        contact_number: '0123456803',
        contact_email: 'oscar@premier.com',
      },
    }),
  ]);

  // Create 20 Vehicles
  const vehicleMakes = ['Volvo', 'Mercedes', 'Scania', 'DAF', 'MAN'];
  const vehicleModels = ['FH16', 'Actros', 'R450', 'XF', 'TGX'];

  const vehicles = await Promise.all(
    Array(20)
      .fill(null)
      .map((_, i) => {
        const makeIndex = Math.floor(i / 4);
        return prisma.vehicles.create({
          data: {
            vrm: `AB${(i + 10).toString().padStart(2, '0')} XYZ`,
            vin: `VIN${(1000 + i).toString().padStart(6, '0')}`,
            make: vehicleMakes[makeIndex],
            model: vehicleModels[makeIndex],
            using_customer_id: customers[i % 15].id,
            owning_customer_id: customers[Math.floor(i / 2)].id,
          },
        });
      }),
  );

  // Get all active technicians before creating jobcards
  const activeTechnicians = await prisma.employee.findMany({
    where: {
      role: 'TECHNICIAN',
      active: true,
    },
  });

  if (activeTechnicians.length === 0) {
    throw new Error('No active technicians found to allocate jobs to');
  }

  // Create 30 Jobcards with multiple Joblines and allocate to technicians
  const jobDescriptions = [
    'Annual Service',
    'Interim Service',
    'Brake Check',
    'Oil Change',
    'Tire Replacement',
    'Engine Diagnostic',
    'Exhaust Repair',
    'AC Service',
    'Battery Replacement',
    'Clutch Repair',
  ];

  for (let i = 0; i < 30; i++) {
    const jobcard = await prisma.jobcard.create({
      data: {
        jobcard_number: 1001 + i,
        vehicle_id: vehicles[i % 20].id,
        joblines: {
          create: [
            {
              description: jobDescriptions[Math.floor(Math.random() * 10)],
              time_allocated: (Math.floor(Math.random() * 8) + 1) * 0.5,
            },
            {
              description: jobDescriptions[Math.floor(Math.random() * 10)],
              time_allocated: (Math.floor(Math.random() * 8) + 1) * 0.5,
            },
            {
              description: jobDescriptions[Math.floor(Math.random() * 10)],
              time_allocated: (Math.floor(Math.random() * 8) + 1) * 0.5,
            },
          ],
        },
      },
    });

    // Assign job to a random active technician
    const randomTechnician =
      activeTechnicians[Math.floor(Math.random() * activeTechnicians.length)];

    await prisma.allocatedJobs.create({
      data: {
        employee_id: randomTechnician.id,
        jobcard_id: jobcard.id,
      },
    });
  }

  const commentTypes: CommentType[] = [
    'INFORMATION',
    'COMPLAINT',
    'CAUSE',
    'CURE',
  ];
  const commentTemplates = {
    INFORMATION: [
      'Regular maintenance schedule updated',
      'Vehicle documentation received',
      'New service requirements noted',
      'Updated contact information',
      'Warranty information updated',
      'Service history reviewed',
      'Maintenance plan created',
      'Vehicle inspection completed',
      'Documentation filed',
      'Customer preferences noted',
    ],
    COMPLAINT: [
      'Engine noise when accelerating',
      'Brake squeal during stopping',
      'Poor fuel efficiency',
      'Difficulty starting in cold weather',
      'Transmission shifting issues',
      'Steering wheel vibration',
      'AC not cooling effectively',
      'Dashboard warning light on',
      'Unusual exhaust smoke',
      'Electrical system issues',
    ],
    CAUSE: [
      'Worn brake pads',
      'Faulty fuel injector',
      'Loose drive belt',
      'Failed sensor',
      'Low fluid levels',
      'Worn clutch plate',
      'Blocked filter',
      'Damaged bearing',
      'Corroded battery terminals',
      'Misaligned wheels',
    ],
    CURE: [
      'Replaced brake pads and discs',
      'Cleaned and calibrated injectors',
      'Replaced drive belt',
      'Installed new sensor',
      'Topped up all fluids',
      'Fitted new clutch assembly',
      'Replaced all filters',
      'Installed new bearings',
      'Cleaned and protected terminals',
      'Performed wheel alignment',
    ],
  };

  const joblines = await prisma.joblines.findMany();

  if (joblines.length === 0) {
    throw new Error('No joblines found to associate comments with');
  }

  // Get all employees that can make comments (assuming all active employees can comment)
  const commentingEmployees = await prisma.employee.findMany({
    where: {
      active: true,
    },
  });

  if (commentingEmployees.length === 0) {
    throw new Error('No active employees found to associate with comments');
  }

  for (const type of commentTypes) {
    await Promise.all(
      commentTemplates[type].map((comment, index) =>
        prisma.comments.create({
          data: {
            type,
            comment,
            created_at: new Date(),
            employee: {
              connect: {
                id: commentingEmployees[index % commentingEmployees.length].id,
              },
            },
            joblines: {
              connect: {
                id: joblines[index % joblines.length].id,
              },
            },
          },
        }),
      ),
    );
  }

  console.log('Seed data inserted successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
