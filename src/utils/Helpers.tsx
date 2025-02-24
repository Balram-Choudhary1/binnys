import { router } from "expo-router";

export const resetAndNavigate = (newPath: string): void => {
    if (router.canGoBack()) {
        router.dismissAll();
    }
    router.replace(newPath as any);
};
