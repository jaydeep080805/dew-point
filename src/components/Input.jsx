export const Input = ({
  containerClass,
  type = "text",
  name,
  id,
  placeholder,
  value,
  onChange,
  icon,
}) => {
  return (
    <div className={`container ${containerClass}`}>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <span>{icon}</span>
    </div>
  );
};
