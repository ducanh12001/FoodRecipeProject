docker rm -f food-recipe-frontend
docker rmi -f mailnophone03/food-recipe-frontend:latest
docker run -d -p 6060:80 --env-file ./.env --name food-recipe-frontend mailnophone03/food-recipe-frontend:latest

