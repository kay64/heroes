import { importPKCS8, SignJWT } from 'jose';
import { resolve } from 'path';
import { UsersAccessor } from '../db/accessors';
import { readFileSync } from 'fs';
import { hash, verify } from 'argon2';

const createAuthService = async (usersAccessor: UsersAccessor) => {
  const privateKey = await importPKCS8(
    readFileSync(resolve(__dirname, 'assets/private.pem'), 'utf-8'),
    'RS256',
  );

  const login = async (email, password): Promise<string | undefined> => {
    const user = await usersAccessor.getByEmail(email);

    if (!user || !(await verify(user.hash, password))) {
      return undefined;
    }

    try {
      return await new SignJWT({ email: email })
        .setProtectedHeader({ alg: 'RS256' })
        .setIssuedAt()
        .setIssuer('urn:example:issuer')
        .setAudience('urn:example:audience')
        .setExpirationTime('2h')
        .sign(privateKey);
    } catch (e) {
      console.error(e);
      return undefined;
    }
  };

  const register = async (email, password): Promise<void> => {
    const passwordHash = await hash(password);
    await usersAccessor.create({ email, hash: passwordHash });
  };

  return {
    login,
    register,
  };
};

export default createAuthService;
