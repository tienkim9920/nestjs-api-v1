export interface AbstractRepository<D> {
  getAll(): D[];
  create(data: Partial<D>): D;
  detail(id: number, data: Partial<D>): void;
  update(id: number, data: Partial<D>): void;
  delete(id: number): void;
}
