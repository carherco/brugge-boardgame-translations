export class Definicion {
  constructor(
    public tipo: 'verbo'|'sustantivo'|'expresión'|'otros',
    public texto: string,
    public traduccion: string
  ) {

  }
}
