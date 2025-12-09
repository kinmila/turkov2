import { Link, LinkProps, useNavigate } from "react-router-dom";
import { forwardRef, MouseEvent } from "react";

const ScrollLink = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ to, onClick, ...props }, ref) => {
    const navigate = useNavigate();

    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      if (onClick) onClick(e);
      window.scrollTo(0, 0);
      navigate(to as string);
    };

    return (
      <Link
        ref={ref}
        to={to}
        onClick={handleClick}
        {...props}
      />
    );
  }
);

ScrollLink.displayName = "ScrollLink";

export { ScrollLink };
