import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
  useCallback,
} from "react";

import {
  ThemeAnimationType,
  useModeAnimation,
} from "react-theme-switch-animation";

interface ThemeContextType {
  theme: "light" | "dark";
  toggleSwitchTheme: () => void;
  themeButtonRef: React.RefObject<HTMLButtonElement | null>;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return ctx;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

const {
  ref: themeButtonRef,
  toggleSwitchTheme: animateTheme,
} = useModeAnimation({
  animationType: ThemeAnimationType.CIRCLE, // دایره‌ای از روی دکمه باز می‌شود
  blurAmount: 4,
  duration: 600, // ۲۰۰ خیلی کم است؛ ۶۰۰ برای دیده شدن بهتر است
  isDarkMode: false,
  globalClassName: "theme-anim", // تا پکیج کلاس dark را دستکاری نکند
});

  const toggleSwitchTheme = useCallback(() => {
    animateTheme();
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, [animateTheme]);

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    root.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{ theme, toggleSwitchTheme, themeButtonRef }}
    >
      {children}
    </ThemeContext.Provider>
  );
};