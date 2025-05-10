import { Module } from "@nestjs/common";
import { GrpcDirService } from "./grpc-dir.service";
import { ConfigModule } from "src/common/shared/config/config.module";

@Module({
    imports: [ConfigModule],
    providers: [GrpcDirService],
    exports: [GrpcDirService],
})
export class GrpcDirModule {}
