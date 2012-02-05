# -*- coding: utf-8 -*-
require 'rubygems'
require 'rspec'
require 'controller'
describe JobQueue do
  before do
    @q = JobQueue.new()
  end

  it '該当のURLがすでに登録済かどうか確認できる' do
    url = "http://blog.pasonatech.co.jp/nextblog/takakuwa/201/2155.html"
    @q.find(url).should == true
  end


  
end
