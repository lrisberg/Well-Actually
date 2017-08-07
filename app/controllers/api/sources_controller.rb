class Api::SourcesController < ApplicationController
  # this protects api routes
  before_action :authenticate_request
  # skip_before_action :authenticate_request

  def index
    @sources = Source.all
    render json: @sources
  end

  # explicitly saying the sources/new route exists
  def new
    @source = Source.new
  end

  def show
    @source = Source.find(params[:id])
    render json: @source
  end

  def create
    @source = Source.new(source_params)

    if @source.save
      render json: @source, status: :created
    else
      render json: @source.errors, status: :unprocessable_entity
    end
  end

  def edit
    @source = Source.find(params[:id])
  end

  def update
    @source = Source.find(params[:id])

    if @source.update(source_params)
      render json: @source, status: :ok
    else
      render json: @source.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @source = Source.find(params[:id])
    @source.destroy
  end

  private
    def source_params
      params.require(:source).permit(:id, :user_id, :title, :link, :journal, :abstract, :notes, :tags => [])
    end
end
