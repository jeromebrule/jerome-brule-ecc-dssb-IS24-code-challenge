import { url } from 'inspector';
import { z } from 'zod';

enum Methodology {
  AGILE = "AGILE",
  WATERFALLL = "WATERFALLL",
}

enum Role {
  USER = "USER",
  DEV = "DEV",
  SCRUMMASTER = 'SCRUMMASTER',
  PRODUCTOWNER = 'PRODUCTOWNER',
}

const developerSchema = z.object({
  id: z.number()
})

const schema = z.object({
  productName: z.string().min(3),
  productOwnerName: z.string().min(3),
  developers: z.array(developerSchema).optional(),
  scrumMasterName: z.string().min(3),
  startDate: z.date(),
  methodology: z.string().optional(),
  location: z.string().optional(),
})

export default schema;