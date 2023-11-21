import { Response, Request } from "express";
import { SendEmailService } from "../../services/SendEmail/SendEmailService";

class SendEmailController {
  handle(req: Request, res: Response) {
    const body = req.body;
    const sendEmailService = new SendEmailService();

    const respSend = sendEmailService.execute(body);
    return res.json(respSend);
  }
}

export { SendEmailController };
