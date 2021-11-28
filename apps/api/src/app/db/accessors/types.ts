import createUsersAccessor from './users.accessor';
import createHeroesAccessor from './heroes.accessor';

export type HeroesAccessor = ReturnType<typeof createHeroesAccessor>;
export type UsersAccessor = ReturnType<typeof createUsersAccessor>;

export type Accessors = {
  heroes: HeroesAccessor;
  users: UsersAccessor;
};
