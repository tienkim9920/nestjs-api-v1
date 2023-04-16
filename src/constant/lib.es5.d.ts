// lib.es5.d.ts
type Partial<T> = {
    [P in keyof T]?: T[P];
};