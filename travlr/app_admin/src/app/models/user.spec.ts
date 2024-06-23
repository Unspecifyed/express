// app_admin/scr/app/models/user.spec.ts
import { User } from './user';

describe('User', () => {
  it('should create an instance', () => {
    const email = 'test@example.com';
    const name = 'Test User';
    const user = new User(email, name);
    expect(user).toBeTruthy();
    expect(user.email).toBe(email);
    expect(user.name).toBe(name);
  });
});