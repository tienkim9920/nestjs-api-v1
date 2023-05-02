export interface AbstractOrigin<D> {
  findAll(): D[];
  findById(id: number): D;
  create(data: Partial<D>): D;
  update(id: number, data: Partial<D>): D;
  delete(id: number): boolean;
}

export interface AbstractPromise<D> {
  findAll(): Promise<D[]>;
  findById(id: number): Promise<D>;
  create(data: Partial<D>): Promise<D>;
  update(id: number, data: Partial<D>): Promise<D>;
  delete(id: number): Promise<boolean>;
}