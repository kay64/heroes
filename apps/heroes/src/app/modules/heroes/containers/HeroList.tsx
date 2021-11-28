import React from 'react';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { TextField } from '../../../shared';
import { getAllHeroInfos } from '../state/entities/hero-infos/hero-infos.selectors';

const HeroList: React.FC = () => {
  const heroInfos = useSelector(getAllHeroInfos);
  const navigate = useNavigate();
  const handleClick = (id: number) => () => navigate(`/heroes/${id}`);

  return (
    <section>
      <header>
        <h3>Heroes</h3>
        <TextField />

        {heroInfos.map((hero) => (
          <div key={hero.id} onClick={handleClick(hero.id)}>
            {hero.name}
          </div>
        ))}
      </header>
    </section>
  );
};

export default HeroList;
