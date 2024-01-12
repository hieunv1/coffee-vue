export default function useTheme() {
  const isDark = useState<boolean>("theme", () => false);

  onMounted(() => {
    isDark.value = localStorage.getItem("isDark") === "dark" ? true : false;
  });
  const handleDarkTheme = () => {
    console.log("handle");
    isDark.value = !isDark.value;
    localStorage.setItem("isDark", isDark.value ? "dark" : "light");
    setTheme();
  };

  const setTheme = () => {
    if (isDark.value) {
      document.documentElement.setAttribute("data-theme", "dark");
      return;
    }
    document.documentElement.removeAttribute("dark-theme");
  };

  return { isDark, handleDarkTheme };
}
