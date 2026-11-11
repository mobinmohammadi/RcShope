
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
}

const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

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
    ref,
    toggleSwitchTheme: animateTheme,
  } = useModeAnimation({
    animationType: ThemeAnimationType.BLUR_CIRCLE,
    blurAmount: 4,
    duration: 1000,
  });

  const toggleSwitchTheme = useCallback(() => {
    const nextTheme = theme === "dark" ? "light" : "dark";

    animateTheme();

    setTheme(nextTheme);

  }, [theme, animateTheme]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{ theme, toggleSwitchTheme }}
    >
      <div ref={ref}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
