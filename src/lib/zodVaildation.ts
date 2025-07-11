import { z } from "zod";

export const FleetManagerRegFormSchema = z
  .object({
    fullName: z.string().min(1, "Full name is required"),
    email: z
      .string()
      .min(1, "Email is required")
      .email("Please enter a valid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    confirmPassword: z
      .string()
      .min(6, "Confirm password must be at least 6 characters long"),
    businessName: z.string().min(1, "Business name is required"),
    phoneNumber: z
      .string()
      .min(6, "Phone number must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export const LoginFormSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export const AddDriverFormSchema = z.object({
  FullName: z.string().min(1, "Full name is required"),
  DoB: z.string().min(1, "Date of birth is required"),
  Gender: z.string().min(1, "Gender is required"),
  ContactNumber: z.string().min(1, "Contact number is required"),
  HomeAddress: z.string().min(1, "Home address is required"),
  EmergencyContactInformation: z
    .string()
    .min(1, "Emergency contact information is required"),
  DriverLicence: z
    .any()
    .refine(
      (file) =>
        file instanceof File || (typeof window !== "undefined" && file?.uri),
      {
        message: "A valid driver’s license image is required",
      }
    ),
  AssignVehicle: z.string().optional(),
});

export const AddVehicleFormSchema = z.object({
  VehicleType: z.string().min(1, "Please select a vehicle type"),
  Make: z.string().min(1, "Make is required"),
  Model: z.string().min(1, "Model is required"),
  Year: z
    .string()
    .min(4, "Enter a valid year")
    .regex(/^\d{4}$/, "Year must be a 4-digit number"),
  Color: z.string().min(1, "Color is required"),
  LicensePlateNumber: z.string().min(1, "License plate number is required"),
  AssignedDriver: z.string().optional(),
  VehicleStatus: z.enum([
    "Available",
    "In Use",
    "Under Maintenance",
    "Disabled",
  ]),
  VehicleImage: z.string().url("Vehicle image must be a valid URL").optional(),
});

export const FleetManagerProfileFormSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),

  businessName: z.string().min(1, "Business name is required"),
  phoneNumber: z.string().min(6, "Phone number must be at least 6 characters"),
});

export const FleetManagerChangePWSchema = z
  .object({
    oldPassword: z.string().min(1, "Olid password is required"),
    password: z
      .string()
      .min(6, "New Password must be at least 6 characters long"),
    confirmPassword: z
      .string()
      .min(6, "Confirm password must be at least 6 characters long"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export const CategoryFormSchema = z.object({
  CategoryName: z.string().min(1, "Category Name is required"),
  CategoryIcon: z
    .any()
    .refine(
      (file) =>
        file instanceof File || (typeof window !== "undefined" && file?.uri),
      {
        message: "A valid image is required",
      }
    ),
});

export const ProductFormSchema = z.object({
  ProductName: z.string().min(1, "Product name is required"),
  Category: z.string().min(1, "Category is required"),
  Price: z
    .string()
    .min(1, "Price is required")
    .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
      message: "Price must be a positive number",
    }),
  Stock: z
    .string()
    .min(1, "Stock is required")
    .refine((val) => Number.isInteger(Number(val)) && Number(val) >= 0, {
      message: "Stock must be a valid integer (0 or more)",
    }),
  ShortDescription: z.string().min(1, "Short description is required"),
  LongDescription: z.string().min(1, "Long description is required"),

  // Images: Image1 is required, others are optional
  Image1: z
    .any()
    .refine(
      (file) =>
        file instanceof File || (typeof window !== "undefined" && file?.uri),
      {
        message: "A valid image is required",
      }
    ),

  Image2: z
    .any()
    .optional()
    .refine(
      (file) =>
        file instanceof File || (typeof window !== "undefined" && file?.uri),
      {
        message: "Invalid image",
      }
    ),

  Image3: z
    .any()
    .optional()
    .refine(
      (file) =>
        file instanceof File || (typeof window !== "undefined" && file?.uri),
      {
        message: "Invalid image",
      }
    ),

  Image4: z
    .any()
    .optional()
    .refine(
      (file) =>
        file instanceof File || (typeof window !== "undefined" && file?.uri),
      {
        message: "Invalid image",
      }
    ),
});
