echo "Aguardando DB server"
dockerize -wait tcp://db:3306 -timeout 20s

echo "Aplicação Rodando"
node index.js