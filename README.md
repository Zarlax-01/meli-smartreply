# Méli SmartReply API

This project provides a small [json-server](https://github.com/typicode/json-server) setup used to prototype the Méli SmartReply endpoints.

## Installation

1. Clone the repository and install the dependencies:
   ```bash
   npm install
   ```

## Usage

Start the development server with:
```bash
npm start
```
This command starts `json-server` and watches `db.json`. The server listens on the port defined by the `PORT` environment variable or **3000** by default.

The API exposes the following example route:
- `GET /smartReply`

## Default data

The `db.json` file provides sample responses used by json-server. Feel free to modify it to suit your tests.
