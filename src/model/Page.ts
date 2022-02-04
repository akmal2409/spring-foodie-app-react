export class Page<T> {
  constructor(
    public content: Array<T>,
    public totalPages: number,
    public totalElements: number,
    public last: boolean,
    public size: number,
    public number: number
  ) { }
}