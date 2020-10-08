require 'sinatra/base'
require "json"

class Thermostat < Sinatra::Base
	before do
    content_type :json
    headers 'Access-Control-Allow-Origin' => '*',
            'Access-Control-Allow-Methods' => ['OPTIONS', 'GET', 'POST']
  end
	
	get '/' do	
		File.read("./temp.json")
	end 


run! if app_file == $PROGRAM_NAME
end
