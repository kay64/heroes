import React from 'react';

import { Link } from '../../../shared';
import { AuthLayout } from '../components';
import { LoginForm } from '../containers';

const LoginPage: React.FC = () => {
  return (
    <AuthLayout
      title="Login to Heroes"
      content={<LoginForm />}
      links={
        <>
          <Link to="/" size="small" underlined>
            Back to Home
          </Link>
          <Link to="/auth/register" size="small" underlined>
            Register
          </Link>
        </>
      }
    />
  );
};

export default LoginPage;
