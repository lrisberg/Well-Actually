require 'json_web_token'

class Api::UsersController < ApplicationController
skip_before_action :authenticate_request

  def show
    @user = User.find(find_user_params[:id])
    render json: @user
  end

  def create
    @user = User.new( user_params )
    # binding.pry
    if @user.save
      render json: @user, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  private
    def user_params
      params.require(:user).permit(:email, :password, :password_confirmation)
    end

    def find_user_params
      params.permit(:id)
    end
  end
