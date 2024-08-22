import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Logger } from '@nestjs/common';
import { Observable  } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger('HTTP');
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const methodKey = context.getHandler().name;
    const now = Date.now();
    return next
      .handle()
      .pipe(
        tap(() => {
          this.logger.log(`method:${methodKey}-耗时： ${Date.now() - now}ms`)
        })
      );
  }
}
