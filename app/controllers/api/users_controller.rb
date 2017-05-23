require 'bcrypt'

class Api::UsersController < ApplicationController
skip_before_action :authenticate_request

  def create

    @user = User.new( user_params )
    # binding.pry

    if @user.save
      # we can to be able to send an auth token here
      render json: @user, status: :created
      # :authenticate_request
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  private
    def user_params
      params.require(:user).permit(:email, :password, :password_confirmation)
    end
end
