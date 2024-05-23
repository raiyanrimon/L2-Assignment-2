import { z } from "zod";
// validation via zod
export const orderValidationDataSchema = z.object({
  email: z.string().email(),
  productId: z.string().nonempty(),
  price: z.number().positive(),
  quantity: z.number().int().positive(),
});
