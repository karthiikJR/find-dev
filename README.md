# Dev-Finder

Dev-Finder is an application designed to facilitate collaboration among developers. Whether you're seeking assistance with a project or looking to contribute your expertise, Dev-Finder connects you with other developers through video calls and screen sharing. Inspired by WebDevCody's tutorial, this project serves as a stepping stone for those transitioning from React.js to Next.js.

[Tutorial Link](https://www.youtube.com/watch?v=NpyiSEO7a_Y&t=10735s)

## Features

- **Random Developer Matching**: Find developers with various skill sets to assist you in your projects.
- **Video Calls and Screen Sharing**: Seamlessly connect with other developers and showcase your work by sharing your screen.
- **Tag Filtering**: Filter rooms based on tags, making it easier to find relevant discussions and projects.
- **Authentication**: Secure authentication setup using NextAuth ensures a safe and personalized experience.
- **Room Management**: Create, delete, and edit rooms to organize discussions and collaborations effectively.
- **Account Management**: Easily delete your account when necessary.

## Technologies Used

- **Next.js**: Utilized for building the frontend, offering a smooth user experience and server-side rendering capabilities. Hosted on Vercel.
- **Drizzle ORM**: Employed for database management, ensuring efficient data handling and storage.
- **PostgreSQL (Supabase)**: Database hosted on Supabase for reliability and ease of use.
- **GetStream**: Integrated for real-time activity feeds and notifications, enhancing user engagement.
- **Tailwind CSS with Shadcn**: Tailwind CSS for styling along with Shadcn, a Tailwind component library, for enhanced UI components.

## Setup

1. Clone the repository to your local machine.
2. Install dependencies using `npm install`.
3. Create a `.env` file in the root directory of the project.
4. Copy the contents from the provided `sample.env` file into `.env`.
5. Modify the environment variables in the `.env` file according to your configuration (e.g., Next auth credentials, API keys).
6. Set up your database in Supabase as per the configuration in the `.env` file.
7. Run the development server using `npm run dev`.
8. Access the application via your browser at the specified localhost port.

## Screenshots

### Homepage
![Screenshot 2024-04-22 232057](https://github.com/karthiikJR/find-dev/assets/115890844/391dd9d4-da65-4d2c-9405-3bbc2bb9bc24)
![Screenshot 2024-04-22 232114](https://github.com/karthiikJR/find-dev/assets/115890844/e00df22c-c865-4469-b68d-714bf8623e94)

### Browse

![Screenshot 2024-04-22 232126](https://github.com/karthiikJR/find-dev/assets/115890844/b46ca078-b1de-4917-8fb4-ef718266ba09)
![Screenshot 2024-04-22 233823](https://github.com/karthiikJR/find-dev/assets/115890844/bbe44d50-687a-45fb-955d-b9a757dbd013)

### Create Room and Video calling

![Screenshot 2024-04-22 232314](https://github.com/karthiikJR/find-dev/assets/115890844/4a3ca3bd-bac1-4d72-a0ba-cd3b38e5925f)
![Screenshot 2024-04-22 232443](https://github.com/karthiikJR/find-dev/assets/115890844/1be68815-faec-4d34-bf30-7b69c34bef96)

### Your rooms

![Screenshot 2024-04-22 232508](https://github.com/karthiikJR/find-dev/assets/115890844/947877d5-8b9b-4635-802a-6758f69d4cae)

### Edit Room and delete room

![Screenshot 2024-04-22 234032](https://github.com/karthiikJR/find-dev/assets/115890844/04a66ef1-d46f-448e-947a-c3922090dacc)
![Screenshot 2024-04-22 234043](https://github.com/karthiikJR/find-dev/assets/115890844/9ee04398-0c08-4a25-b298-63fd5a9aafc3)

### Light Mode

![Screenshot 2024-04-22 232538](https://github.com/karthiikJR/find-dev/assets/115890844/de333c11-ed3d-482f-bb15-b03f454312f2)

### Dropdown Component

![Screenshot 2024-04-22 232519](https://github.com/karthiikJR/find-dev/assets/115890844/410c9753-9f2d-44b4-8f51-e582b9bb8dd3)

## License

This project is licensed under the [MIT License](LICENSE), allowing for open collaboration and distribution.

## Acknowledgements

- WebDevCody: For inspiring the creation of this project through your tutorials and guidance.
- Open-source Community: For providing resources, libraries, and support that made this project possible.
