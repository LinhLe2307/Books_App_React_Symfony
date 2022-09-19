![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Symfony](https://img.shields.io/badge/symfony-%23000000.svg?style=for-the-badge&logo=symfony&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![PHP](https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Google](https://img.shields.io/badge/google-4285F4?style=for-the-badge&logo=google&logoColor=white)

# Book Nook - fullstack app (React.js + Symfony)

Fullstack app made as a project for Symfony and React courses at [BC Helsinki](https://www.bc.fi/).
It has React.js in the front, Symfony in the back and MySQL (phpMyAdmin) as a database.
It uses Google Books API for fetching books.

# Steps to follow

1. Copy the folder to [SymfonyMAMP](https://github.com/kalwar/Symfony-MAMP) and rename to "web". Then cd to "web"
2. Install dependencies using `composer install`
3. Install front-end dependencies using `npm install`
4. Create SQL database
   - Open file .env in "SYMFONY-MAMP" folder (not the "web" folder!)
   - Rename database to `DATABASE_NAME=bookstore `
5. Start Docker container SYMFONY-MAMP. Make sure you have now "bookstore" database in phpMyAdmin.
6. Afterwards you can run webpack encore using following command
   `npm run watch`
7. Visit URL: http://localhost:8007/ to see the app
8. Use Crtl + C to stop the watch

# Scripts

- `npm run watch` - to run locally
- `npm run deploy` - to create build, commit and push to Heroku

# Tech stack

1.  [SymfonyMAMP](https://github.com/kalwar/Symfony-MAMP)
2.  [Symfony](https://symfony.com/)
3.  [React.js](https://reactjs.org/)
4.  [React router](https://reactrouter.com/)
5.  [MySQL](https://www.mysql.com)
6.  [PHP](https://www.php.net/)
7.  [Google Books API](https://developers.google.com/books/docs/overview)
