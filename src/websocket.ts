import { io } from "./http";
import prismaClient from "./prisma";

const mensagen = [];

io.on("connection", (socket) => {
  socket.on("selected_user", async (data, callback) => {
    const messages = await prismaClient.mensagens.findMany({
      where: {
        profissional_id: data.profissional_id,
        paciente_id: data.paciente_id,
      },
      orderBy: {
        created_at: "asc",
      },
    });
    console.log(messages);
    mensagen.push([...messages]);
    callback(messages);
    socket.emit("message", {
      mensagen,
    });
  });
});
