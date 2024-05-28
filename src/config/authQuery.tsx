import { gql } from "@apollo/client";
import { apolloClient } from "./client";

const signUpMutation = gql`
  mutation SignUp($userSignupInput: UserSignupInput!) {
    signUp(userSignupInput : $userSignupInput) {
      firstname
      lastname
      email
      role
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

export const signUpData = async (userSignupInput : any) => {
  console.log("userSignupInput-----", userSignupInput);
  const response = await apolloClient.mutate({
    mutation: signUpMutation,
    variables: {
        userSignupInput,
    },
  });
  console.log("response from signup-----", response);
  return response.data.signUp;
};

export const loginData = async (loginUserInput: any) => {
    console.log("data in login data function------", loginUserInput);
    
  const response = await apolloClient.mutate({
    mutation: loginMutation,
    variables: {
        loginUserInput
    },
  });
  return response;
};
