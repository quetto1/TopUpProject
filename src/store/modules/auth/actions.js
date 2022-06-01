export default {
    async login(context, payload) {
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDEqbwc3ueiGZQ69g8RgQD8RozQmmRIsD0',
        {
              method: 'POST',
              body: JSON.stringify({
                  email: payload.email,
                  password: payload.password,
                  returnSecureToken: true
              })
          });
          const responseData = await response.json()

          if (!response.ok){
              console.log(responseData);
              const error = new Error(responseData.message || 'Falied to authenticate.')
              throw error
          }
  
          context.commit('setUser', {
              token: responseData.idToken,
              userId: responseData.localId,
              tokenExpiration: responseData.expiresIn
          });

    },
     async signup(context, payload) {
        //requests that post a new user
     const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDEqbwc3ueiGZQ69g8RgQD8RozQmmRIsD0',
      {
            method: 'POST',
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true
            })
        });

        const responseData = await response.json()

        if (!response.ok){
            console.log(responseData);
            const error = new Error(responseData.message || 'Falied to authenticate.')
            throw error
        }

        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId,
            tokenExpiration: responseData.expiresIn
        });
    },
    logout(context) {
        context.commit('setUser',{
            token: null,
            userId: null,
            tokenExpiration: null
        });
    },
};