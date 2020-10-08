require 'sinatra/base'
require "json"

class Thermostat < Sinatra::Base
	
	
	get '/' do
		content_type :json
		File.read("./temp.json")
	end 


run! if app_file == $PROGRAM_NAME
end
