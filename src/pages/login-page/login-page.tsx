import { Helmet } from 'react-helmet-async';
import { FormEvent, useState } from 'react';
import { Layout } from '../../components/layout/layout';
import { LoginInfo } from '../../dataTypes/authorization-info';
import { login } from '../../store/actions';
import { useAppDispatch } from '../../hooks/store-hooks';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../dataTypes/enums/app-routes';
import { changeCity } from '../../store/offer/offer-slice';
import { CITIES } from '../../consts/city';
import { validateEmail } from '../../helpers';


export function LoginPage(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const city = CITIES[Math.floor(Math.random() * CITIES.length)];
  const [loginInfo, setLoginInfo] = useState<LoginInfo>({
    email: '',
    password: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(login(loginInfo));
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginInfo((prevInfo) => ({
      ...prevInfo,
      password: event.target.value,
    }));
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginInfo((prevInfo) => ({
      ...prevInfo,
      email: event.target.value
    }));
  };

  const isValid = () =>
    loginInfo.email &&
    validateEmail(loginInfo.email) &&
    loginInfo.password &&
    loginInfo.password.match(/[a-zA-z]/g) &&
    loginInfo.password.match(/[0-9]/g);
  return (
    <div className="page page--gray page--login">
      <Layout isUserInfo>
        <main className="page__main page__main--login">
          <Helmet>
            <title>6 cities - login</title>
          </Helmet>
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form className="login__form form">
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">E-mail</label>
                  <input
                    className="login__input form__input"
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleEmailChange}
                    required
                  />
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input
                    className="login__input form__input"
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handlePasswordChange}
                    required
                  />
                </div>
                <button className="login__submit form__submit button" type="submit" onClick={handleSubmit} disabled={!isValid()}>
                  Sign in
                </button>
              </form>
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <Link className="locations__item-link" to={AppRoute.MainPage} onClick={() => dispatch(changeCity(city))}>
                  <span>{city.name}</span>
                </Link>
              </div>
            </section>
          </div>
        </main>
      </Layout>
    </div>
  );
}
