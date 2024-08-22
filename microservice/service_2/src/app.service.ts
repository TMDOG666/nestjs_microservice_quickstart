import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(data:string): string {
    return 'Hello World! This is service_2' + `from : ${data}`;
  }
}
