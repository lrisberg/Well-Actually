class WinsController < ApplicationController
  skip_before_action :authenticate_request
  
  def add_win
    @source = Source.find(params[:id])
    @source.wins += 1
    @source.save
  end

  def lose_friend
    @source = Source.find(params[:id])
    @source.friends_lost += 1
    @source.save
  end
end
