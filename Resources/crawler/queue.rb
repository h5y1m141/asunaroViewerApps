# -*- coding: utf-8 -*-
# 各ブロガーのクロール状況を管理するためのクラス

require 'rubygems'
require 'sqlite3'
db = SQLite3::Database.new("queue.db")
sql = 'CREATE TABLE IF NOT EXISTS queue(id INTEGER PRIMARY KEY,blogger TEXT, permalink TEXT)'
db.execute(sql)
