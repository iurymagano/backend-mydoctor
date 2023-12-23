interface TemplatessEmail {
  type: string;
  body: any;
}

export function templatesEmail({ type, body }: TemplatessEmail) {
  if (type === "newuser_PACIENTE") {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>Template de Boas-Vindas</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f4f4f4;
        }
    
        .container {
          margin: 20px auto;
          max-width: 600px;
          background-color: #ffffff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
    
        h1 {
          color: #333333;
        }
    
        .welcome-message {
          font-size: 20px;
          margin-top: 20px;
          text-align: center;
        }
    
        .image-container {
          margin-top: 20px;
          width: 100%;
          height: 300px;
          background-image: url('https://i.pinimg.com/564x/86/ab/52/86ab524a2bae373c745b8ac12c5fdff0.jpg');
          background-size: cover;
          border-radius: 8px;
        }
    
        .image-overlay {
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: #ffffff;
          border-radius: 8px;
        }
    
        .image-overlay span {
          font-size: 32px;
          font-weight: 600;
        }
    
        .welcome-text {
          font-size: 18px;
          margin-top: 20px;
          text-align: center;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Seja Bem-Vindo, <strong style="color: #007bff;">${body?.nome}.</strong></h1>
    
        <div class="welcome-message">
          <div class="image-container">
            <div class="image-overlay">
              <span>Esperamos que você encontre o profissional que procura.</span>
            </div>
          </div>
        </div>
    
        <p class="welcome-text">
          Agradecemos por escolher nosso serviço. Estamos felizes em tê-lo conosco!
        </p>
      </div>
    </body>
    </html>
    `;
  } else if (type === "newuser_PROFISSIONAL") {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>Template de Boas-Vindas - Profissional de Saúde</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f4f4f4;
        }
    
        .container {
          margin: 20px auto;
          max-width: 600px;
          background-color: #ffffff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
    
        h1 {
          color: #333333;
        }
    
        .welcome-message {
          font-size: 20px;
          margin-top: 20px;
          text-align: center;
        }
    
        .image-container {
          margin-top: 20px;
          width: 100%;
          height: 300px;
          background-image: url('https://example.com/path-to-professional-image.jpg');
          background-size: cover;
          border-radius: 8px;
        }
    
        .image-overlay {
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: #ffffff;
          border-radius: 8px;
        }
    
        .image-overlay span {
          font-size: 32px;
          font-weight: 600;
        }
    
        .welcome-text {
          font-size: 18px;
          margin-top: 20px;
          text-align: center;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Bem-Vindo, <strong style="color: #007bff;">${body?.nome}.</strong></h1>
    
        <div class="welcome-message">
          <div class="image-container">
            <div class="image-overlay">
              <span>Seja parte da nossa comunidade de profissionais de saúde.</span>
            </div>
          </div>
        </div>
    
        <p class="welcome-text">
          Agradecemos por se juntar a nós. Sua experiência e conhecimento serão valiosos para nossos pacientes.
        </p>
      </div>
    </body>
    </html>
    `;
  } else if (type === "sendchangepass") {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Template de E-mail</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f4f4f4;
        }
    
        .container {
          margin: 20px auto;
          max-width: 600px;
          background-color: #ffffff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
    
        h1 {
          color: #333333;
        }
    
        .link-container {
          margin-top: 20px;
          text-align: center;
        }
    
        .link-button {
          display: inline-block;
          padding: 10px 20px;
          background-color: #007bff;
          color: #ffffff;
          text-decoration: none;
          border-radius: 5px;
          font-weight: bold;
          transition: background-color 0.3s ease;
        }
    
        .link-button:hover {
          background-color: #0056b3;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Olá, <strong style="color: #007bff;">${body.nome}.</strong></h1>
        <p>
          Você solicitou uma alteração de senha. Clique no link abaixo para prosseguir:
        </p>
    
        <div class="link-container">
          <a class="link-button" href="${process.env.URL_DOMINIO}/newpass/?key=${body.token}" target="_blank">Alterar Senha</a>
        </div>
      </div>
    </body>
    </html>
    `;
  }
}
