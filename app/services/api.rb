

module Services 

class QuotesServices
  include HTTParty
  attr_accessor :quotes

  base_uri 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=3'
  default_params output: :json

  def initialize(quotes)
    @quotes = quotes
  end

  def random_quote
    @quotes.sample["details"]
  end
  
  # Class Methods
  def self.fetch(page, per_page)
    response = get('/quotes.json', query: { page: page, per_page: per_page })

    if response.success?
      puts "success"
      self.new(response["quotes"])
    else
      puts "failure"
      raise response.response
    end
  end
end
end 