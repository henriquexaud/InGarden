# MyPlants

Mobile App to help users remember to take care from your plants.

1 - Install expo using terminal:
    $ npm install --global expo-cli

2 - Find your machine IP and set it on ./src/services/api.ts   

3 - Start the JSON API using the command:
    $ json-server ./src/services/server.json --host (Machine IP. ex: 192.168.1.11) --port 3333 --delay 800

4 - Install Expo Go App on your mobile device

5 - Start Expo using the terminal:
    $ expo start

6 - Scan the QR Code on your browser