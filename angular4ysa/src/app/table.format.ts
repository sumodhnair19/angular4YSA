export class Navigation{
  content: string;
  url: string;
}
export class Checkbox{
  checkStatus: string;
  labelText: string;
}
export class TableData {
  id: number;
  name: string;
  navigation: Navigation;
  combo: Checkbox;
}

