# FROM php:7.2-fpm-alpine

# RUN docker-php-ext-install pdo pdo_mysql
FROM php:7.2-fpm-alpine

RUN apk upgrade --update \
    && docker-php-ext-install bcmath pdo_mysql

# Use the default production configuration
RUN mv "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini"

# Override with custom opcache settings
COPY conf.d/* $PHP_INI_DIR/conf.d/