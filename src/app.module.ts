import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { Config } from "./common/shared/config/config.service";
import { OtpModule } from "./otp/otp.module";
import { LoginModule } from "./login/login.module";
import { GrpcDirModule } from "./common/shared/grpc-dir/grpc-dir.module";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        ConfigModule,
        GrpcDirModule,
        OtpModule,
        LoginModule,
    ],
    controllers: [AppController],
    providers: [AppService, Config],
})
export class AppModule {}
