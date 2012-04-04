# -*- coding: utf-8 -*-
require 'rubygems'
require 'mongo'

class JobQueue

  def initialize()
  end
  
  def push_queue(item)
    db = Mongo::Connection.from_uri('mongodb://h5y1m141:orih6254@ds031747.mongolab.com:31747/que4crawler').db('que4crawler')
    lists = db.collection('quelist')
    lists.insert(item)
  end
end


# parse_start_url_lists =[{"blogger" => "kanayama","permalink" => "http://blog.pasonatech.co.jp/kanayama/299/1623.html","parse_date" => Time.now.strftime("%Y/%m/%d %H:%M:%S")},{"blogger" => "kobayashi","permalink" => "http://blog.pasonatech.co.jp/kobayashi/399/1235.html","parse_date" => Time.now.strftime("%Y/%m/%d %H:%M:%S")},{"blogger" => "hibi","permalink" => "http://blog.pasonatech.co.jp/hibi/299/1814.html","parse_date" => Time.now.strftime("%Y/%m/%d %H:%M:%S")},{"blogger" => "ohashi","permalink" => "http://blog.pasonatech.co.jp/ohashi/399/1338.html","parse_date" => Time.now.strftime("%Y/%m/%d %H:%M:%S")},{"blogger" => "yokota","permalink" => "http://blog.pasonatech.co.jp/yokota/399/1285.html","parse_date" => Time.now.strftime("%Y/%m/%d %H:%M:%S")},{"blogger" => "miyahara","permalink" => "http://blog.pasonatech.co.jp/miyahara/199/1465.html","parse_date" => Time.now.strftime("%Y/%m/%d %H:%M:%S")},{"blogger" => "ooki","permalink" => "http://blog.pasonatech.co.jp/ooki/399/1553.html","parse_date" => Time.now.strftime("%Y/%m/%d %H:%M:%S")},{"blogger" => "kanazawa","permalink" => "http://blog.pasonatech.co.jp/kanazawa/299/1682.html","parse_date" => Time.now.strftime("%Y/%m/%d %H:%M:%S")},{"blogger" => "uehara","permalink" => "http://blog.pasonatech.co.jp/uehara/206/1720.html","parse_date" => Time.now.strftime("%Y/%m/%d %H:%M:%S")},{"blogger" => "ootani","permalink" => "http://blog.pasonatech.co.jp/ootani/199/1741.html","parse_date" => Time.now.strftime("%Y/%m/%d %H:%M:%S")},{"blogger" => "mitani","permalink" => "http://blog.pasonatech.co.jp/mitani/13435.html","parse_date" => Time.now.strftime("%Y/%m/%d %H:%M:%S")},{"blogger" => "kaneko","permalink" => "http://blog.pasonatech.co.jp/kaneko/399/1850.html","parse_date" => Time.now.strftime("%Y/%m/%d %H:%M:%S")},{"blogger" => "masuda","permalink" => "http://blog.pasonatech.co.jp/masuda/399/2129.html","parse_date" => Time.now.strftime("%Y/%m/%d %H:%M:%S")},{"blogger" => "matsuo","permalink" => "http://blog.pasonatech.co.jp/matsuo/3520.html","parse_date" => Time.now.strftime("%Y/%m/%d %H:%M:%S")},{"blogger" => "kito","permalink" => "http://blog.pasonatech.co.jp/kito/2225.html","parse_date" => Time.now.strftime("%Y/%m/%d %H:%M:%S")},{"blogger" => "sasaki","permalink" => "http://blog.pasonatech.co.jp/sasaki/399/4525.html","parse_date" => Time.now.strftime("%Y/%m/%d %H:%M:%S")},{"blogger" => "fujiwara","permalink" => "http://blog.pasonatech.co.jp/fujiwara/3574.html","parse_date" => Time.now.strftime("%Y/%m/%d %H:%M:%S")},{"blogger" => "iwasaki","permalink" => "http://blog.pasonatech.co.jp/iwasaki/399/4959.html","parse_date" => Time.now.strftime("%Y/%m/%d %H:%M:%S")},{"blogger" => "horikawa","permalink" => "http://blog.pasonatech.co.jp/counselor/horikawa/399/3478.html","parse_date" => Time.now.strftime("%Y/%m/%d %H:%M:%S")},{"blogger" => "oyamada","permalink" => "http://blog.pasonatech.co.jp/counselor/career_blog/399/1893.html"}]

# q = JobQueue.new()
# q.push_queue(parse_start_url_lists)
