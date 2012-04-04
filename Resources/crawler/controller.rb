# -*- coding: utf-8 -*-
require 'rubygems'
require 'crawler.rb'
require 'job_queue.rb'


class Controller
  attr :blogger
  def initialize(blogger)
    @blogger = blogger
  end
  
  def main()
    url = nil
    db = Mongo::Connection.from_uri('mongodb://h5y1m141:orih6254@ds031747.mongolab.com:31747/que4crawler').db('que4crawler')
    lists = db.collection('quelist')
    lists.find({"blogger" => blogger},{:fields =>["permalink"]}).each{|doc|
      url= doc["permalink"]
    }

    crawler = Crawler.new(@blogger)

    while url
      puts url
      crawler.run(url)
      self.queue(@blogger,url)
      
      sleep(2)
      puts crawler.result.text
      if crawler.result.text.include?("次のエントリー»") then
        url = crawler.result.search("a")[1]['href']
      else
        url = nil
      end
    end
  end
  def queue(blogger,url)
    q = JobQueue.new()
    que_data = {
      "blogger" => blogger,
      "permalink" => url,
      "parse_date" => Time.now.strftime("%Y-%m-%d %H:%M:%S") 
    }
    q.push_queue(que_data)
    true
  end
end
  
