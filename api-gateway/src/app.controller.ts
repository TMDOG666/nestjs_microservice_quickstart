import { Controller, Get, Inject, UseInterceptors } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { AppService } from './app.service';
import { LoggingInterceptor } from './common/interceptor/logger.interceptor';


@Controller()
@UseInterceptors(LoggingInterceptor)
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('SERVICE_1') private readonly service1: ClientProxy,
    @Inject('SERVICE_2') private readonly service2: ClientProxy,
  
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('service1')
  getService1(){
    return this.service1.send<string, string>({ cmd: 'get_hello' } , 'api-gateway');

  }

  @Get('service2')
  getService2(){
    return this.service2.send<string, string>({ cmd: 'get_hello' } , 'api-gateway');

  }
}
