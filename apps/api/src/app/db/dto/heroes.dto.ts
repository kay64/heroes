type HeroAttributes = {
  id: number;
  name: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
};

export type HeroInput = Omit<
  HeroAttributes,
  'id' | 'createdAt' | 'updatedAt' | 'deletedAt'
>;

export type HeroOutput = HeroAttributes;
export type HeroInfoOutput = Pick<HeroAttributes, 'id' | 'name'>;
