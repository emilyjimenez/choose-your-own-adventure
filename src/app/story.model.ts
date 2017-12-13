export class Story {
  public isGood:boolean = true;
  constructor(public time: string, public description: string, public options: number[], public optionNames: string[], public id: number){}
}
