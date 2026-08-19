export default function Cursor({ className = "" }) {
  return (
    <span
      className={`inline-block w-[3px] h-[0.9em] bg-accent ml-1 animate-blink align-middle ${className}`}
    />
  );
}