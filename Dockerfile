FROM nginx:latest
COPY mysite.template /etc/nginx/conf.d/mysite.template
COPY dist/ /usr/share/nginx/html/

CMD sed -i "s/{corp_id}/$corp_id/g"  /usr/share/nginx/html/env.js; envsubst '$backend' < /etc/nginx/conf.d/mysite.template > /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'