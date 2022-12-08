
export default interface RepositoryInterface<T> {
  create(entity: T): Promise<T>;
  update(id: string, dataUpdate: T): Promise<T>;
  // findById(id: string): Promise<T | undefined>;
  findByTitle(title: string): Promise<T | undefined>;
  findAll(): Promise<T[]>;
  
}