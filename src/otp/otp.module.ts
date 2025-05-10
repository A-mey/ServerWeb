import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { OtpController } from "./otp.controller";
import { OtpService } from "./otp.service";
import { join } from "path";
import { OtpProviderDao } from "./dao/otp.provider.dao";
import { GrpcDirModule } from "src/common/shared/grpc-dir/grpc-dir.module";
import { GrpcDirService } from "src/common/shared/grpc-dir/grpc-dir.service";

@Module({
    imports: [
        ClientsModule.registerAsync([
            {
                name: "OTP_SERVICE",
                imports: [GrpcDirModule],
                useFactory: (grpcDirService: GrpcDirService) => ({
                    transport: Transport.GRPC,
                    options: {
                        package: "otp.v1",
                        protoPath: join(__dirname, grpcDirService.getgrpcDir("otp")),
                        url: "localhost:50051",
                    },
                }),
                inject: [GrpcDirService],
            },
        ]),
    ],
    controllers: [OtpController],
    providers: [OtpService, OtpProviderDao],
})
export class OtpModule {}
