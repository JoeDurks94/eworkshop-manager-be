-- CreateEnum
CREATE TYPE "Role" AS ENUM ('MANAGER', 'RECEPTION', 'TECHNICIAN', 'SUPERUSER');

-- CreateEnum
CREATE TYPE "CommentType" AS ENUM ('INFORMATION', 'COMPLAINT', 'CAUSE', 'CURE');

-- CreateTable
CREATE TABLE "Employee" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "active" BOOLEAN NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Customer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "contact_name" TEXT NOT NULL,
    "contact_number" TEXT NOT NULL,
    "contact_email" TEXT NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vehicles" (
    "id" SERIAL NOT NULL,
    "vrm" TEXT NOT NULL,
    "vin" TEXT NOT NULL,
    "make" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "using_customer_id" INTEGER NOT NULL,
    "owning_customer_id" INTEGER NOT NULL,

    CONSTRAINT "Vehicles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Jobcard" (
    "id" SERIAL NOT NULL,
    "jobcard_number" INTEGER NOT NULL,
    "vehicle_id" INTEGER NOT NULL,

    CONSTRAINT "Jobcard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Joblines" (
    "id" SERIAL NOT NULL,
    "jobcard_id" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "time_allocated" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Joblines_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AllocatedJobs" (
    "id" SERIAL NOT NULL,
    "jobcard_id" INTEGER NOT NULL,
    "employee_id" INTEGER NOT NULL,

    CONSTRAINT "AllocatedJobs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comments" (
    "id" SERIAL NOT NULL,
    "type" "CommentType" NOT NULL,
    "comment" TEXT NOT NULL,
    "jobline_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Comments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Jobcard_jobcard_number_key" ON "Jobcard"("jobcard_number");

-- AddForeignKey
ALTER TABLE "Vehicles" ADD CONSTRAINT "Vehicles_using_customer_id_fkey" FOREIGN KEY ("using_customer_id") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vehicles" ADD CONSTRAINT "Vehicles_owning_customer_id_fkey" FOREIGN KEY ("owning_customer_id") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Jobcard" ADD CONSTRAINT "Jobcard_vehicle_id_fkey" FOREIGN KEY ("vehicle_id") REFERENCES "Vehicles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Joblines" ADD CONSTRAINT "Joblines_jobcard_id_fkey" FOREIGN KEY ("jobcard_id") REFERENCES "Jobcard"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AllocatedJobs" ADD CONSTRAINT "AllocatedJobs_jobcard_id_fkey" FOREIGN KEY ("jobcard_id") REFERENCES "Jobcard"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AllocatedJobs" ADD CONSTRAINT "AllocatedJobs_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_jobline_id_fkey" FOREIGN KEY ("jobline_id") REFERENCES "Joblines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
