#!/bin/sh
cat <<EOF > /usr/share/nginx/html/env-config.js
window._env_ = {
  VITE_API_BASE_URL: "${API_BASE_URL}"
};
EOF

exec nginx -g "daemon off;"
