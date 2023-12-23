import { io } from "./http";
import prismaClient from "./prisma";

io.on("connection", (socket) => {
  socket.on("selected_user", async (data, callback) => {
    const messages = await getMessages({ data });
    console.log(messages);
    callback(messages);
  });

  socket.on("message", async (data) => {
    const message = await createMessage(data);
    console.log(message);
    socket.emit("message", message);
  });
});

const getMessages = async ({ data }) => {
  return await prismaClient.mensagens.findMany({
    where: {
      profissional_id: data.profissional_id,
      paciente_id: data.paciente_id,
    },
    orderBy: {
      created_at: "asc",
    },
  });
};

const createMessage = async (data) => {
  return await prismaClient.mensagens.create({
    data,
  });
};
