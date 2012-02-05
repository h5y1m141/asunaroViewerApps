# -*- coding: utf-8 -*-
require 'rubygems'
require 'mongoid'
Mongoid.configure do |config|
  name = "test"
  host = "localhost"
  
  config.master = Mongo::Connection.new.db(name)
  config.slaves = [
    Mongo::Connection.new(host, 27017, :slave_ok => true).db(name)
  ]
  config.persist_in_safe_mode = false
end

class Entry
  include Mongoid::Document
  field :blogger
  field :permalink
  field :title
  field :html_body
  field :post_date
  field :json
end
    





