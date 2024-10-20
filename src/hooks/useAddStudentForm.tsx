import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

enum maritalStatus {
  Single = "single",
  Married = "married",
}

const schema = z.object({
  userName: z.string().min(3),
  firstName: z.string().min(3),
  lastName: z.string().min(3),
  fatherName: z.string().min(3),
  email: z.string().email(),
  phone: z
    .string()
    .min(9)
    .regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format"),
  age: z
    .number()
    .min(18, "Age must be at least 18")
    .max(100, "Age must be at most 100")
    .refine((value) => Number.isInteger(value), "Age must be a whole number"),
  maritalStatus: z.nativeEnum(maritalStatus, {
    errorMap: () => ({ message: "Please select a valid marital status" }),
  }),
  field: z.enum(["web-development", "e-commerce", "graphic-design"], {
    errorMap: () => ({ message: "Please select a valid field type" }),
  }),
});

type FormFieldsType = z.infer<typeof schema>;

const useAddStudentForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormFieldsType>({ resolver: zodResolver(schema) });

  return { register, handleSubmit, errors, reset };
};

export default useAddStudentForm;
