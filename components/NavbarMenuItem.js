export const NavbarMenuItem = ({ text, Icon, active }) => {
  return (
    <div className="hoverEffect mx-auto ps-2 flex items-center text-gray-700 justify-center xl:justify-start text-lg space-x-3 hover:scale-125 hover:rounded-full transition-all ease-in-out delay-25 ">
      <Icon className="h-7" />
      <span className={`${active && "font-bold"} hidden xl:inline `}>
        {text}
      </span>
    </div>
  );
};
