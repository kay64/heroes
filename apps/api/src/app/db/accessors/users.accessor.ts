import { UserInput, UserLoginOutput, UserOutput } from '../dto';
import { Pool } from 'pg';

const createUsersAccessor = (db: Pool) => {
  const getByEmail = async (
    email: string,
  ): Promise<UserLoginOutput | undefined> => {
    const result = await db.query(
      `select email, hash from users where email = $1`,
      [email],
    );

    return result.rows[0];
  };

  const create = async (input: UserInput): Promise<UserOutput> => {
    const result = await db.query<UserOutput>(
      `insert into users(email,
                          hash,
                          created_at,
                          updated_at)
       values ($1, $2, now(), now())
       returning id, email, hash, created_at as createdAt, updated_at as updatedAt`,
      [input.email, input.hash],
    );

    return result.rows[0];
  };

  return {
    getByEmail,
    create,
  };
};
export default createUsersAccessor;
