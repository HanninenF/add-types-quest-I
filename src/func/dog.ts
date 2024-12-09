import { AllowedColors } from "./dog-functions";

export type Dog = {
  name: string;
  color: AllowedColors;
}[];

export default Dog;
