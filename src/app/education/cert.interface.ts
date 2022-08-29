export interface Certificado{
    titulo: string,
    archivo: string,
    lenguaje: string[],
    expedidaPor: string,
    anio?: number
    imprimir: boolean
}