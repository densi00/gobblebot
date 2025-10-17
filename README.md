# gobblebot
This project is a full-stack grocery and recipe manager powered by a Discord bot and a Vercel-hosted API. Users can add groceries and recipes via Discord, and view them through a web interface or REST API.

IT'S IN PROGRESS!!

---

## Features

- Add grocery items by category using a Discord bot  
- Store recipes with names, links, and notes  
- Vercel-hosted API for easy access & future frontend
-  View groceries & recipes in a web dashboard
-  Export grocery lists (PDF or plain text)
-  Generate weekly meal plans
-  Mobile support (PWA or APK)

---

## Tech Stack

| Layer         | Tool                |
|---------------|---------------------|
| Backend API   | **Next.js API routes** or FastAPI  
| Hosting       | **Vercel**  
| Database      | **Supabase**, **SQLite**, or **Planetscale**  
| Bot           | **Discord.py** (Python)  
| Frontend UI   | (Optional) Next.js or Flask templates  

---

## Project Structure
```
gobblebot/
├── api/ → Vercel API routes (groceries, recipes)
├── bot/ → Discord bot source code
├── db/ → Database schema/config
├── pages/ → Web app pages (optional)
├── public/ → Static files (images, icons)
├── .env.example → Sample environment config
├── README.md → You're here :)
└── vercel.json → Vercel deployment settings
```

---

## Quick Start

### 1. Clone this repo
```
git clone https://github.com/yourusername/pantrypal.git
cd pantrypal
```
### 2. Install dependencies
If using Next.js:
`npm install`
### 3. Configure environment variables
Create a .env.local file with:
```
SUPABASE_URL=your_url_here
SUPABASE_KEY=your_key_here
```
### 4. Deploy to Vercel
- Push to GitHub
- Connect your repo to https://vercel.com
- Add your environment variables under project settings

## Bot Commands
Command	Purpose
- !addgrocery "Milk" category:"Dairy"	Adds item under category
- !addrecipe "Pasta" link:"url.com"	Saves a recipe
- !listgroceries	(Coming soon)
- !listrecipes	(Coming soon)

The bot makes secure HTTP requests to your Vercel API and updates the shared database.

## Future Ideas
- Multi-user support
- Authenticated recipe books
- Smart inventory tracking
- Discord recipe suggestions
- "What's in my fridge?" AI prompts

## License


