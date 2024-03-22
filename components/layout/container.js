export default function Container({ children, className }) {
  return (
    <div className={`container mx-auto max-w-[90rem] ${className}`}>
      {children}
    </div>
  );
}
