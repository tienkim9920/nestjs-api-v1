export interface AbstractRepository<D> {
  getAll(): D[];
  create(data: Partial<D>): D;
  detail(id: number): D;
  update(id: number, data: Partial<D>): D;
  delete(id: number): boolean;
}
