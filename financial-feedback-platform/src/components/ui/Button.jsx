export const Button = ({ children, variant = 'primary', ...props }) => {
  const baseStyle = {
    padding: '12px 24px',
    border: 'none',
    borderRadius: '8px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };

  const variants = {
    primary: {
      background: '#4f46e5',
      color: 'white',
    },
    outline: {
      background: 'transparent',
      color: '#4f46e5',
      border: '2px solid #4f46e5',
    }
  };

  const style = {
    ...baseStyle,
    ...variants[variant],
  };

  return (
    <button style={style} {...props}>
      {children}
    </button>
  );
};