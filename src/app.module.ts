import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { PostagemModule } from './postagem/postagem.module'
import { TemaModule } from './tema/tema.module'
import { AuthModule } from './auth/auth.module'
import { UsuarioModule } from './usuario/usuario.module'
import { AppController } from './app.controller'
import { CategoriaModule } from './categoria/categoria.module'
import { ProdutoModule } from './produto/produto.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host: config.get<string>('DB_HOST'),
        port: config.get<number>('DB_PORT'),
        username: config.get<string>('DB_USERNAME'),
        password: config.get<string>('DB_PASSWORD'),
        database: config.get<string>('DB_DATABASE'),
        entities: [__dirname + '/*/entities/*.entity{.ts,.js}'],
        synchronize: true,
      }),
    }),
    PostagemModule,
    TemaModule,
    AuthModule,
    UsuarioModule,
    CategoriaModule,
    ProdutoModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}