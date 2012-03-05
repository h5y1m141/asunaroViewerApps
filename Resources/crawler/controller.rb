# -*- coding: utf-8 -*-
require 'rubygems'
require 'crawler.rb'
#require 'job_queue.rb'


class Controller
  def initiazlie

  end
  def main(blogger,url)
    # 初期値のURLを与えた後、そのページ内に次のエントリのリンクがなければurlにnilをセットしてクローラー終了させる
    crawler = Crawler.new(blogger)
    while url
      crawler.run(url)
      # どのページまでクローリングしたかqueue.save(blogger,url)みたいな感じにすればよい？
      #self.queue(blogger,url)
      
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
    q.save(que_data)
    true
  end


end
  
