import { AuthenticationPageProps } from './types';
import SectionBox from '@molecules/SectionBox/SectionBox';
import { PageContent } from '@templates/index';
import { Button } from '@molecules';
import { AUTH_FORM_SCHEMA } from './constants';
import { useState } from 'react';
import StandardForm from '@organisms/StandardForm/StandardForm';
import { CrudErrorInfo } from 'src/utils/types/error.types';
import { TUser } from 'src/features/types';
import useAuth from '@hooks/useAuth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const AuthenticationPage: React.FC<AuthenticationPageProps> = ({ loginPage = false }) => {
  const [errors, setErrors] = useState<CrudErrorInfo<TUser>>([]);
  const location = useLocation();
  const navigate = useNavigate();

  const { login, signUp, logout } = useAuth();

  const handleSuccess = () => {
    if (!location?.state) return <Navigate to='/' replace />;
    const { from } = location?.state as { from: string };
    return navigate(from || '/');
  };

  const requestLogin = (values: Partial<TUser>) => {
    login(values as TUser)
      .then(handleSuccess)
      .catch((error) => {
        setErrors(error as CrudErrorInfo<TUser>);
      });
  };

  const requestSignup = (values: Partial<TUser>) => {
    signUp(values as TUser)
      .then(handleSuccess)
      .catch((error) => {
        setErrors(error as CrudErrorInfo<TUser>);
      });
  };

  const handleSubmitForm = (values: Partial<TUser>) => {
    if (loginPage) {
      requestLogin(values);
    } else {
      requestSignup(values as TUser);
    }
  };

  const handleLogout = () => {
    logout()
      .then(handleSuccess)
      .catch((error) => {
        setErrors(error as CrudErrorInfo<TUser>);
      });
  };

  return (
    <PageContent>
      <SectionBox title={loginPage ? 'Login' : 'Signup'}>
        <StandardForm<TUser> config={AUTH_FORM_SCHEMA} onSubmit={handleSubmitForm} errors={errors} />
        <Button onClick={handleLogout}>Logout</Button>
      </SectionBox>
    </PageContent>
  );
};

export default AuthenticationPage;
