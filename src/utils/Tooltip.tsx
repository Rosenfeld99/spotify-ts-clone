import { ReactNode } from "react";

interface TooltipProps {
  show: boolean;
  children: ReactNode;
  position: string;
}

const Tooltip = ({ show, children, position }: TooltipProps) => {
  return (
    <div
      className={`absolute capitalize z-50 font-semibold text-accent min-w-max rounded text-sm bg-btn_sidebar_hover ${
        show
          ? "opacity-100 translate-y-0 transition-opacity duration-100 delay-300"
          : "opacity-0 translate-y-2 -translate-x-1/2 pointer-events-none"
      } ${position}`}
    >
      {children}
    </div>
  );
};

export default Tooltip;
