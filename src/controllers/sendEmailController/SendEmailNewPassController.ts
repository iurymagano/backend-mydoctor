import { Response, Request } from "express";
import { SendEmailNewPassService } from "../../services/sendEmail/SendEmailNewPassService";

class SendEmailNewPassController {
  async handle(req: Request, res: Response) {
    const { email } = req.body;
    const sendEmailService = new SendEmailNewPassService();

    const respSend = await sendEmailService.execute({ email });
    return res.json(respSend);
  }
}

export { SendEmailNewPassController };
