export interface AbstractOrigin<D> {
  getAll(): D[];
  create(data: Partial<D>): D;
  detail(id: number): D;
  update(id: number, data: Partial<D>): D;
  delete(id: number): boolean;
}

export interface AbstractPromise<D> {
  getAll(): Promise<D[]>;
  // create(data: Partial<D>): Promise<D>;
  // detail(id: number): Promise<D>;
  // update(id: number, data: Partial<D>): Promise<D>;
  // delete(id: number): Promise<boolean>;
}