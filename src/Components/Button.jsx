function Button({
  children,
  type = "button",
  onClick,text,
  className = "button"
}) {
  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
    >
{text}    </button>
  );
}

export default Button;