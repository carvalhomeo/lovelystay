<h1 style="color:#ac47cc">LovelyStay</h1>
## Getting Started

1. clone the project

2. run yarn install

### Run the development server

```bash
yarn dev
```

note: if you are having trouble with the requests it might be due to the limit of requests imposed by the github api.
In that case, you can create a .env.local file in the root directory of the project and add the following environment variable

```
NEXT_PUBLIC_API_TOKEN=[your_git_hub_token]
```

To generate the token follow the instructions:
[Creating a personal access token (classic)](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#creating-a-personal-access-token-classic)

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Run the unit tests

```bash
yarn test
```

## Deployment

This appplication is also deployed in Vercel and can be accessed from [here](https://lovelystay-six.vercel.app/)
