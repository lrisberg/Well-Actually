class ApplicationController < ActionController::API
  # protect_from_forgery with: :exception

  # this is for user authentication
# let the users see the index page
  before_action :authenticate_request, except: [ :index]

  attr_reader :current_user

  private

  def authenticate_request
    @current_user = AuthorizeApiRequest.call(request.headers).result
    render json: { error: 'Not Authorized' }, status: 401 unless @current_user
  end
end
