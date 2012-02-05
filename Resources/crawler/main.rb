# -*- coding: utf-8 -*-
require 'rubygems'
require 'controller'

blogger = 'uehara'
url = "http://blog.pasonatech.co.jp/uehara/206/1720.html"


controller = Controller.new()
controller.main(blogger,url)
