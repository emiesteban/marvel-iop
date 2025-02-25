const HeartIcon = ({ color = "red", size = 46 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 21s-7.5-4.6-10-9c-1.4-2.5-1.3-5.7.4-7.9 1.6-2.1 4.5-2.6 6.6-.9L12 5l3.1-2.8c2.1-1.7 5-1.2 6.6.9 1.7 2.2 1.8 5.4.4 7.9-2.5 4.4-10 9-10 9z" />
    </svg>
  );
};

export default HeartIcon;
