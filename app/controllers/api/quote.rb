require 'api'

class Api::Quote < ApplicationController

    def show 
        @quotes = Services::QuotesServices.fetch[:]