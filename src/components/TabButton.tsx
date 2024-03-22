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
  console.log("TAB BUTTON COMPONENT");
  return (
    <button onClick={onClick} className={isActive ? "active" : ""}>
      {children}
    </button>
  );
}
