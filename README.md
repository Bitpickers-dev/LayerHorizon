## Getting Started

First, run the development server:

```bash
npm run dev
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Run local API server

```sh
git clone https://github.com/Bitpickers-dev/LayerHorizon-server
cd LayerHorizon-server
python3 -m venv venv
. ./venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
vim .env # add ALCHEMY_KEY
python manage.py runserver --noreload
```
## Design
https://www.figma.com/file/bNHEIZ5Z8OwUnLFTwiy13k/LayerHorizon
