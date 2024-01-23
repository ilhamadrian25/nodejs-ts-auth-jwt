"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncDatabase = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
const SyncDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    const databaseName = 'auth';
    const connection = yield promise_1.default.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        // Tidak menyertakan nama database di sini
    });
    try {
        // Mengecek apakah database 'auth' sudah ada
        const [existingDatabases] = yield connection.query(`SHOW DATABASES LIKE '${databaseName}'`);
        if (existingDatabases.length > 0) {
            throw new Error(`Database ${databaseName} already exists.`);
        }
    }
    catch (error) {
        if (error.code === 'ER_NO_DB_ERROR') {
            console.error('Database not found. Creating database...');
            // Menutup koneksi lama
            connection.end();
            try {
                // Membuat database baru
                const createConnection = yield promise_1.default.createConnection({
                    host: 'localhost',
                    user: 'root',
                    password: '',
                });
                yield createConnection.query(`CREATE DATABASE ${databaseName};`);
                console.log('Database created successfully.');
                // Menutup koneksi baru
                createConnection.end();
            }
            catch (createError) {
                console.error('Error creating database:', createError);
            }
        }
        else {
            console.error('Error:', error);
        }
    }
    finally {
        // Menutup koneksi pada akhirnya
        console.log('sasas');
        connection.end();
    }
});
exports.SyncDatabase = SyncDatabase;
