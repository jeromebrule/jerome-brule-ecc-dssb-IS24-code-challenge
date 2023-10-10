import { z } from 'zod';

enum Role {
  USER = "USER",
  DEV = "DEV",
  SCRUMMASTER = 'SCRUMMASTER',
  PRODUCTOWNER = 'PRODUCTOWNER',
}

const schema = z.object({
  name: z.string().min(3),
  role: z.nativeEnum(Role),
})

export default schema;