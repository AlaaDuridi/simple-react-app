export default function Section({ title, children, id }: SectionProps) {
  return (
    <section id={id}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

interface SectionProps {
  title: string;
  children: React.ReactNode;
  id: string;
}
