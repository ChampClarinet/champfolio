"use server";

import { RedirectType, redirect } from "next/navigation";

const NotFoundPage = async () => {
  redirect("/en", RedirectType.replace);
};

export default NotFoundPage;
