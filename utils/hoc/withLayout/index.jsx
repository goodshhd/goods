import React, { useEffect } from "react";

import Head from "next/head";

import { useRecoilState } from "recoil";
import {useSession} from "next-auth/client";

import PropTypes from "prop-types";
import { headerTabsState, userData } from "../../../recoil/atoms";
import useEmailCutter from "../../hooks/useEmailCutter";
import Header from "../../../components/Header";
import { useTranslation } from "next-i18next";

const withLayout = (Component) => () => {
  const session = useSession();
  const [, setUser] = useRecoilState(userData);
  const [, setSessionData] = useRecoilState(headerTabsState);
  const { t } = useTranslation("tabs");

  const sessionUser = session[0].user;
  const {email} = useEmailCutter(sessionUser.email);

  useEffect(() => {
    setSessionData([
      {
        link: `/${email}/workboard`,
        title: t("purchase-tab-text"),
      },
      {
        link: "#",
        title: t("team-tab-text"),
      },
      {
        link: "#",
        title: t("projects-tab-text"),
      },
      {
        link: "#",
        title: t("calendar-tab-text"),
      },
      {
        link: "#",
        title: t("reports-tab-text"),
      },
    ]);

    setUser(sessionUser);
  }, []);

  return (
    <>
      <Head>
        <title>Goods App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {<Component /> || Component.name || Component.displayName}
    </>
  );
};

export default withLayout;


withLayout.propTypes = {
  Component: PropTypes.element,
};

