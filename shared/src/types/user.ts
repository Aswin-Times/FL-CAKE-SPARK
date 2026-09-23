import { UserRole } from "../constants/roles";

export interface UserDTO {
  id: string;
  email: string;
  name?: string | null;
  phone?: string | null;
  role: UserRole;
  createdAt: Date | string;
  updatedAt: Date | string;
}
