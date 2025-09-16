-- Users table
CREATE TABLE IF NOT EXISTS Users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  email TEXT
);

-- Accounts table
CREATE TABLE IF NOT EXISTS Accounts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER,
  account_name TEXT CHECK(account_name IN ('cheque', 'savings', 'credit')),
  balance REAL DEFAULT 0.0,
  account_type TEXT,
  date DATE,
  FOREIGN KEY (user_id) REFERENCES Users(id)
);

-- Transactions table
CREATE TABLE IF NOT EXISTS Transactions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER,
  account_id INTEGER,
  amount REAL,
  category TEXT,
  description TEXT,
  date DATE,
  FOREIGN KEY (user_id) REFERENCES Users(id),
  FOREIGN KEY (account_id) REFERENCES Accounts(id)
);

-- Messages table
CREATE TABLE IF NOT EXISTS Messages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER,
  message TEXT,
  timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES Users(id)
);