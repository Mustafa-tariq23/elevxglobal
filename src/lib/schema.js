import { z } from "zod"

// Job schema
export const jobSchema = z.object({
  title: z.string().min(1, "Job title is required"),
  department: z.string().min(1, "Department is required"),
  location: z.string().min(1, "Location is required"),
  type: z.enum(["onsite", "remote", "hybrid"]),
  description: z.string().min(1, "Description is required"),
  requirements: z.array(z.string()),
  responsibilities: z.array(z.string()),
  benefits: z.array(z.string()),
  aboutCompany: z.string().optional(),
  aboutRole: z.string().optional(),
  keyResponsibilities: z.array(z.string()).optional(),
  experienceRequired: z.string().optional(),
  workingDays: z.string().optional(),
  workingHours: z.string().optional(),
  aboutCompanyName: z.string().optional(),
})

// Job application schema
export const applicationSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 characters"),
  resume: z.any().refine((file) => file instanceof File, "Resume is required"),
  portfolio: z.string().url("Portfolio must be a valid URL"),
  reasonToSwitch: z.string().optional(),
  currentSalary: z.string().optional(),
  currentBenefits: z.string().optional(),
  expectedSalary: z.string().optional(),
  noticePeriod: z.string().min(1, "Notice period is required"),
  agreeToTerms: z.boolean().refine((val) => val === true, "You must agree to the terms and conditions"),
  jobId: z.string().min(1, "Job ID is required"),
  applicationDate: z.date().optional(),
  status: z.enum(["pending", "reviewed", "interviewed", "rejected", "hired"]).optional(),
})

