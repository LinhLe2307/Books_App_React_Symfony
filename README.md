# Book Nook - fullstack app (React.js + Symfony)

This a FullStack App made as a project for Symfony and React courses.

# Steps to follow

1. Copy the folder to SymfonyMAMP and rename to "web". Then cd to "web"
2. Install dependencies using `composer install`
3. Install front-end dependencies using `npm install`
4. Create SQL database
   - Open file .env in "SYMFONY-MAMP" folder (not the "web" folder!)
   - Rename database to `DATABASE_NAME=bookstore `.
5. Start Docker container SYMFONY-MAMP. Make sure you have now "bookstore" database in phpMyAdmin.
6. Afterwards you can run webpack encore using following command
   `npm run watch`
7. Visit URL: http://localhost:8007/ to see the app
8. Use Crtl + C to stop the watch

# Tech stack

1.  [Symfony](https://symfony.com/)
2.  [PHP](https://www.php.net/)
3.  [React.js](https://reactjs.org/)
4.  [React router](https://reactrouter.com/)
5.  [MySQL](https://www.mysql.com)
6.  [SymfonyMAMP](https://github.com/kalwar/Symfony-MAMP)
