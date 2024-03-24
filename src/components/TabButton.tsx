interface TabButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  isActive: boolean;
}
export default function TabButton({
  children,
  isActive,
  ...props
}: TabButtonProps) {
  return (
    <button {...props} className={isActive ? "active" : ""}>
      {children}
    </button>
  );
}
