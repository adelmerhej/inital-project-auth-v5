import { z } from 'zod'

export const LoginSchema = z.object({
  email: z.string().email('Email is required'),
  password: z.string().min(1, 'Password is required'),
//   code: z.string().optional(),
});

export const RegisterSchema  = z.object({
  username: z.string().min(1, 'username is required'),
  email: z.string().email('Email is required'),
  password: z.string().min(6, 'Mininum of 6 characters required'),
//   code: z.string().optional(),
});

