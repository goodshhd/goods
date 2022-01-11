import React from "react";

import { useTranslation } from "next-i18next";
import { signIn, getSession } from "next-auth/client";

import Logo from "../../components/Logo";
import Head from "next/head";
import Button from "../../components/Button";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import LanguageSwitcher from "../../components/LanguageSwitcher";
import InlineSvg from "../../components/InlineSvg";

const SignIn = () => {
  const { t } = useTranslation("sign-in");
  const { t: tB } = useTranslation("buttons");

  const arrowDown =
      `<svg width="150" height="110" viewBox="0 0 109 79" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M48.1905 58.8376C46.7336 56.8878 45.3658 55.146 44.1617 53.7246C41.7741 50.8763 40.03 49.2687 39.5676 49.5806C39.1052 49.8925 39.8817 52.0471 41.5256 55.2387C42.3514 56.8279 43.4766 58.7453 44.7552 60.8202L46.7856 64.0405L47.9048 65.7276C48.1804 66.1561 48.4998 66.555 48.858 66.9182C49.3498 67.4232 49.9521 67.8092 50.6187 68.0466V68.0466C51.2821 68.2684 51.9897 68.3318 52.6842 68.2317C53.0115 68.1838 53.3335 68.1048 53.6458 67.9956C53.8746 67.9148 54.0988 67.8214 54.3173 67.7159C54.9673 67.3843 55.5977 67.0159 56.2054 66.6125C57.2755 65.9151 58.3036 65.156 59.2845 64.339C60.9338 62.9823 62.4207 61.4417 63.7155 59.7479C65.8938 56.855 66.5751 54.6954 66.0646 54.3687C65.554 54.042 63.9236 55.4848 61.315 57.643C60.0385 58.6594 58.4242 59.9542 56.5878 61.2093L55.699 61.8014C56.058 59.894 56.4213 57.3781 56.7285 54.027C57.1381 49.384 57.3053 44.7245 57.2294 40.067C57.158 34.9213 56.8074 29.7847 56.1792 24.6795C54.9977 14.9259 52.8502 7.30901 52.2156 7.43525C51.5811 7.56149 52.1953 15.1926 52.3619 24.7329C52.5596 34.2529 52.2054 43.7794 51.3009 53.265C50.9215 57.2208 50.6429 60.012 50.502 62.0265L50.4231 61.9815L48.1501 58.9368" fill="#D97706"/>
      </svg>`

  return (
    <>
      <Head>
        <title>Leaf App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex">
        <div
          style={{ background: `url('../../images/sign-in-bg.png')` }}
          className="hidden w-1/2 bg-no-repeat bg-cover min-h-screen md:flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
        >
          <div className="flex flex-col justify-center items-center">
            <Logo />
            <div className="mt-8">
              <h2 className="text-center text-6xl font-extrabold text-white font-bold">
                {t("welcome-sign-in-text")}
              </h2>
              <h2 className="text-center text-6xl font-extrabold text-white font-bold">
                {t("company-name-sign-in-text")}
              </h2>
            </div>
            <span className="text-white font-normal text-md mt-4 w-96 text-center">
              {t("company-description-sign-in-text")}
            </span>
          </div>
        </div>
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 w-full md:w-1/2">
          <div className="max-w-md w-full space-y-8 items-center justify-center flex flex-col">
            <div className="flex flex-col items-center justify-center">
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 w-48">
                {t("title-sign-in-text")}
              </h2>
              <InlineSvg svg={arrowDown} />
            </div>
            <div className="w-48">
              <Button onClick={signIn} buttonText={tB("sign-in-button-text")} />
            </div>
            <div className="flex items-center justify-center rounded-md absolute top-0 right-5">
              <LanguageSwitcher dark />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        permanent: false,
        destination: `/${session.user.email}/workboard`,
      },
      props: {
        session,
      },
    };
  }

  return {
    props: {
      ...(await serverSideTranslations(context.locale, ["sign-in", "buttons"])),
      session,
    },
  };
}
