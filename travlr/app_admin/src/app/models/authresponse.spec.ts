// app_admin/scr/app/models/authresponse.spec.ts

import { AuthResponse } from './authresponse';

describe('AuthResponse', () => {
  it('should create an instance', () => {
    const token = 'testToken';
    const authResponse = new AuthResponse(token);
    expect(authResponse).toBeTruthy();
    expect(authResponse.token).toBe(token);
  });
});
