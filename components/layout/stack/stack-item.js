export default function StackItem({ children, className }) {
  return (
    <div className={`basis-[50%] p-5 ${className ? className : ''}`}>
      {children}
    </div>
  );
}
