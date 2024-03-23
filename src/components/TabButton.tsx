interface TabButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  isActive: boolean;
}
export default function TabButton({
  children,
  onClick,
  isActive,
}: TabButtonProps) {
  return (
    <button onClick={onClick} className={isActive ? "active" : ""}>
      {children}
    </button>
  );
}
