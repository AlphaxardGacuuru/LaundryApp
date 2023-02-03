# Laravel Breeze - Next.js Edition 🏝️

## Introduction

This repository is an implementation of the [Laravel Breeze](https://laravel.com/docs/starter-kits) application / authentication starter kit frontend in [Next.js](https://nextjs.org). All of the authentication boilerplate is already written for you - powered by [Laravel Sanctum](https://laravel.com/docs/sanctum), allowing you to quickly begin pairing your beautiful Next.js frontend with a powerful Laravel backend.

## Official Documentation

### Installation

First, clone this project, then cd in to LaundryApp, then:

```bash
1) composer install

2) cp .env.example to .env

3) Change DB name, username and password in .env

4) php artisan key:generate

5) php artisan migrate

6) php artisan db:seed

7) npm install

```

You may serve the Laravel application using the `serve` Artisan command:

```bash
# Serve the application...
php artisan serve
```

Finally, run the application via `npm run dev`. The application will be available at `http://localhost:3000`:

```
npm run dev
```

> Note: Currently, we recommend using `localhost` during local development of your backend and frontend to avoid CORS "Same-Origin" issues.

> Note: You will need to use [optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) (`user?.name` instead of `user.name`) when accessing properties on the user object to account for Next.js's initial server-side render.

### Named Routes

For convenience, [Ziggy](https://github.com/tighten/ziggy#spas-or-separate-repos) may be used to reference your Laravel application's named route URLs from your React application.

## Contributing

Thank you for considering contributing to Breeze Next! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

Please review [our security policy](https://github.com/laravel/breeze-next/security/policy) on how to report security vulnerabilities.

## License

Laravel Breeze Next is open-sourced software licensed under the [MIT license](LICENSE.md).
