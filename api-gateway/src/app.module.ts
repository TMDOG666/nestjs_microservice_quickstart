import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SERVICE_1',
        transport: Transport.TCP,
        options: { host: 'localhost', port: 50001 },
      },
      {
        name: 'SERVICE_2',
        transport: Transport.TCP,
        options: { host: 'localhost', port: 50002 },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
