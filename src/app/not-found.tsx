/* eslint-disable react-refresh/only-export-components */
import { Metadata } from "next";

import Breadcrumb from "@/components/Common/Breadcrumb";
import NotFound from "@/components/NotFound";

export const metadata: Metadata = {
  title: "404 Page | Play SaaS Starter Kit and Boilerplate for Next.js",
};

const ErrorPage = () => {
  return (
    <>
      <Breadcrumb pageName="404 Page" />

      <NotFound />
    </>
  );
};

export default ErrorPage;
