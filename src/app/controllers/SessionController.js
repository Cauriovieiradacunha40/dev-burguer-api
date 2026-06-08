
import * as Yup from 'yup';

class SessionController {
    async store(request, response) {
        const schema = Yup.object({
          email: Yup.string().required(),
          password: Yup.string().required(),
        });
        const { email, password } = request.body;
        return response.status(200).json({ ok: true });
    }
}
      
export default new SessionController(); 

