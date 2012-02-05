# -*- coding: utf-8 -*-
require 'rubygems'
require 'rspec'
require 'controller'
describe Controller do
  before do
    @controller = Controller.new()
  end
  
  it '実行すると該当ページ上の案件件数が取得できる' do
    url = "http://blog.pasonatech.co.jp/nextblog/takakuwa/201/2155.html"
    blogger = 'takakuwa'
    @controller.queue(blogger,url).should == true
  end

  it '該当のURLがすでに登録済かどうか確認できる' do
    url = "http://blog.pasonatech.co.jp/nextblog/takakuwa/201/2155.html"
    @controller.is_registerd(url).should == true
  end


  
end
