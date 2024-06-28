export class Tag {
  static readonly JAVASCRIPT = new Tag('JavaScript');
  static readonly TYPESCRIPT = new Tag('TypeScript');
  static readonly ANGULAR = new Tag('Angular');
  static readonly REACT = new Tag('React');
  static readonly EXPRESSJS = new Tag('Express');
  static readonly CSHARP = new Tag('C#');

  private constructor(private readonly key: string){ }

  toString(){
    return this.key;
  }
}




/* export class Tag {
  static readonly JAVASCRIPT = new Tag('JavaScript', 'gold');
  static readonly EXPRESSJS = new Tag('Expressjs', 'green');
  static readonly REACT = new Tag('React', 'darkcyan');
  static readonly CSHARP = new Tag('C#', 'indigo');
  static readonly ANGULAR = new Tag('Angular', 'red');
  static readonly TYPESCRIPT = new Tag('TypeScript', 'darkred');

  private constructor(private readonly key: string, public readonly color: string){

  }

  toString(){
    return this.key;
  }
} */
