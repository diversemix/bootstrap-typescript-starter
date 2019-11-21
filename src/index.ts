export * from './flibble';

export class C {
    private x = 10;
    getX = (): number => this.x;
    setX = (newVal: number): void => {
        this.x = newVal;
    };
}

export const doSomething = (): string => 'something has been done!';
export const x = new C();
export const y = { ...{ some: 'value' } };
