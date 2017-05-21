class SourcesController < ApplicationController
  def new
  end

  def create
    render plain: params[:source].inspect
  end
end
