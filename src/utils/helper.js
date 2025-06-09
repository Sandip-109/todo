import { router } from "expo-router";

export const resetAndNavigate = (path) => {
  if (router.canGoBack()) {
    router.dismissAll();
  }
  router.replace(path);
};
