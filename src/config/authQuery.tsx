import { gql } from "@apollo/client";
import { apolloClient } from "./client";

const signUpMutation = gql`
  mutation SignUp($data: UserSignupInput!) {
    signUp(data: $data) {
      firstname
      lastname
      email
      role
      password
    }
  }
`;

const loginMutation = gql`
  mutation Login($loginUserInput: UserLoginInput!) {
    login(loginUserInput: $loginUserInput) {
      firstname
      lastname
      email
      role
      isSubcribed
      token
    }
  }
`;

export const signUpData = async (data: any) => {
  const response = await apolloClient.mutate({
    mutation: signUpMutation,
    variables: {
      data,
    },
  });
  console.log("response from signup-----", response);
};

export const loginData = async (loginUserInput: any) => {
    console.log("data in login data function------", loginUserInput);
    
  const response = await apolloClient.mutate({
    mutation: loginMutation,
    variables: {
        loginUserInput
    },
  });
  return response.data.login;
};
