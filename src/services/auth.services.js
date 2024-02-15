import { CookiesUtils } from "../utils/cookies.utils";
import { POST } from "./api/methods";
import { ThrowToast } from "./toast.services";

export default class AuthService {
  async login(data) {
    try {
      const a = await POST('auth/login', data)
      if(a){
        CookiesUtils.set('user', a)
        CookiesUtils.set('logged', true)
        return true
      }
    } catch (error) {
      ThrowToast.error('Erro ao fazer login')
    }
  }
} 