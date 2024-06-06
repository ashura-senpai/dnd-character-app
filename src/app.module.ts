import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CharacterModule } from './character/character.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { LoggingMiddleware } from './logging/logging.middleware';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/dnd'),
    CharacterModule,
    UserModule,
    AuthModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggingMiddleware)
      .forRoutes('*');
  }
}
