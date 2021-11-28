import { HeroInfoOutput, HeroInput, HeroOutput } from '../dto';
import { Pagination } from '../types';
import { Pool } from 'pg';

const createHeroAccessor = (db: Pool) => {
  const getAll = async (pagination: Pagination): Promise<HeroInfoOutput[]> => {
    const result = await db.query<HeroInfoOutput>(
      'select id, name from heroes where deleted_at is null offset $1 limit $2',
      [pagination.offset, pagination.limit],
    );

    return result.rows;
  };

  const getById = async (id: number): Promise<HeroOutput | undefined> => {
    const result = await db.query<HeroOutput>(
      `select id,
              name,
              description,
              created_at,
              updated_at
       from heroes
       where id = $1
         and deleted_at is null`,
      [id],
    );

    return result.rows[0];
  };

  const create = async (input: HeroInput): Promise<HeroOutput> => {
    const result = await db.query<HeroOutput>(
      `insert into heroes(name,
                          description,
                          created_at,
                          updated_at)
       values ($1, $2, now(), now())
       returning id, name, description, created_at as createdAt, updated_at as updatedAt`,
      [input.name, input.description],
    );

    return result.rows[0];
  };

  const update = async (
    id: number,
    input: Partial<HeroInput>,
  ): Promise<HeroOutput> => {
    const hero = await getById(id);
    if (!hero) {
      throw Error('Hero not found.');
    }

    const result = await db.query<HeroOutput>(
      `update heroes
       set name        = $2,
           description = $3,
           updated_at  = now()
       where id = $1
       returning *`,
      [id, input.name, input.description],
    );

    return result.rows[0];
  };

  const remove = async (id: number): Promise<void> => {
    await db.query('update heroes set deleted_at = now() where id = $1', [id]);
  };

  return {
    getAll,
    getById,
    create,
    update,
    remove,
  };
};
export default createHeroAccessor;
