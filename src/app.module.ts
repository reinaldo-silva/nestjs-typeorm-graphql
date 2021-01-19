import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import RepoModule from './repo.module';
import { AppService } from './app.service';

import * as ormOptions from './config/orm';
import UserResolver from './resolvers/user.resolver';
import { GraphQLModule } from '@nestjs/graphql';

const gqlImports = [UserResolver];

@Module({
  imports: [
    TypeOrmModule.forRoot(ormOptions),
    RepoModule,
    ...gqlImports,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
