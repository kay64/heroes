import React, { useEffect, useRef, useState } from 'react';

import Gravatar from 'react-gravatar';
import { usePopper } from 'react-popper';
import { useOutsideClick } from 'rooks';

import classes from './UserDropdown.module.scss';

export type UserDropdownProps = {
  email: string;
  onLogout: () => void;
};

const UserDropdown: React.FC<UserDropdownProps> = (props) => {
  const { email, onLogout } = props;

  const [open, setOpen] = useState(false);
  const [trigger, setTrigger] = useState<HTMLDivElement | null>(null);
  const [popper, setPopper] = useState<HTMLDivElement | null>(null);
  const { styles, attributes } = usePopper(trigger, popper, {
    placement: 'bottom-end',
  });
  const container = useRef<HTMLDivElement>(null);

  useOutsideClick(container, () => setOpen(false));

  const handleClick = () => setOpen(!open);

  return (
    <>
      <div ref={setTrigger}>
        <Gravatar
          email={email}
          className={classes.gravatar}
          onClick={handleClick}
        />
      </div>
      {open && (
        <div
          ref={setPopper}
          className={classes.popper}
          style={styles.popper}
          {...attributes.popper}
        >
          <div ref={container} className={classes.container}>
            <p>{email}</p>
            <button onClick={onLogout}>Log Out</button>
          </div>
        </div>
      )}
    </>
  );
};

export default UserDropdown;
