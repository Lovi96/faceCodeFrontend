import {StackTrace} from './StackTrace'

export class Exception {

  stackTrace: StackTrace[];
  statusCode?: number;
  localizedMessage: string;

}
