import * as bcrypt from 'bcrypt';
  
export const hashPassword = async (rawPassword: string) => {
  const SALT = bcrypt.genSaltSync();
  return bcrypt.hashSync(rawPassword, SALT);
}

export function comparePassword(rawPassword: string, hashedPassword: string) {
  return bcrypt.compareSync(rawPassword, hashedPassword);
}