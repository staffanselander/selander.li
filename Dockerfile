FROM nginx:stable

COPY src /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf