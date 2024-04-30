import fs from 'fs';
import ejs from 'ejs';

class ForgotPasswordTemplate {
  public passwordResetTemplate(username: string, resetLink: string): string {
    return ejs.render(fs.readFileSync(__dirname + '/forgot-password-template.ejs', 'utf8'), {
      username,
      resetLink,
      image_url:'https://www.kindpng.com/imgv/hRohwxx_lock-icon-padlock-hd-png-download/#google_vignette'
    });
  }

}


export const forgotPasswordTemplate: ForgotPasswordTemplate = new ForgotPasswordTemplate();
