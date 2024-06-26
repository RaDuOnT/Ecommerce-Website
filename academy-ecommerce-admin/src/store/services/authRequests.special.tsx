interface LoginRequest{
  readonly username: string;
  readonly password: string;
}

export class AuthService{
  async login(loginRequest: LoginRequest){
      const response = await fetch('http://localhost:3000/auth/login', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(loginRequest)
      });
      
      if(!response.ok){
          throw new Error('Invalid credentials');
      }
      const parsedResponse = await response.json();
      return parsedResponse;
  }
}
