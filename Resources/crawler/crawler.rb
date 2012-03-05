# -*- coding: utf-8 -*-
require 'rubygems'
require 'nokogiri'
require 'json'
require 'open-uri'
# require 'entry.rb'
require 'mongo'
class Crawler
  def initialize(blogger)
    @blogger = blogger  
  end
  attr_accessor :html_body, :next_link, :title, :current_page, :result
  
  def run(starturl)
    # entry = Entry.new()
    db = Mongo::Connection.from_uri('mongodb://h5y1m141:orih6254@ds029817.mongolab.com:29817/asunaroblog').db('asunaroblog')
    @items = db.collection('entries')

    http = open(
                starturl,
                "User-Agent" => "HiroshiOyamadaSpider",
                "From" => "h5y1m141@gmail.com",
                "Referer" => "http://d.hatena.ne.jp/h5y1m141"
                )
    
    doc = Nokogiri::HTML(http)

    # entry.permalink = starturl
    # entry.blogger = @blogger

    # entry.title = doc.search('//div[@class="entry"]').search("h1").text
    # entry.html_body = doc.search('//div[@class="entryText"]').inner_html
    # entry.post_date = self.conv_date_formt(doc.search('//p[@class="posted"]').to_html)
    
    # iPhoneアプリ側の処理で文字列化したJSONをがやりやすくなるために、
    # ブロガー名、タイトル、HTML本文などの情報を全て含んだJSONデータを
    # 格納。くわしくは以下
    # http://d.hatena.ne.jp/h5y1m141/20110418/p1
    json = {
      "permalink" => starturl,
      "blogger" => @blogger,
      "title" => doc.search('//div[@class="entry"]').search("h1").text,
      "html_body" => doc.search('//div[@class="entryText"]').inner_html,
      "post_date" => self.conv_date_formt(doc.search('//p[@class="posted"]').to_html)
    }
    # HTML本文中にダブルクォーテーションや改行文字(\n)が
    # あるため、unicode escape 処理を実施しておかないとJSON.parse
    # でエラーになるため以下が必須
    # entry.json = ActiveSupport::JSON.encode(json)
    # entry.save

    item = {
      :permalink => starturl,
      :blogger => @blogger,
      :title => doc.search('//div[@class="entry"]').search("h1").text,
      :html_body => doc.search('//div[@class="entryText"]').inner_html,
      :post_date => self.conv_date_formt(doc.search('//p[@class="posted"]').to_html)
    }

    @items.insert(item)
    
    @result = doc.search('//p[@class="entrylink"]')
  end
  def conv_date_formt(contents)
    temp_post_date = contents.match(/\d{4}\.\d{2}\.\d{2}.*/i)
    yyyymm = temp_post_date.to_s.split(".")
    dd = yyyymm[2].to_s.split("\302\240")
    hhmm = dd[1].to_s.split(":")

    # date format refer to below web site
    # http://www.namaraii.com/rubytips/?%C6%FC%C9%D5%A4%C8%BB%FE%B9%EF
    post_date = Time.local(
                       yyyymm[0].to_s,
                       yyyymm[1].to_s,
                       dd[0].to_s,
                       hhmm[0].to_s,
                       hhmm[1].to_s,
                       "00"
                       ).strftime("%Y/%m/%d %H:%M:%S") 
    return post_date

  end
end
