import { z } from "zod";

export const createUserSchema = z.object({
  name: z
    .string()
    .min(1, "El nombre es obligatorio."),

  email: z
    .email("El correo electrónico no es válido."),

  password: z
    .string()
    .min(6, "La contraseña debe tener al menos 6 caracteres.")
});
export type CreateUserInput = z.infer<typeof createUserSchema>;