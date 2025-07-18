import {config} from 'dotenv'

config()
export const {DB_USER, DB_PASSWORD, DB_DATABASE, SERVER, PORT} = process.env
