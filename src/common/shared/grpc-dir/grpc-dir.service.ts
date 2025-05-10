import { Injectable } from "@nestjs/common";
import { Config } from "../config/config.service";

@Injectable()
export class GrpcDirService {
    constructor(private config: Config) {}

    getgrpcDir(module: string): string {
        let grpcDir = this.config.get("GRPC_DIR");
        grpcDir = grpcDir.replaceAll("{{module}}", module);
        return grpcDir;
    }
}
