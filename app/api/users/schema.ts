import { z } from 'zod';

const schema = z.object({
  userName: z.string().min(3),
  userEmail: z.string().email(),
  userPhone: z.string().min(10).optional(),
  userWebsite: z.string().url(),
  userCompanyName: z.string(),
})

export default schema;