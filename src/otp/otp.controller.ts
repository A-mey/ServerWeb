import { Controller, Post } from "@nestjs/common";
import { OtpService } from "./otp.service";
import { SendOtpDto } from "./dto/sendOtp.dto";
import { ValidateOtpDto } from "./dto/validateOtp.dto";

@Controller("otp")
export class OtpController {
    constructor(private readonly otpService: OtpService) {}

    @Post("/sendOtp")
    sendOtp(request: SendOtpDto) {
        return this.otpService.sendOtp(request);
    }

    @Post("/validateOtp")
    validateOtp(request: ValidateOtpDto) {
        return this.otpService.sendOtp(request);
    }
}
