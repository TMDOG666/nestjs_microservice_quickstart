import { ClientProxy } from '@nestjs/microservices';
import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    private readonly service1;
    private readonly service2;
    constructor(appService: AppService, service1: ClientProxy, service2: ClientProxy);
    getHello(): string;
    getService1(): import("rxjs").Observable<string>;
    getService2(): import("rxjs").Observable<string>;
}
