cross-env NODE_ENV=development \
    nodemon --watch 'src' --ignore 'src/client' --ext 'ts,tsx' --exec 'ts-node -P src/server/tsconfig.json -r tsconfig-paths/register' src/server/index.tsx