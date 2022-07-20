import React from "react";

import LoginOrRegisterForm from "../component/LoginOrRegisterForm";

export default function Login() {
  return (
    <div style={{
        width: '100%',
        height: '770px',
        margin: 'auto',
        padding: '10em'

    }}>
      <LoginOrRegisterForm loginOrRegister={"login"} />
    </div>
  );
}
