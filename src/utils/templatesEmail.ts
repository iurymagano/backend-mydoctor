interface TemplatessEmail {
  type: string;
  body: any;
}

export function templatesEmail({ type, body }: TemplatessEmail) {
  if (type === "newuser") {
    return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Static Template</title>
      </head>
      <body>
        <div
          style="
            margin: 0 auto;
            border-spacing: 0;
            font-family: Arial;
            font-size: 15px;
            width: 600px;
            color: #404040;
          "
        >
          <div
            style="padding: 10px; width: 600px; height: 600px; object-fit: cover; height: 600px; background-image: url(https://i.pinimg.com/564x/86/ab/52/86ab524a2bae373c745b8ac12c5fdff0.jpg);"
            alt=""
          >
          <span style="font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif ; font-size: 32px; font-weight: 600; color: #000000;">Seja bem vindo, 
            
            <strong style="font-weight: 600; color: blue;">
              ${body?.nome}
              
            </strong>
          </span>
    
          <div style="font-size: 20px; margin-top: 40px; width: 100%; display: flex; align-items: center; justify-content: center;">
            Esperamos que você encontre o profissinal que procura.
          </div>
        </div>
        </table>
      </body>
    </html>`;
  }
}
