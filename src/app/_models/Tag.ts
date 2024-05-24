export class Tag {
  static readonly JAVASCRIPT = new Tag('JavaScript', 'gold');
  static readonly NODEJS = new Tag('Node.js', 'green');
  static readonly REACT = new Tag('React', 'darkcyan');
  static readonly CSHARP = new Tag('C#', 'indigo');
  static readonly ANGULAR = new Tag('Angular', 'red');
  static readonly TYPESCRIPT = new Tag('TypeScript', 'darkred');

  private constructor(private readonly key: string, public readonly color: string){

  }

  toString(){
    return this.key;
  }
}
