export interface Service {
    name: string,
    inputs: string[],
    outputs: string[],
    deps: Service[]
}