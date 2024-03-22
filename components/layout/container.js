export default function Container({ children, className }) {
  return (
    <div className={`container mx-auto max-w-[90rem] px-4 ${className}`}>
      {children}
    </div>
  );
}
