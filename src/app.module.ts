import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './modules/person/person.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PersonModule,
    MongooseModule.forRoot(process.env.MONGO_URL),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
