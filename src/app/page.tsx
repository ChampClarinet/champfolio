import { RedirectType, redirect } from "next/navigation";

const RootPage = async () => {
  redirect("/en", RedirectType.replace);
};

export default RootPage;
