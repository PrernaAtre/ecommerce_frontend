"use server"
import { cookies } from 'next/headers'


const cookieAge = 60 * 60 * 24; // 24 hours

export const setToken = async(token : string) =>{
	cookies().set('token',token)
}

export const getToken = async () => {
  const cookieStore = cookies()
  const token = cookieStore.get('token')
  console.log("token-------",token?.value);
  return token?.value;
}


// class AuthToken {
//   static get() {
//     // const cookies = nookies.get(context);
//     // return cookies.token;
//     const cookieStore = cookies()
//     const token = cookieStore.get('token')
//     return token;
//   }

//   static remove() {
//     cookies().delete('token')
//   }

//   static set(token: string) {
//     // Mostly executed on client end, no need context
//     // nookies.set(ctx || null, "token", token, {
//     //   maxAge: cookieAge,
//     //   path: "/",
//     // });
//     console.log("token in auth token ---", token);
    
//     cookies().set('token', token, { maxAge: 0 })
//   }
// }

// export default AuthToken;
