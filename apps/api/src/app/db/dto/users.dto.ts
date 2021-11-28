export type UserAttributes = {
  id: number;
  email: string;
  hash: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
};

export type UserInput = Pick<UserAttributes, 'email' | 'hash'>;
export type UserLoginOutput = Pick<UserAttributes, 'email' | 'hash'>;
export type UserOutput = UserAttributes;
