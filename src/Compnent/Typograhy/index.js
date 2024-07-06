const Typography = ({
  marginVertical = "10px",
  marginHorizontal = "10px",
  lineHeight = "25px",
  text,
  children,
  color,
  size = "16px",
  fontWeight = "500",
  align,
  width,
}) => {
  return (
    <p
      style={{
        margin: `${marginVertical} ${marginHorizontal}`,
        lineHeight: `${lineHeight}`,
        color: `${color}`,
        fontSize: `${size}`,
        fontWeight: `${fontWeight}`,
        textAlign: align,
        width: `${width}`,
      }}
    >
      {children || text}
    </p>
  );
};
export default Typography;
