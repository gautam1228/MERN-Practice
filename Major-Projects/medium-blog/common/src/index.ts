import { z } from "zod";

export const signupSchema = z.object({
    email : z.string().email(),
    password : z.string().min(6),
    name : z.string().optional()
});

// Type inference so that we can know the type of the signup Body in the frontend as well.

export const signinSchema = z.object({
    email : z.string().email(),
    password : z.string().min(6)
});


export const createBlogSchema = z.object({
    title : z.string(),
    content : z.string()
});


export const updateBlogSchema = z.object({
    title : z.string(),
    content : z.string(),
    id : z.number()
});


export type SignupInput = z.infer<typeof signupSchema>;
export type SigninInput = z.infer<typeof signinSchema>;
export type CreateBlogInput = z.infer<typeof createBlogSchema>;
export type UpdateBlogInput = z.infer<typeof updateBlogSchema>;