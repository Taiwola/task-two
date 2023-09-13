export abstract class MockModel<T> {
  protected abstract entitystub: T;

  constructor(createEntityData: T) {
    this.constructorSpy(createEntityData);
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  constructorSpy(_createEntityData: T): void {}

  findOne(): T {
    return this.entitystub;
  }

  find(): T[] {
    return [this.entitystub];
  }

  async save(): Promise<T> {
    return this.entitystub;
  }

  async findOneAndUpdate(): Promise<T> {
    return this.entitystub;
  }

  async queryName(): Promise<T> {
    return this.entitystub;
  }

  async remove(): Promise<T> {
    return this.entitystub;
  }
}
