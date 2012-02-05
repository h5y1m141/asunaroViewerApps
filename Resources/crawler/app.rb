# -*- coding: utf-8 -*-
require 'rubygems'
require 'sinatra'
require 'json'
require 'entry.rb'
require 'haml'

# blogger => あすなろブロガーのID名を指定
# timestamp => Unix時間形式を指定。
# 例えば2006/05/13 00:00:00の場合のUnix時間は1147446000    


get '/entry/:blogger/:timestamp' do
  blogger = params[:blogger]
  # 何件単位でページング処理するのか設定
  t = Time.at(params[:timestamp].to_i)

  @items = Entry.where({:blogger => blogger,:post_date.gte => t.strftime('%Y/%m/%d %H:%M:%S')})

  @items.each_with_index do |item,i|
    content_type :json
    body.push(item.to_json)
    
  end
  result = '[' + body.join(',') + ']'
  result
end

get '/entry/:blogger/:timestamp/list.html' do
  blogger = params[:blogger]
  # 何件単位でページング処理するのか設定
  t = Time.at(params[:timestamp].to_i)

  @items = Entry.where({:blogger => blogger,:post_date.gte => t.strftime('%Y/%m/%d %H:%M:%S')})
  haml :layout
end

get '/static' do
  erb :index, layout => false
end
