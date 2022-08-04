import { useAppBridge } from "@shopify/app-bridge-react";
import { useNavigate } from "react-router-dom";
import { Card, Page } from "@shopify/polaris";
// import { axiosCS as axios } from "../../helpers/axios";
import { useEffect } from "react";
import { useAppQuery } from "../hooks";
// import { useSignIn } from 'react-auth-kit'

export default function Login() {
  const appBridge = useAppBridge()
  const shop = appBridge.hostOrigin.replace(/https:\/\//, "");
  // const signIn = useSignIn()
  // const navigate = useNavigate()
  const {
    data: activeStore,
    isLoading: loading,
    isRefetching: isRefechingCs,
  } = useAppQuery({
    url: `/api/active_stores/${shop}`,
    reactQueryOptions: {
      refetchOnReconnect: false,
    },
  })
  console.log(shop)
  const handleSubmit = (event) => {
    // Prevent page reload
    event.preventDefault();

    // axios.post('/api/login', {
    //   user:{
    //     email:event.target.email.value, 
    //     password: event.target.pass.value
    //   }
    // }).then((response) => {
    //   // if(signIn({
    //   //     token: response.data.token,
    //   //     expiresIn: 60,
    //   //     tokenType: "Bearer",
    //   //   })
    //   // ){ 
    //   //   navigate("/products")
    //   // }
    // }).catch((err) => {
    //   console.log(err)
    // })
  };

  return (
    <Page>
      <Card>
        <Card.Section>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Username </label>
            <input type="text" name="email" required />

          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" name="pass" required />

          </div>
          <div className="button-container">
            <input type="submit" />
          </div>
        </form>
        </Card.Section>
      </Card>
    </Page>
  );
}
