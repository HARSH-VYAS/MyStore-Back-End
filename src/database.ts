import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();
const{
    POSTGRES_HOST,
    POSTGRES_DEV_DB,
    POSTGRES_TEST_DB,
    POSTGRES_USER,
    POSTGRES_PASWD
} = process.env;


export const client_store = new Pool({
   host:POSTGRES_HOST,
   database:POSTGRES_DEV_DB,
   user:POSTGRES_USER,
   password:POSTGRES_PASWD
});


export const client_store_test = new Pool({
    host:POSTGRES_HOST,
    database:POSTGRES_TEST_DB,
    user:POSTGRES_USER,
    password:POSTGRES_PASWD
 });