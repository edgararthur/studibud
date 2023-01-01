import { FastifyInstance } from "fastify";
// import { StreamChat } from "stream-chat"

const streamChat = StreamChat.getInstance(process.env.STREAM_API_KEY!);

export async function userRoutes(app: FastifyInstance) {
    app.post<{Body: { id: string, firstName: string, lastName: string, email: string, password: string}}>("/signup", async (request, response) => {
        const { id, firstName, lastName, email, password } = request.body;

        if (id == null || id === "" || firstName == null || firstName === "" || lastName == null || lastName === "" || email == null || email === "" || password == null || password === "") {
            response.status(400).send()
        }

        // npm i stream-chat
    });
}