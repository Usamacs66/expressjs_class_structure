import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { AppDataSource } from '../config/database';
import { User } from '../entities/User';

const SALT_ROUNDS = 10;
const JWT_SECRET = 'your_jwt_secret_key'; // Store this securely

export class AuthService {
  private userRepository = AppDataSource.getRepository(User);

  async register(email: string, password: string, firstName: string, lastName: string): Promise<User> {
    const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);
    const user = this.userRepository.create({ email, passwordHash, firstName, lastName });
    return this.userRepository.save(user);
  }

  async login(email: string, password: string): Promise<string | null> {
    const user = await this.userRepository.findOneBy({ email });
    if (user && await bcrypt.compare(password, user.passwordHash)) {
      return jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });
    }
    return null;
  }

  async authenticate(token: string): Promise<User | null> {
    const decoded = jwt.verify(token, JWT_SECRET) as { id: number };
    return await this.userRepository.findOneBy({ id: decoded.id });     
  }
}
