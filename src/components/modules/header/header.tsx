import React from "react";
import { Avatar } from "antd";

const Header = ({ user }: { user: any }) => {
  return (
    <>
      <div className="logo"></div>
      {user && (
        <div className="user">
          <div className="name">
            <Avatar
              style={{
                textTransform: "uppercase",
                background: "white",
                color: "black",
              }}
              size={"large"}
            >
              {user.avatar}
            </Avatar>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
