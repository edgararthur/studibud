import fastify, { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
import bcrypt from 'bcrypt'

const app: FastifyInstance = fastify();

const users: any[] = [];

interface SignupRequestBody {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

async function signupHandler(request: FastifyRequest, response: FastifyReply): Promise<void> {
    try {
        const requestBody: SignupRequestBody = request.body as SignupRequestBody;
        const { firstName, lastName, email, password } = requestBody;

        if (!firstName || !lastName || !email || !password) {
            response.status(400).send({ error: "All fields are required" });
            return;
        }

        const userExists = users.some((user) => user.email === email);
        if (userExists) {
            response.status(400).send({ error: 'Email already exists' });
            return;
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds)

        const data = {
            id: users.length,
            firstName,
            lastName,
            email,
            password: hashedPassword,
        };

        users.push(data);
        response.status(201).send({ message: 'User registered successfully' });
    } catch (error) {
        response.status(500).send({ error: "Server Error" })
    }
}