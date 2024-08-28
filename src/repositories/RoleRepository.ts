import { DataSource, Repository } from 'typeorm';
import { Role } from '../entities/Role';

export class RoleRepository extends Repository<Role> {
  constructor(dataSource: DataSource) {
    super(Role, dataSource.createEntityManager());
  }
   
  async saveRole(role: Role): Promise<Role> {
    return this.save(role);
  }

  async getRoleById(roleId: number): Promise<Role|null> {
    const role = await this.findOne({where:{id:roleId}})
      return role;
  }
}
