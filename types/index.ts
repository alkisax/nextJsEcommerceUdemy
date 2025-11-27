import {z} from 'zod'
import { insertProductsSchema } from '@/lib/validators';

// αντι να έχουμε τα types και σε αυτό το αρχείο και στο zod schema
export type Product = z.infer<typeof insertProductsSchema> & {
  id: string;
  rating: string;
  createdAt: Date;
}