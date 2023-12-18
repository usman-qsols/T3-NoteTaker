import React from "react";
import { useSession } from "next-auth/react";

const Header = () => {
  const { data: sessionData } = useSession();
  return (
    <div className="navbar bg-primary text-primary-content">
      <div>
        {sessionData?.user?.name
          ? `Session for ${sessionData.user.name}`
          : "Welcome Back"}{" "}
      </div>
    </div>
  );
};

export default Header;
